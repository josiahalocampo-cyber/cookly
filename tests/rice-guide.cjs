const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');
const assert = require('node:assert/strict');

const source = readFileSync(require.resolve('../dist/rice-options.js'), 'utf8');

// Simulate delivery of subtree mutations, including writes of identical text.
// A browser never gets back to painting if this queue keeps refilling.
function checkGuide(script, riceType) {
  let pending = false;
  let observer;
  let text = 'Add White rice to the pan.';
  const paragraph = {
    get textContent() { return text; },
    set textContent(value) { text = value; pending = true; }
  };
  const detail = {
    querySelector() { return null; },
    querySelectorAll() { return [paragraph]; }
  };
  const recipe = { id: 'butter-steak', ingredients: [{ name: 'White rice' }] };
  const document = {
    querySelector(selector) { return selector === '#detailContent' ? detail : null; },
    querySelectorAll() { return []; },
    addEventListener() {}
  };
  runInNewContext(script, {
    document,
    window: { CooklyApp: {
      current: recipe, guide: true, box: [],
      purchases: [{ id: recipe.id, riceSource: 'cookly', riceType }]
    } },
    MutationObserver: class {
      constructor(callback) { this.callback = callback; }
      observe(target) { if (target === detail) observer = this.callback; }
    }
  });
  let deliveries = 0;
  while (pending && deliveries < 10) {
    pending = false;
    observer();
    deliveries++;
  }
  assert.equal(pending, false, 'Guide mutations must settle so the page stays responsive');
  assert.equal(text, `Add ${riceType} to the pan.`);
}

for (const rice of ['White rice', 'Brown rice']) checkGuide(source, rice);
const original = source.replace(
  'if (element.textContent !== text) element.textContent = text;',
  'element.textContent = text;'
);
assert.throws(() => checkGuide(original, 'Brown rice'), /Guide mutations must settle/);
console.log('PASS: default and customized rice guides settle; original freeze reproduced.');
