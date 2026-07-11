from __future__ import annotations

import json
import math
import os
import sys
import tempfile
from pathlib import Path

import bpy
import numpy as np
from mathutils import Vector


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIRS = [ROOT / "images", ROOT / "public" / "images"]
EASYTEXTURE_ROOT = Path(os.environ.get("EASYTEXTURE_ROOT", r"H:\easytexture"))
AI_RETOPO_ROOT = Path(os.environ.get("AI_RETOPO_ROOT", r"C:\Users\andre\Documents\math"))
AI_RETOPO_SOURCE_BLEND = Path(
    os.environ.get(
        "AI_RETOPO_SOURCE_BLEND",
        r"F:\Organized Desktop\03 Creative Assets and References\Blender\alienlineardrive\aliencreature_001.blend",
    )
)
TIDEFRONT_ROOT = Path(os.environ.get("TIDEFRONT_ROOT", r"F:\Organized Desktop\oceansupremacyweb"))
TIDEFRONT_ASSET_LIBRARY_BLEND = Path(
    os.environ.get(
        "TIDEFRONT_ASSET_LIBRARY_BLEND",
        r"F:\Organized Desktop\03 Creative Assets and References\Ocean Drift\Blender\OceanDrift-Blender-Export\exports\OceanDrift_Asset_Library.blend",
    )
)
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
    if bpy.context.object and bpy.context.object.mode != "OBJECT":
        try:
            bpy.ops.object.mode_set(mode="OBJECT")
        except RuntimeError:
            pass
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for collection in list(bpy.data.collections):
        if collection.users == 0:
            bpy.data.collections.remove(collection)
    for block in (bpy.data.materials, bpy.data.images, bpy.data.meshes, bpy.data.curves, bpy.data.cameras, bpy.data.lights):
        for item in list(block):
            if item.users == 0:
                block.remove(item)


def set_input(bsdf: bpy.types.Node, name: str, value) -> None:
    socket = bsdf.inputs.get(name)
    if socket is not None:
        socket.default_value = value


def make_material(
    name: str,
    color: tuple[float, float, float, float],
    *,
    roughness: float = 0.55,
    metallic: float = 0.0,
    emission: tuple[float, float, float, float] | None = None,
    emission_strength: float = 0.0,
) -> bpy.types.Material:
    material = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    material.use_nodes = True
    material.diffuse_color = color
    bsdf = material.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        set_input(bsdf, "Base Color", color)
        set_input(bsdf, "Roughness", roughness)
        set_input(bsdf, "Metallic", metallic)
        set_input(bsdf, "Alpha", color[3])
        if emission is not None:
            set_input(bsdf, "Emission Color", emission)
            set_input(bsdf, "Emission Strength", emission_strength)
    if color[3] < 1.0:
        try:
            material.surface_render_method = "DITHERED"
        except (AttributeError, TypeError):
            try:
                material.blend_method = "BLEND"
            except AttributeError:
                pass
    return material


def setup_render(
    *,
    background: tuple[float, float, float, float] = (0.006, 0.008, 0.012, 1.0),
    width: int = 1920,
    height: int = 1080,
    samples: int = 64,
) -> None:
    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE_NEXT"
    scene.render.resolution_x = width
    scene.render.resolution_y = height
    scene.render.resolution_percentage = 100
    scene.render.film_transparent = False
    scene.render.image_settings.color_mode = "RGB"
    scene.render.image_settings.color_depth = "8"
    scene.render.image_settings.file_format = "WEBP"
    scene.render.image_settings.quality = 92
    try:
        scene.eevee.taa_render_samples = samples
    except AttributeError:
        pass
    try:
        scene.view_settings.look = "AgX - Medium High Contrast"
    except TypeError:
        pass
    scene.world.use_nodes = True
    world_background = scene.world.node_tree.nodes.get("Background")
    if world_background:
        world_background.inputs["Color"].default_value = background
        world_background.inputs["Strength"].default_value = 0.28


def render_still(name: str) -> None:
    path = output_path(name)
    scene = bpy.context.scene
    scene.render.image_settings.file_format = "WEBP" if path.suffix.lower() == ".webp" else "PNG"
    scene.render.filepath = str(path)
    bpy.ops.render.render(write_still=True)
    if not path.exists() or path.stat().st_size < 20_000:
        raise RuntimeError(f"Render did not produce a usable image: {path}")
    mirror_public(name)
    print(f"CAPTURED {path} bytes={path.stat().st_size}")


def look_at(obj: bpy.types.Object, target: Vector | tuple[float, float, float]) -> None:
    direction = Vector(target) - obj.location
    obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()


def add_camera(
    location: tuple[float, float, float],
    target: tuple[float, float, float],
    *,
    lens: float = 52.0,
) -> bpy.types.Object:
    bpy.ops.object.camera_add(location=location)
    camera = bpy.context.object
    camera.name = "Portfolio Camera"
    camera.data.lens = lens
    camera.data.sensor_width = 36.0
    look_at(camera, target)
    bpy.context.scene.camera = camera
    return camera


def add_area_light(
    name: str,
    location: tuple[float, float, float],
    target: tuple[float, float, float],
    *,
    energy: float,
    size: float,
    color: tuple[float, float, float],
) -> bpy.types.Object:
    bpy.ops.object.light_add(type="AREA", location=location)
    light = bpy.context.object
    light.name = name
    light.data.energy = energy
    light.data.shape = "DISK"
    light.data.size = size
    light.data.color = color
    look_at(light, target)
    return light


def add_beveled_cube(
    name: str,
    location: tuple[float, float, float],
    dimensions: tuple[float, float, float],
    material: bpy.types.Material,
    *,
    bevel: float = 0.08,
    rotation: tuple[float, float, float] = (0.0, 0.0, 0.0),
) -> bpy.types.Object:
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=location, rotation=rotation)
    obj = bpy.context.object
    obj.name = name
    obj.dimensions = dimensions
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(material)
    if bevel > 0.0:
        modifier = obj.modifiers.new("Edge treatment", "BEVEL")
        modifier.width = bevel
        modifier.segments = 4
        modifier.limit_method = "ANGLE"
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.modifier_apply(modifier=modifier.name)
    return obj


def add_rock(
    name: str,
    location: tuple[float, float, float],
    scale: tuple[float, float, float],
    material: bpy.types.Material,
    *,
    subdivisions: int = 2,
    rotation: tuple[float, float, float] = (0.0, 0.0, 0.0),
) -> bpy.types.Object:
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=subdivisions, radius=1.0, location=location, rotation=rotation)
    obj = bpy.context.object
    obj.name = name
    obj.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(material)
    bevel = obj.modifiers.new("Rock edge softening", "BEVEL")
    bevel.width = min(scale) * 0.04
    bevel.segments = 2
    return obj


