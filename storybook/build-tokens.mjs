#!/usr/bin/env node
/**
 * build-tokens.mjs — tokens.json (repo root) → src/tokens/primitives.css
 *
 * Reads the W3C DTCG primitive token set and emits CSS custom properties on :root.
 * Strips Figma $extensions (com.figma.*). The semantic remap for direction o1
 * lives in src/tokens/semantic.css (hand-authored, mirrors semantic→primitive rule).
 *
 * Transform rules:
 *   spacing / sizing / borderRadius / borderWidth / fontSizes → px
 *   lineHeights: "125%" → 1.25
 *   letterSpacing: "5%" → 0.05em
 *   opacity: "40%" → 0.4
 *   fontFamilies: appends rendering fallback stack
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const TOKENS_PATH = join(__dirname, '..', 'tokens.json')
const OUT_PATH    = join(__dirname, 'src', 'tokens', 'primitives.css')

const FONT_FALLBACKS = {
  heading: '"Geist Sans", system-ui, sans-serif',
  body:    '"Geist Sans", system-ui, sans-serif',
}

const PX_TYPES = new Set(['spacing', 'sizing', 'borderRadius', 'borderWidth', 'fontSizes'])

function toKebab(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function transform(type, value, path) {
  const v = String(value).trim()
  if (PX_TYPES.has(type))
    return /^-?\d*\.?\d+$/.test(v) ? (v === '0' ? '0' : `${v}px`) : v
  if (type === 'lineHeights' && v.endsWith('%')) return String(parseFloat(v) / 100)
  if (type === 'letterSpacing' && v.endsWith('%')) {
    const em = parseFloat(v) / 100
    return em === 0 ? '0' : `${em}em`
  }
  if (type === 'opacity' && v.endsWith('%')) return String(parseFloat(v) / 100)
  if (type === 'fontWeights') return v
  if (type === 'fontFamilies') {
    const fallback = FONT_FALLBACKS[path[path.length - 1]] ?? 'system-ui, sans-serif'
    return `"${v}", ${fallback}`
  }
  return v
}

function walk(node, path, out) {
  if (node === null || typeof node !== 'object') return
  if ('$value' in node) {
    out.push([`--${path.map(toKebab).join('-')}`, transform(node.$type, node.$value, path)])
    return
  }
  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith('$')) continue
    walk(child, [...path, key], out)
  }
}

const tokens    = JSON.parse(readFileSync(TOKENS_PATH, 'utf8'))
const primitive = tokens.primitive
if (!primitive) throw new Error('tokens.json missing `primitive` set')

const lines = [
  '/* primitives.css — GENERATED from ../tokens.json by build-tokens.mjs.',
  '   Do not edit manually. Run: npm run build:tokens */',
  '',
  ':root {',
]

for (const [cat, subtree] of Object.entries(primitive)) {
  if (cat.startsWith('$')) continue
  if (cat === 'color') {
    for (const [ramp, rampTree] of Object.entries(subtree)) {
      if (ramp.startsWith('$')) continue
      const vars = []
      walk(rampTree, ['color', ramp], vars)
      lines.push(`  /* ── ${ramp} ── */`)
      for (const [n, v] of vars) lines.push(`  ${n}: ${v};`)
      lines.push('')
    }
    continue
  }
  const vars = []
  walk(subtree, [cat], vars)
  lines.push(`  /* ── ${toKebab(cat)} ── */`)
  for (const [n, v] of vars) lines.push(`  ${n}: ${v};`)
  lines.push('')
}

lines.push('}')
mkdirSync(dirname(OUT_PATH), { recursive: true })
writeFileSync(OUT_PATH, lines.join('\n') + '\n')
const count = lines.filter(l => l.trimStart().startsWith('--')).length
console.log(`✓ primitives.css — ${count} variables → ${OUT_PATH}`)
