from __future__ import annotations

import json
import math
import os
import shutil
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
BLENDER_45_ADDONS = Path(
    os.environ.get(
        "BLENDER_45_ADDONS",
        r"C:\Users\andre\AppData\Roaming\Blender Foundation\Blender\4.5\scripts\addons",
    ),
)


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


def setup_render(width: int = 1800, height: int = 1100) -> None:
    scene = bpy.context.scene
    scene.render.resolution_x = width
    scene.render.resolution_y = height
    scene.eevee.taa_render_samples = 96
    scene.world.color = (0.009, 0.014, 0.018)


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
    setup_render(1600, 1000)


def look_at(obj: bpy.types.Object, target: Vector | tuple[float, float, float]) -> None:
    direction = Vector(target) - obj.location
    obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()


def make_material(
    name: str,
    color: tuple[float, float, float, float],
    *,
    roughness: float = 0.62,
    metallic: float = 0.0,
    alpha: float | None = None,
) -> bpy.types.Material:
    existing = bpy.data.materials.get(name)
    if existing:
        return existing
    material = bpy.data.materials.new(name)
    material.use_nodes = True
    material.diffuse_color = color
    if alpha is not None or color[3] < 1.0:
        material.blend_method = "BLEND"
        material.use_screen_refraction = True
    bsdf = material.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs["Base Color"].default_value = color
        bsdf.inputs["Roughness"].default_value = roughness
        bsdf.inputs["Metallic"].default_value = metallic
        bsdf.inputs["Alpha"].default_value = color[3] if alpha is None else alpha
    return material


def render_still(name: str) -> None:
    path = output_path(name)
    bpy.context.scene.render.filepath = str(path)
    bpy.ops.render.render(write_still=True)
    mirror_public(name)
    print(f"CAPTURED {path}")


def object_bounds(objects: list[bpy.types.Object]) -> tuple[Vector, Vector, Vector]:
    coords = [obj.matrix_world @ Vector(corner) for obj in objects for corner in obj.bound_box]
    min_corner = Vector((min(co.x for co in coords), min(co.y for co in coords), min(co.z for co in coords)))
    max_corner = Vector((max(co.x for co in coords), max(co.y for co in coords), max(co.z for co in coords)))
    center = (min_corner + max_corner) * 0.5
    return min_corner, max_corner, center


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


