/* ========================================
   PAPPA'S KITCHEN — order.js
   Full ordering system logic
   ======================================== */

'use strict';

/* ----------------------------------------
   MENU DATA
---------------------------------------- */
const MENU = [
  /* ---- PIZZA ---- */
  {
    id: 'piz-1', cat: 'pizza', emoji: '',
    name: "Pappas Special",
    desc: "Our legendary house pizza — loaded with premium toppings on a crisp wood-fired base. The dish everyone comes back for.",
    price: 185, badge: '⭐ Signature',
    tags: ['Wood Fired', 'Popular']
  },
  {
    id: 'piz-2', cat: 'pizza', emoji: '',
    name: "El Greco",
    desc: "Mediterranean-inspired with olives, garlic, feta, and fresh toppings on our classic wood-fired base.",
    price: 165,
    tags: ['Vegetarian', 'Popular']
  },
  {
    id: 'piz-3', cat: 'pizza', emoji: '',
    name: "Tentino",
    desc: "Classic flavours with the option to add extra chicken — generous portions on a perfectly fired crust.",
    price: 170,
    tags: ['Chicken Available']
  },
  {
    id: 'piz-4', cat: 'pizza', emoji: '',
    name: "Margherita",
    desc: "Crushed San Marzano tomatoes, mozzarella, and fresh basil. Perfection in simplicity — a true Italian classic.",
    price: 145,
    tags: ['Vegetarian', 'Classic']
  },
  {
    id: 'piz-5', cat: 'pizza', emoji: '',
    name: "Quattro Stagioni",
    desc: "Four seasons, four toppings — artichokes, ham, mushrooms, and olives, each in their own quarter.",
    price: 175,
    tags: ['Classic Italian']
  },
  {
    id: 'piz-6', cat: 'pizza', emoji: '',
    name: "Salami & Rocket",
    desc: "Spicy salami with peppery rocket, finished post-bake for freshness. Bold, satisfying, and unmistakably Italian.",
    price: 175,
    tags: ['Spicy', 'Popular']
  },

  /* ---- PASTA ---- */
  {
    id: 'pas-1', cat: 'pasta', emoji: '',
    name: "Chicken Polastra",
    desc: "A beloved Pappa's classic — tender chicken in a rich, flavourful tomato-cream sauce over perfectly cooked pasta.",
    price: 160, badge: '⭐ Fan Favourite',
    tags: ['Hearty']
  },
  {
    id: 'pas-2', cat: 'pasta', emoji: '',
    name: "Carbonara",
    desc: "Authentic Roman-style — pancetta, egg yolk, Pecorino Romano, and cracked black pepper. No cream, no shortcuts.",
    price: 155,
    tags: ['Traditional', 'Rich']
  },
  {
    id: 'pas-3', cat: 'pasta', emoji: '',
    name: "Arrabbiata",
    desc: "Penne in a fiery tomato and garlic sauce. Simple, bold, and unapologetically Italian.",
    price: 140,
    tags: ['Vegetarian', 'Spicy']
  },
  {
    id: 'pas-4', cat: 'pasta', emoji: '',
    name: "Lasagne al Forno",
    desc: "Layers of rich meat ragù, béchamel, and pasta, oven-baked until golden and bubbling.",
    price: 165,
    tags: ['Oven Baked', 'Hearty']
  },

  /* ---- MAINS & SALADS ---- */
  {
    id: 'mai-1', cat: 'mains', emoji: '',
    name: "Chicken Shawarma",
    desc: "Marinated chicken carved fresh, wrapped with crisp salad and garlic sauce. Nelspruit's favourite quick lunch.",
    price: 125, badge: '⭐ Must Try',
    tags: ['Lunch Favourite']
  },
  {
    id: 'mai-2', cat: 'mains', emoji: '',
    name: "Beef Shawarma & Fries",
    desc: "Slow-marinated beef shawarma served with golden fries. Hearty, satisfying, and full of flavour.",
    price: 150,
    tags: ['Popular']
  },
  {
    id: 'mai-3', cat: 'mains', emoji: '',
    name: "Pappas Salad",
    desc: "Our signature salad — fresh seasonal greens, crisp vegetables, and our house vinaigrette. Light and satisfying.",
    price: 95,
    tags: ['Vegetarian', 'Fresh', 'Light']
  },

  /* ---- EXTRAS ---- */
  {
    id: 'ext-1', cat: 'extras', emoji: '',
    name: "Focaccia",
    desc: "House-baked focaccia — golden, dimpled, and drizzled with olive oil and herbs. The best in Nelspruit.",
    price: 65, badge: '⭐ Best in Town',
    tags: ['Freshly Baked', 'Vegetarian']
  },
  {
    id: 'ext-2', cat: 'extras', emoji: '',
    name: "Garlic Bread",
    desc: "Wood-fired garlic bread with butter and fresh herbs. The perfect starter or side.",
    price: 55,
    tags: ['Starter', 'Vegetarian']
  },
  {
    id: 'ext-3', cat: 'extras', emoji: '',
    name: "Side Salad",
    desc: "Crisp seasonal greens with house vinaigrette. A fresh accompaniment to any pizza or pasta.",
    price: 60,
    tags: ['Vegetarian', 'Light']
  },
  {
    id: 'ext-4', cat: 'extras', emoji: '',
    name: "Chips / Fries",
    desc: "Golden, crispy fries seasoned with sea salt. A classic side for any order.",
    price: 50,
    tags: ['Vegetarian', 'Side']
  },

  /* ---- DRINKS ---- 
  {
    id: 'drk-1', cat: 'drinks', emoji: '🥤',
    name: "Soft Drink (330ml)",
    desc: "Coca-Cola, Sprite, Fanta Orange, or Fanta Grape. Ice cold.",
    price: 30,
    tags: ['Cold']
  },
  {
    id: 'drk-2', cat: 'drinks', emoji: '💧',
    name: "Still Water (500ml)",
    desc: "Refreshing still mineral water.",
    price: 22,
    tags: ['Cold']
  },
  {
    id: 'drk-3', cat: 'drinks', emoji: '🍋',
    name: "Lemonade (500ml)",
    desc: "House-made lemonade with fresh lemon and mint. Refreshing and zesty.",
    price: 38,
    tags: ['Cold', 'Freshly Made']
  },
  {
    id: 'drk-4', cat: 'drinks', emoji: '🍺',
    name: "Craft Beer (340ml)",
    desc: "Ask your delivery driver for today's available selection.",
    price: 55,
    tags: ['Alcoholic', '18+']
  }
*/

];

