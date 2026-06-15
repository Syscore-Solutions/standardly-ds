import { readFileSync } from 'fs';
import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

register(StyleDictionary);

function loadJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

// Deep merge — preserves both leaf and group when keys are shared
function mergeTokens(a, b) {
  const out = { ...a };
  for (const [k, v] of Object.entries(b)) {
    if (!(k in out)) { out[k] = v; }
    else if (typeof out[k] === 'object' && typeof v === 'object') { out[k] = mergeTokens(out[k], v); }
    else { out[k] = v; }
  }
  return out;
}

// Walk token tree and rewrite $value strings
function rewriteRefs(obj, fn) {
  if (typeof obj !== 'object' || obj === null) return obj;
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (k === '$value' && typeof v === 'string') {
      out[k] = fn(v);
    } else {
      out[k] = rewriteRefs(v, fn);
    }
  }
  return out;
}

const primitiveFiles = [
  'tokens/raw-colors/mode-1.json',
  'tokens/alpha/base.json',
  'tokens/brand-colors/base.json',
  'tokens/chart-colors/light.json',
  'tokens/typography/base.json',
  'tokens/spacing-absolute/base.json',
  'tokens/border-radii-absolute/base.json',
];

function buildTokens(extraFiles = []) {
  const rawColors = loadJson('tokens/raw-colors/mode-1.json');

  // Remove white/black leaves from raw-colors — alpha/base.json defines them as groups.
  // DTCG can't have a key be both a leaf token ($value) and a parent group, so we
  // strip the leaves and let alpha's groups win. References {white} and {black} are
  // rewritten below to {white.alpha-100} and {black.alpha-100} (same hex values).
  const { white: _w, black: _b, ...rawColorsClean } = rawColors;

  const files = [rawColorsClean, ...['tokens/alpha/base.json', 'tokens/brand-colors/base.json',
    'tokens/chart-colors/light.json', 'tokens/typography/base.json',
    'tokens/spacing-absolute/base.json', 'tokens/border-radii-absolute/base.json',
    ...extraFiles].map(loadJson)];

  const merged = files.reduce(mergeTokens, {});

  // Rewrite bare {white} and {black} refs to their alpha-100 equivalents
  return rewriteRefs(merged, (v) =>
    v.replace(/\{white\}/g, '{white.alpha-100}').replace(/\{black\}/g, '{black.alpha-100}')
  );
}

async function buildPrimitives() {
  const sd = new StyleDictionary({
    usesDtcg: true,
    log: { warnings: 'disabled' },
    tokens: buildTokens(),
    preprocessors: ['tokens-studio'],
    platforms: {
      css: {
        transformGroup: 'tokens-studio',
        buildPath: 'src/styles/',
        files: [{
          destination: 'primitives.css',
          format: 'css/variables',
          options: { selector: ':root', outputReferences: false },
        }],
      },
    },
  });
  await sd.buildAllPlatforms();
}

async function buildTheme({ extraFile, outputFile, selector }) {
  const extraTokenKeys = Object.keys(loadJson(extraFile));
  const sd = new StyleDictionary({
    usesDtcg: true,
    log: { warnings: 'disabled' },
    tokens: buildTokens([extraFile]),
    preprocessors: ['tokens-studio'],
    platforms: {
      css: {
        transformGroup: 'tokens-studio',
        buildPath: 'src/styles/',
        files: [{
          destination: outputFile,
          format: 'css/variables',
          filter: (token) => extraTokenKeys.includes(token.path[0]),
          options: { selector, outputReferences: false },
        }],
      },
    },
  });
  await sd.buildAllPlatforms();
}

async function build() {
  await buildPrimitives();
  await buildTheme({
    extraFile: 'tokens/semantic-colors/light.json',
    outputFile: 'semantic-light.css',
    selector: ':root',
  });
  await buildTheme({
    extraFile: 'tokens/semantic-colors/dark.json',
    outputFile: 'semantic-dark.css',
    selector: '[data-theme="dark"]',
  });
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
