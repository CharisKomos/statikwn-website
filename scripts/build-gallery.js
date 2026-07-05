#!/usr/bin/env node
/*
 * build-gallery.js
 * ----------------
 * Scans the /gallery folder and writes gallery.json, which the website reads
 * to build the portfolio. You normally never run this by hand — the GitHub
 * Action (.github/workflows/build-gallery.yml) runs it automatically on every
 * push. To try it locally: `node scripts/build-gallery.js`.
 *
 * Folder convention (see gallery/README.txt):
 *   gallery/
 *     1 - Apartment Buildings/     <- folder name = English group title
 *         title.el.txt             <- Greek group title (optional)
 *         cover.jpg                <- group card image (optional; else 1st photo)
 *         somephoto.jpg            <- any .jpg/.jpeg/.png/.webp/.gif/.avif
 *         somephoto.txt            <- caption:  EL: ...   /   EN: ...
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const GALLERY_DIR = path.join(ROOT, 'gallery');
const OUT_FILE = path.join(ROOT, 'gallery.json');

const IMAGE_RE = /\.(jpe?g|png|webp|gif|avif)$/i;
const COVER_RE = /^cover\.(jpe?g|png|webp|gif|avif)$/i;

// Turn a path (with spaces / non-ascii) into a browser-safe URL.
function urlPath(...segments) {
  return segments.map(encodeURIComponent).join('/');
}

// "1 - Apartment Buildings" -> { order: 1, title: "Apartment Buildings" }
function parseFolderName(name) {
  const m = name.match(/^\s*(\d+)\s*[-.)]\s*(.*)$/);
  if (m) return { order: parseInt(m[1], 10), title: m[2].trim() };
  return { order: Number.MAX_SAFE_INTEGER, title: name.trim() };
}

// Read "EL: ..." / "EN: ..." lines from a caption file.
function parseCaption(text) {
  const desc = { el: '', en: '' };
  if (!text) return desc;
  let matched = false;
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*(EL|EN)\s*:\s*(.*)$/i);
    if (m) { desc[m[1].toLowerCase()] = m[2].trim(); matched = true; }
  }
  // No EL:/EN: markers? Use the whole file for both languages.
  if (!matched) { const t = text.trim(); desc.el = t; desc.en = t; }
  return desc;
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'group';
}

function readTxt(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return ''; }
}

function build() {
  if (!fs.existsSync(GALLERY_DIR)) {
    console.error('No gallery/ folder found at', GALLERY_DIR);
    fs.writeFileSync(OUT_FILE, '[]\n');
    return;
  }

  const folders = fs.readdirSync(GALLERY_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .map(name => ({ name, ...parseFolderName(name) }))
    .sort((a, b) => (a.order - b.order) || a.title.localeCompare(b.title));

  const groups = [];

  for (const folder of folders) {
    const dir = path.join(GALLERY_DIR, folder.name);
    const entries = fs.readdirSync(dir);

    const coverFile = entries.find(f => COVER_RE.test(f));
    const photos = entries
      .filter(f => IMAGE_RE.test(f) && !COVER_RE.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    if (photos.length === 0 && !coverFile) continue; // skip empty groups

    const titleEl = readTxt(path.join(dir, 'title.el.txt')).trim();

    const images = photos.map(file => {
      const base = file.replace(IMAGE_RE, '');
      const caption = readTxt(path.join(dir, base + '.txt'));
      return { src: urlPath('gallery', folder.name, file), desc: parseCaption(caption) };
    });

    const cover = coverFile
      ? urlPath('gallery', folder.name, coverFile)
      : images[0].src;

    groups.push({
      id: slugify(folder.title),
      title: { el: titleEl || folder.title, en: folder.title },
      cover,
      images
    });
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(groups, null, 2) + '\n');
  const total = groups.reduce((n, g) => n + g.images.length, 0);
  console.log(`gallery.json written: ${groups.length} group(s), ${total} photo(s).`);
}

build();
