#!/usr/bin/env node
/**
 * build-tokens.mjs — tokens.json (W3C DTCG, repo root) → src/shared/primitives.css
 *
 * Emits CSS custom properties for the PRIMITIVE set only. Each direction's
 * semantic.css is hand-authored against these variables (mirroring the
 * semantic→primitive-only rule in tokens.json).
 *
 * Transform rules (documented per architecture.md §6.2/§6.3):
 *   - `$extensions` (com.figma.*) are stripped — Figma metadata, no W3C meaning.
 *   - Token path → var name: dots become hyphens, camelCase becomes kebab-case
 *     (`fontSize.md` → `--font-size-md`).
 *   - spacing / sizing / borderRadius / borderWidth / fontSizes: unitless
 *     numbers get `px`.
 *   - lineHeights: percentages become unitless ratios ("125%" → 1.25).
 *   - letterSpacing: percentages become em ("5%" → 0.05em; "0%" → 0).
 *   - opacity: percentages become ratios ("40%" → 0.4).
 *   - fontWeights: numeric.
 *   - fontFamilies: value kept verbatim, plus a RENDERING FALLBACK stack
 *     (the one place non-token values are appended — platform fallbacks only,
 *     see FONT_FALLBACKS below).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const TOKENS_PATH = join(__dirname, '..', '..', 'tokens.json')
const OUT_PATH = join(__dirname, '..', 'src', 'shared', 'primitives.css')

// Rendering fallbacks only — the token value stays first in the stack.
// "Geist Sans" is the family name registered by @fontsource/geist-sans.
const FONT_FALLBACKS = {
  heading: '"Geist Sans", system-ui, sans-serif',
  body: '"Geist Sans", system-ui, sans-serif',
}

const PX_TYPES = new Set(['spacing', 'sizing', 'borderRadius', 'borderWidth', 'fontSizes'])

function toKebab(segment) {
  return segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function transform(type, value, path) {
  const v = String(value).trim()
  if (PX_TYPES.has(type)) {
    return /^-?\d*\.?\d+$/.test(v) ? (v === '0' ? '0' : `${v}px`) : v
  }
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
    const name = `--${path.map(toKebab).join('-')}`
    out.push([name, transform(node.$type, node.$value, path)])
    return
  }
  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith('$')) continue // strips $extensions, $type stragglers
    walk(child, [...path, key], out)
  }
}

const tokens = JSON.parse(readFileSync(TOKENS_PATH, 'utf8'))
const primitive = tokens.primitive
if (!primitive) throw new Error('tokens.json has no `primitive` set')

const lines = [
  '/* primitives.css — GENERATED from ../../tokens.json by scripts/build-tokens.mjs.',
  '   DO NOT EDIT MANUALLY. Regenerate: npm run build:tokens */',
  '',
  ':root {',
]

for (const [category, subtree] of Object.entries(primitive)) {
  if (category.startsWith('$')) continue
  if (category === 'color') {
    // one section per ramp, matching architecture.md §6.2
    for (const [ramp, rampTree] of Object.entries(subtree)) {
      if (ramp.startsWith('$')) continue
      const vars = []
      walk(rampTree, ['color', ramp], vars)
      lines.push(`  /* ─── Primitive: Color — ${ramp[0].toUpperCase()}${ramp.slice(1)} ─── */`)
      for (const [name, value] of vars) lines.push(`  ${name}: ${value};`)
      lines.push('')
    }
    continue
  }
  const vars = []
  walk(subtree, [category], vars)
  lines.push(`  /* ─── Primitive: ${toKebab(category)} ─── */`)
  for (const [name, value] of vars) lines.push(`  ${name}: ${value};`)
  lines.push('')
}

lines.push('}')
mkdirSync(dirname(OUT_PATH), { recursive: true })
writeFileSync(OUT_PATH, lines.join('\n') + '\n')
console.log(`✓ primitives.css — ${lines.filter((l) => l.trimStart().startsWith('--')).length} variables → ${OUT_PATH}`)
