import { spawnSync } from "node:child_process";
import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceIndex = join(root, "index.source.html");
const rootIndex = join(root, "index.html");
const distDir = join(root, "dist");
const rootAssets = join(root, "assets");
const viteBin = join(root, "node_modules", "vite", "bin", "vite.js");

await writeFile(rootIndex, await readFile(sourceIndex, "utf8"));

const build = spawnSync(process.execPath, [viteBin, "build"], {
  cwd: root,
  shell: false,
  stdio: "inherit",
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

await rm(rootAssets, { force: true, recursive: true });

for (const entry of await readdir(distDir, { withFileTypes: true })) {
  await cp(join(distDir, entry.name), join(root, entry.name), {
    force: true,
    recursive: entry.isDirectory(),
  });
}

await writeFile(join(root, ".nojekyll"), "");
await mkdir(rootAssets, { recursive: true });
