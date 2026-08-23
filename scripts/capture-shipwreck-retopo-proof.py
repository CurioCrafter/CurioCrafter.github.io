"""Render a portfolio-safe retopology proof from the Shipwreck coral delivery.

The source blend is opened read-only by Blender. This script isolates one final
runtime mesh, builds a neutral comparison scene in memory, and writes only the
render requested after ``--output``.
"""

from __future__ import annotations

import argparse
import math
import sys
from pathlib import Path

import bpy
from mathutils import Matrix, Vector


TARGET_OBJECT = "Elkhorn_Stage_2_model_Retopology"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", required=True)
    return parser.parse_args(sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else [])


def srgb(hex_value: str) -> tuple[float, float, float, float]:
    value = hex_value.lstrip("#")
    channels = [int(value[index : index + 2], 16) / 255 for index in (0, 2, 4)]

    def linear(channel: float) -> float:
        return channel / 12.92 if channel <= 0.04045 else ((channel + 0.055) / 1.055) ** 2.4

    return (*[linear(channel) for channel in channels], 1.0)


def make_material(name: str, color: str, *, metallic: float = 0.0, roughness: float = 0.5, emission: float = 0.0):
    material = bpy.data.materials.new(name)
    material.diffuse_color = srgb(color)
    material.use_nodes = True
    principled = material.node_tree.nodes.get("Principled BSDF")
    principled.inputs["Base Color"].default_value = srgb(color)
    principled.inputs["Metallic"].default_value = metallic
    principled.inputs["Roughness"].default_value = roughness
    if emission:
        principled.inputs["Emission Color"].default_value = srgb(color)
        principled.inputs["Emission Strength"].default_value = emission
    return material


def look_at(obj: bpy.types.Object, target: Vector) -> None:
    obj.rotation_euler = (target - obj.location).to_track_quat("-Z", "Y").to_euler()


def add_area(name: str, location: tuple[float, float, float], color: str, energy: float, size: float, target: Vector):
    data = bpy.data.lights.new(name, "AREA")
    data.energy = energy
    data.shape = "DISK"
    data.size = size
    data.color = srgb(color)[:3]
    light = bpy.data.objects.new(name, data)
    bpy.context.scene.collection.objects.link(light)
    light.location = location
    look_at(light, target)
    return light


def normalized_mesh(source: bpy.types.Object) -> bpy.types.Mesh:
    mesh = source.data.copy()
    mesh.transform(source.matrix_world)
    points = [vertex.co for vertex in mesh.vertices]
    min_corner = Vector((min(p.x for p in points), min(p.y for p in points), min(p.z for p in points)))
    max_corner = Vector((max(p.x for p in points), max(p.y for p in points), max(p.z for p in points)))
    center = (min_corner + max_corner) * 0.5
    mesh.transform(Matrix.Translation(Vector((-center.x, -center.y, -min_corner.z))))
    return mesh


def add_mesh_object(name: str, mesh: bpy.types.Mesh, location: tuple[float, float, float], material=None):
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.scene.collection.objects.link(obj)
    obj.location = location
    if material is not None:
        obj.data.materials.clear()
        obj.data.materials.append(material)
    return obj


def add_floor(material):
    bpy.ops.mesh.primitive_plane_add(size=18, location=(0, 0.7, -0.03))
    floor = bpy.context.object
    floor.name = "Technical studio floor"
    floor.data.materials.append(material)
    return floor


def main() -> None:
    args = parse_args()
    output = Path(args.output).resolve()
    output.parent.mkdir(parents=True, exist_ok=True)

    source = bpy.data.objects.get(TARGET_OBJECT)
    if source is None or source.type != "MESH":
        raise RuntimeError(f"Required mesh not found: {TARGET_OBJECT}")
    if len(source.data.polygons) != 1043:
        raise RuntimeError(f"Unexpected topology for {TARGET_OBJECT}: {len(source.data.polygons)} faces")

    source_material = source.data.materials[0] if source.data.materials else None
    if source_material is None:
        raise RuntimeError(f"No baked material found on {TARGET_OBJECT}")

    mesh = normalized_mesh(source)
    for obj in list(bpy.data.objects):
        bpy.data.objects.remove(obj, do_unlink=True)

    floor_material = make_material("Studio graphite", "#091017", metallic=0.12, roughness=0.42)
    topology_material = make_material("Topology surface", "#14232B", metallic=0.08, roughness=0.36)
    wire_material = make_material("Topology wire", "#F2C96B", metallic=0.25, roughness=0.28, emission=0.3)

    left = add_mesh_object("Baked PBR retopology", mesh.copy(), (-1.85, 0, 0), source_material)
    right = add_mesh_object("Quad topology surface", mesh.copy(), (1.85, 0, 0), topology_material)
    wire = add_mesh_object("Quad topology wire", mesh.copy(), (1.85, 0, 0), wire_material)

    for obj in (left, right, wire):
        obj.rotation_euler[2] = math.radians(-13)

    wire.scale = (1.004, 1.004, 1.004)
    wireframe = wire.modifiers.new("Visible quad topology", "WIREFRAME")
    wireframe.thickness = 0.009
    wireframe.use_even_offset = True
    wireframe.use_replace = True

    add_floor(floor_material)

    target = Vector((0, 0.2, 0.85))
    camera_data = bpy.data.cameras.new("Portfolio camera")
    camera = bpy.data.objects.new("Portfolio camera", camera_data)
    bpy.context.scene.collection.objects.link(camera)
    camera.location = (0, -8.7, 4.35)
    camera_data.lens = 58
    look_at(camera, target)
    bpy.context.scene.camera = camera

    add_area("Key", (-4.2, -4.0, 6.4), "#FFF2DC", 1250, 4.2, target)
    add_area("Fill", (4.7, -2.0, 3.8), "#75D7E6", 900, 3.6, target)
    add_area("Rim", (0.8, 4.0, 5.8), "#F2C96B", 1150, 3.2, target)
    add_area("Front softbox", (0, -5.0, 1.6), "#DCECF2", 500, 5.0, target)

    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE_NEXT"
    scene.render.resolution_x = 1800
    scene.render.resolution_y = 1000
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = "WEBP"
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.image_settings.quality = 92
    scene.render.film_transparent = False
    scene.render.filepath = str(output)
    scene.render.image_settings.color_depth = "8"
    scene.render.resolution_percentage = 100
    scene.render.use_file_extension = True

    scene.world.color = srgb("#04070B")[:3]
    scene.view_settings.look = "AgX - Medium High Contrast"

    bpy.ops.render.render(write_still=True)
    if not output.exists() or output.stat().st_size < 100_000:
        raise RuntimeError(f"Render was not written correctly: {output}")

    print(
        "SHIPWRECK_RETOPO_CAPTURE_OK "
        f"object={TARGET_OBJECT} vertices={len(mesh.vertices)} faces={len(mesh.polygons)} output={output}"
    )


if __name__ == "__main__":
    main()
