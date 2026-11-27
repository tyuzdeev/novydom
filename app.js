// Сюда потом вставляется ссылка на опубликованную Google Таблицу (CSV)
// или путь к локальному файлу './catalog.csv'
const SHEET_CSV_URL = '';

// Прямая ссылка на контакт в MAX (можно заменить на личную ссылку вида https://max.ru/u/...)
const STORE_MAX_PHONE = '+7 (902) 948-85-95';
const STORE_MAX_CONTACT_URL = 'https://max.ru/u/f9LHodD0cOLr0v3L6LOkzK1fz1LyBsagOiRJVbUWy6mIz5bQH5DUnVUcJ28';

const PAGE_SIZE = 24;

// Векторные иконки по типам товаров (если в таблице есть URL фото в колонке image — подставится реальное фото)
const ICON_MAP = {
  faucet: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="16" fill="#F1F5F9"/><path d="M36 86H64V66C64 56 72 48 82 48H90V58H82C77.6 58 74 61.6 74 66V86H84V94H26V86H36Z" fill="#64748B"/><path d="M44 48H56V86H44V48Z" fill="#94A3B8"/><rect x="38" y="38" width="28" height="10" rx="5" fill="#475569"/><path d="M84 64C84 64 90 72 90 77C90 80.3 87.3 83 84 83C80.7 83 78 80.3 78 77C78 72 84 64 84 64Z" fill="#38BDF8"/></svg>`,
  valve: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="16" fill="#FEF3C7"/><rect x="20" y="54" width="80" height="20" rx="4" fill="#D97706"/><circle cx="60" cy="64" r="16" fill="#B45309"/><rect x="55" y="34" width="10" height="22" fill="#92400E"/><path d="M36 32C36 28 42 26 60 32C78 26 84 28 84 32C84 36 78 40 60 38C42 40 36 36 36 32Z" fill="#DC2626"/></svg>`,
  pipe: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="16" fill="#EFF6FF"/><path d="M32 34V66C32 77 41 86 52 86H86" stroke="#64748B" stroke-width="14" stroke-linecap="round"/><rect x="22" y="24" width="20" height="12" rx="3" fill="#2563EB"/><rect x="82" y="76" width="12" height="20" rx="3" fill="#2563EB"/></svg>`,
  cable: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="16" fill="#F3F4F6"/><circle cx="60" cy="60" r="30" stroke="#1F2937" stroke-width="12"/><circle cx="60" cy="60" r="18" stroke="#4B5563" stroke-width="4"/><path d="M84 78L98 92" stroke="#C24B1D" stroke-width="6" stroke-linecap="round"/><path d="M88 72L102 82" stroke="#2563EB" stroke-width="6" stroke-linecap="round"/></svg>`,
  breaker: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="16" fill="#F8FAFC"/><rect x="34" y="22" width="52" height="76" rx="6" fill="#E2E8F0" stroke="#64748B" stroke-width="3"/><rect x="44" y="52" width="32" height="14" rx="3" fill="#2563EB"/><circle cx="60" cy="34" r="5" fill="#475569"/><circle cx="60" cy="86" r="5" fill="#475569"/><rect x="46" y="70" width="28" height="6" rx="2" fill="#16A34A"/></svg>`,
  socket: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="16" fill="#F3F4F6"/><rect x="26" y="26" width="68" height="68" rx="10" fill="#FFFFFF" stroke="#9CA3AF" stroke-width="3"/><circle cx="60" cy="60" r="22" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="2"/><circle cx="51" cy="60" r="4" fill="#1F2937"/><circle cx="69" cy="60" r="4" fill="#1F2937"/></svg>`,
  lamp: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="16" fill="#FEFCE8"/><path d="M60 22C44 22 34 34 34 48C34 58 40 66 46 72V80H74V72C80 66 86 58 86 48C86 34 76 22 60 22Z" fill="#FDE047" stroke="#EAB308" stroke-width="3"/><rect x="48" y="80" width="24" height="12" rx="3" fill="#94A3B8"/><rect x="52" y="92" width="16" height="6" rx="2" fill="#64748B"/></svg>`,
  nails: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="16" fill="#F1F5F9"/><g stroke="#475569" stroke-width="5" stroke-linecap="round"><line x1="36" y1="30" x2="36" y2="90"/><line x1="28" y1="30" x2="44" y2="30"/><line x1="60" y1="26" x2="60" y2="94"/><line x1="52" y1="26" x2="68" y2="26"/><line x1="84" y1="34" x2="84" y2="86"/><line x1="76" y1="34" x2="92" y2="34"/></g></svg>`,
  screws: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="16" fill="#F3F4F6"/><rect x="42" y="24" width="36" height="10" rx="3" fill="#1F2937"/><path d="M56 34H64L62 94L60 98L58 94L56 34Z" fill="#374151"/><path d="M52 46L68 42M52 56L68 52M53 66L67 62M54 76L66 72" stroke="#111827" stroke-width="3" stroke-linecap="round"/></svg>`,
  bucket: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="16" fill="#FFF7ED"/><path d="M30 42H90L82 94H38L30 42Z" fill="#374151"/><rect x="26" y="36" width="68" height="8" rx="4" fill="#1F2937"/><path d="M36 38C36 22 84 22 84 38" stroke="#9CA3AF" stroke-width="4" fill="none"/></svg>`,
  foam: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="16" fill="#FEF2F2"/><rect x="44" y="38" width="32" height="58" rx="6" fill="#C24B1D"/><rect x="44" y="54" width="32" height="18" fill="#FEF3C7"/><rect x="52" y="24" width="16" height="14" rx="2" fill="#374151"/><line x1="60" y1="24" x2="78" y2="16" stroke="#374151" stroke-width="3" stroke-linecap="round"/></svg>`,
  tool: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="16" fill="#FEF3C7"/><rect x="28" y="36" width="56" height="48" rx="12" fill="#F59E0B" stroke="#B45309" stroke-width="3"/><circle cx="56" cy="60" r="13" fill="#1F2937"/><rect x="84" y="64" width="14" height="12" rx="2" fill="#64748B"/></svg>`
};

