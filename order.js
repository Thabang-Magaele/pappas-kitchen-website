/* ========================================
   PAPPA'S KITCHEN — order.js
   Full ordering system — real menu data
   ======================================== */

'use strict';

/* ----------------------------------------
   MENU DATA
   sizes: { S, M, L } for sized items
   price: number for flat-price items
---------------------------------------- */
const MENU = [

  /* ===== PIZZAS (MEAT) ===== */
  {
    id: 'piz-regina', cat: 'pizza', emoji: '🍕',
    name: 'Regina',
    desc: 'Alfredo ham with fresh mushrooms.',
    sizes: { S: 68, M: 89, L: 120 },
    tags: ['Ham', 'Mushrooms']
  },
  {
    id: 'piz-hawaiian', cat: 'pizza', emoji: '🍕',
    name: 'Hawaiian',
    desc: 'Alfredo ham with slices of pineapple.',
    sizes: { S: 68, M: 89, L: 120 },
    tags: ['Ham', 'Pineapple']
  },
  {
    id: 'piz-quattro', cat: 'pizza', emoji: '🍕',
    name: 'Quattro Stagioni',
    desc: 'Alfredo ham with fresh mushrooms, asparagus and olives.',
    sizes: { S: 89, M: 120, L: 165 },
    tags: ['Ham', 'Mushrooms', 'Olives']
  },
  {
    id: 'piz-trentino', cat: 'pizza', emoji: '🍕',
    name: 'Trentino',
    desc: 'Crispy bacon with avocado and fresh mushrooms.',
    sizes: { S: 99, M: 147, L: 195 },
    tags: ['Bacon', 'Avocado']
  },
  {
    id: 'piz-caribbean', cat: 'pizza', emoji: '🍕',
    name: 'Caribbean',
    desc: 'Crispy bacon with pineapple and banana slices.',
    sizes: { S: 77, M: 106, L: 154 },
    tags: ['Bacon', 'Pineapple']
  },
  {
    id: 'piz-pepperoni', cat: 'pizza', emoji: '🍕',
    name: 'Pepperoni',
    desc: 'Italian style pepperoni with green peppers and fresh tomatoes.',
    sizes: { S: 72, M: 104, L: 139 },
    tags: ['Pepperoni', 'Spicy']
  },
  {
    id: 'piz-milano', cat: 'pizza', emoji: '🍕',
    name: 'Milano',
    desc: 'Traditional salami, green peppers, onions and fresh mushrooms.',
    sizes: { S: 78, M: 109, L: 154 },
    tags: ['Salami']
  },
  {
    id: 'piz-elgreco', cat: 'pizza', emoji: '🍕',
    name: 'El Greco',
    desc: 'Traditional salami with olives and fresh garlic.',
    sizes: { S: 68, M: 89, L: 120 },
    tags: ['Salami', 'Olives']
  },
  {
    id: 'piz-sardinia', cat: 'pizza', emoji: '🍕',
    name: 'Sardinia',
    desc: 'Roasted pork rib with pineapple and fresh tomato.',
    sizes: { S: 72, M: 104, L: 139 },
    tags: ['Pork Rib', 'Pineapple']
  },
  {
    id: 'piz-roma', cat: 'pizza', emoji: '🍕',
    name: 'Roma',
    desc: 'A combination of traditional salami, selected ham and crispy bacon.',
    sizes: { S: 78, M: 109, L: 154 },
    tags: ['Salami', 'Ham', 'Bacon']
  },
  {
    id: 'piz-special', cat: 'pizza', emoji: '🍕',
    name: 'Pappas Special',
    desc: 'Traditional salami, ham, bacon, pepperoni, onions and green peppers.',
    sizes: { S: 89, M: 120, L: 165 },
    badge: '⭐ Signature',
    tags: ['Salami', 'Ham', 'Bacon', 'Popular']
  },
  {
    id: 'piz-carne', cat: 'pizza', emoji: '🍕',
    name: 'Carne',
    desc: 'Finest South African beef biltong.',
    sizes: { S: 70, M: 99, L: 130 },
    tags: ['Biltong', 'SA Special']
  },
  {
    id: 'piz-toscano', cat: 'pizza', emoji: '🍕',
    name: 'Toscano',
    desc: 'Stir-fried beef strips, pepperdillos, onions and our "Special" sauce.',
    sizes: { S: 78, M: 109, L: 154 },
    tags: ['Beef', 'Spicy']
  },
  {
    id: 'piz-sorrento', cat: 'pizza', emoji: '🍕',
    name: 'Sorrento',
    desc: 'Spicy ground beef, onions, fresh tomato and feta cheese.',
    sizes: { S: 89, M: 120, L: 165 },
    tags: ['Beef', 'Spicy', 'Feta']
  },
  {
    id: 'piz-mexicano', cat: 'pizza', emoji: '🍕',
    name: 'Mexicano',
    desc: 'Spicy ground beef, fresh chillis, green peppers and onions.',
    sizes: { S: 78, M: 109, L: 154 },
    tags: ['Beef', 'Spicy', 'Chilli']
  },
  {
    id: 'piz-napolitano', cat: 'pizza', emoji: '🍕',
    name: 'Napolitano',
    desc: 'Anchovies with capers and olives.',
    sizes: { S: 80, M: 113, L: 158 },
    tags: ['Seafood', 'Anchovies']
  },
  {
    id: 'piz-neptune', cat: 'pizza', emoji: '🍕',
    name: 'Neptune',
    desc: 'Tuna, mussels and shrimps topped with our "Special" sauce.',
    sizes: { S: 91, M: 125, L: 169 },
    tags: ['Seafood', 'Tuna']
  },

  /* ===== VEGETARIAN PIZZA ===== */
  {
    id: 'veg-margherita', cat: 'vegpizza', emoji: '🍅',
    name: 'Margherita',
    desc: 'Tomato base with mozzarella cheese.',
    sizes: { S: 48, M: 62, L: 79 },
    tags: ['Vegetarian', 'Classic']
  },
  {
    id: 'veg-salerno', cat: 'vegpizza', emoji: '🧀',
    name: 'Salerno',
    desc: 'A combination of mozzarella, cheddar and feta cheese.',
    sizes: { S: 70, M: 99, L: 130 },
    tags: ['Vegetarian', 'Three Cheese']
  },
  {
    id: 'veg-vegetarian', cat: 'vegpizza', emoji: '🥦',
    name: 'Vegetarian',
    desc: 'Fresh mushrooms, pineapple, olives, onions and green peppers.',
    sizes: { S: 80, M: 113, L: 158 },
    tags: ['Vegetarian', 'Popular']
  },

  /* ===== CHICKEN PIZZA ===== */
  {
    id: 'chk-mozambican', cat: 'chickpizza', emoji: '🌶️',
    name: 'Mozambican',
    desc: 'Peri-peri chicken livers with green peppers and onions.',
    sizes: { S: 68, M: 89, L: 120 },
    tags: ['Chicken', 'Peri-Peri', 'Spicy']
  },
  {
    id: 'chk-jamaican', cat: 'chickpizza', emoji: '🍍',
    name: 'Jamaican',
    desc: 'Spicy stir-fried chicken, slices of pineapple and fresh mushrooms.',
    sizes: { S: 82, M: 115, L: 160 },
    tags: ['Chicken', 'Pineapple', 'Spicy']
  },
  {
    id: 'chk-polastra', cat: 'chickpizza', emoji: '🍗',
    name: 'Polastra',
    desc: 'Chicken fillets, onions, pepperdillos topped with our "Special" sauce.',
    sizes: { S: 72, M: 104, L: 139 },
    badge: '⭐ Fan Favourite',
    tags: ['Chicken', 'Popular']
  },

  /* ===== PASTA ===== */
  {
    id: 'pas-alfredo', cat: 'pasta', emoji: '🍝',
    name: 'Fettuccine Alfredo',
    desc: 'Fettucini pasta topped with ham and mushrooms in a creamy, garlic sauce.',
    price: 95,
    tags: ['Ham', 'Creamy']
  },
  {
    id: 'pas-beeflasagne', cat: 'pasta', emoji: '🫕',
    name: 'Beef Lasagne',
    desc: 'Choice ground beef in a spicy tomato base.',
    price: 142,
    tags: ['Beef', 'Oven Baked']
  },
  {
    id: 'pas-chicklasagne', cat: 'pasta', emoji: '🫕',
    name: 'Chicken Lasagne',
    desc: 'Chicken pieces with mushrooms, peppers and onions.',
    price: 130,
    tags: ['Chicken', 'Oven Baked']
  },
  {
    id: 'pas-bolognaise', cat: 'pasta', emoji: '🍝',
    name: 'Spaghetti Bolognaise',
    desc: 'Spaghetti topped with traditional meat sauce.',
    price: 97,
    tags: ['Beef', 'Classic']
  },
  {
    id: 'pas-mac', cat: 'pasta', emoji: '🧀',
    name: 'Macaroni Cheese',
    desc: 'Baked penne pasta with creamy sauce.',
    price: 53,
    tags: ['Vegetarian', 'Comfort Food']
  },

  /* ===== SALADS ===== */
  {
    id: 'sal-french', cat: 'salads', emoji: '🥗',
    name: 'French Salad',
    desc: 'Crispy lettuce, tomatoes, cucumber, onions and green peppers.',
    price: 68,
    tags: ['Vegetarian', 'Fresh']
  },
  {
    id: 'sal-italian', cat: 'salads', emoji: '🥗',
    name: 'Italian Salad',
    desc: 'Crisp salad topped with mozzarella cheese and Kalamata olives.',
    price: 75,
    tags: ['Vegetarian', 'Mozzarella']
  },
  {
    id: 'sal-greek', cat: 'salads', emoji: '🥗',
    name: 'Greek Salad',
    desc: 'Crisp salad with feta cheese and Kalamata olives.',
    price: 78,
    tags: ['Vegetarian', 'Feta']
  },
  {
    id: 'sal-pappas', cat: 'salads', emoji: '🥗',
    name: "Pappa's Salad",
    desc: 'Crisp salad topped with spicy stir-fried chicken, slices of avocado and our secret dressing.',
    price: 156,
    badge: '⭐ Recommended',
    tags: ['Chicken', 'Avocado', 'Popular']
  },

  /* ===== BURGERS & SHAWARMAS ===== */
  {
    id: 'bur-beef', cat: 'burgers', emoji: '🍔',
    name: 'Beef Burger',
    desc: "Pappa's Kitchen beef pattie served with our Special Sauce on a sesame seed bun.",
    price: 80,
    tags: ['Beef']
  },
  {
    id: 'bur-chicken', cat: 'burgers', emoji: '🍔',
    name: 'Chicken Burger',
    desc: 'Tender marinated chicken strips served with our secret sauce on a sesame seed bun.',
    price: 77,
    tags: ['Chicken']
  },
  {
    id: 'sha-beef', cat: 'burgers', emoji: '🌯',
    name: 'Beef Shawarma',
    desc: "Tender strips of stir-fried beef in fresh oven-baked pita with coleslaw and Pappa's Schwarma Sauce.",
    price: 65,
    tags: ['Beef', 'Pita']
  },
  {
    id: 'sha-chicken', cat: 'burgers', emoji: '🌯',
    name: 'Chicken Shawarma',
    desc: "Tender strips of stir-fried filleted chicken breasts in fresh oven-baked pita with coleslaw and Pappa's Schwarma Sauce.",
    price: 63,
    tags: ['Chicken', 'Pita']
  },

  /* ===== ROAST CHICKEN ===== */
  {
    id: 'rot-full', cat: 'chicken', emoji: '🍗',
    name: 'Roast Chicken (Full)',
    desc: 'Flattie chicken slow roasted in our wood-burning oven, served with your choice of chips, pasta or pap and side salad.',
    price: 249,
    badge: '🔥 Wood-Fired',
    tags: ['Chicken', 'Whole', 'With Sides']
  },
  {
    id: 'rot-half', cat: 'chicken', emoji: '🍗',
    name: 'Roast Chicken (Half)',
    desc: 'Half a flattie chicken slow roasted in our wood-burning oven, served with your choice of chips, pasta or pap and side salad.',
    price: 130,
    tags: ['Chicken', 'Half', 'With Sides']
  },

  /* ===== FOCACCIA ===== */
  {
    id: 'foc-garlic', cat: 'focaccia', emoji: '🧄',
    name: 'Garlic Focaccia',
    desc: 'Olive oil, garlic, herbs and butter.',
    sizes: { S: 40, M: 55, L: 73 },
    tags: ['Vegetarian', 'Garlic']
  },
  {
    id: 'foc-cheese', cat: 'focaccia', emoji: '🧀',
    name: 'Cheese Focaccia',
    desc: 'Olive oil, garlic, herbs and mozzarella cheese.',
    sizes: { S: 52, M: 69, L: 99 },
    tags: ['Vegetarian', 'Cheese']
  },
  {
    id: 'foc-pesto', cat: 'focaccia', emoji: '🌿',
    name: 'Pesto Focaccia',
    desc: 'Basil pesto and feta cheese.',
    sizes: { S: 55, M: 81, L: 115 },
    tags: ['Vegetarian', 'Pesto', 'Feta']
  },
];

