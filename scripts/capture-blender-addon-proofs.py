from __future__ import annotations

import json
import math
import os
import sys
import tempfile
from pathlib import Path

import bpy
from mathutils import Vector


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIRS = [ROOT / "images", ROOT / "public" / "images"]
EASYTEXTURE_ROOT = Path(os.environ.get("EASYTEXTURE_ROOT", r"H:\easytexture"))
AI_RETOPO_ROOT = Path(os.environ.get("AI_RETOPO_ROOT", r"C:\Users\andre\Documents\math"))
TIDEFRONT_ROOT = Path(os.environ.get("TIDEFRONT_ROOT", r"F:\Organized Desktop\oceansupremacyweb"))


def output_path(name: str) -> Path:
    path = IMAGE_DIRS[0] / name
    path.parent.mkdir(parents=True, exist_ok=True)
    return path


def mirror_public(name: str) -> None:
    source = IMAGE_DIRS[0] / name
    for directory in IMAGE_DIRS[1:]:
        directory.mkdir(parents=True, exist_ok=True)
        (directory / name).write_bytes(source.read_bytes())


def reset_scene() -> None:
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()
    for block in (bpy.data.materials, bpy.data.images, bpy.data.meshes, bpy.data.curves):
        for item in list(block):
            if item.users == 0:
                block.remove(item)


def setup_camera(
    location: tuple[float, float, float],
    ortho_scale: float,
    target: tuple[float, float, float] = (0.0, 0.0, 0.0),
) -> None:
    bpy.ops.object.light_add(type="AREA", location=(0.0, -4.0, 5.0))
    light = bpy.context.object
    light.name = "Softbox"
    light.data.energy = 520
    light.data.size = 5.5
    bpy.ops.object.camera_add(location=location)
    camera = bpy.context.object
    camera.data.type = "ORTHO"
    camera.data.ortho_scale = ortho_scale
    direction = Vector(target) - Vector(location)
    camera.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
    bpy.context.scene.camera = camera
    bpy.context.scene.render.resolution_x = 1600
    bpy.context.scene.render.resolution_y = 1000
    bpy.context.scene.eevee.taa_render_samples = 64
    bpy.context.scene.world.color = (0.012, 0.018, 0.024)


def make_material(name: str, color: tuple[float, float, float, float]) -> bpy.types.Material:
    existing = bpy.data.materials.get(name)
    if existing:
        return existing
    material = bpy.data.materials.new(name)
    material.use_nodes = True
    bsdf = material.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs["Base Color"].default_value = color
        bsdf.inputs["Roughness"].default_value = 0.62
    return material


def render_still(name: str) -> None:
    path = output_path(name)
    bpy.context.scene.render.filepath = str(path)
    bpy.ops.render.render(write_still=True)
    mirror_public(name)
    print(f"CAPTURED {path}")


def capture_easytexture() -> None:
    sys.path.insert(0, str(EASYTEXTURE_ROOT))
    import easytexture

    reset_scene()
    easytexture.register()
    assets = EASYTEXTURE_ROOT / "tests" / "assets"
    bpy.ops.mesh.primitive_cube_add(size=1.65, location=(0.0, 0.0, 0.0), rotation=(math.radians(18), 0.0, math.radians(22)))
    cube = bpy.context.object
    cube.name = "EasyTexture_Game_Ready_PBR"
    cube.data.uv_layers.new(name="EasyTextureUV")
    bpy.context.view_layer.objects.active = cube
    cube.select_set(True)
    for channel, image_name in (
        ("BASE_COLOR", "pbr_albedo.png"),
        ("NORMAL", "pbr_normal.png"),
        ("ROUGHNESS", "pbr_roughness.jpg"),
        ("ORM", "pbr_orm.png"),
    ):
        result = bpy.ops.easytexture.apply_image(
            filepath=str(assets / image_name),
            replace_mode="ADD_LAYER",
            target_channel=channel,
        )
        if result != {"FINISHED"}:
            raise RuntimeError(f"EasyTexture failed for {channel}: {result}")
    setup_camera((0.0, -4.8, 2.3), 3.2)
    render_still("easytexture-addon-pbr-proof.png")