def capture_terrainforge() -> None:
    sys.path.insert(0, str(BLENDER_45_ADDONS))
    import terrainforge
    from terrainforge.ops.op_project import apply_preset_to_scene

    reset_scene()
    try:
        terrainforge.unregister()
    except Exception:
        pass
    terrainforge.register()
    if tuple(terrainforge.bl_info["version"]) < (0, 6, 2):
        raise RuntimeError(f"Expected installed TerrainForge 0.6.2+, got {terrainforge.bl_info['version']}")

    with tempfile.TemporaryDirectory(prefix="portfolio_terrainforge_") as tmp:
        out_dir = Path(tmp)
        scene = bpy.context.scene
        apply_preset_to_scene(scene, "PROFESSIONAL_TRENCH_SHOWCASE", replace_project=True)
        props = scene.terrainforge
        props.export_path = "terrainforge_exports"
        props.live_preview_enabled = False
        props.preview_selected_tile_x = 0
        props.preview_selected_tile_y = 0
        props.preview_z_mode = "GROUND_ZERO"
        props.preview_vertical_scale = 1.0
        props.professional_bake_resolution = "1025"
        props.professional_bake_normal_strength = 1.28
        props.professional_bake_cavity_strength = 1.14
        props.professional_bake_texture_scale_m = 42.0
        props.professional_bake_create_mesh = True
        props.professional_bake_export_height = True
        props.professional_bake_export_normal = True
        props.professional_bake_export_cavity = True
        props.professional_bake_export_color = True
        props.detail_bake_enabled = True
        props.detail_bake_strength = 0.038
        props.detail_bake_frequency = 138.0
        props.detail_bake_octaves = 5
        props.detail_bake_slope_influence = 0.82

        previous_cwd = Path.cwd()
        try:
            os.chdir(out_dir)
            result = bpy.ops.terrainforge.bake_professional_tile()
        finally:
            os.chdir(previous_cwd)
        if result != {"FINISHED"}:
            raise RuntimeError(f"TerrainForge professional bake failed: {result}; {props.professional_bake_last_summary}")

    terrain = bpy.data.objects.get("TF_pro_bake_x00_y00")
    if terrain is None or terrain.type != "MESH":
        raise RuntimeError("TerrainForge professional bake mesh was not created")
    terrain.name = "TerrainForge_v062_Professional_Trench_Bake"
    terrain.data.materials.clear()
    terrain.data.materials.append(make_material("TerrainForge Rock Strata", (0.46, 0.48, 0.42, 1.0), roughness=0.88))
    for polygon in terrain.data.polygons:
        polygon.use_smooth = True
    if not any(modifier.type == "WEIGHTED_NORMAL" for modifier in terrain.modifiers):
        terrain.modifiers.new("Portfolio weighted normals", "WEIGHTED_NORMAL")

    min_corner, max_corner, center = object_bounds([terrain])
    span = max(max_corner.x - min_corner.x, max_corner.y - min_corner.y, max_corner.z - min_corner.z)
    water_z = min_corner.z + (max_corner.z - min_corner.z) * 0.34
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=(center.x, center.y, water_z))
    water = bpy.context.object
    water.name = "Sea-level reference plane"
    water.dimensions = (span * 1.14, span * 1.14, max(4.0, span * 0.006))
    water.data.materials.append(make_material("TerrainForge Cyan Waterline", (0.08, 0.65, 0.72, 0.22), roughness=0.35, alpha=0.22))

    bpy.ops.object.light_add(type="AREA", location=(center.x - span * 0.24, center.y - span * 0.34, max_corner.z + span * 0.62))
    key = bpy.context.object
    key.name = "TerrainForge portfolio key light"
    key.data.energy = 7800.0
    key.data.size = span * 0.62
    bpy.ops.object.light_add(type="SUN", location=(center.x, center.y, max_corner.z + span))
    sun = bpy.context.object
    sun.rotation_euler = (math.radians(46), 0.0, math.radians(-32))
    sun.data.energy = 2.4

    bpy.ops.object.camera_add(location=(center.x + span * 0.42, center.y - span * 0.62, max_corner.z + span * 0.66))
    camera = bpy.context.object
    look_at(camera, center)
    camera.data.type = "ORTHO"
    camera.data.ortho_scale = span * 1.08
    camera.data.clip_end = max(50000.0, span * 6.0)
    bpy.context.scene.camera = camera
    setup_render(1800, 1100)
    render_still("terrainforge-professional-bake-proof.png")
    print(
        "TERRAINFORGE_CAPTURE_OK",
        f"version={terrainforge.bl_info['version']}",
        f"verts={len(terrain.data.vertices)}",
        f"faces={len(terrain.data.polygons)}",
    )