function svgToDataUri(svgStr) {
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svgStr);
}

function getFallbackImage(item) {
  if (item.icon && ICON_MAP[item.icon]) return svgToDataUri(ICON_MAP[item.icon]);
  const n = (item.name + ' ' + item.category).toLowerCase();
  if (n.includes('смеситель')) return svgToDataUri(ICON_MAP.faucet);
  if (n.includes('кран') || n.includes('вентиль')) return svgToDataUri(ICON_MAP.valve);
  if (n.includes('сифон') || n.includes('подводк') || n.includes('труб') || n.includes('проклад') || n.includes('фум')) return svgToDataUri(ICON_MAP.pipe);
  if (n.includes('кабель') || n.includes('провод') || n.includes('изолент')) return svgToDataUri(ICON_MAP.cable);
  if (n.includes('автомат') || n.includes('клемм')) return svgToDataUri(ICON_MAP.breaker);
  if (n.includes('розетк') || n.includes('выключател')) return svgToDataUri(ICON_MAP.socket);
  if (n.includes('ламп')) return svgToDataUri(ICON_MAP.lamp);
  if (n.includes('гвозд')) return svgToDataUri(ICON_MAP.nails);
  if (n.includes('саморез') || n.includes('дюбел') || n.includes('уголок')) return svgToDataUri(ICON_MAP.screws);
  if (n.includes('пен') || n.includes('герметик')) return svgToDataUri(ICON_MAP.foam);
  if (n.includes('рулетк') || n.includes('нож') || n.includes('молот')) return svgToDataUri(ICON_MAP.tool);
  return svgToDataUri(ICON_MAP.bucket);
}

