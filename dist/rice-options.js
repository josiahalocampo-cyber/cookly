(() => {
  const app = window.CooklyApp;
  if (!app) throw new Error('Cookly app must load before rice options.');

  const riceChoices = [
    'Jasmine rice',
    'White rice',
    'Brown rice',
    'Basmati rice',
    'Japanese short-grain rice',
    'Korean short-grain rice',
    'Sticky rice'
  ];
  let activeRecipeId = '';
  let source = '';
  let riceType = '';

  function riceIngredient(recipe) {
    return recipe?.ingredients.find(item => /\brice\b/i.test(item.name) && !/\bnoodles?\b/i.test(item.name));
  }

  function defaultRice(recipe) {
    return riceIngredient(recipe)?.name || 'White rice';
  }

  function savedChoice(recipe) {
    return app.box.find(item => item.id === recipe.id) || app.purchases.find(item => item.id === recipe.id);
  }

  function syncRecipe() {
    const recipe = app.current;
    if (!recipe || recipe.id === activeRecipeId) return;
    activeRecipeId = recipe.id;
    const existing = riceIngredient(recipe) && savedChoice(recipe);
    source = existing?.riceSource === 'own' ? 'own' : 'cookly';
    riceType = existing?.riceType || defaultRice(recipe);
    if (!riceChoices.includes(riceType)) riceType = defaultRice(recipe);
  }

  function selectedRice() {
    syncRecipe();
    const recipe = app.current;
    if (!riceIngredient(recipe)) return {};
    return source ? { riceSource: source, riceType } : null;
  }

  function formatAmount(item) {
    return app.formatQuantity(item.amount * app.servings / 2, item.unit);
  }

  function ricePickerMarkup(recipe) {
    const amount = riceIngredient(recipe);
    const amountText = formatAmount(amount);
    return `<fieldset class="rice-choice">
      <legend>How would you like your rice?</legend>
      <p>Choose who supplies it, then pick the rice variety that suits your meal.</p>
      <div class="rice-source-options">
        <label><input type="radio" name="riceSource" value="cookly" ${source === 'cookly' ? 'checked' : ''}><span><strong>Cookly rice</strong><small>We’ll include it in your box</small></span></label>
        <label><input type="radio" name="riceSource" value="own" ${source === 'own' ? 'checked' : ''}><span><strong>My own rice</strong><small>I’ll provide it at home</small></span></label>
      </div>
      <label class="rice-type-label">Rice variety
        <select name="riceType" aria-label="Choose your rice variety">${riceChoices.map(choice => `<option value="${choice}" ${riceType === choice ? 'selected' : ''}>${choice}</option>`).join('')}</select>
      </label>
      <p class="rice-choice-note" aria-live="polite"></p>
      <span class="rice-choice-amount" data-amount="${amountText}"></span>
    </fieldset>`;
  }

  function setRiceNote(picker, amountText) {
    const note = picker.querySelector('.rice-choice-note');
    let message;
    if (!source) {
      message = 'Choose a rice supplier before adding this dish.';
    } else if (source === 'own') {
      message = `Bring ${amountText} of your own ${riceType}; it won’t be included in the box.`;
    } else {
      message = `Cookly will include ${amountText} of ${riceType} in your box.`;
    }
    if (note.textContent !== message) note.textContent = message;
  }

  function updateIngredients(detail, recipe) {
    const list = detail.querySelector('.ingredients');
    if (!list) return;
    const signature = `${recipe.id}|${app.servings}|${source}|${riceType}`;
    if (list.dataset.riceSignature === signature) return;
    const selected = riceIngredient(recipe);
    list.innerHTML = recipe.ingredients.map(item => {
      if (item === selected) {
        if (source === 'own') return '';
        if (!source) return '<li class="rice-pending">Choose who supplies the rice above.</li>';
        return `<li>${formatAmount(item)} ${riceType}</li>`;
      }
      return `<li>${formatAmount(item)} ${item.name}</li>`;
    }).filter(Boolean).join('');
    list.dataset.riceSignature = signature;
  }

  function updateGuide(detail, recipe) {
    if (!app.guide) return;
    const originalRice = defaultRice(recipe);
    detail.querySelectorAll('.step-instructions p,.step-ingredients li span,.guide-box-reference li span').forEach(element => {
      const text = element.textContent.replace(new RegExp(originalRice.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), riceType);
      // This runs inside a subtree observer: unchanged writes trigger another callback.
      if (element.textContent !== text) element.textContent = text;
    });
    const guideNote = detail.querySelector('.rice-guide-note');
    if (source === 'own' && !guideNote) {
      const paceNote = detail.querySelector('.guide-pace-note');
      if (paceNote) paceNote.insertAdjacentHTML('afterend', '<p class="rice-guide-note"></p>');
    }
    const guideMessage = `Use your own ${riceType}; it was not included in your meal kit.`;
    if (source === 'own' && guideNote && guideNote.textContent !== guideMessage) guideNote.textContent = guideMessage;
    if (source !== 'own') guideNote?.remove();
  }

  function renderRicePicker() {
    syncRecipe();
    const recipe = app.current;
    const detail = document.querySelector('#detailContent');
    if (!recipe || !detail || app.mealView) return;
    const rice = riceIngredient(recipe);
    if (!rice) return;

    let picker = detail.querySelector('.rice-choice');
    if (!picker && !app.guide) {
      const addButton = detail.querySelector('[data-action="add"]');
      if (addButton) {
        addButton.insertAdjacentHTML('beforebegin', ricePickerMarkup(recipe));
        picker = detail.querySelector('.rice-choice');
      } else {
        const ingredientsTitle = [...detail.querySelectorAll('h2')].find(item => item.textContent === 'Inside your Cookly box');
        if (ingredientsTitle) {
          ingredientsTitle.insertAdjacentHTML('beforebegin', ricePickerMarkup(recipe));
          picker = detail.querySelector('.rice-choice');
        }
      }
    }
    if (picker) {
      const sourceRadio = picker.querySelector(`input[name="riceSource"][value="${source}"]`);
      if (sourceRadio) sourceRadio.checked = true;
      const typeSelect = picker.querySelector('select[name="riceType"]');
      if (typeSelect) typeSelect.value = riceType;
      setRiceNote(picker, formatAmount(rice));
    }

    updateIngredients(detail, recipe);
    updateGuide(detail, recipe);
  }

  function describeChoice(item, recipe) {
    if (!riceIngredient(recipe)) return '';
    const type = riceChoices.includes(item.riceType) ? item.riceType : defaultRice(recipe);
    return item.riceSource === 'own' ? `Your own ${type} · not included` : `Cookly includes ${type}`;
  }

  function decorateOrders() {
    document.querySelectorAll('#main .box-item').forEach((element, index) => {
      const item = app.box[index];
      const recipe = item && app.recipes.find(candidate => candidate.id === item.id);
      if (!item || !recipe) return;
      const container = element.querySelector(':scope > div');
      if (!container) return;
      let note = container.querySelector('.rice-box-note');
      const text = describeChoice(item, recipe);
      if (!text) {
        note?.remove();
        return;
      }
      if (!note) {
        note = document.createElement('p');
        note.className = 'rice-box-note';
        container.append(note);
      }
      if (note.textContent !== text) note.textContent = text;
    });

    document.querySelectorAll('#checkoutContent .checkout-kit').forEach((element, index) => {
      const item = app.checkoutItems[index];
      const recipe = item && app.recipes.find(candidate => candidate.id === item.id);
      const container = element.querySelector('span');
      if (!item || !recipe || !container) return;
      let note = container.querySelector('.rice-box-note');
      const text = describeChoice(item, recipe);
      if (!text) {
        note?.remove();
        return;
      }
      if (!note) {
        note = document.createElement('small');
        note.className = 'rice-box-note';
        container.append(note);
      }
      if (note.textContent !== text) note.textContent = text;
    });
  }

  function handleRiceAdd(event) {
    const button = event.target.closest('[data-action="add"]');
    if (!button) return;
    const recipe = app.current;
    if (!riceIngredient(recipe)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const choice = selectedRice();
    if (!choice) {
      app.toast('Choose Cookly rice or your own rice before adding this meal.');
      return;
    }
    app.addMealToBox({ id: recipe.id, servings: app.servings, ...choice });
  }

  document.addEventListener('click', handleRiceAdd, true);
  document.addEventListener('change', event => {
    if (event.target.name === 'riceSource') source = event.target.value;
    else if (event.target.name === 'riceType') riceType = event.target.value;
    else return;
    renderRicePicker();
  });

  const detail = document.querySelector('#detailContent');
  if (detail) new MutationObserver(renderRicePicker).observe(detail, { childList: true, subtree: true });
  const main = document.querySelector('#main');
  const checkout = document.querySelector('#checkoutContent');
  const orderObserver = new MutationObserver(decorateOrders);
  if (main) orderObserver.observe(main, { childList: true, subtree: true });
  if (checkout) orderObserver.observe(checkout, { childList: true, subtree: true });
  renderRicePicker();
  decorateOrders();
})();
