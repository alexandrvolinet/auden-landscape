import { writeFileSync } from 'fs';
import { resolve } from 'path';

const SITE_URL = process.env.SITE_URL;

const routes = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/terms', changefreq: 'monthly', priority: '0.3' },
  { path: '/projects/sandstone-residential-atrium', changefreq: 'monthly', priority: '0.7' },
  { path: '/projects/ochre-meadows-civic-park', changefreq: 'monthly', priority: '0.7' },
  { path: '/projects/serene-canopy-deck-terrace', changefreq: 'monthly', priority: '0.7' },
  { path: '/projects/monolithic-stone-courtyard', changefreq: 'monthly', priority: '0.7' },
];

const today = new Date().toISOString().split('T')[0];

const urls = routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outPath = resolve(process.cwd(), 'dist', 'sitemap.xml');
writeFileSync(outPath, sitemap, 'utf-8');
console.log(`Sitemap generated: ${outPath}`);
