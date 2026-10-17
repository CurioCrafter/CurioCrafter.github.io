# CurioCrafter.github.io

Portfolio of Andrew Rainsberger, game developer and 3D technical artist: https://curiocrafter.github.io/

Plain static site, no build step. GitHub Pages serves the repository root from `main`.

- `index.html`, `style.css`, `main.js`: the whole page.
- `media/`: web-encoded video loops (H.264, muted) and WebP stills.
- `fonts/`: self-hosted Big Shoulders Display, Atkinson Hyperlegible, Azeret Mono (OFL).
- `play/sector-war.html`: playable single-file build of Sector War.

Preview locally:

```bash
python -m http.server 4177
```

To add a project, copy one `<section class="stop">` block in `index.html`, give it the next `data-depth`, and add a matching entry to the gauge and dive-plan lists.
