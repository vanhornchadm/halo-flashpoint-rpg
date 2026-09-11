import fs from 'node:fs'
import path from 'node:path'
const root='content'
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.name.startsWith('.')||e.name==='private'?[]:e.isDirectory()?walk(path.join(dir,e.name)):e.name.endsWith('.md')?[path.join(dir,e.name)]:[])}
const files=walk(root), slugs=new Set(files.map(f=>f.slice(root.length+1,-3)))
const errors=[]
for(const file of files){
 const text=fs.readFileSync(file,'utf8')
 if(!text.startsWith('---\n')||!/^title:/m.test(text))errors.push(`${file}: missing frontmatter`)
 for(const m of text.matchAll(/!?\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g))if(!slugs.has(m[1]))errors.push(`${file}: unresolved link ${m[1]}`)
 if(/:::writing|codex-file-citation|\/Users\/|Scene Order token|Reserve tokens/.test(text))errors.push(`${file}: export residue or superseded rule`)
 if(file.includes('/species/flood-')) {
  const row = text.split(/\r?\n/).findIndex(line => line.startsWith('| STR |'))
  const wil = text.split(/\r?\n/)[row + 2]?.split('|')[5]?.trim()
  if(!['—', 'Auto'].includes(wil) || !text.includes('keywords/collective-will')) errors.push(`${file}: missing automatic WIL rule`)
 }
}
for(const [dir,count] of [['species',18],['special-orders',28],['talents',23],['disadvantages',2]]){
 const actual=files.filter(f=>f.startsWith(`content/${dir}/`)&&!f.endsWith('/index.md')).length
 if(actual!==count)errors.push(`${dir}: expected ${count}, got ${actual}`)
}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`Validated ${files.length} notes: frontmatter, links, required profiles, and superseded-rule exclusions.`)
