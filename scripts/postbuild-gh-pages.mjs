import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve(process.cwd(), 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// 1. Copy index.html to 404.html for unknown SPA paths on GitHub Pages
fs.writeFileSync(path.join(distDir, '404.html'), indexHtml, 'utf-8');

// 2. Pre-populate static route directories so GitHub Pages serves HTTP 200 OK on refresh & crawls
const routes = [
  'research',
  'publications',
  'team',
  'news',
  'd3mat',
  'opportunities',
  'contact',
  'privacy',
  'terms',
];

for (const route of routes) {
  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml, 'utf-8');
}

// 3. Create .nojekyll so GitHub Pages serves all assets untouched
fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf-8');

// 4. Generate sitemap.xml & robots.txt for production SEO
const siteOrigin = (process.env.SITE_URL || 'https://sebind.github.io/laser').replace(/\/$/, '');
const allPaths = ['', ...routes.map((r) => `/${r}`)];
const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths
  .map(
    (p) => `  <url>
    <loc>${siteOrigin}${p}/</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf-8');
fs.writeFileSync(path.join(distDir, 'robots.txt'), robots, 'utf-8');

console.log(`GitHub Pages post-build complete: generated 404.html, .nojekyll, sitemap.xml, robots.txt, and ${routes.length} static route entry points.`);