def add_curve_tube(
    name: str,
    points: list[tuple[float, float, float]],
    material: bpy.types.Material,
    *,
    radius: float,
) -> bpy.types.Object:
    curve = bpy.data.curves.new(name, "CURVE")
    curve.dimensions = "3D"
    curve.resolution_u = 2
    curve.bevel_depth = radius
    curve.bevel_resolution = 3
    spline = curve.splines.new("BEZIER")
    spline.bezier_points.add(len(points) - 1)
    for point, coordinate in zip(spline.bezier_points, points):
        point.co = coordinate
        point.handle_left_type = "AUTO"
        point.handle_right_type = "AUTO"
    curve.materials.append(material)
    obj = bpy.data.objects.new(name, curve)
    bpy.context.collection.objects.link(obj)
    return obj


def add_floor(size: float, material: bpy.types.Material, *, z: float = 0.0) -> bpy.types.Object:
    bpy.ops.mesh.primitive_plane_add(size=size, location=(0.0, 0.0, z))
    floor = bpy.context.object
    floor.name = "Portfolio Ground"
    floor.data.materials.append(material)
    return floor


def object_bounds(objects: list[bpy.types.Object]) -> tuple[Vector, Vector, Vector]:
    coords = [obj.matrix_world @ Vector(corner) for obj in objects for corner in obj.bound_box]
    min_corner = Vector((min(co.x for co in coords), min(co.y for co in coords), min(co.z for co in coords)))
    max_corner = Vector((max(co.x for co in coords), max(co.y for co in coords), max(co.z for co in coords)))
    return min_corner, max_corner, (min_corner + max_corner) * 0.5


def save_rgba_image(path: Path, rgb: np.ndarray) -> None:
    height, width, _channels = rgb.shape
    rgba = np.concatenate((np.clip(rgb, 0.0, 1.0), np.ones((height, width, 1), dtype=np.float32)), axis=2)
    image = bpy.data.images.new(path.stem, width=width, height=height, alpha=True, float_buffer=False)
    image.pixels.foreach_set(rgba.astype(np.float32).ravel())
    image.filepath_raw = str(path)
    image.file_format = "PNG"
    image.save()
    bpy.data.images.remove(image)


def build_easytexture_maps(directory: Path, size: int = 1024) -> dict[str, Path]:
    directory.mkdir(parents=True, exist_ok=True)
    y, x = np.mgrid[0:size, 0:size].astype(np.float32)
    u = x / float(size - 1)
    v = y / float(size - 1)
    rng = np.random.default_rng(1847)
    grain = rng.normal(0.0, 1.0, (size, size)).astype(np.float32)
    grain = (grain + np.roll(grain, 2, axis=0) + np.roll(grain, 2, axis=1)) / 3.0

    base = np.zeros((size, size, 3), dtype=np.float32)
    base[:] = (0.035, 0.045, 0.055)
    base += grain[:, :, None] * 0.018
    border = (u < 0.075) | (u > 0.925) | (v < 0.075) | (v > 0.925)
    inner = ((u > 0.105) & (u < 0.895) & (v > 0.105) & (v < 0.895))
    stripe = np.abs((u * 0.82 + v) - 0.92) < 0.055
    stripe |= np.abs((u * 0.82 + v) - 1.14) < 0.022
    base[border] = (0.11, 0.13, 0.15)
    base[inner] += np.array((0.025, 0.03, 0.035), dtype=np.float32)
    base[stripe] = (0.78, 0.035, 0.055)
    warning_bar = (u > 0.15) & (u < 0.48) & (v > 0.16) & (v < 0.205)
    base[warning_bar] = (0.78, 0.80, 0.78)
    for center_u, center_v in ((0.12, 0.12), (0.88, 0.12), (0.12, 0.88), (0.88, 0.88)):
        bolt = (u - center_u) ** 2 + (v - center_v) ** 2 < 0.012**2
        base[bolt] = (0.55, 0.58, 0.60)

    height_map = np.full((size, size), 0.5, dtype=np.float32)
    height_map[border] += 0.16
    height_map[stripe] += 0.035
    height_map[warning_bar] += 0.08
    height_map += grain * 0.015
    grad_y, grad_x = np.gradient(height_map)
    normal = np.dstack((-grad_x * 24.0, -grad_y * 24.0, np.ones_like(height_map)))
    normal /= np.linalg.norm(normal, axis=2, keepdims=True)
    normal = normal * 0.5 + 0.5

    roughness = np.clip(0.64 + grain * 0.08, 0.2, 0.92)
    roughness[stripe] = 0.34
    roughness[border] = 0.48
    ao = np.ones_like(roughness) * 0.93
    ao[border] = 0.72
    metallic = np.ones_like(roughness) * 0.62
    metallic[stripe] = 0.28
    orm = np.dstack((ao, roughness, metallic))

    paths = {
        "BASE_COLOR": directory / "field_crate_albedo.png",
        "NORMAL": directory / "field_crate_normal.png",
        "ORM": directory / "field_crate_orm.png",
    }
    save_rgba_image(paths["BASE_COLOR"], base)
    save_rgba_image(paths["NORMAL"], normal)
    save_rgba_image(paths["ORM"], orm)
    return paths


def capture_easytexture() -> None:
    sys.path.insert(0, str(EASYTEXTURE_ROOT))
    import easytexture

    reset_scene()
    easytexture.register()
    setup_render(background=(0.004, 0.006, 0.009, 1.0))

    dark_metal = make_material("Crate frame", (0.025, 0.032, 0.04, 1.0), roughness=0.34, metallic=0.78)
    red_metal = make_material("Crate latch", (0.72, 0.022, 0.04, 1.0), roughness=0.32, metallic=0.46)
    rubber = make_material("Crate feet", (0.012, 0.014, 0.017, 1.0), roughness=0.88)
    floor_material = make_material("Studio floor", (0.018, 0.021, 0.027, 1.0), roughness=0.72)

    crate = add_beveled_cube("EasyTexture Field Supply Crate", (0.0, 0.0, 1.15), (3.7, 2.25, 2.1), dark_metal, bevel=0.16)
    bpy.context.view_layer.objects.active = crate
    crate.select_set(True)
    bpy.ops.object.mode_set(mode="EDIT")
    bpy.ops.mesh.select_all(action="SELECT")
    bpy.ops.uv.smart_project(angle_limit=math.radians(66.0), island_margin=0.035)
    bpy.ops.object.mode_set(mode="OBJECT")

    with tempfile.TemporaryDirectory(prefix="portfolio_easytexture_") as tmp:
        texture_paths = build_easytexture_maps(Path(tmp))
        for channel in ("BASE_COLOR", "NORMAL", "ORM"):
            result = bpy.ops.easytexture.apply_image(
                filepath=str(texture_paths[channel]),
                replace_mode="ADD_LAYER",
                target_channel=channel,
            )
            if result != {"FINISHED"}:
                raise RuntimeError(f"EasyTexture failed for {channel}: {result}")

        material = crate.active_material
        if material is None:
            raise RuntimeError("EasyTexture did not assign a material")
        node_names = {node.name for node in material.node_tree.nodes}
        for required in ("EasyTexture BASE_COLOR Image", "EasyTexture NORMAL Image", "EasyTexture ORM Image"):
            if required not in node_names:
                raise RuntimeError(f"Missing EasyTexture node: {required}")

        for x in (-1.62, 1.62):
            for z in (0.42, 1.88):
                add_beveled_cube(f"Frame_{x}_{z}", (x, -1.14, z), (0.18, 0.15, 0.34), dark_metal, bevel=0.035)
        for x in (-0.72, 0.72):
            add_beveled_cube(f"Latch_{x}", (x, -1.18, 1.18), (0.38, 0.12, 0.72), red_metal, bevel=0.055)
        add_beveled_cube("Top rail", (0.0, 0.0, 2.24), (2.5, 0.22, 0.18), dark_metal, bevel=0.06)
        for x in (-1.45, 1.45):
            for y in (-0.86, 0.86):
                add_beveled_cube(f"Foot_{x}_{y}", (x, y, 0.12), (0.38, 0.38, 0.24), rubber, bevel=0.08)

        add_floor(26.0, floor_material, z=0.0)
        add_area_light("Warm key", (-4.2, -4.8, 7.0), (0.0, 0.0, 1.1), energy=1100, size=4.5, color=(1.0, 0.72, 0.58))
        add_area_light("Cool rim", (4.5, 1.8, 5.2), (0.0, 0.0, 1.1), energy=880, size=3.2, color=(0.28, 0.65, 1.0))
        add_area_light("Red edge", (-3.2, 2.6, 2.5), (0.0, 0.0, 1.0), energy=520, size=2.0, color=(1.0, 0.04, 0.07))
        add_camera((6.7, -8.2, 4.9), (0.0, 0.0, 1.05), lens=58.0)
        render_still("easytexture-game-prop-proof.webp")

    print(
        "EASYTEXTURE_CAPTURE_OK",
        f"version={easytexture.bl_info['version']}",
        "channels=BASE_COLOR,NORMAL,ORM",
        f"nodes={len(node_names)}",
    )