const DELIVERY_FEE = 50;

/* ----------------------------------------
   STATE
---------------------------------------- */
const state = {
  cart: [],
  currentStep: 1,
  modalItem: null,
  modalQty: 1,
  modalSize: null,
};

/* ----------------------------------------
   DOM HELPERS
---------------------------------------- */
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const fmt = (n) => `R${Number(n).toFixed(0)}`;

/* ----------------------------------------
   PRICE HELPER
---------------------------------------- */
function itemPrice(item, size) {
  if (item.sizes) return item.sizes[size || 'M'];
  return item.price;
}

/* ----------------------------------------
   BUILD MENU CARDS
---------------------------------------- */
const catMap = {
  pizza:      'items-pizza',
  vegpizza:   'items-vegpizza',
  chickpizza: 'items-chickpizza',
  pasta:      'items-pasta',
  salads:     'items-salads',
  burgers:    'items-burgers',
  chicken:    'items-chicken',
  focaccia:   'items-focaccia',
};

function buildMenu() {
  MENU.forEach(item => {
    const grid = document.getElementById(catMap[item.cat]);
    if (!grid) return;

    const hasSizes    = !!item.sizes;
    const displayPrice = hasSizes
      ? `from ${fmt(Math.min(...Object.values(item.sizes)))}`
      : fmt(item.price);

    const card = document.createElement('div');
    card.className = 'item-card';
    card.dataset.id = item.id;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${item.name} — ${displayPrice}`);

    card.innerHTML = `
      ${item.badge ? `<div class="item-card__badge">${item.badge}</div>` : ''}
      <div class="item-card__emoji">${item.emoji}</div>
      <div class="item-card__name">${item.name}</div>
      <div class="item-card__desc">${item.desc}</div>
      ${hasSizes ? `<div class="item-card__sizes">S · M · L</div>` : ''}
      ${item.tags?.length ? `<div class="item-card__tags">${item.tags.map(t => `<span class="item-card__tag">${t}</span>`).join('')}</div>` : ''}
      <div class="item-card__footer">
        <span class="item-card__price">${displayPrice}</span>
        <span class="item-card__add">+</span>
      </div>
    `;

    card.addEventListener('click', () => openModal(item));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openModal(item);
    });

    grid.appendChild(card);
  });
}

/* ----------------------------------------
   MODAL
---------------------------------------- */
function openModal(item) {
  state.modalItem = item;
  state.modalQty  = 1;
  state.modalSize = item.sizes ? 'M' : null;

  $('#modal-emoji').textContent   = item.emoji;
  $('#modal-title').textContent   = item.name;
  $('#modal-desc').textContent    = item.desc;
  $('#modal-qty-val').textContent = '1';
  $('#modal-note').value          = '';

  const sizesWrap = $('#modal-sizes');
  const sizesRow  = $('#modal-sizes-row');

  if (item.sizes) {
    sizesRow.innerHTML = '';
    const sizeNames = { S: 'Small', M: 'Medium', L: 'Large' };
    Object.entries(item.sizes).forEach(([key, price]) => {
      const lbl = document.createElement('label');
      lbl.className = 'size-opt';
      lbl.innerHTML = `
        <input type="radio" name="modal-size" value="${key}" ${key === 'M' ? 'checked' : ''} />
        <span class="size-opt__box">
          <span class="size-opt__key">${key}</span>
          <span class="size-opt__name">${sizeNames[key]}</span>
          <span class="size-opt__price">${fmt(price)}</span>
        </span>`;
      lbl.querySelector('input').addEventListener('change', () => {
        state.modalSize = key;
        updateModal();
      });
      sizesRow.appendChild(lbl);
    });
    sizesWrap.classList.remove('hidden');
  } else {
    sizesWrap.classList.add('hidden');
  }

  updateModal();
  $('#modal-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => $('#modal-close').focus(), 50);
}

function updateModal() {
  const price = itemPrice(state.modalItem, state.modalSize);
  $('#modal-price').textContent     = fmt(price);
  $('#modal-add-total').textContent = fmt(price * state.modalQty);
}

function closeModal() {
  $('#modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
  state.modalItem = null;
  state.modalSize = null;
}

$('#modal-qty-minus').addEventListener('click', () => {
  if (state.modalQty > 1) {
    state.modalQty--;
    $('#modal-qty-val').textContent = state.modalQty;
    updateModal();
  }
});
$('#modal-qty-plus').addEventListener('click', () => {
  state.modalQty++;
  $('#modal-qty-val').textContent = state.modalQty;
  updateModal();
});
$('#modal-close').addEventListener('click', closeModal);
$('#modal-overlay').addEventListener('click', (e) => {
  if (e.target === $('#modal-overlay')) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

$('#modal-add-btn').addEventListener('click', () => {
  if (!state.modalItem) return;
  addToCart(state.modalItem, state.modalQty, $('#modal-note').value.trim(), state.modalSize);
  closeModal();
  flashCartFab();
});

/* ----------------------------------------
   CART LOGIC
---------------------------------------- */
function addToCart(item, qty, note, size) {
  const existing = state.cart.find(
    e => e.item.id === item.id && e.note === note && e.size === size
  );
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ item, qty, note, size });
  }
  updateCartFab();
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  updateCartFab();
  renderCartReview();
  renderCheckoutSummary();
}

function changeCartQty(index, delta) {
  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    removeFromCart(index);
    return;
  }
  updateCartFab();
  renderCartReview();
  renderCheckoutSummary();
}

function getSubtotal() {
  return state.cart.reduce((sum, e) => sum + itemPrice(e.item, e.size) * e.qty, 0);
}
function getTotal()      { return state.cart.length ? getSubtotal() + DELIVERY_FEE : 0; }
function getTotalItems() { return state.cart.reduce((sum, e) => sum + e.qty, 0); }

/* ----------------------------------------
   CART FAB
---------------------------------------- */
function updateCartFab() {
  const fab   = $('#cart-fab');
  const count = getTotalItems();
  if (count > 0) {
    fab.classList.remove('hidden');
    $('#cart-fab-badge').textContent = count;
    $('#cart-fab-total').textContent = fmt(getTotal());
  } else {
    fab.classList.add('hidden');
  }
}

function flashCartFab() {
  const fab = $('#cart-fab');
  fab.style.transform = 'scale(1.12) translateY(-3px)';
  setTimeout(() => fab.style.transform = '', 250);
}

$('#cart-fab').addEventListener('click', () => goToStep(2));

/* ----------------------------------------
   STEP NAVIGATION
---------------------------------------- */
function goToStep(n) {
  if (n === 2 && state.cart.length === 0) {
    shakeEl($('#cart-fab'));
    return;
  }
  state.currentStep = n;
  $$('.order-step').forEach(s => s.classList.add('hidden'));
  $(`#step-${n}`)?.classList.remove('hidden');
  $$('.step').forEach(s => {
    const num = parseInt(s.dataset.step);
    s.classList.remove('active', 'done');
    if (num === n) s.classList.add('active');
    if (num < n)  s.classList.add('done');
  });
  if (n === 2) renderCartReview();
  if (n === 3) renderCheckoutSummary();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ----------------------------------------
   RENDER CART REVIEW (Step 2)
---------------------------------------- */
function renderCartReview() {
  const container = $('#cart-review-items');
  container.innerHTML = '';

  if (state.cart.length === 0) {
    container.innerHTML = `<p style="padding:28px 24px;color:#8a7a6a;font-style:italic;">Your cart is empty.</p>`;
    renderSummaryBlock($('#cart-review-summary'));
    return;
  }

  const sizeNames = { S: 'Small', M: 'Medium', L: 'Large' };

  state.cart.forEach((entry, i) => {
    const unitPrice = itemPrice(entry.item, entry.size);
    const sizeLabel = entry.size ? ` · ${sizeNames[entry.size]}` : '';
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item__info">
        <div class="cart-item__name">${entry.item.emoji} ${entry.item.name}${sizeLabel}</div>
        ${entry.note ? `<div class="cart-item__note">✏️ ${entry.note}</div>` : ''}
        <button class="cart-item__remove" data-index="${i}">Remove</button>
      </div>
      <div class="cart-item__qty">
        <button class="cart-item__qty-btn" data-action="minus" data-index="${i}">−</button>
        <span class="cart-item__qty-num">${entry.qty}</span>
        <button class="cart-item__qty-btn" data-action="plus" data-index="${i}">+</button>
      </div>
      <div class="cart-item__price">${fmt(unitPrice * entry.qty)}</div>
    `;
    container.appendChild(row);
  });

  container.querySelectorAll('.cart-item__qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      changeCartQty(parseInt(btn.dataset.index), btn.dataset.action === 'plus' ? 1 : -1);
    });
  });
  container.querySelectorAll('.cart-item__remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.index)));
  });

  renderSummaryBlock($('#cart-review-summary'));
}

/* ----------------------------------------
   RENDER CHECKOUT SUMMARY (Step 3)
---------------------------------------- */
function renderCheckoutSummary() { renderSummaryBlock($('#checkout-summary')); }

function renderSummaryBlock(el) {
  if (!el) return;
  const sizeNames = { S: 'Small', M: 'Medium', L: 'Large' };
  const lines = state.cart.map(e => {
    const unitPrice = itemPrice(e.item, e.size);
    const sizeLabel = e.size ? ` (${sizeNames[e.size]})` : '';
    return `<div class="summary-line">
      <span>${e.item.emoji} ${e.item.name}${sizeLabel} × ${e.qty}</span>
      <span>${fmt(unitPrice * e.qty)}</span>
    </div>`;
  }).join('');

  el.innerHTML = `
    <div class="summary-title">Order Summary</div>
    ${lines}
    <div class="summary-line summary-line--delivery">
      <span>🛵 Delivery Fee</span><span>${fmt(DELIVERY_FEE)}</span>
    </div>
    <div class="summary-line summary-line--total">
      <span>Total</span><span>${fmt(getSubtotal() + DELIVERY_FEE)}</span>
    </div>
    <p class="summary-note">Flat R50 delivery fee. No hidden costs. Payment on delivery or via EFT.</p>
  `;
}

/* ----------------------------------------
   STEP BUTTONS
---------------------------------------- */
$('#back-to-menu').addEventListener('click', () => goToStep(1));
$('#go-to-checkout').addEventListener('click', () => { if (state.cart.length) goToStep(3); });
$('#back-to-cart').addEventListener('click', () => goToStep(2));

/* ----------------------------------------
   CHECKOUT FORM SUBMIT
   WhatsApp link is triggered SYNCHRONOUSLY
   inside the user gesture — before any
   setTimeout — so mobile popup blockers
   cannot intercept it.
---------------------------------------- */
$('#checkout-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name    = $('#co-name').value.trim();
  const phone   = $('#co-phone').value.trim();
  const address = $('#co-address').value.trim();

  let valid = true;
  [['co-name', name], ['co-phone', phone], ['co-address', address]].forEach(([id, val]) => {
    const el = $(`#${id}`);
    if (!val) {
      el.style.borderColor = 'var(--terracotta)';
      shakeEl(el);
      valid = false;
      setTimeout(() => el.style.borderColor = '', 1500);
    }
  });
  if (!valid) return;

  const refNum    = 'PK-' + Date.now().toString(36).toUpperCase();
  const payment   = $('input[name="payment"]:checked')?.value || 'cash';
  const payLabel  = { cash: 'Cash on Delivery', eft: 'EFT / Bank Transfer', card: 'Card on Delivery' }[payment];
  const sizeNames = { S: 'Small', M: 'Medium', L: 'Large' };

  const cartLines = state.cart
    .map(e => {
      const sizeLabel = e.size ? ` (${sizeNames[e.size]})` : '';
      return `• ${e.item.name}${sizeLabel} ×${e.qty} — ${fmt(itemPrice(e.item, e.size) * e.qty)}${e.note ? ` [${e.note}]` : ''}`;
    })
    .join('\n');

  const msg =
    `*New Order — Pappa's Kitchen*\n\n` +
    `Ref: ${refNum}\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Address: ${address}\n` +
    `Payment: ${payLabel}\n\n` +
    `*Order:*\n${cartLines}\n\n` +
    `Delivery fee: R50\n` +
    `*Total: ${fmt(getTotal())}*`;

  // Trigger WhatsApp SYNCHRONOUSLY (within the user gesture) via hidden <a>.
  // This is the only reliably unblocked method on mobile browsers.
  const wa = document.createElement('a');
  wa.href   = `https://wa.me/27721868282?text=${encodeURIComponent(msg)}`;
  wa.target = '_blank';
  wa.rel    = 'noopener noreferrer';
  wa.style.display = 'none';
  document.body.appendChild(wa);
  wa.click();
  setTimeout(() => wa.remove(), 500);

  // UI update — safe to defer from here
  const btn = $('#place-order-btn');
  btn.textContent   = 'Placing order…';
  btn.disabled      = true;
  btn.style.opacity = '0.7';

  setTimeout(() => {
    $$('.order-step').forEach(s => s.classList.add('hidden'));
    $('#step-confirm').classList.remove('hidden');
    $('#cart-fab').classList.add('hidden');
    $$('.step').forEach(s => { s.classList.remove('active'); s.classList.add('done'); });
    $('#confirm-body').innerHTML = `
      Thank you, <strong>${name}</strong>! Your order details have been sent to WhatsApp — please tap <em>Send</em> in the app to confirm your order with us.<br/><br/>
      Payment: <strong>${payLabel}</strong>. Delivery to: <em>${address}</em>.
    `;
    $('#confirm-ref').textContent = `Order Reference: ${refNum}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 1400);
});

/* ----------------------------------------
   NEW ORDER BUTTON
---------------------------------------- */
document.getElementById('new-order-btn').addEventListener('click', () => {
  state.cart = [];
  updateCartFab();
  $$('.step').forEach(s => s.classList.remove('active', 'done'));
  $$('.step')[0].classList.add('active');
  $$('.order-step').forEach(s => s.classList.add('hidden'));
  $('#step-1').classList.remove('hidden');
  state.currentStep = 1;
});

/* ----------------------------------------
   CATEGORY NAV — highlight on scroll
---------------------------------------- */
function updateCatNav() {
  const cats  = $$('.menu-cat');
  const links = $$('.cat-nav__link');
  let current = '';
  cats.forEach(cat => {
    if (cat.getBoundingClientRect().top < 160) current = cat.id;
  });
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href').replace('#', '') === current);
  });
}
window.addEventListener('scroll', updateCatNav, { passive: true });
document.getElementById('menu-items')?.addEventListener('scroll', updateCatNav);

$$('.cat-nav__link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ----------------------------------------
   UTILITY — shake animation
---------------------------------------- */
function shakeEl(el) {
  el.style.animation = 'shake 0.4s ease';
  setTimeout(() => el.style.animation = '', 500);
}

/* ----------------------------------------
   INIT
---------------------------------------- */
buildMenu();
updateCartFab();