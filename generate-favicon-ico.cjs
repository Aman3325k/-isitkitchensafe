// generate-favicon-ico.cjs
// Builds a proper multi-resolution ICO (16x16 + 32x32) from favicon.svg using sharp.
// ICO format reference: https://en.wikipedia.org/wiki/ICO_(file_format)

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SVG_PATH = path.join(__dirname, 'public', 'favicon.svg');
const ICO_PATH = path.join(__dirname, 'public', 'favicon.ico');

const SIZES = [16, 32];

async function renderSize(svgBuffer, size) {
  return sharp(svgBuffer)
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer();
}

function buildIco(pngBuffers) {
  const NUM_IMAGES = pngBuffers.length;
  // ICO header: 6 bytes
  // Directory entries: 16 bytes each
  // Then image data
  const HEADER_SIZE = 6;
  const DIR_ENTRY_SIZE = 16;
  const headerAndDir = HEADER_SIZE + (DIR_ENTRY_SIZE * NUM_IMAGES);

  // Calculate offsets
  const offsets = [];
  let offset = headerAndDir;
  for (const buf of pngBuffers) {
    offsets.push(offset);
    offset += buf.length;
  }

  const totalSize = offset;
  const icoBuffer = Buffer.alloc(totalSize);

  // ICO header (6 bytes)
  icoBuffer.writeUInt16LE(0, 0);           // Reserved, must be 0
  icoBuffer.writeUInt16LE(1, 2);           // Type: 1 = ICO
  icoBuffer.writeUInt16LE(NUM_IMAGES, 4);  // Number of images

  // Directory entries (16 bytes each)
  for (let i = 0; i < NUM_IMAGES; i++) {
    const size = SIZES[i];
    const buf = pngBuffers[i];
    const dirOffset = HEADER_SIZE + (i * DIR_ENTRY_SIZE);

    icoBuffer.writeUInt8(size === 256 ? 0 : size, dirOffset + 0);  // Width (0 means 256)
    icoBuffer.writeUInt8(size === 256 ? 0 : size, dirOffset + 1);  // Height
    icoBuffer.writeUInt8(0, dirOffset + 2);   // Color count (0 = no palette)
    icoBuffer.writeUInt8(0, dirOffset + 3);   // Reserved
    icoBuffer.writeUInt16LE(1, dirOffset + 4); // Color planes
    icoBuffer.writeUInt16LE(32, dirOffset + 6); // Bits per pixel
    icoBuffer.writeUInt32LE(buf.length, dirOffset + 8);    // Size of image data
    icoBuffer.writeUInt32LE(offsets[i], dirOffset + 12);   // Offset of image data
  }

  // Copy PNG data
  let dataOffset = headerAndDir;
  for (const buf of pngBuffers) {
    buf.copy(icoBuffer, dataOffset);
    dataOffset += buf.length;
  }

  return icoBuffer;
}

async function main() {
  const svgBuffer = fs.readFileSync(SVG_PATH);

  console.log(`Source SVG: ${SVG_PATH} (${svgBuffer.length} bytes)`);

  const pngBuffers = [];
  for (const size of SIZES) {
    const png = await renderSize(svgBuffer, size);
    console.log(`  Rendered ${size}x${size}: ${png.length} bytes`);
    pngBuffers.push(png);
  }

  const icoBuffer = buildIco(pngBuffers);
  fs.writeFileSync(ICO_PATH, icoBuffer);

  console.log(`\nWrote: ${ICO_PATH}`);
  console.log(`Total ICO size: ${icoBuffer.length} bytes`);

  // Verify magic bytes
  const magic = icoBuffer.slice(0, 4);
  const isValidIco = magic[0] === 0 && magic[1] === 0 && magic[2] === 1 && magic[3] === 0;
  console.log(`ICO magic bytes: ${[...magic].map(b => b.toString(16).padStart(2,'0')).join(' ')} => ${isValidIco ? 'VALID ICO' : 'INVALID!'}`);
  console.log(`Embedded image count: ${SIZES.length} (${SIZES.join('x'+'x, ')}x each)`);
}

main().catch(err => { console.error(err); process.exit(1); });