def capture_ai_retopo() -> None:
    sys.path.insert(0, str(AI_RETOPO_ROOT))
    import ai_retopo_assist
    from ai_retopo_assist import blender_bridge as bridge

    reset_scene()
    ai_retopo_assist.register()
    setup_render(background=(0.003, 0.004, 0.007, 1.0))

    source_material = make_material("Authored alien sculpt", (0.085, 0.115, 0.14, 1.0), roughness=0.4, metallic=0.2)
    cage_material = make_material(
        "Retopo signal cage",
        (0.015, 0.58, 0.82, 1.0),
        roughness=0.22,
        metallic=0.18,
        emission=(0.01, 0.5, 1.0, 1.0),
        emission_strength=1.55,
    )
    floor_material = make_material("Retopo plinth", (0.014, 0.017, 0.023, 1.0), roughness=0.72)

    if not AI_RETOPO_SOURCE_BLEND.exists():
        raise RuntimeError(f"Authored retopo source is missing: {AI_RETOPO_SOURCE_BLEND}")
    with bpy.data.libraries.load(str(AI_RETOPO_SOURCE_BLEND), link=False) as (data_from, data_to):
        wanted = [name for name in ("model", "rig") if name in data_from.objects]
        data_to.objects = wanted
    loaded_objects = [obj for obj in data_to.objects if obj is not None]
    for obj in loaded_objects:
        bpy.context.collection.objects.link(obj)
    source_model = next((obj for obj in loaded_objects if obj.name == "model"), None)
    if source_model is None:
        raise RuntimeError(f"Authored source has no model object: {AI_RETOPO_SOURCE_BLEND}")

    depsgraph = bpy.context.evaluated_depsgraph_get()
    bpy.context.view_layer.update()
    evaluated = source_model.evaluated_get(depsgraph)
    evaluated_mesh = bpy.data.meshes.new_from_object(
        evaluated,
        preserve_all_data_layers=True,
        depsgraph=depsgraph,
    )
    source = bpy.data.objects.new("Authored_Alien_Retopo_Source", evaluated_mesh)
    bpy.context.collection.objects.link(source)
    source.matrix_world = source_model.matrix_world.copy()
    for obj in loaded_objects:
        bpy.data.objects.remove(obj, do_unlink=True)

    source.scale = (1.82, 1.82, 1.82)
    bpy.context.view_layer.objects.active = source
    source.select_set(True)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    min_corner, max_corner, center = object_bounds([source])
    source.location = (-center.x, -center.y, 0.24 - min_corner.z)
    bpy.ops.object.transform_apply(location=True, rotation=False, scale=False)
    source.data.materials.clear()
    source.data.materials.append(source_material)
    for polygon in source.data.polygons:
        polygon.use_smooth = True
    subdivision = source.modifiers.new("Sculpt presentation subdivision", "SUBSURF")
    subdivision.subdivision_type = "CATMULL_CLARK"
    subdivision.levels = 1
    subdivision.render_levels = 1
    bpy.ops.object.modifier_apply(modifier=subdivision.name)

    stroke_points = []
    stroke_normals = []
    min_corner, max_corner, center = object_bounds([source])
    width = max_corner.x - min_corner.x
    height = max_corner.z - min_corner.z
    center_x = center.x + width * 0.1
    center_z = min_corner.z + height * 0.68
    for index in range(16):
        angle = (index / 16.0) * math.tau
        x = center_x + math.cos(angle) * width * 0.17
        z = center_z + math.sin(angle) * height * 0.105
        hit, location, normal, _face_index = source.closest_point_on_mesh(
            Vector((x, min_corner.y - width * 0.08, z)),
            distance=width * 3.0,
        )
        if not hit:
            raise RuntimeError(f"Could not project authored retopo contour point {index} onto the alien torso")
        stroke_points.append(list(location))
        stroke_normals.append(list(normal.normalized()))

    stroke = {
        "points": stroke_points,
        "screen_points": [],
        "normals": stroke_normals,
        "closed": True,
        "source_name": source.name,
        "intent": "patch",
    }
    bpy.context.scene.ai_retopo_strokes_json = json.dumps([stroke])
    settings = bpy.context.scene.ai_retopo_settings
    settings.patch_resolution = 12
    settings.contour_count = 8
    settings.relax_iterations = 5
    bpy.ops.object.select_all(action="DESELECT")
    source.select_set(True)
    bpy.context.view_layer.objects.active = source
    if bpy.ops.ai_retopo.preview_plan() != {"FINISHED"}:
        raise RuntimeError("AI Retopo preview failed")
    preview_count = len([obj for obj in bpy.context.scene.objects if obj.name.startswith(bridge.PREVIEW_PREFIX)])
    if bpy.ops.ai_retopo.apply_plan() != {"FINISHED"}:
        raise RuntimeError("AI Retopo apply failed")
    if bpy.ops.ai_retopo.quality_report() != {"FINISHED"}:
        raise RuntimeError("AI Retopo quality report failed")

    target = bpy.data.objects.get(bridge.TARGET_NAME)
    if target is None or not target.data.polygons:
        raise RuntimeError("AI Retopo target was not generated")
    report = json.loads(bpy.context.scene.ai_retopo_quality_json)
    if float(report.get("quad_ratio", 0.0)) < 0.95:
        raise RuntimeError(f"AI Retopo target is not mostly quads: {report}")
    snap = bridge.snapper_from_source(bpy.context, source)
    for vertex in target.data.vertices:
        snapped, _error, normal = snap(tuple(vertex.co))
        vertex.co = Vector(snapped) + Vector(normal) * 0.035
    target.data.update()
    target.data.materials.clear()
    target.data.materials.append(cage_material)
    wireframe = target.modifiers.new("Visible retopo cage", "WIREFRAME")
    wireframe.thickness = 0.01
    wireframe.use_replace = True
    wireframe.use_boundary = True
    target.show_in_front = True

    for obj in list(bpy.context.scene.objects):
        if obj.name.startswith(bridge.PREVIEW_PREFIX):
            bpy.data.objects.remove(obj, do_unlink=True)

    add_beveled_cube("Alien sculpt plinth", (0.0, 0.0, 0.13), (1.55, 1.25, 0.24), floor_material, bevel=0.1)
    add_floor(24.0, floor_material, z=0.0)
    focus = (0.0, -0.04, min_corner.z + height * 0.64)
    add_area_light("Retopo white key", (-4.6, -5.8, 6.2), focus, energy=1500, size=4.4, color=(0.86, 0.94, 1.0))
    add_area_light("Retopo red rim", (4.2, 1.4, 4.6), focus, energy=1200, size=3.0, color=(1.0, 0.012, 0.025))
    add_area_light("Retopo cyan fill", (-3.0, 2.2, 3.0), focus, energy=650, size=2.8, color=(0.08, 0.5, 1.0))
    add_camera((3.8, -7.2, 3.4), focus, lens=62.0)
    render_still("ai-retopo-authored-alien-proof.webp")
    print(
        "AI_RETOPO_CAPTURE_OK",
        f"version={ai_retopo_assist.bl_info['version']}",
        f"source={AI_RETOPO_SOURCE_BLEND.name}",
        f"source_vertices={len(source.data.vertices)}",
        f"preview_guides={preview_count}",
        f"faces={len(target.data.polygons)}",
        f"quad_ratio={float(report['quad_ratio']):.3f}",
    )


