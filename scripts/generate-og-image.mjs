import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '../src/assets/images/default.png');

const accent = '#7c3aed';
const accentLight = '#a78bfa';

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="628" viewBox="0 0 1200 628" xmlns="http://www.w3.org/2000/svg">

  <!-- Background -->
  <rect width="1200" height="628" fill="#0f1117"/>

  <!-- Subtle dot grid -->
  <defs>
    <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#ffffff07"/>
    </pattern>
  </defs>
  <rect width="1200" height="628" fill="url(#dots)"/>

  <!-- Left accent bar -->
  <rect x="0" y="0" width="6" height="628" fill="${accent}"/>

  <!-- Decorative concentric circles (right) -->
  <circle cx="1080" cy="360" r="280" fill="none" stroke="${accent}0a" stroke-width="1"/>
  <circle cx="1080" cy="360" r="210" fill="none" stroke="${accent}0d" stroke-width="1"/>
  <circle cx="1080" cy="360" r="140" fill="none" stroke="${accent}12" stroke-width="1"/>
  <circle cx="1080" cy="360" r="70"  fill="none" stroke="${accent}18" stroke-width="1"/>

  <!-- Name -->
  <text x="80" y="232"
    font-family="Arial, Helvetica, sans-serif"
    font-size="78"
    font-weight="700"
    fill="#ffffff"
    letter-spacing="-1.5">Jonathan Root</text>

  <!-- Title -->
  <text x="80" y="296"
    font-family="Arial, Helvetica, sans-serif"
    font-size="32"
    font-weight="400"
    fill="${accentLight}">Learning Experience Designer</text>

  <!-- Accent rule -->
  <rect x="80" y="328" width="100" height="3" rx="1.5" fill="${accent}"/>

  <!-- Descriptor line -->
  <text x="80" y="382"
    font-family="Arial, Helvetica, sans-serif"
    font-size="21"
    fill="#6b7280">Instructional Design · eLearning Development · Customer Education</text>

  <!-- Pills -->
  <rect x="80"  y="424" width="168" height="40" rx="20" fill="${accent}22" stroke="${accent}44" stroke-width="1"/>
  <text x="164" y="449" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="${accentLight}" text-anchor="middle">8+ Years Experience</text>

  <rect x="264" y="424" width="100" height="40" rx="20" fill="${accent}22" stroke="${accent}44" stroke-width="1"/>
  <text x="314" y="449" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="${accentLight}" text-anchor="middle">M.S. LDT</text>

  <rect x="380" y="424" width="168" height="40" rx="20" fill="${accent}22" stroke="${accent}44" stroke-width="1"/>
  <text x="464" y="449" font-family="Arial, Helvetica, sans-serif" font-size="17" fill="${accentLight}" text-anchor="middle">14+ Organizations</text>

  <!-- URL -->
  <text x="80" y="570"
    font-family="Arial, Helvetica, sans-serif"
    font-size="17"
    fill="#4b5563">design-portfolio-jaroot32.vercel.app</text>

</svg>`;

await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log(`✓ OG image written to ${outPath}`);
