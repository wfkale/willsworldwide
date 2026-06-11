#!/usr/bin/env node
/**
 * Download logistics photos as WebP into public/images/logistics.
 * Usage: npm run sync-assets [-- --force]
 */
import { mkdir, writeFile, unlink } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "images", "logistics");
const force = process.argv.includes("--force");

/** @type {{ file: string; photoId: string }[]} */
const MANIFEST = [
  { file: "terminal-coordination.webp", photoId: "1759272548449-7b689a81c8fb" },
  { file: "warehouse-forklift.webp", photoId: "1645736315000-6f788915923b" },
  { file: "highway-delivery.webp", photoId: "1774116196662-a9e1e4fa1612" },
  { file: "pricing-calculator.webp", photoId: "1626266061368-46a8f578ddd6" },
  { file: "regional-fleet.webp", photoId: "1766785368863-f2188a8c8b32" },
  { file: "client-handshake.webp", photoId: "1549923746-c502d488b3ea" },
  { file: "transit-truck.webp", photoId: "1601584115197-04ecc0da31d7" },
  { file: "cargo-ship.webp", photoId: "1578575437130-527eed3abbec" },
  { file: "container-port.webp", photoId: "1494412519320-aa613dfb7738" },
  { file: "warehouse-operations.webp", photoId: "1586528116311-ad8dd3c8310d" },
  { file: "distribution-warehouse.webp", photoId: "1553413077-190dd305871c" },
  { file: "road-freight-truck.webp", photoId: "1519003722824-194d4455a60c" },
  { file: "clearing-forwarding.webp", photoId: "1600880292203-757bb62b4baf" },
  { file: "supply-chain.webp", photoId: "1581091226825-a6a2a5aee158" },
];

const SIZES = [
  { suffix: "", width: 960, quality: 78 },
  { suffix: "-sm", width: 640, quality: 72 },
];

function sourceUrl(photoId, width, quality) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=${quality}&fm=webp`;
}

async function download(file, photoId, width, quality) {
  const dest = join(OUT_DIR, file);
  const res = await fetch(sourceUrl(photoId, width, quality));
  if (!res.ok) {
    throw new Error(`Failed ${file}: HTTP ${res.status}`);
  }

  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`saved ${file} (${(buf.length / 1024).toFixed(0)} KB)`);
}

await mkdir(OUT_DIR, { recursive: true });

for (const { file: baseFile, photoId } of MANIFEST) {
  const stem = baseFile.replace(/\.webp$/, "");

  for (const { suffix, width, quality } of SIZES) {
    const file = `${stem}${suffix}.webp`;
    const dest = join(OUT_DIR, file);

    if (force) {
      try {
        await unlink(dest);
      } catch {
        /* missing */
      }
    }

    await download(file, photoId, width, quality);
  }
}

console.log(`\nDone — ${MANIFEST.length * SIZES.length} assets in public/images/logistics/`);
