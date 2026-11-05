(() => {
  const palettes = [
    { id: 'classic', name: 'Cookly Classic', description: 'Clean and timeless', swatches: ['#111111', '#F6F6F4', '#E87544'] },
    { id: 'winter-whisper', name: 'Winter Whisper', description: 'Icy blue, calm and crisp', swatches: ['#547487', '#D6E8EF', '#F4F7F9'] },
    { id: 'prismatic', name: 'Prismatic', description: 'A little color, a lot of joy', swatches: ['#7143A4', '#DAA5F1', '#FFD56F'] },
    { id: 'steel-emulsion', name: 'Steel Emulsion', description: 'Soft graphite and silver', swatches: ['#53677A', '#AAB8C6', '#E9EEF2'] },
    { id: 'azure-scale', name: 'Azure Scale', description: 'Deep blue with a bright edge', swatches: ['#176B9A', '#55B8E8', '#DDF3FC'] },
    { id: 'cotton-candy', name: 'Cotton Candy', description: 'Blush pink and lilac', swatches: ['#B84F85', '#F1A9C9', '#D9C3F3'] },
    { id: 'matcha-garden', name: 'Matcha Garden', description: 'Fresh greens and warm cream', swatches: ['#527B4C', '#A9C98A', '#F3F4E9'] },
    { id: 'golden-hour', name: 'Golden Hour', description: 'Honey, peach, and dusk', swatches: ['#A65C35', '#E8A15C', '#F8E7C8'] }
  ];
  const validPalettes = new Set(palettes.map(palette => palette.id));
  const root = document.documentElement;
  let selectedPalette = root.dataset.palette || 'classic';
  if (!validPalettes.has(selectedPalette)) selectedPalette = 'classic';
  root.dataset.palette = selectedPalette;

  const paletteMarkup = () => `
    <section class="palette-picker" aria-labelledby="paletteTitle">
      <div class="palette-picker-heading">
        <h3 id="paletteTitle">Color themes</h3>
        <p>Find a mood that feels like you.</p>
      </div>
      <div class="palette-preview" id="palettePreview" data-palette="${selectedPalette}" data-theme="${root.dataset.theme || 'dark'}">
        <div class="palette-preview-bar"><strong>Cookly</strong><span class="palette-preview-menu" aria-hidden="true">•••</span></div>
        <div class="palette-preview-meal">
          <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80" alt="">
          <div class="palette-preview-shade"></div>
          <div class="palette-preview-copy">
            <span>TONIGHT'S INSPIRATION</span>
            <strong>Calamansi Cream Pasta</strong>
            <small>20 min <i></i> Easy</small>
          </div>
        </div>
        <div class="palette-preview-footer"><span>A little inspiration for dinner</span><b>View recipe <span aria-hidden="true">→</span></b></div>
      </div>
      <p class="palette-preview-caption" id="palettePreviewCaption" aria-live="polite"></p>
      <div class="palette-grid" role="radiogroup" aria-label="Choose a color theme">
        ${palettes.map(palette => `
          <label class="palette-choice">
            <input type="radio" name="colorTheme" value="${palette.id}" ${selectedPalette === palette.id ? 'checked' : ''}>
            <span class="palette-choice-card">
              <span class="palette-swatches" aria-hidden="true">${palette.swatches.map(color => `<i style="--swatch:${color}"></i>`).join('')}</span>
              <strong>${palette.name}</strong>
              <small>${palette.description}</small>
            </span>
          </label>
        `).join('')}
      </div>
    </section>`;

  function syncPreview() {
    const preview = document.querySelector('#palettePreview');
    const caption = document.querySelector('#palettePreviewCaption');
    if (!preview) return;
    preview.dataset.palette = selectedPalette;
    preview.dataset.theme = root.dataset.theme || 'dark';
    const palette = palettes.find(item => item.id === selectedPalette);
    if (caption && palette) caption.textContent = `Preview · ${palette.name}`;
  }

  function renderPalettePicker() {
    const profileCard = document.querySelector('.profile-card');
    if (!profileCard || profileCard.querySelector('.palette-picker')) return;
    const profileLinks = profileCard.querySelector('.profile-links');
    if (profileLinks) profileLinks.insertAdjacentHTML('beforebegin', paletteMarkup());
    else profileCard.insertAdjacentHTML('beforeend', paletteMarkup());
    syncPreview();
  }

  function selectPalette(choice) {
    if (!validPalettes.has(choice)) return;
    selectedPalette = choice;
    root.dataset.palette = choice;
    syncPreview();
    try {
      localStorage.setItem('cookly-palette', choice);
    } catch {
      if (typeof toast === 'function') toast('Theme will last for this visit; storage is unavailable.');
    }
  }

  document.addEventListener('change', event => {
    if (event.target instanceof HTMLInputElement && event.target.name === 'colorTheme') {
      selectPalette(event.target.value);
    }
  });

  const main = document.querySelector('#main');
  if (main) {
    new MutationObserver(renderPalettePicker).observe(main, { childList: true, subtree: true });
    renderPalettePicker();
  }
  new MutationObserver(syncPreview).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
})();