def capture_tidefront_asset_shelf() -> None:
    addon_parent = TIDEFRONT_ROOT / "tools" / "blender_addons"
    sys.path.insert(0, str(addon_parent))
    import tidefront_asset_shelf

    reset_scene()
    try:
        bpy.ops.preferences.addon_disable(module="tidefront_asset_shelf")
    except Exception:
        pass
    if bpy.ops.preferences.addon_enable(module="tidefront_asset_shelf") != {"FINISHED"}:
        raise RuntimeError("Could not enable Tidefront Asset Shelf")
    setup_render(background=(0.003, 0.018, 0.03, 1.0), samples=80)
    bpy.context.scene.view_settings.exposure = 0.4

    basalt = make_material("Tidefront basalt", (0.025, 0.075, 0.09, 1.0), roughness=0.78, metallic=0.08)
    coral_red = make_material("Signal coral", (0.74, 0.025, 0.065, 1.0), roughness=0.52)
    coral_gold = make_material("Gold coral", (0.9, 0.3, 0.055, 1.0), roughness=0.55)
    coral_pale = make_material("Pale coral", (0.62, 0.78, 0.75, 1.0), roughness=0.62)
    coral_violet = make_material("Violet coral", (0.28, 0.075, 0.42, 1.0), roughness=0.58)
    kelp = make_material("Deep kelp", (0.025, 0.24, 0.12, 1.0), roughness=0.74)
    sand = make_material("Reef sand", (0.3, 0.235, 0.14, 1.0), roughness=0.9)

    if not TIDEFRONT_ASSET_LIBRARY_BLEND.exists():
        raise RuntimeError(f"Tidefront source asset library is missing: {TIDEFRONT_ASSET_LIBRARY_BLEND}")
    asset_specs = [
        ("OceanDrift_Rock_Rock_003", (-1.65, 0.45, 0.62), (1.5, 1.35, 0.9), 0.2, basalt),
        ("OceanDrift_Rock_Rock_005", (1.55, 0.55, 0.58), (1.45, 1.3, 0.86), -0.35, basalt),
        ("OceanDrift_Rock_Rock_008", (0.0, -0.38, 0.34), (1.75, 1.48, 0.58), 0.12, basalt),
        ("OceanDrift_Coral_Coralls_001", (-1.5, -0.25, 1.62), (1.05, 1.05, 1.05), -0.12, coral_red),
        ("OceanDrift_Coral_Coralls_003", (0.15, -0.62, 1.44), (1.08, 1.08, 1.08), 0.24, coral_gold),
        ("OceanDrift_Coral_CoralCA", (1.55, -0.2, 1.62), (1.0, 1.0, 1.0), -0.18, coral_pale),
        ("OceanDrift_Coral_CoralE", (0.9, 0.65, 1.5), (0.86, 0.86, 0.86), 0.42, coral_violet),
        ("OceanDrift_Seaweed_Seaweed_004", (-2.42, 1.0, 1.25), (1.45, 1.45, 1.45), 0.12, kelp),
        ("OceanDrift_Seaweed_Seaweed_007", (2.4, 1.1, 1.2), (1.32, 1.32, 1.32), -0.2, kelp),
    ]
    with bpy.data.libraries.load(str(TIDEFRONT_ASSET_LIBRARY_BLEND), link=False) as (data_from, data_to):
        wanted = [name for name, *_rest in asset_specs]
        missing = [name for name in wanted if name not in data_from.objects]
        if missing:
            raise RuntimeError(f"Tidefront source library is missing assets: {missing}")
        data_to.objects = wanted
    loaded_by_name = {obj.name: obj for obj in data_to.objects if obj is not None}

    root = bpy.data.objects.new("Tidefront_Coral_Garden_Kit", None)
    bpy.context.collection.objects.link(root)
    asset_objects = []
    for name, location, scale, rotation_z, material in asset_specs:
        obj = loaded_by_name[name]
        bpy.context.collection.objects.link(obj)
        obj.name = name.replace("OceanDrift_", "")
        obj.location = location
        obj.scale = scale
        obj.rotation_euler = (0.0, 0.0, rotation_z)
        obj.data.materials.clear()
        obj.data.materials.append(material)
        for polygon in obj.data.polygons:
            polygon.use_smooth = True
        obj.parent = root
        asset_objects.append(obj)

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

        bpy.ops.object.select_all(action="DESELECT")
        root.select_set(True)
        bpy.context.view_layer.objects.active = root
        settings = bpy.context.scene.tidefront_asset_shelf
        settings.asset_name = "Tidefront Coral Garden Kit"
        settings.asset_category = "landmarks"
        settings.asset_version = 3
        settings.tags = "reef, coral, kelp, landmark, modular, ocean-drift"
        settings.description = "Reusable Tidefront coral garden assembled from the authored Ocean Drift asset library"
        settings.save_source_blend = True
        settings.export_glb = True
        if bpy.ops.tidefront_asset_shelf.save_selected() != {"FINISHED"}:
            raise RuntimeError("Tidefront Asset Shelf save failed")

        catalog_path = repo_root / tidefront_asset_shelf.CATALOG_RELATIVE_PATH
        catalog = json.loads(catalog_path.read_text(encoding="utf-8"))
        entry = next(item for item in catalog["assets"] if item["name"] == settings.asset_name)
        runtime_path = repo_root / "public" / entry["runtimePath"].lstrip("/")
        source_path = Path(entry["sourceBlend"])
        if not runtime_path.exists() or runtime_path.stat().st_size < 5_000:
            raise RuntimeError(f"Asset Shelf GLB export missing: {runtime_path}")
        if not source_path.exists() or source_path.stat().st_size < 5_000:
            raise RuntimeError(f"Asset Shelf source blend missing: {source_path}")
        if int(entry["meshObjects"]) < len(asset_objects):
            raise RuntimeError(f"Asset Shelf did not catalog the hierarchy: {entry}")

        sand_nodes = sand.node_tree.nodes
        sand_links = sand.node_tree.links
        sand_coordinates = sand_nodes.new("ShaderNodeTexCoord")
        sand_noise = sand_nodes.new("ShaderNodeTexNoise")
        sand_noise.inputs["Scale"].default_value = 7.0
        sand_noise.inputs["Detail"].default_value = 3.0
        sand_bump = sand_nodes.new("ShaderNodeBump")
        sand_bump.inputs["Strength"].default_value = 0.2
        sand_bump.inputs["Distance"].default_value = 0.12
        sand_links.new(sand_coordinates.outputs["Generated"], sand_noise.inputs["Vector"])
        sand_links.new(sand_noise.outputs["Fac"], sand_bump.inputs["Height"])
        sand_links.new(sand_bump.outputs["Normal"], sand_nodes["Principled BSDF"].inputs["Normal"])
        add_floor(28.0, sand, z=-0.04)

        particle_material = make_material(
            "Underwater particles",
            (0.25, 0.72, 0.84, 1.0),
            roughness=0.2,
            emission=(0.08, 0.52, 0.72, 1.0),
            emission_strength=0.8,
        )
        particle_rng = np.random.default_rng(4403)
        for index in range(36):
            location = (
                float(particle_rng.uniform(-4.6, 4.6)),
                float(particle_rng.uniform(-0.8, 4.8)),
                float(particle_rng.uniform(0.25, 4.2)),
            )
            bpy.ops.mesh.primitive_ico_sphere_add(
                subdivisions=1,
                radius=float(particle_rng.uniform(0.012, 0.035)),
                location=location,
            )
            bpy.context.object.name = f"Underwater mote {index + 1:02d}"
            bpy.context.object.data.materials.append(particle_material)

        add_area_light("Underwater key", (-4.8, -5.2, 7.4), (0.0, 0.0, 1.35), energy=1650, size=5.5, color=(0.3, 0.78, 1.0))
        add_area_light("Coral rim", (4.5, 0.8, 4.8), (0.0, 0.0, 1.35), energy=1100, size=3.2, color=(1.0, 0.035, 0.08))
        add_area_light("Warm reef fill", (-2.5, 3.2, 2.4), (0.0, 0.0, 1.15), energy=760, size=2.8, color=(1.0, 0.42, 0.12))
        add_camera((6.9, -9.6, 4.7), (0.0, 0.0, 1.38), lens=60.0)
        render_still("tidefront-asset-shelf-coral-garden-proof.webp")

        print(
            "TIDEFRONT_ASSET_SHELF_CAPTURE_OK",
            f"asset_id={entry['id']}",
            f"source={TIDEFRONT_ASSET_LIBRARY_BLEND.name}",
            f"objects={len(entry['objects'])}",
            f"triangles={entry['triangles']}",
            f"materials={len(entry['materials'])}",
            f"glb_bytes={runtime_path.stat().st_size}",
        )


