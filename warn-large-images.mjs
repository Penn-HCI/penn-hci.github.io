import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const LARGE_IMAGE_BYTES = 2 * 1024 * 1024;
const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".avif",
]);

function findLargeImages(root) {
  const large = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
        const { size } = fs.statSync(full);
        if (size > LARGE_IMAGE_BYTES) {
          large.push({ file: path.relative(root, full), size });
        }
      }
    }
  };
  walk(root);
  return large.sort((a, b) => b.size - a.size);
}

export default function warnLargeImages() {
  return {
    name: "warn-large-images",
    hooks: {
      "astro:build:done": ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const large = findLargeImages(root);
        if (large.length === 0) return;

        logger.warn(
          `${large.length} image(s) over 2MB in the build output — consider resizing/compressing:`,
        );
        for (const { file, size } of large) {
          logger.warn(`  ${file} — ${(size / (1024 * 1024)).toFixed(2)}MB`);
        }
      },
    },
  };
}