def capture_ai_retopo() -> None:
    sys.path.insert(0, str(AI_RETOPO_ROOT))
    import ai_retopo_assist

    reset_scene()
    ai_retopo_assist.register()
    bpy.ops.mesh.primitive_uv_sphere_add(segments=48, ring_count=24, radius=1.0, location=(-0.78, 0.0, 0.0))
    source = bpy.context.object
    source.name = "Smoke_Source"
    source.data.materials.append(make_material("Source_Cyan_Glass", (0.12, 0.58, 0.66, 0.48)))
    stroke = {
        "points": [[-0.95, 0.0, 0.45], [-0.48, 0.0, 0.82], [0.0, 0.0, 1.0], [0.48, 0.0, 0.82], [0.95, 0.0, 0.45]],
        "screen_points": [],
        "normals": [[0.0, 0.0, 1.0]] * 5,
        "closed": False,
        "source_name": source.name,
        "intent": "auto",
    }
    bpy.context.scene.ai_retopo_strokes_json = json.dumps([stroke])
    bpy.context.view_layer.objects.active = source
    source.select_set(True)
    if bpy.ops.ai_retopo.preview_plan() != {"FINISHED"}:
        raise RuntimeError("AI Retopo preview failed")
    if bpy.ops.ai_retopo.apply_plan() != {"FINISHED"}:
        raise RuntimeError("AI Retopo apply failed")
    target = bpy.data.objects["AI_Retopo_Target"]
    target.location.x += 1.55
    target.data.materials.clear()
    target.data.materials.append(make_material("Retopo_Gold", (0.95, 0.58, 0.16, 1.0)))
    setup_camera((0.0, -5.2, 2.55), 3.8, target=(0.05, 0.0, 0.1))
    render_still("ai-retopo-assist-proof.png")


def capture_tidefront_asset_shelf() -> None:
    addon_parent = TIDEFRONT_ROOT / "tools" / "blender_addons"
    sys.path.insert(0, str(addon_parent))
    import tidefront_asset_shelf

    reset_scene()
    try:
        bpy.ops.preferences.addon_disable(module="tidefront_asset_shelf")
    except Exception:
        pass
    bpy.ops.preferences.addon_enable(module="tidefront_asset_shelf")
    with tempfile.TemporaryDirectory(prefix="portfolio_tfas_") as tmp:
        repo_root = Path(tmp) / "game"
        library_root = Path(tmp) / "blender_assets"
        (repo_root / "public/assets/ocean_drift/models").mkdir(parents=True)
        library_root.mkdir(parents=True)
        prefs = bpy.context.preferences.addons[tidefront_asset_shelf.ADDON_ID].preferences
        prefs.repo_root = str(repo_root)
        prefs.asset_library_dir = str(library_root)
        prefs.asset_library_name = "Tidefront Portfolio Proof"
        prefs.save_asset_library_preference = False
        asset_material = make_material("Tidefront_Module", (0.04, 0.5, 0.58, 1.0))
        gold_material = make_material("Tidefront_Gold_Markers", (0.95, 0.58, 0.16, 1.0))
        bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=0.34, depth=1.7, location=(0.0, 0.0, 0.0), rotation=(math.radians(6), 0.0, math.radians(18)))
        asset = bpy.context.object
        asset.name = "Portfolio Coral Module"
        asset.data.materials.append(asset_material)
        for index, (x, y, z) in enumerate(((-0.42, 0.0, 0.46), (0.44, -0.05, 0.38), (0.08, 0.36, 0.72), (-0.08, -0.34, -0.48))):
            bpy.ops.mesh.primitive_uv_sphere_add(segments=16, ring_count=8, radius=0.22, location=(x, y, z))
            node = bpy.context.object
            node.name = f"CatalogMarker_{index + 1}"
            node.data.materials.append(gold_material if index < 3 else asset_material)
        bpy.ops.object.select_all(action="DESELECT")
        for obj in bpy.context.scene.objects:
            if obj.type == "MESH":
                obj.select_set(True)
        bpy.context.view_layer.objects.active = asset
        settings = bpy.context.scene.tidefront_asset_shelf
        settings.asset_name = "Portfolio Coral Module"
        settings.asset_category = "props"
        settings.asset_version = 1
        settings.tags = "portfolio, proof, coral"
        settings.description = "Portfolio screenshot proof from Tidefront Asset Shelf"
        settings.save_source_blend = True
        settings.export_glb = True
        if bpy.ops.tidefront_asset_shelf.save_selected() != {"FINISHED"}:
            raise RuntimeError("Tidefront Asset Shelf save failed")
        setup_camera((0.0, -4.8, 2.4), 2.8)
        render_still("tidefront-asset-shelf-addon-proof.png")


def main() -> None:
    if "--" not in sys.argv:
        raise SystemExit("Pass mode after --: easytexture, ai-retopo, or tidefront")
    mode = sys.argv[sys.argv.index("--") + 1]
    if mode == "easytexture":
        capture_easytexture()
    elif mode == "ai-retopo":
        capture_ai_retopo()
    elif mode == "tidefront":
        capture_tidefront_asset_shelf()
    else:
        raise SystemExit(f"Unknown mode: {mode}")


if __name__ == "__main__":
    main()