def terrain_height_at(obj: bpy.types.Object, x: float, y: float, top_z: float) -> float | None:
    inverse = obj.matrix_world.inverted()
    origin = inverse @ Vector((x, y, top_z))
    direction = (inverse.to_3x3() @ Vector((0.0, 0.0, -1.0))).normalized()
    hit, location, _normal, _index = obj.ray_cast(origin, direction)
    if not hit:
        return None
    return float((obj.matrix_world @ location).z)


def terrain_height_across(objects: list[bpy.types.Object], x: float, y: float, top_z: float) -> float | None:
    heights = [terrain_height_at(obj, x, y, top_z) for obj in objects]
    hits = [height for height in heights if height is not None]
    return max(hits) if hits else None


def enhance_terrain_material(material: bpy.types.Material) -> None:
    material.use_nodes = True
    nodes = material.node_tree.nodes
    links = material.node_tree.links
    bsdf = nodes.get("Principled BSDF")
    if bsdf is None:
        return
    noise = nodes.get("Portfolio terrain micro detail") or nodes.new("ShaderNodeTexNoise")
    noise.name = "Portfolio terrain micro detail"
    noise.inputs["Scale"].default_value = 6.2
    noise.inputs["Detail"].default_value = 5.0
    noise.inputs["Roughness"].default_value = 0.72
    coordinates = nodes.get("Portfolio terrain coordinates") or nodes.new("ShaderNodeTexCoord")
    coordinates.name = "Portfolio terrain coordinates"
    bump = nodes.get("Portfolio terrain bump") or nodes.new("ShaderNodeBump")
    bump.name = "Portfolio terrain bump"
    bump.inputs["Strength"].default_value = 0.18
    bump.inputs["Distance"].default_value = 0.22
    links.new(coordinates.outputs["Generated"], noise.inputs["Vector"])
    links.new(noise.outputs["Fac"], bump.inputs["Height"])
    links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    set_input(bsdf, "Roughness", 0.8)


