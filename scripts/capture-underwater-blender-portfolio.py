from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

import bpy


DEFAULT_CAMERAS = (
    "UW_Showcase_Camera",
    "UW_Gameplay_Camera",
    "UW_Outer_Biomes_Camera",
    "UW_Basalt_Trench_Camera",
)


def parse_args() -> argparse.Namespace:
    argv = sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else []
    parser = argparse.ArgumentParser(description="Render portfolio stills from the loaded underwater Blender scene.")
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument("--width", type=int, default=1600)
    parser.add_argument("--height", type=int, default=900)
    parser.add_argument("--samples", type=int, default=64)
    parser.add_argument("--camera", action="append", dest="cameras")
    return parser.parse_args(argv)


def slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def configure_scene(width: int, height: int, samples: int) -> bpy.types.Scene:
    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE_NEXT"
    scene.render.resolution_x = width
    scene.render.resolution_y = height
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.image_settings.color_depth = "8"
    scene.render.film_transparent = False
    scene.render.use_file_extension = True

    if hasattr(scene, "eevee") and hasattr(scene.eevee, "taa_render_samples"):
        scene.eevee.taa_render_samples = samples

    try:
        scene.view_settings.look = "AgX - Medium High Contrast"
    except TypeError:
        pass

    return scene


def main() -> None:
    args = parse_args()
    output = args.output.resolve()
    output.mkdir(parents=True, exist_ok=True)
    scene = configure_scene(args.width, args.height, args.samples)
    camera_names = tuple(args.cameras or DEFAULT_CAMERAS)
    rendered = []

    for camera_name in camera_names:
        camera = bpy.data.objects.get(camera_name)
        if camera is None or camera.type != "CAMERA":
            print(f"PORTFOLIO_CAPTURE_SKIP camera={camera_name!r}")
            continue

        scene.camera = camera
        target = output / f"underwater-{slugify(camera_name)}.png"
        scene.render.filepath = str(target)
        bpy.ops.render.render(write_still=True)
        rendered.append(target)
        print(f"PORTFOLIO_CAPTURE_OK camera={camera_name!r} path={target}")

    if not rendered:
        raise RuntimeError("No requested cameras were available to render")

    print(f"PORTFOLIO_CAPTURE_DONE count={len(rendered)} output={output}")


if __name__ == "__main__":
    main()