const DEMO_PRODUCTS = [
  { sku: 'SN-101', name: 'Смеситель для кухни однорычажный хром', category: 'Сантехника', price: 1890, stock: 7, unit: 'шт', badge: 'Хит', icon: 'faucet', desc: 'Корпус из латуни, керамический картридж 35 мм, гибкая подводка в комплекте.' },
  { sku: 'SN-102', name: 'Смеситель для ванной с длинным изливом', category: 'Сантехника', price: 2650, stock: 4, unit: 'шт', icon: 'faucet', desc: 'Поворотный излив 35 см, душевая лейка и шланг 1.5 м в комплекте.' },
  { sku: 'SN-108', name: 'Кран шаровой 1/2" ВР/НР бабочка латунь', category: 'Сантехника', price: 320, stock: 45, unit: 'шт', badge: 'Хит', icon: 'valve', desc: 'Полнопроходной латунный кран, рабочее давление до 25 бар.' },
  { sku: 'SN-114', name: 'Подводка гибкая для воды 60 см 1/2" гайка-гайка', category: 'Сантехника', price: 165, stock: 32, unit: 'шт', icon: 'pipe', desc: 'Оплётка из нержавеющей стали, EPDM резина.' },
  { sku: 'SN-120', name: 'Сифон бутылочный для раковины 40 мм с выпуском', category: 'Сантехника', price: 290, stock: 12, unit: 'шт', icon: 'pipe', desc: 'Универсальный выпуск, гофра 40/50 мм в комплекте.' },
  { sku: 'SN-125', name: 'Лента ФУМ 12 мм х 10 м (0.1 мм)', category: 'Сантехника', price: 45, stock: 80, unit: 'шт', icon: 'pipe', desc: 'Для герметизации резьбовых соединений воды и газа.' },
  { sku: 'SN-131', name: 'Прокладка силиконовая 1/2" (набор 5 шт)', category: 'Сантехника', price: 60, stock: 3, unit: 'уп', icon: 'pipe', desc: 'Термостойкий силикон, подходит для горячей и холодной воды.' },

  { sku: 'EL-201', name: 'Кабель ВВГнг-LS 3х2.5 ГОСТ (бухта / отрез)', category: 'Электрика', price: 118, stock: 340, unit: 'м', badge: 'Хит', icon: 'cable', desc: 'Медный негорючий кабель, режем от 1 метра. ГОСТ.' },
  { sku: 'EL-202', name: 'Кабель ВВГнг-LS 3х1.5 ГОСТ', category: 'Электрика', price: 78, stock: 210, unit: 'м', icon: 'cable', desc: 'Для освещения и розеточных групп малой мощности.' },
  { sku: 'EL-209', name: 'Автоматический выключатель 16А 1P C (IEK)', category: 'Электрика', price: 245, stock: 19, unit: 'шт', icon: 'breaker', desc: 'Защита от перегрузки и короткого замыкания, крепление на DIN-рейку.' },
  { sku: 'EL-215', name: 'Розетка двойная с заземлением скрытая белая', category: 'Электрика', price: 210, stock: 28, unit: 'шт', icon: 'socket', desc: 'Ток 16А, керамическое основание, защитные шторки.' },
  { sku: 'EL-221', name: 'Выключатель одноклавишный наружный белый', category: 'Электрика', price: 135, stock: 14, unit: 'шт', icon: 'socket', desc: 'Накладной монтаж, степень защиты IP20.' },
  { sku: 'EL-230', name: 'Лампа светодиодная LED E27 12Вт 4000К нейтральный свет', category: 'Электрика', price: 95, stock: 64, unit: 'шт', badge: 'Акция', icon: 'lamp', desc: 'Аналог лампы накаливания 100 Вт, без мерцания.' },
  { sku: 'EL-238', name: 'Изолента ПВХ синяя 15 мм х 20 м', category: 'Электрика', price: 55, stock: 50, unit: 'шт', icon: 'cable', desc: 'Морозостойкая, высокая адгезия.' },
  { sku: 'EL-244', name: 'Клемма соединительная WAGO 221-413 (3 контакта)', category: 'Электрика', price: 48, stock: 0, unit: 'шт', icon: 'breaker', desc: 'Многоразовая рычажная клемма для проводов до 4 мм².' },

  { sku: 'KR-301', name: 'Гвозди строительные 100х4.0 мм', category: 'Крепёж', price: 240, stock: 35, unit: 'кг', badge: 'Хит', icon: 'nails', desc: 'Развесные строительные гвозди, фасуем от 0.5 кг.' },
  { sku: 'KR-302', name: 'Гвозди строительные 70х3.0 мм', category: 'Крепёж', price: 245, stock: 22, unit: 'кг', icon: 'nails', desc: 'Для обрешётки, настила и деревянных конструкций.' },
  { sku: 'KR-305', name: 'Гвозди финишные оцинкованные 40 мм (100 г)', category: 'Крепёж', price: 65, stock: 18, unit: 'уп', icon: 'nails', desc: 'Маленькая шляпка, не ржавеют, для вагонки и наличников.' },
  { sku: 'KR-310', name: 'Саморезы по дереву чёрные 3.5х51 мм (100 шт)', category: 'Крепёж', price: 110, stock: 40, unit: 'уп', icon: 'screws', desc: 'Фосфатированные, редкий шаг резьбы, бита PH2.' },
  { sku: 'KR-314', name: 'Саморезы кровельные оцинкованные 4.8х35 с шайбой', category: 'Крепёж', price: 4, stock: 950, unit: 'шт', icon: 'screws', desc: 'Со сверлом и резиновой EPDM-шайбой.' },
  { sku: 'KR-320', name: 'Дюбель-гвоздь 6х40 мм потай (50 шт)', category: 'Крепёж', price: 130, stock: 16, unit: 'уп', icon: 'screws', desc: 'Полипропиленовый дюбель + оцинкованный гвоздь-шуруп.' },
  { sku: 'KR-325', name: 'Уголок крепёжный усиленный 70х70х55 мм', category: 'Крепёж', price: 42, stock: 55, unit: 'шт', icon: 'screws', desc: 'Толщина стали 2 мм, с ребром жёсткости.' },

  { sku: 'HZ-401', name: 'Ведро строительное пластиковое 12 л с мерной шкалой', category: 'Хозтовары', price: 190, stock: 15, unit: 'шт', icon: 'bucket', desc: 'Ударопрочный пластик, металлическая ручка.' },
  { sku: 'HZ-405', name: 'Перчатки рабочие х/б с ПВХ точкой (10 класс)', category: 'Хозтовары', price: 32, stock: 120, unit: 'пар', icon: 'bucket', desc: '4 нити, плотная вязка, противоскользящее покрытие.' },
  { sku: 'HZ-412', name: 'Пена монтажная бытовая 750 мл всесезонная', category: 'Хозтовары', price: 480, stock: 9, unit: 'шт', badge: 'Хит', icon: 'foam', desc: 'Выход до 45 л, работа до -10 °C, с трубочкой.' },
  { sku: 'HZ-418', name: 'Герметик силиконовый санитарный белый 280 мл', category: 'Хозтовары', price: 340, stock: 6, unit: 'шт', icon: 'foam', desc: 'С антигрибковыми добавками, для ванной и кухни.' },
  { sku: 'HZ-422', name: 'Скотч малярный 48 мм х 40 м', category: 'Хозтовары', price: 145, stock: 24, unit: 'шт', icon: 'bucket', desc: 'Не оставляет следов клея после снятия.' },

  { sku: 'IN-501', name: 'Рулетка измерительная 5 м х 19 мм с магнитом', category: 'Инструмент', price: 310, stock: 8, unit: 'шт', icon: 'tool', desc: 'Обрезиненный корпус, фиксатор ленты, магнитный зацеп.' },
  { sku: 'IN-508', name: 'Нож строительный 18 мм с металлической направляющей', category: 'Инструмент', price: 140, stock: 11, unit: 'шт', icon: 'tool', desc: 'Усиленный корпус, винтовой фиксатор лезвия.' },
  { sku: 'IN-515', name: 'Молоток слесарный 500 г с фиберглассовой ручкой', category: 'Инструмент', price: 540, stock: 5, unit: 'шт', icon: 'tool', desc: 'Кованый боёк, противоскользящая рукоятка.' }
];

