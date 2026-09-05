const fs = require('fs');
const path = require('path');

const srcRoot = path.resolve(__dirname, '../../websites/anima-terra.com');
const pagesDir = path.resolve(__dirname, '../pages');

function walk(dir){
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for(const ent of list){
    const full = path.join(dir, ent.name);
    if(ent.isDirectory()){
      results = results.concat(walk(full));
    } else if(ent.isFile() && full.toLowerCase().endsWith('.html')){
      results.push(full);
    }
  }
  return results;
}

function safeFileName(name){
  return name.replace(/\s+/g,'-').replace(/[^a-zA-Z0-9-_/\.]/g, '');
}

function ensureDir(dir){
  if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function extract(html, tag){
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = html.match(re);
  return m ? m[1].trim() : '';
}

function extractMeta(html, name){
  const re = new RegExp(`<meta[^>]*name=["']${name}["'][^>]*content=["']([\\s\\S]*?)["'][^>]*>`, 'i');
  const m = html.match(re);
  return m ? m[1].trim() : '';
}

function transformAssetPaths(html){
  // Change wp-content and uploads paths to /assets/wp-content/...
  html = html.replace(/(src|href)=(["']?)\/?(wp-content\/[^"' >\s]+)/gi, (m, attr, quote, pth) => {
    const q = quote || '"';
    return `${attr}=${q}/assets/${pth}${q}`;
  });
  html = html.replace(/(src|href)=(["']?)(\.\.\/)?(wp-content\/[^"' >\s]+)/gi, (m, attr, quote, dot, pth) => {
    const q = quote || '"';
    const fixed = pth.replace(/\.\.\//g,'');
    return `${attr}=${q}/assets/${fixed}${q}`;
  });
  // i0.wp.com images: keep absolute but ensure https
  html = html.replace(/https?:\/\/i0\.wp\.com/gi, 'https://i0.wp.com');
  return html;
}

function escapeTemplate(s){
  return s.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

console.log('Scanning HTML files under', srcRoot);
const files = walk(srcRoot);
console.log('Found', files.length, 'HTML files');

for(const file of files){
  const rel = path.relative(srcRoot, file).replace(/\\\\/g,'/');
  let route = rel.replace(/\.html$/i, '');
  if(route.toLowerCase() === 'index'){
    console.log('skipping root index (already created):', rel);
    continue;
  }
  const outRoute = safeFileName(route);
  const parts = outRoute.split('/');
  const base = parts.slice(0, -1).join('/');
  const name = parts[parts.length-1] || 'index';
  const outDir = path.join(pagesDir, base);
  ensureDir(outDir);
  const outFile = path.join(outDir, name + '.js');

  const raw = fs.readFileSync(file, 'utf8');
  const title = extract(raw, 'title') || '';
  const description = extractMeta(raw, 'description') || '';
  let body = '';
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if(bodyMatch) body = bodyMatch[1]; else {
    const htmlMatch = raw.match(/<html[^>]*>([\s\S]*)<\/html>/i);
    body = htmlMatch ? htmlMatch[1] : raw;
  }

  // remove scripts
  body = body.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  // remove inline event handlers (onclick, onload...) - basic
  body = body.replace(/ on[a-z]+=(\"|\')[^\"']*(\"|\')/gi, '');

  body = transformAssetPaths(body);

  const safeBody = escapeTemplate(body);

  const canonical = '/' + outRoute.replace(/index$/,'');
  const lines = [];
  lines.push("import Head from 'next/head';");
  lines.push('export default function Page(){');
  lines.push('  return (');
  lines.push('    <>');
  lines.push('      <Head>');
  lines.push(`        <title>${escapeTemplate(title || 'Anima Terra')}</title>`);
  if(description){
    lines.push(`        <meta name="description" content="${escapeTemplate(description)}" />`);
  }
  lines.push(`        <link rel="canonical" href="${canonical}" />`);
  lines.push('      </Head>');
  lines.push(`      <main dangerouslySetInnerHTML={{ __html: \`${safeBody}\` }} />`);
  lines.push('    </>');
  lines.push('  )');
  lines.push('}');

  const component = lines.join('\n');
  fs.writeFileSync(outFile, component, 'utf8');
  console.log('Generated', path.relative(pagesDir, outFile));
}

console.log('Finished generating pages');