def capture_laser_saw() -> None:
    sys.path.insert(0, str(BLENDER_45_ADDONS))
    import laser_saw

    reset_scene()
    try:
        laser_saw.unregister()
    except Exception:
        pass
    laser_saw.register()

    bpy.ops.mesh.primitive_cube_add(size=2.4, location=(0.0, 0.0, 0.0), rotation=(0.0, math.radians(0), math.radians(8)))
    source = bpy.context.object
    source.name = "LaserSaw_Source_Block"
    source.scale = (1.3, 0.82, 0.62)
    source.data.materials.append(make_material("LaserSaw dark alloy", (0.08, 0.18, 0.20, 1.0), roughness=0.72, metallic=0.15))
    bevel = source.modifiers.new("Portfolio bevel before cut", "BEVEL")
    bevel.width = 0.08
    bevel.segments = 5
    source.modifiers.new("Portfolio source normals", "WEIGHTED_NORMAL")
    bpy.context.view_layer.objects.active = source
    source.select_set(True)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    for modifier in list(source.modifiers):
        bpy.ops.object.modifier_apply(modifier=modifier.name)

    bpy.context.view_layer.objects.active = source
    source.select_set(True)
    bpy.ops.object.mode_set(mode="SCULPT")
    plane_normal = Vector((1.0, 0.36, 0.18)).normalized()
    result = laser_saw.split_context_meshes_filled(
        bpy.context,
        Vector((0.0, 0.0, 0.0)),
        plane_normal,
        cut_selected_objects=True,
        tolerance=0.0001,
        cut_width=0.16,
    )
    bpy.ops.object.mode_set(mode="OBJECT")
    split_objects = [obj for item in result for obj in item.get("created", []) if obj.name in bpy.data.objects]
    if len(split_objects) < 2:
        raise RuntimeError(f"Laser Saw did not create two split objects: {result}")

    cyan = make_material("LaserSaw split cyan shell", (0.05, 0.42, 0.48, 1.0), roughness=0.62, metallic=0.18)
    gold = make_material("LaserSaw warm cap side", (0.86, 0.55, 0.17, 1.0), roughness=0.58, metallic=0.05)
    for index, obj in enumerate(split_objects):
        obj.data.materials.clear()
        obj.data.materials.append(cyan if index == 0 else gold)
        obj.location += plane_normal * (0.16 if index == 0 else -0.16)
        if not any(modifier.type == "WEIGHTED_NORMAL" for modifier in obj.modifiers):
            obj.modifiers.new("Laser Saw portfolio normals", "WEIGHTED_NORMAL")

    line_material = make_material("LaserSaw hot cut line", (1.0, 0.24, 0.06, 1.0), roughness=0.3)
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0.0, 0.0, 0.92), rotation=(math.radians(0), math.radians(0), math.radians(8)))
    line = bpy.context.object
    line.name = "Laser Saw cut path indicator"
    line.dimensions = (3.5, 0.035, 0.035)
    line.data.materials.append(line_material)

    all_meshes = split_objects + [line]
    min_corner, max_corner, center = object_bounds(all_meshes)
    bpy.ops.object.light_add(type="AREA", location=(center.x - 2.4, center.y - 3.3, center.z + 4.4))
    key = bpy.context.object
    key.data.energy = 850
    key.data.size = 4.0
    bpy.ops.object.light_add(type="POINT", location=(center.x + 2.2, center.y + 1.8, center.z + 2.4))
    rim = bpy.context.object
    rim.data.energy = 150
    rim.data.color = (0.2, 0.95, 1.0)
    bpy.ops.object.camera_add(location=(3.6, -4.6, 2.7))
    camera = bpy.context.object
    look_at(camera, center)
    camera.data.type = "ORTHO"
    camera.data.ortho_scale = 4.15
    bpy.context.scene.camera = camera
    setup_render(1800, 1100)
    render_still("laser-saw-capped-split-proof.png")
    print("LASER_SAW_CAPTURE_OK", f"created={len(split_objects)}", f"version={laser_saw.bl_info['version']}")


def main() -> None:
    if "--" not in sys.argv:
        raise SystemExit("Pass mode after --: easytexture, ai-retopo, tidefront, terrainforge, or laser-saw")
    mode = sys.argv[sys.argv.index("--") + 1]
    if mode == "easytexture":
        capture_easytexture()
    elif mode == "ai-retopo":
        capture_ai_retopo()
    elif mode == "tidefront":
        capture_tidefront_asset_shelf()
    elif mode == "terrainforge":
        capture_terrainforge()
    elif mode == "laser-saw":
        capture_laser_saw()
    else:
        raise SystemExit(f"Unknown mode: {mode}")


if __name__ == "__main__":
    main()