def apply_terrain_showcase_material(
    terrain: bpy.types.Object,
    min_z: float,
    max_z: float,
    water_z: float,
) -> bpy.types.Material:
    mesh = terrain.data
    attribute_name = "PortfolioTerrainColor"
    existing = mesh.color_attributes.get(attribute_name)
    if existing:
        mesh.color_attributes.remove(existing)
    colors = mesh.color_attributes.new(name=attribute_name, type="BYTE_COLOR", domain="CORNER")
    height_span = max(1.0, max_z - min_z)
    for polygon in mesh.polygons:
        slope = 1.0 - max(0.0, min(1.0, float(polygon.normal.z)))
        for loop_index in polygon.loop_indices:
            vertex = mesh.vertices[mesh.loops[loop_index].vertex_index]
            normalized_height = max(0.0, min(1.0, (float(vertex.co.z) - min_z) / height_span))
            if float(vertex.co.z) <= water_z + height_span * 0.025:
                color = np.array((0.62, 0.39, 0.16), dtype=np.float32)
            elif normalized_height < 0.46:
                color = np.array((0.07, 0.34, 0.12), dtype=np.float32)
            elif normalized_height < 0.7:
                color = np.array((0.12, 0.29, 0.09), dtype=np.float32)
            elif normalized_height < 0.88:
                color = np.array((0.19, 0.22, 0.11), dtype=np.float32)
            else:
                color = np.array((0.34, 0.31, 0.25), dtype=np.float32)
            if slope > 0.29:
                rock = np.array((0.22, 0.18, 0.15), dtype=np.float32)
                color = color * 0.28 + rock * 0.72
            variation = 0.9 + 0.1 * math.sin(float(vertex.co.x) * 0.012 + float(vertex.co.y) * 0.017)
            color = np.clip(color * variation, 0.0, 1.0)
            colors.data[loop_index].color = (float(color[0]), float(color[1]), float(color[2]), 1.0)

    material = bpy.data.materials.new("TerrainForge art-directed surface")
    material.use_nodes = True
    nodes = material.node_tree.nodes
    links = material.node_tree.links
    bsdf = nodes.get("Principled BSDF")
    vertex_color = nodes.new("ShaderNodeVertexColor")
    vertex_color.layer_name = attribute_name
    coordinates = nodes.new("ShaderNodeTexCoord")
    palette_noise = nodes.new("ShaderNodeTexNoise")
    palette_noise.inputs["Scale"].default_value = 3.4
    palette_noise.inputs["Detail"].default_value = 4.0
    palette_noise.inputs["Roughness"].default_value = 0.66
    palette_ramp = nodes.new("ShaderNodeValToRGB")
    palette_ramp.color_ramp.elements[0].position = 0.2
    palette_ramp.color_ramp.elements[0].color = (0.58, 0.66, 0.64, 1.0)
    palette_ramp.color_ramp.elements[1].position = 0.82
    palette_ramp.color_ramp.elements[1].color = (1.0, 0.92, 0.76, 1.0)
    palette_mix = nodes.new("ShaderNodeMixRGB")
    palette_mix.blend_type = "MULTIPLY"
    palette_mix.inputs[0].default_value = 0.42
    links.new(coordinates.outputs["Generated"], palette_noise.inputs["Vector"])
    links.new(palette_noise.outputs["Fac"], palette_ramp.inputs["Fac"])
    links.new(vertex_color.outputs["Color"], palette_mix.inputs[1])
    links.new(palette_ramp.outputs["Color"], palette_mix.inputs[2])
    links.new(palette_mix.outputs["Color"], bsdf.inputs["Base Color"])
    terrain.data.materials.clear()
    terrain.data.materials.append(material)
    enhance_terrain_material(material)
    return material


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
    setup_render(background=(0.018, 0.045, 0.075, 1.0), samples=96)

    scene = bpy.context.scene
    scene.view_settings.look = "AgX - Medium High Contrast"
    scene.view_settings.exposure = 0.75
    world_background = scene.world.node_tree.nodes.get("Background")
    if world_background:
        world_background.inputs["Strength"].default_value = 0.52
    preset_id = os.environ.get("TERRAINFORGE_PRESET", "TROPICAL_ARCHIPELAGO")
    render_name = os.environ.get("TERRAINFORGE_OUTPUT", "terrainforge-tropical-archipelago-proof.webp")
    apply_preset_to_scene(scene, preset_id, replace_project=True)
    props = scene.terrainforge
    props.live_preview_enabled = False
    props.preview_quality = "DETAILED"
    props.preview_resolution = 257
    props.tile_resolution = 257
    props.live_build_scope = "ALL"
    props.preview_selected_tile_x = 0
    props.preview_selected_tile_y = 0
    props.preview_z_mode = "GROUND_ZERO"
    props.preview_vertical_scale = 0.84
    props.texture_preview_enabled = True
    props.texture_base_scale_m = 62.0
    if bpy.ops.terrainforge.build_preview() != {"FINISHED"}:
        raise RuntimeError(f"TerrainForge preview failed: {props.last_build_summary}")

    collection = bpy.data.collections.get("TerrainForge Preview")
    terrain_objects = [obj for obj in collection.objects if obj.type == "MESH"] if collection else []
    expected_tiles = int(props.tile_count_x) * int(props.tile_count_y)
    if len(terrain_objects) != expected_tiles:
        raise RuntimeError(f"Expected {expected_tiles} TerrainForge preview tiles, found {len(terrain_objects)}")
    for index, terrain in enumerate(terrain_objects):
        terrain.name = f"TerrainForge {preset_id} Tile {index + 1:02d}"
        for polygon in terrain.data.polygons:
            polygon.use_smooth = True
        if not terrain.data.color_attributes.get("TerrainForgeSurfaceColor"):
            raise RuntimeError(f"TerrainForge texture preview did not create surface colors on {terrain.name}")
        if not terrain.data.materials:
            raise RuntimeError(f"TerrainForge preview did not assign a material to {terrain.name}")

    with tempfile.TemporaryDirectory(prefix="portfolio_terrainforge_") as tmp:
        export_dir = Path(tmp) / "coastal_export"
        props.export_path = str(export_dir)
        props.export_masks = True
        if bpy.ops.terrainforge.export_tiles() != {"FINISHED"}:
            raise RuntimeError("TerrainForge export failed")
        manifests = list(export_dir.glob("*manifest*.json"))
        if not manifests:
            raise RuntimeError(f"TerrainForge export manifest missing from {export_dir}")

        min_corner, max_corner, center = object_bounds(terrain_objects)
        span = max(max_corner.x - min_corner.x, max_corner.y - min_corner.y)
        terrain = terrain_objects[0]
        source_min = float(terrain.get("terrainforge_source_height_min_m", 0.0))
        source_max = float(terrain.get("terrainforge_source_height_max_m", 1.0))
        origin = float(terrain.get("terrainforge_preview_z_origin_m", source_min))
        vertical_scale = float(terrain.get("terrainforge_preview_vertical_scale", 1.0))
        sea_height = source_min + float(props.sea_level) * (source_max - source_min)
        water_z = (sea_height - origin) * vertical_scale + 2.0
        for terrain in terrain_objects:
            apply_terrain_showcase_material(terrain, min_corner.z, max_corner.z, water_z)

        water_material = make_material("Archipelago water", (0.004, 0.09, 0.16, 1.0), roughness=0.15, metallic=0.04)
        water_bsdf = water_material.node_tree.nodes.get("Principled BSDF")
        if water_bsdf:
            set_input(water_bsdf, "Coat Weight", 0.32)
            set_input(water_bsdf, "Coat Roughness", 0.08)
        water_coordinates = water_material.node_tree.nodes.new("ShaderNodeTexCoord")
        water_noise = water_material.node_tree.nodes.new("ShaderNodeTexNoise")
        water_noise.inputs["Scale"].default_value = 28.0
        water_noise.inputs["Detail"].default_value = 3.2
        water_noise.inputs["Roughness"].default_value = 0.58
        water_ramp = water_material.node_tree.nodes.new("ShaderNodeValToRGB")
        water_ramp.color_ramp.elements[0].color = (0.002, 0.025, 0.07, 1.0)
        water_ramp.color_ramp.elements[1].color = (0.008, 0.18, 0.23, 1.0)
        water_bump = water_material.node_tree.nodes.new("ShaderNodeBump")
        water_bump.inputs["Strength"].default_value = 0.24
        water_bump.inputs["Distance"].default_value = 0.35
        water_material.node_tree.links.new(water_coordinates.outputs["Generated"], water_noise.inputs["Vector"])
        water_material.node_tree.links.new(water_noise.outputs["Fac"], water_ramp.inputs["Fac"])
        water_material.node_tree.links.new(water_ramp.outputs["Color"], water_bsdf.inputs["Base Color"])
        water_material.node_tree.links.new(water_noise.outputs["Fac"], water_bump.inputs["Height"])
        water_material.node_tree.links.new(water_bump.outputs["Normal"], water_bsdf.inputs["Normal"])
        bpy.ops.mesh.primitive_plane_add(size=span * 5.0, location=(center.x, center.y, water_z))
        water = bpy.context.object
        water.name = "TerrainForge sea level"
        water.data.materials.append(water_material)

        tree_trunk = make_material("Scale tree trunk", (0.16, 0.075, 0.028, 1.0), roughness=0.9)
        tree_canopy_a = make_material("Scale tree canopy sun", (0.055, 0.42, 0.12, 1.0), roughness=0.78)
        tree_canopy_b = make_material("Scale tree canopy shade", (0.025, 0.25, 0.08, 1.0), roughness=0.82)
        rng = np.random.default_rng(7821)
        tree_count = 0
        attempts = 0
        height_span = max_corner.z - min_corner.z
        while tree_count < 220 and attempts < 2600:
            attempts += 1
            x = float(rng.uniform(min_corner.x + span * 0.035, max_corner.x - span * 0.035))
            y = float(rng.uniform(min_corner.y + span * 0.035, max_corner.y - span * 0.035))
            z = terrain_height_across(terrain_objects, x, y, max_corner.z + span)
            if z is None or z < water_z + height_span * 0.025 or z > water_z + height_span * 0.58:
                continue
            scale = float(rng.uniform(0.72, 1.34))
            bpy.ops.mesh.primitive_cylinder_add(vertices=7, radius=4.8 * scale, depth=36.0 * scale, location=(x, y, z + 18.0 * scale))
            trunk = bpy.context.object
            trunk.data.materials.append(tree_trunk)
            bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=1, radius=1.0, location=(x, y, z + 48.0 * scale))
            canopy = bpy.context.object
            canopy.scale = (25.0 * scale, 25.0 * scale, 17.0 * scale)
            canopy.data.materials.append(tree_canopy_a if tree_count % 3 else tree_canopy_b)
            tree_count += 1

        candidates: list[tuple[float, float, float, float]] = []
        for x_factor in np.linspace(0.2, 0.8, 19):
            for y_factor in np.linspace(0.2, 0.8, 19):
                x = float(min_corner.x + (max_corner.x - min_corner.x) * x_factor)
                y = float(min_corner.y + (max_corner.y - min_corner.y) * y_factor)
                center_height = terrain_height_across(terrain_objects, x, y, max_corner.z + span)
                if center_height is None or not (water_z + height_span * 0.035 < center_height < water_z + height_span * 0.2):
                    continue
                neighbors = [
                    terrain_height_across(terrain_objects, x + dx, y + dy, max_corner.z + span)
                    for dx, dy in ((-70.0, 0.0), (70.0, 0.0), (0.0, -70.0), (0.0, 70.0))
                ]
                if any(height is None for height in neighbors):
                    continue
                relief = max([center_height, *neighbors]) - min([center_height, *neighbors])
                candidates.append((relief, x, y, center_height))
        if not candidates:
            raise RuntimeError("Could not find a stable archipelago outpost site")
        _relief, outpost_x, outpost_y, outpost_z = min(candidates, key=lambda item: item[0])

        outpost_dark = make_material("Outpost graphite", (0.025, 0.045, 0.06, 1.0), roughness=0.32, metallic=0.55)
        outpost_white = make_material("Outpost ceramic", (0.62, 0.68, 0.68, 1.0), roughness=0.38, metallic=0.18)
        outpost_gold = make_material(
            "Outpost signal",
            (0.95, 0.42, 0.055, 1.0),
            roughness=0.2,
            metallic=0.2,
            emission=(1.0, 0.16, 0.015, 1.0),
            emission_strength=3.5,
        )
        add_beveled_cube("Expedition landing pad", (outpost_x, outpost_y, outpost_z + 8.0), (280.0, 190.0, 16.0), outpost_dark, bevel=9.0)
        add_beveled_cube("Expedition lab", (outpost_x - 58.0, outpost_y + 12.0, outpost_z + 52.0), (105.0, 92.0, 88.0), outpost_white, bevel=13.0)
        add_beveled_cube("Expedition utility", (outpost_x + 62.0, outpost_y + 16.0, outpost_z + 37.0), (82.0, 76.0, 58.0), outpost_dark, bevel=10.0)
        bpy.ops.mesh.primitive_cylinder_add(vertices=12, radius=13.0, depth=155.0, location=(outpost_x + 92.0, outpost_y - 40.0, outpost_z + 85.0))
        beacon = bpy.context.object
        beacon.data.materials.append(outpost_dark)
        bpy.ops.mesh.primitive_uv_sphere_add(segments=16, ring_count=8, radius=23.0, location=(outpost_x + 92.0, outpost_y - 40.0, outpost_z + 170.0))
        beacon_light = bpy.context.object
        beacon_light.data.materials.append(outpost_gold)
        for stripe_x in (-92.0, -46.0, 0.0, 46.0, 92.0):
            add_beveled_cube(
                f"Landing guide {stripe_x:+.0f}",
                (outpost_x + stripe_x, outpost_y - 66.0, outpost_z + 17.0),
                (24.0, 7.0, 2.5),
                outpost_gold,
                bevel=1.2,
            )

        route_points = []
        for amount in np.linspace(-0.45, 0.52, 13):
            x = outpost_x + float(amount) * 620.0
            y = outpost_y + math.sin(float(amount) * math.pi * 1.4) * 95.0 - 120.0
            z = terrain_height_across(terrain_objects, x, y, max_corner.z + span)
            if z is not None and z > water_z + 2.0:
                route_points.append((x, y, z + 4.0))
        if len(route_points) >= 4:
            route_material = make_material("Expedition route", (0.42, 0.18, 0.055, 1.0), roughness=0.95)
            add_curve_tube("Expedition access route", route_points, route_material, radius=10.0)

        bpy.ops.object.light_add(type="SUN", location=(center.x, center.y, max_corner.z + span))
        sun = bpy.context.object
        sun.name = "Archipelago daylight"
        sun.rotation_euler = (math.radians(28.0), math.radians(-18.0), math.radians(-132.0))
        sun.data.energy = 3.4
        sun.data.angle = math.radians(8.0)
        sun.data.color = (1.0, 0.78, 0.58)
        add_area_light(
            "Archipelago sky fill",
            (center.x - span * 0.5, center.y - span * 0.42, max_corner.z + span * 0.72),
            tuple(center),
            energy=4800,
            size=span * 0.56,
            color=(0.38, 0.66, 1.0),
        )
        add_camera(
            (outpost_x + span * 0.64, outpost_y - span * 0.82, water_z + span * 0.46),
            (outpost_x - span * 0.08, outpost_y + span * 0.08, water_z + height_span * 0.13),
            lens=56.0,
        )
        bpy.context.scene.camera.data.clip_end = span * 6.0
        render_still(render_name)

        print(
            "TERRAINFORGE_CAPTURE_OK",
            f"version={terrainforge.bl_info['version']}",
            f"preset={preset_id}",
            f"tiles={len(terrain_objects)}",
            f"verts={sum(len(obj.data.vertices) for obj in terrain_objects)}",
            f"faces={sum(len(obj.data.polygons) for obj in terrain_objects)}",
            f"trees={tree_count}",
            f"outpost_relief={_relief:.2f}",
            f"manifest={manifests[0]}",
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
    setup_render(background=(0.004, 0.005, 0.008, 1.0), samples=72)

    alloy = make_material("Armor graphite", (0.035, 0.055, 0.07, 1.0), roughness=0.34, metallic=0.76)
    inset = make_material("Inset alloy", (0.012, 0.018, 0.025, 1.0), roughness=0.46, metallic=0.82)
    cap = make_material(
        "Fresh cut surface",
        (0.88, 0.035, 0.025, 1.0),
        roughness=0.22,
        metallic=0.38,
        emission=(1.0, 0.015, 0.005, 1.0),
        emission_strength=1.7,
    )
    white_signal = make_material(
        "White machine signal",
        (0.72, 0.82, 0.88, 1.0),
        roughness=0.2,
        metallic=0.45,
        emission=(0.45, 0.72, 1.0, 1.0),
        emission_strength=1.8,
    )
    laser_material = make_material(
        "Laser line",
        (1.0, 0.012, 0.025, 1.0),
        roughness=0.1,
        emission=(1.0, 0.0, 0.018, 1.0),
        emission_strength=8.0,
    )
    floor_material = make_material("Machine floor", (0.012, 0.016, 0.022, 1.0), roughness=0.7, metallic=0.2)

    source = add_beveled_cube("LaserSaw Reactor Housing", (0.0, 0.0, 1.35), (4.8, 2.65, 1.85), alloy, bevel=0.22)
    bpy.context.view_layer.objects.active = source
    bpy.ops.object.select_all(action="DESELECT")
    source.select_set(True)
    bpy.ops.object.mode_set(mode="SCULPT")
    plane_normal = Vector((1.0, 0.24, 0.08)).normalized()
    result = laser_saw.split_context_meshes_filled(
        bpy.context,
        Vector((0.0, 0.0, 1.35)),
        plane_normal,
        cut_selected_objects=True,
        tolerance=0.0001,
        cut_width=0.19,
    )
    bpy.ops.object.mode_set(mode="OBJECT")
    split_objects = [obj for item in result for obj in item.get("created", []) if obj.name in bpy.data.objects]
    split_stats = [item for item in result if item.get("status") == "split"]
    if len(split_objects) != 2 or len(split_stats) != 1:
        raise RuntimeError(f"Laser Saw did not create one capped split: {result}")
    cap_faces_reported = int(split_stats[0]["half_a"]["cap_faces"]) + int(split_stats[0]["half_b"]["cap_faces"])
    if cap_faces_reported < 2 or split_stats[0].get("partial_caps"):
        raise RuntimeError(f"Laser Saw cap generation was incomplete: {split_stats[0]}")

    assigned_caps = 0
    half_offsets = {}
    for obj in split_objects:
        obj.data.materials.clear()
        obj.data.materials.append(alloy)
        obj.data.materials.append(cap)
        for polygon in obj.data.polygons:
            world_center = obj.matrix_world @ polygon.center
            plane_distance = abs((world_center - Vector((0.0, 0.0, 1.35))).dot(plane_normal))
            if abs(polygon.normal.normalized().dot(plane_normal)) > 0.965 and plane_distance < 0.16:
                polygon.material_index = 1
                assigned_caps += 1
        _min, _max, center = object_bounds([obj])
        side = 1.0 if (center - Vector((0.0, 0.0, 1.35))).dot(plane_normal) >= 0.0 else -1.0
        offset = plane_normal * side * 0.33
        obj.location += offset
        obj.rotation_euler.z += side * math.radians(2.4)
        half_offsets[side] = offset
    if assigned_caps < 2:
        raise RuntimeError("Laser Saw generated caps but the showcase could not identify their faces")

    detail_positions = [
        (-1.55, -1.37, 1.42, 0.78, 0.10, 0.62, inset),
        (1.58, -1.37, 1.42, 0.78, 0.10, 0.62, inset),
        (-1.55, -1.44, 1.42, 0.18, 0.06, 0.34, white_signal),
        (1.58, -1.44, 1.42, 0.18, 0.06, 0.34, white_signal),
    ]
    for index, (x, y, z, sx, sy, sz, material) in enumerate(detail_positions):
        side = 1.0 if Vector((x, y, z)).dot(plane_normal) >= 0.0 else -1.0
        offset = half_offsets.get(side, Vector())
        add_beveled_cube(
            f"Housing detail {index}",
            (x + offset.x, y + offset.y, z + offset.z),
            (sx, sy, sz),
            material,
            bevel=0.035,
        )
    for x in (-1.92, -1.25, 1.25, 1.92):
        side = 1.0 if x >= 0.0 else -1.0
        offset = half_offsets.get(side, Vector())
        bpy.ops.mesh.primitive_cylinder_add(vertices=24, radius=0.09, depth=0.09, location=(x + offset.x, -1.44 + offset.y, 0.92 + offset.z), rotation=(math.radians(90), 0.0, 0.0))
        bolt = bpy.context.object
        bolt.data.materials.append(inset)

    line_direction = Vector((-plane_normal.y, plane_normal.x, 0.0)).normalized()
    line_angle = math.atan2(line_direction.y, line_direction.x)
    add_beveled_cube(
        "Active laser cut path",
        (0.0, -1.62, 2.34),
        (3.5, 0.038, 0.038),
        laser_material,
        bevel=0.012,
        rotation=(0.0, 0.0, line_angle),
    )
    for index, distance in enumerate(np.linspace(-1.3, 1.3, 13)):
        point = line_direction * float(distance)
        bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=1, radius=0.028 + (index % 3) * 0.012, location=(point.x, -1.67 + point.y, 2.27 + math.sin(index * 1.7) * 0.12))
        spark = bpy.context.object
        spark.data.materials.append(laser_material)

    add_floor(28.0, floor_material, z=0.0)
    add_area_light("Machine white key", (-5.0, -5.2, 7.0), (0.0, 0.0, 1.35), energy=1300, size=5.0, color=(0.86, 0.93, 1.0))
    add_area_light("Machine red rim", (4.8, 1.0, 4.2), (0.0, 0.0, 1.35), energy=1250, size=3.2, color=(1.0, 0.015, 0.025))
    add_area_light("Machine blue fill", (-3.0, 2.8, 2.2), (0.0, 0.0, 1.3), energy=650, size=2.5, color=(0.18, 0.48, 1.0))
    add_camera((7.0, -9.0, 5.2), (0.0, 0.0, 1.35), lens=62.0)
    render_still("laser-saw-production-cut-proof.webp")
    print(
        "LASER_SAW_CAPTURE_OK",
        f"version={laser_saw.bl_info['version']}",
        f"created={len(split_objects)}",
        f"reported_caps={cap_faces_reported}",
        f"visible_cap_faces={assigned_caps}",
        f"cut_width={split_stats[0]['cut_width']}",
    )


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