let allProducts = [];
let activeCategory = 'Все';
let searchQuery = '';
let inStockOnly = false;
let sortBy = 'default';
let viewMode = 'grid';
let visibleCount = PAGE_SIZE;
let isStressMode = false;

let cart = {};
try {
  cart = JSON.parse(localStorage.getItem('nd_cart') || '{}');
} catch (e) {
  cart = {};
}

// Элементы DOM
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const sidebarCategories = document.getElementById('sidebarCategories');
const drawerCategories = document.getElementById('drawerCategories');
const catalogGrid = document.getElementById('catalogGrid');
const resultsCount = document.getElementById('resultsCount');
const syncStatus = document.getElementById('syncStatus');
const emptyState = document.getElementById('emptyState');
const loadMoreWrap = document.getElementById('loadMoreWrap');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const inStockCheckbox = document.getElementById('inStockOnly');
const sortSelect = document.getElementById('sortSelect');
const viewGridBtn = document.getElementById('viewGridBtn');
const viewListBtn = document.getElementById('viewListBtn');
const demoStressBtn = document.getElementById('demoStressBtn');
const brandReset = document.getElementById('brandReset');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');

// Каталог-дровер (мобильный)
const catalogDrawer = document.getElementById('catalogDrawer');
const catalogToggleBtn = document.getElementById('catalogToggleBtn');
const closeCatalogBtn = document.getElementById('closeCatalogBtn');
const catalogBackdrop = document.getElementById('catalogBackdrop');

// Модалка товара
const productModal = document.getElementById('productModal');
const productBackdrop = document.getElementById('productBackdrop');
const closeProductBtn = document.getElementById('closeProductBtn');
const productModalBody = document.getElementById('productModalBody');

// Модалка фото
const photoModal = document.getElementById('photoModal');
const photoBackdrop = document.getElementById('photoBackdrop');
const closePhotoBtn = document.getElementById('closePhotoBtn');
const photoInput = document.getElementById('photoInput');
const photoPreview = document.getElementById('photoPreview');
const fileLabelText = document.getElementById('fileLabelText');
const photoForm = document.getElementById('photoForm');

// Корзина
const cartDrawer = document.getElementById('cartDrawer');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartBackdrop = document.getElementById('cartBackdrop');
const cartBadge = document.getElementById('cartBadge');
const cartItemsEl = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartTotalSum = document.getElementById('cartTotalSum');
const sendCartMaxBtn = document.getElementById('sendCartMaxBtn');
const copyCartBtn = document.getElementById('copyCartBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const toastEl = document.getElementById('toast');

let toastTimer = null;
function showToast(text) {
  toastEl.textContent = text;
  toastEl.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.hidden = true;
  }, 3200);
}

