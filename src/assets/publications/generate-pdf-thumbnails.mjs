// scripts/generate-pdf-thumbnails.mjs
//
// Pre-renders page 1 of every PDF in src/assets/publications into a PNG
// in src/assets/publication-thumbs, at build time. Publications.jsx then
// just imports these as plain images — no PDF is ever parsed in the
// browser, so the thumbnail grid loads as fast as any other image grid.
//
// Run whenever a PDF is added, removed, or replaced:
//   npm run generate:thumbnails
//
// Dependency (pure JS, no GraphicsMagick/Ghostscript required):
//   npm install --save-dev pdf-to-img

import { pdf } from "pdf-to-img";
import { readdir, mkdir, writeFile, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.join(__dirname, "..", "src", "assets", "publications");
const OUT_DIR = path.join(__dirname, "..", "src", "assets", "publication-thumbs");

// 2x the ~220px the largest thumbnail is displayed at, for retina screens.
const THUMB_WIDTH_PX = 440;
// Standard PDF page width in points (US Letter / A4 are close enough here).
const PAGE_WIDTH_PT = 612;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const entries = await readdir(SRC_DIR);
  const pdfFiles = entries.filter((f) => f.toLowerCase().endsWith(".pdf"));

  if (pdfFiles.length === 0) {
    console.log(`No PDFs found in ${SRC_DIR}`);
    return;
  }

  let generated = 0;
  let skipped = 0;

  for (const file of pdfFiles) {
    const inputPath = path.join(SRC_DIR, file);
    const outputName = `${path.parse(file).name}.png`;
    const outputPath = path.join(OUT_DIR, outputName);

    // Skip regenerating if the thumbnail is already newer than the source PDF.
    if (await isUpToDate(inputPath, outputPath)) {
      skipped += 1;
      continue;
    }

    console.log(`Rendering page 1: ${file}`);

    try {
      const document = await pdf(inputPath, {
        scale: THUMB_WIDTH_PX / PAGE_WIDTH_PT,
      });

      let firstPage;
      for await (const page of document) {
        firstPage = page;
        break; // only page 1 is needed for the thumbnail
      }

      if (!firstPage) {
        console.warn(`  ! "${file}" has no pages — skipped`);
        continue;
      }

      await writeFile(outputPath, firstPage);
      generated += 1;
      console.log(`  -> ${path.relative(process.cwd(), outputPath)}`);
    } catch (err) {
      console.error(`  ! Failed to render "${file}": ${err.message}`);
    }
  }

  console.log(
    `\nDone. Generated ${generated}, skipped ${skipped} (already up to date).`
  );
}

async function isUpToDate(inputPath, outputPath) {
  try {
    const [inStat, outStat] = await Promise.all([stat(inputPath), stat(outputPath)]);
    return outStat.mtimeMs >= inStat.mtimeMs;
  } catch {
    return false; // output doesn't exist yet
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