const DELIVERY_FEE = 50;

/* ----------------------------------------
   STATE
---------------------------------------- */
const state = {
  cart: [],       // { item, qty, note }
  currentStep: 1,
  modalItem: null,
  modalQty: 1,
};

/* ----------------------------------------
   DOM HELPERS
---------------------------------------- */
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const fmt = (n) => `R${n.toFixed(0)}`;

/* ----------------------------------------
   BUILD MENU CARDS
---------------------------------------- */
const catMap = {
  pizza:  'items-pizza',
  pasta:  'items-pasta',
  mains:  'items-mains',
  extras: 'items-extras',
  drinks: 'items-drinks',
};

function buildMenu() {
  MENU.forEach(item => {
    const grid = document.getElementById(catMap[item.cat]);
    if (!grid) return;

    const card = document.createElement('div');
    card.className = 'item-card';
    card.dataset.id = item.id;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${item.name} - ${fmt(item.price)}`);

    card.innerHTML = `
      ${item.badge ? `<div class="item-card__badge">${item.badge}</div>` : ''}
      <div class="item-card__emoji">${item.emoji}</div>
      <div class="item-card__name">${item.name}</div>
      <div class="item-card__desc">${item.desc}</div>
      ${item.tags?.length ? `<div class="item-card__tags">${item.tags.map(t => `<span class="item-card__tag">${t}</span>`).join('')}</div>` : ''}
      <div class="item-card__footer">
        <span class="item-card__price">${fmt(item.price)}</span>
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

  $('#modal-emoji').textContent    = item.emoji;
  $('#modal-title').textContent    = item.name;
  $('#modal-desc').textContent     = item.desc;
  $('#modal-price').textContent    = fmt(item.price);
  $('#modal-qty-val').textContent  = '1';
  $('#modal-note').value           = '';
  updateModalTotal();

  $('#modal-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  $('#modal-close').focus();
}

function closeModal() {
  $('#modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
  state.modalItem = null;
}

function updateModalTotal() {
  const total = state.modalItem.price * state.modalQty;
  $('#modal-add-total').textContent = fmt(total);
}

$('#modal-qty-minus').addEventListener('click', () => {
  if (state.modalQty > 1) {
    state.modalQty--;
    $('#modal-qty-val').textContent = state.modalQty;
    updateModalTotal();
  }
});
$('#modal-qty-plus').addEventListener('click', () => {
  state.modalQty++;
  $('#modal-qty-val').textContent = state.modalQty;
  updateModalTotal();
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
  addToCart(state.modalItem, state.modalQty, $('#modal-note').value.trim());
  closeModal();
  flashCartFab();
});

/* ----------------------------------------
   CART LOGIC
---------------------------------------- */
function addToCart(item, qty, note) {
  const existing = state.cart.find(
    e => e.item.id === item.id && e.note === note
  );
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ item, qty, note });
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
  return state.cart.reduce((sum, e) => sum + e.item.price * e.qty, 0);
}
function getTotal() {
  return state.cart.length ? getSubtotal() + DELIVERY_FEE : 0;
}
function getTotalItems() {
  return state.cart.reduce((sum, e) => sum + e.qty, 0);
}

/* ----------------------------------------
   CART FAB
---------------------------------------- */
function updateCartFab() {
  const fab = $('#cart-fab');
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
  // Validate
  if (n === 2 && state.cart.length === 0) {
    shakeEl($('#cart-fab'));
    return;
  }

  state.currentStep = n;

  $$('.order-step').forEach(s => s.classList.add('hidden'));
  $(`#step-${n}`)?.classList.remove('hidden');

  // Update step bar
  $$('.step').forEach(s => {
    const num = parseInt(s.dataset.step);
    s.classList.remove('active', 'done');
    if (num === n) s.classList.add('active');
    if (num < n)  s.classList.add('done');
  });

  // Render content
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
    container.innerHTML = `<p style="padding:28px 24px; color:#8a7a6a; font-style:italic;">Your cart is empty.</p>`;
    renderSummaryBlock($('#cart-review-summary'));
    return;
  }

  state.cart.forEach((entry, i) => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item__info">
        <div class="cart-item__name">${entry.item.emoji} ${entry.item.name}</div>
        ${entry.note ? `<div class="cart-item__note">✏️ ${entry.note}</div>` : ''}
        <button class="cart-item__remove" data-index="${i}">Remove</button>
      </div>
      <div class="cart-item__qty">
        <button class="cart-item__qty-btn" data-action="minus" data-index="${i}">−</button>
        <span class="cart-item__qty-num">${entry.qty}</span>
        <button class="cart-item__qty-btn" data-action="plus"  data-index="${i}">+</button>
      </div>
      <div class="cart-item__price">${fmt(entry.item.price * entry.qty)}</div>
    `;
    container.appendChild(row);
  });

  // Event delegation
  container.querySelectorAll('.cart-item__qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.index);
      const delta = btn.dataset.action === 'plus' ? 1 : -1;
      changeCartQty(idx, delta);
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
function renderCheckoutSummary() {
  renderSummaryBlock($('#checkout-summary'));
}

function renderSummaryBlock(el) {
  if (!el) return;
  const subtotal = getSubtotal();
  const lines = state.cart.map(e =>
    `<div class="summary-line"><span>${e.item.emoji} ${e.item.name} × ${e.qty}</span><span>${fmt(e.item.price * e.qty)}</span></div>`
  ).join('');

  el.innerHTML = `
    <div class="summary-title">Order Summary</div>
    ${lines}
    <div class="summary-line summary-line--delivery">
      <span>🛵 Delivery Fee</span>
      <span>${fmt(DELIVERY_FEE)}</span>
    </div>
    <div class="summary-line summary-line--total">
      <span>Total</span>
      <span>${fmt(subtotal + DELIVERY_FEE)}</span>
    </div>
    <p class="summary-note">Flat R50 delivery fee. No hidden costs. Payment on delivery or via EFT.</p>
  `;
}

/* ----------------------------------------
   STEP 2 NAVIGATION BUTTONS
---------------------------------------- */
$('#back-to-menu').addEventListener('click', () => goToStep(1));
$('#go-to-checkout').addEventListener('click', () => {
  if (state.cart.length === 0) return;
  goToStep(3);
});

/* ----------------------------------------
   STEP 3 NAVIGATION BUTTONS
---------------------------------------- */
$('#back-to-cart').addEventListener('click', () => goToStep(2));

/* ----------------------------------------
   CHECKOUT FORM SUBMIT
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

  // --- Build the WhatsApp URL SYNCHRONOUSLY here, while still inside the
  //     user-gesture (submit event). Mobile browsers block window.open() and
  //     programmatic navigations that happen inside setTimeout/async callbacks
  //     because they are no longer traceable to a direct user action. ---
  const refNum   = 'PK-' + Date.now().toString(36).toUpperCase();
  const payment  = $('input[name="payment"]:checked')?.value || 'cash';
  const payLabel = { cash: 'Cash on Delivery', eft: 'EFT / Bank Transfer', card: 'Card on Delivery' }[payment];

  const cartItems = state.cart
    .map(e => `• ${e.item.name} x${e.qty} (${fmt(e.item.price * e.qty)})${e.note ? ` — Note: ${e.note}` : ''}`)
    .join('\n');

  const whatsappMessage =
    `*New Order — Pappa's Kitchen*\n\n` +
    `Ref: ${refNum}\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Address: ${address}\n` +
    `Payment: ${payLabel}\n\n` +
    `*Order:*\n${cartItems}\n\n` +
    `Delivery fee: R50\n` +
    `*Total: ${fmt(getTotal())}*`;

  const whatsappUrl = `https://wa.me/27721868282?text=${encodeURIComponent(whatsappMessage)}`;

  // Use a hidden <a> element and .click() it synchronously — this is the most
  // reliable cross-browser technique for deep-links on mobile. Unlike
  // window.open(), an <a> click is always treated as a user-initiated navigation
  // and is never intercepted by popup blockers.
  const wa = document.createElement('a');
  wa.href     = whatsappUrl;
  wa.target   = '_blank';
  wa.rel      = 'noopener noreferrer';
  wa.style.display = 'none';
  document.body.appendChild(wa);
  wa.click();
  // Clean up the element after the browser has processed the click
  setTimeout(() => wa.remove(), 500);

  // Disable the submit button and show the loading state
  const btn = $('#place-order-btn');
  btn.textContent = 'Placing order…';
  btn.disabled = true;
  btn.style.opacity = '0.7';

  // UI transition — safe to defer; no navigation happens here
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
   NEW ORDER BUTTON (on confirmation)
---------------------------------------- */
document.getElementById('new-order-btn').addEventListener('click', () => {
  state.cart = [];
  goToStep(1);
  updateCartFab();
  $$('.step').forEach(s => s.classList.remove('active', 'done'));
  $$('.step')[0].classList.add('active');
  $('#step-confirm').classList.add('hidden');
  $('#step-1').classList.remove('hidden');
});

/* ----------------------------------------
   CATEGORY NAV — active highlight on scroll
---------------------------------------- */
function updateCatNav() {
  const cats = $$('.menu-cat');
  const links = $$('.cat-nav__link');
  let current = '';

  cats.forEach(cat => {
    const top = cat.getBoundingClientRect().top;
    if (top < 160) current = cat.id;
  });

  links.forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === current);
  });
}

// Only attach scroll listener if we're on step 1
document.getElementById('menu-items')?.addEventListener('scroll', updateCatNav);
window.addEventListener('scroll', updateCatNav, { passive: true });

// Smooth scroll for cat nav links
$$('.cat-nav__link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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