// Переход напрямую к контакту в MAX + копирование текста сообщения
function openMaxContact(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
  showToast('Текст скопирован! Открываем чат MAX (' + STORE_MAX_PHONE + ')');
  showToast('Текст скопирован! Открываем чат MAX (' + STORE_MAX_PHONE + ')');
  window.open(STORE_MAX_CONTACT_URL, '_blank', 'noopener');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function levenshtein(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 3;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[b.length][a.length];
}

function getMatchScore(product, query) {
  const q = query.trim().toLowerCase();
  if (!q) return 2;

  const name = product.name.toLowerCase();
  const sku = product.sku.toLowerCase();
  const cat = product.category.toLowerCase();

  if (sku === q || name.includes(q)) return 2;

  const queryWords = q.split(/\s+/).filter(Boolean);
  const targetWords = (name + ' ' + sku + ' ' + cat).split(/[\s\-/,"()]+/).filter(Boolean);

  if (queryWords.every(qw => targetWords.some(tw => tw.includes(qw)))) return 2;

  let matched = 0;
  for (const qw of queryWords) {
    if (qw.length < 3) continue;
    const foundSimilar = targetWords.some(tw => {
      if (tw.includes(qw) || qw.includes(tw)) return true;
      const dist = levenshtein(qw, tw.slice(0, qw.length + 1));
      return dist <= (qw.length >= 5 ? 2 : 1);
    });
    if (foundSimilar) matched++;
  }
  return matched > 0 ? 1 : 0;
}

function generateStressCatalog() {
  const sizes = ['10 мм', '15 мм', '20 мм', '25 мм', '32 мм', '40 мм', '50 мм', '1/2"', '3/4"', '1"'];
  const brands = ['IEK', 'Valtec', 'Зубр', 'ТехноНиколь', 'Makita', 'TDM', 'КВТ', 'Stayer'];
  const generated = [...DEMO_PRODUCTS];
  let idx = 1;

  while (generated.length < 8000) {
    const base = DEMO_PRODUCTS[idx % DEMO_PRODUCTS.length];
    const size = sizes[idx % sizes.length];
    const brand = brands[(idx * 3) % brands.length];
    generated.push({
      sku: base.sku.split('-')[0] + '-' + (1000 + idx),
      name: `${base.name.split('(')[0].trim()} ${size} ${brand}`,
      category: base.category,
      price: Math.max(25, base.price + ((idx * 17) % 450) - 100),
      stock: idx % 9 === 0 ? 0 : (idx % 45) + 1,
      unit: base.unit,
      icon: base.icon,
      desc: base.desc
    });
    idx++;
  }
  return generated;
}

function loadProducts() {
  if (!SHEET_CSV_URL) {
    allProducts = isStressMode ? generateStressCatalog() : DEMO_PRODUCTS;
    syncStatus.textContent = isStressMode
      ? 'Тест: 8 000 поз.'
      : 'Демо-база (' + allProducts.length + ' поз.)';
    renderCategories();
    renderCatalog();
    updateCartUI();
    return;
  }

  syncStatus.textContent = 'Загрузка...';
  const url = SHEET_CSV_URL + (SHEET_CSV_URL.includes('?') ? '&' : '?') + 't=' + Date.now();

  Papa.parse(url, {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(res) {
      allProducts = res.data
        .filter(row => row.name || row['Название'])
        .map((row, idx) => ({
          sku: String(row.sku || row['Артикул'] || 'ID-' + (idx + 1)).trim(),
          name: String(row.name || row['Название'] || '').trim(),
          category: String(row.category || row['Категория'] || 'Разное').trim(),
          price: Number(String(row.price || row['Цена'] || 0).replace(/[^\d.]/g, '')) || 0,
          stock: Number(String(row.stock || row['Остаток'] || 0).replace(/[^\d]/g, '')) || 0,
          unit: String(row.unit || row['Ед'] || 'шт').trim(),
          image: String(row.image || row['Фото'] || '').trim(),
          desc: String(row.desc || row['Описание'] || '').trim()
        }));

      syncStatus.textContent = 'Актуально';
      renderCategories();
      renderCatalog();
      updateCartUI();
    },
    error: function() {
      syncStatus.textContent = 'Демо-база';
      allProducts = DEMO_PRODUCTS;
      renderCategories();
      renderCatalog();
      updateCartUI();
    }
  });
}

function selectCategory(cat) {
  activeCategory = cat;
  visibleCount = PAGE_SIZE;
  renderCategories();
  renderCatalog();
  catalogDrawer.hidden = true;
}

function renderCategories() {
  const counts = { 'Все': allProducts.length };
  for (const p of allProducts) {
    counts[p.category] = (counts[p.category] || 0) + 1;
  }
  const cats = Object.keys(counts);

  const listHtml = cats.map(cat => `
    <button type="button" class="sidebar-btn ${cat === activeCategory ? 'active' : ''}" data-cat="${escapeHtml(cat)}">
      <span>${escapeHtml(cat)}</span>
      <span>${counts[cat]}</span>
    </button>
  `).join('');

  sidebarCategories.innerHTML = listHtml;
  drawerCategories.innerHTML = listHtml;

  document.querySelectorAll('[data-cat]').forEach(btn => {
    btn.addEventListener('click', () => selectCategory(btn.dataset.cat));
  });
}

function getStockInfo(item) {
  if (item.stock <= 0) return { cls: 'stock-out', text: 'Под заказ' };
  if (item.stock <= 5) return { cls: 'stock-low', text: `Мало: ${item.stock} ${item.unit}` };
  return { cls: 'stock-ok', text: `В наличии: ${item.stock} ${item.unit}` };
}

function createCardHtml(item) {
  const stock = getStockInfo(item);
  const imgSrc = item.image || getFallbackImage(item);
  const qty = cart[item.sku] || 0;

  const actionHtml = qty > 0
    ? `<div class="qty-control">
         <button class="qty-btn" type="button" data-qty-dec="${escapeHtml(item.sku)}">−</button>
         <span class="qty-val">${qty} ${escapeHtml(item.unit)}</span>
         <button class="qty-btn" type="button" data-qty-inc="${escapeHtml(item.sku)}">+</button>
       </div>`
    : `<button class="btn-add" type="button" data-add-sku="${escapeHtml(item.sku)}">В заказ</button>`;

  return `
    <article class="product-card">
      <div class="product-thumb" data-open-sku="${escapeHtml(item.sku)}">
        ${item.badge ? `<span class="thumb-badge">${escapeHtml(item.badge)}</span>` : ''}
        <img src="${imgSrc}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.src='${getFallbackImage(item)}'">
      </div>

      <div class="product-info-col">
        <div class="product-meta">
          <span>${escapeHtml(item.category)}</span>
          <button class="sku-btn" type="button" data-copy-sku="${escapeHtml(item.sku)}" title="Скопировать артикул">
            ${escapeHtml(item.sku)}
          </button>
        </div>
        <div class="product-name" data-open-sku="${escapeHtml(item.sku)}">${escapeHtml(item.name)}</div>
      </div>

      <div class="product-bottom">
        <div class="price-row">
          <div class="price">${item.price.toLocaleString('ru-RU')} ₽ <small>/ ${escapeHtml(item.unit)}</small></div>
          <span class="stock ${stock.cls}">${stock.text}</span>
        </div>
        <div class="card-actions">${actionHtml}</div>
      </div>
    </article>
  `;
}

function sortList(list) {
  if (sortBy === 'price-asc') return list.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') return list.sort((a, b) => b.price - a.price);
  if (sortBy === 'name-asc') return list.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  return list;
}

function renderCatalog() {
  catalogGrid.classList.toggle('list-view', viewMode === 'list');

  let filtered = activeCategory === 'Все'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  if (inStockOnly) {
    filtered = filtered.filter(p => p.stock > 0);
  }

  let exact = [];
  let similar = [];

  if (!searchQuery.trim()) {
    exact = [...filtered];
  } else {
    for (const item of filtered) {
      const score = getMatchScore(item, searchQuery);
      if (score === 2) exact.push(item);
      else if (score === 1) similar.push(item);
    }
  }

  exact = sortList(exact);
  similar = sortList(similar);

  const totalFound = exact.length + similar.length;
  resultsCount.textContent = `Найдено: ${totalFound.toLocaleString('ru-RU')} поз.`;

  if (totalFound === 0) {
    catalogGrid.innerHTML = '';
    emptyState.hidden = false;
    loadMoreWrap.hidden = true;
    return;
  }

  emptyState.hidden = true;
  let html = '';
  let rendered = 0;

  if (exact.length > 0) {
    const slice = exact.slice(0, visibleCount);
    html += slice.map(createCardHtml).join('');
    rendered += slice.length;
  }

  if (similar.length > 0 && rendered < visibleCount) {
    const slice = similar.slice(0, visibleCount - rendered);
    if (searchQuery.trim()) {
      html += '<div class="section-divider">Похожие товары</div>';
    }
    html += slice.map(createCardHtml).join('');
    rendered += slice.length;
  }

  catalogGrid.innerHTML = html;
  loadMoreWrap.hidden = rendered >= totalFound;
}

catalogGrid.addEventListener('click', e => {
  const copyBtn = e.target.closest('[data-copy-sku]');
  if (copyBtn) {
    navigator.clipboard?.writeText(copyBtn.dataset.copySku);
    showToast('Артикул ' + copyBtn.dataset.copySku + ' скопирован');
    return;
  }

  const addBtn = e.target.closest('[data-add-sku]');
  if (addBtn) {
    changeCartQty(addBtn.dataset.addSku, 1);
    return;
  }

  const incBtn = e.target.closest('[data-qty-inc]');
  if (incBtn) {
    changeCartQty(incBtn.dataset.qtyInc, 1);
    return;
  }

  const decBtn = e.target.closest('[data-qty-dec]');
  if (decBtn) {
    changeCartQty(decBtn.dataset.qtyDec, -1);
    return;
  }

  const openTrigger = e.target.closest('[data-open-sku]');
  if (openTrigger) {
    openProductModal(openTrigger.dataset.openSku);
  }
});

function openProductModal(sku) {
  const item = allProducts.find(p => p.sku === sku);
  if (!item) return;

  const stock = getStockInfo(item);
  const imgSrc = item.image || getFallbackImage(item);
  const askText = `Здравствуйте! Интересует товар: ${item.name} (арт. ${item.sku}), цена ${item.price} ₽`;

  productModalBody.innerHTML = `
    <div class="prod-modal-grid">
      <div class="prod-modal-img">
        <img src="${imgSrc}" alt="${escapeHtml(item.name)}">
      </div>
      <div>
        <div class="product-meta">
          <span>${escapeHtml(item.category)}</span>
          <span class="sku-btn">${escapeHtml(item.sku)}</span>
        </div>
        <h2 class="prod-modal-title">${escapeHtml(item.name)}</h2>
        <div class="price" style="margin-bottom: 6px;">${item.price.toLocaleString('ru-RU')} ₽ <small>/ ${escapeHtml(item.unit)}</small></div>
        <span class="stock ${stock.cls}">${stock.text}</span>

        <ul class="prod-specs">
          <li><span>Артикул</span><strong>${escapeHtml(item.sku)}</strong></li>
          <li><span>Единица</span><strong>${escapeHtml(item.unit)}</strong></li>
          <li><span>Категория</span><strong>${escapeHtml(item.category)}</strong></li>
        </ul>

        ${item.desc ? `<p class="form-note" style="margin-bottom: 14px;">${escapeHtml(item.desc)}</p>` : ''}

        <div class="prod-modal-actions">
          <button class="btn-primary" style="flex:1;" type="button" id="modalAddBtn">Добавить в заказ</button>
          <button class="btn-outline" type="button" id="modalAskMaxBtn">Написать в MAX</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modalAddBtn').addEventListener('click', () => {
    changeCartQty(item.sku, 1);
    productModal.hidden = true;
    showToast('Добавлено в заказ');
  });

  document.getElementById('modalAskMaxBtn').addEventListener('click', () => {
    openMaxContact(askText);
  });

  productModal.hidden = false;
}

closeProductBtn.addEventListener('click', () => (productModal.hidden = true));
productBackdrop.addEventListener('click', () => (productModal.hidden = true));

function saveCart() {
  try {
    localStorage.setItem('nd_cart', JSON.stringify(cart));
  } catch (e) {}
}

function changeCartQty(sku, delta) {
  const next = (cart[sku] || 0) + delta;
  if (next <= 0) delete cart[sku];
  else cart[sku] = next;
  saveCart();
  updateCartUI();
  renderCatalog();
}

function getCartRows() {
  const rows = [];
  for (const [sku, qty] of Object.entries(cart)) {
    const prod = allProducts.find(p => p.sku === sku);
    if (prod) rows.push({ prod, qty });
  }
  return rows;
}

function updateCartUI() {
  const rows = getCartRows();
  const totalCount = rows.reduce((acc, r) => acc + r.qty, 0);
  const totalSum = rows.reduce((acc, r) => acc + r.prod.price * r.qty, 0);

  cartBadge.textContent = totalCount;
  cartBadge.hidden = totalCount === 0;
  cartTotalSum.textContent = totalSum.toLocaleString('ru-RU') + ' ₽';

  if (rows.length === 0) {
    cartItemsEl.innerHTML = '<div class="cart-empty">Список заказа пуст.<br>Добавляйте нужные товары, чтобы отправить их менеджеру в MAX одним сообщением.</div>';
    cartFooter.hidden = true;
    return;
  }

  cartFooter.hidden = false;
  cartItemsEl.innerHTML = rows.map(({ prod, qty }) => `
    <div class="cart-item">
      <div>
        <div class="cart-item-name">${escapeHtml(prod.name)}</div>
        <div class="cart-item-sku">Арт: ${escapeHtml(prod.sku)} • ${prod.price.toLocaleString('ru-RU')} ₽ / ${escapeHtml(prod.unit)}</div>
      </div>
      <div class="cart-item-bottom">
        <div class="cart-mini-qty">
          <button type="button" data-cart-dec="${escapeHtml(prod.sku)}">−</button>
          <span>${qty} ${escapeHtml(prod.unit)}</span>
          <button type="button" data-cart-inc="${escapeHtml(prod.sku)}">+</button>
        </div>
        <div class="cart-item-price">${(prod.price * qty).toLocaleString('ru-RU')} ₽</div>
      </div>
    </div>
  `).join('');
}

cartItemsEl.addEventListener('click', e => {
  const inc = e.target.closest('[data-cart-inc]');
  if (inc) changeCartQty(inc.dataset.cartInc, 1);
  const dec = e.target.closest('[data-cart-dec]');
  if (dec) changeCartQty(dec.dataset.cartDec, -1);
});

function buildOrderText() {
  const rows = getCartRows();
  const lines = ['Здравствуйте! Заказ из каталога «Новый Дом»:'];
  let total = 0;

  rows.forEach(({ prod, qty }, i) => {
    const sum = prod.price * qty;
    total += sum;
    lines.push(`${i + 1}. ${prod.name} (арт. ${prod.sku}) — ${qty} ${prod.unit} × ${prod.price} ₽ = ${sum} ₽`);
  });

  lines.push(`\nИтого: ${total.toLocaleString('ru-RU')} ₽`);
  const phone = document.getElementById('cartPhone').value.trim();
  const comment = document.getElementById('cartComment').value.trim();
  if (phone) lines.push('Телефон: ' + phone);
  if (comment) lines.push('Комментарий: ' + comment);
  return lines.join('\n');
}

sendCartMaxBtn.addEventListener('click', () => {
  openMaxContact(buildOrderText());
});

copyCartBtn.addEventListener('click', () => {
  navigator.clipboard?.writeText(buildOrderText());
  showToast('Список заказа скопирован');
});

clearCartBtn.addEventListener('click', () => {
  cart = {};
  saveCart();
  updateCartUI();
  renderCatalog();
  showToast('Список очищен');
});

openCartBtn.addEventListener('click', () => {
  updateCartUI();
  cartDrawer.hidden = false;
});
closeCartBtn.addEventListener('click', () => (cartDrawer.hidden = true));
cartBackdrop.addEventListener('click', () => (cartDrawer.hidden = true));

catalogToggleBtn.addEventListener('click', () => (catalogDrawer.hidden = false));
closeCatalogBtn.addEventListener('click', () => (catalogDrawer.hidden = true));
catalogBackdrop.addEventListener('click', () => (catalogDrawer.hidden = true));

let searchTimer = null;
searchInput.addEventListener('input', () => {
  clearSearch.hidden = !searchInput.value;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = searchInput.value;
    visibleCount = PAGE_SIZE;
    renderCatalog();
  }, 140);
});

clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearch.hidden = true;
  visibleCount = PAGE_SIZE;
  renderCatalog();
  searchInput.focus();
});

inStockCheckbox.addEventListener('change', () => {
  inStockOnly = inStockCheckbox.checked;
  visibleCount = PAGE_SIZE;
  renderCatalog();
});

sortSelect.addEventListener('change', () => {
  sortBy = sortSelect.value;
  renderCatalog();
});

viewGridBtn.addEventListener('click', () => {
  viewMode = 'grid';
  viewGridBtn.classList.add('active');
  viewListBtn.classList.remove('active');
  renderCatalog();
});

viewListBtn.addEventListener('click', () => {
  viewMode = 'list';
  viewListBtn.classList.add('active');
  viewGridBtn.classList.remove('active');
  renderCatalog();
});

loadMoreBtn.addEventListener('click', () => {
  visibleCount += PAGE_SIZE;
  renderCatalog();
});

demoStressBtn.addEventListener('click', () => {
  isStressMode = !isStressMode;
  demoStressBtn.textContent = isStressMode ? 'Вернуть 30 поз.' : 'Проверить на 8 000 товарах';
  visibleCount = PAGE_SIZE;
  loadProducts();
  showToast(isStressMode ? 'Загружено 8 000 тестовых позиций' : 'Возвращена базовая демо-витрина');
});

function resetAllFilters() {
  activeCategory = 'Все';
  searchQuery = '';
  searchInput.value = '';
  clearSearch.hidden = true;
  inStockOnly = false;
  inStockCheckbox.checked = false;
  sortBy = 'default';
  sortSelect.value = 'default';
  visibleCount = PAGE_SIZE;
  renderCategories();
  renderCatalog();
}

brandReset.addEventListener('click', e => {
  e.preventDefault();
  resetAllFilters();
});
resetFiltersBtn.addEventListener('click', resetAllFilters);

// Модалка "По фото"
function openPhotoModal() {
  photoModal.hidden = false;
}

['heroPhotoBtn', 'emptyPhotoBtn'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', openPhotoModal);
});

closePhotoBtn.addEventListener('click', () => (photoModal.hidden = true));
photoBackdrop.addEventListener('click', () => (photoModal.hidden = true));

photoInput.addEventListener('change', () => {
  const file = photoInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    photoPreview.src = e.target.result;
    photoPreview.hidden = false;
    fileLabelText.textContent = 'Нажмите, чтобы заменить фото';
  };
  reader.readAsDataURL(file);
});

photoForm.addEventListener('submit', e => {
  e.preventDefault();
  const comment = document.getElementById('photoComment').value.trim();
  const phone = document.getElementById('photoPhone').value.trim();
  const parts = ['Здравствуйте! Хочу подобрать деталь по фото.'];
  if (comment) parts.push('Комментарий: ' + comment);
  if (phone) parts.push('Телефон: ' + phone);

  openMaxContact(parts.join('\n'));
  photoModal.hidden = true;
});

loadProducts();
