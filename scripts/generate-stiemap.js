import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://velemegna.org';

// Define your routes
const routes = [
  '/',
  '/about',
  '/hospital',
  '/college',
  '/works/farms',
  '/works/leprosy-care',
  '/works/vision-centers',
  '/works/childrens-home',
  '/gallery',
  '/appointment',
  '/newsletter',
  '/donate',
  '/contact'
];

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

// Write sitemap to public directory
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');