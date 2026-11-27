// Сюда потом вставляется ссылка на опубликованную Google Таблицу (CSV)
// или путь к локальному файлу './catalog.csv'
const SHEET_CSV_URL = '';

// Контакт магазина для кнопки "Уточнить" (например, Telegram username без @)
const STORE_TG_USERNAME = 'novydom_shop';

const PAGE_SIZE = 30;

// Тестовые данные, пока не подключена таблица
const DEMO_PRODUCTS = [
  { sku: 'SN-101', name: 'Смеситель для кухни однорычажный хром', category: 'Сантехника', price: 1890, stock: 7, unit: 'шт' },
  { sku: 'SN-102', name: 'Смеситель для ванной с длинным изливом', category: 'Сантехника', price: 2650, stock: 4, unit: 'шт' },
  { sku: 'SN-108', name: 'Кран шаровой 1/2" ВР/НР бабочка латунь', category: 'Сантехника', price: 320, stock: 45, unit: 'шт' },
  { sku: 'SN-114', name: 'Подводка гибкая для воды 60 см 1/2" гайка-гайка', category: 'Сантехника', price: 165, stock: 32, unit: 'шт' },
  { sku: 'SN-120', name: 'Сифон бутылочный для раковины 40 мм с выпуском', category: 'Сантехника', price: 290, stock: 12, unit: 'шт' },
  { sku: 'SN-125', name: 'Лента ФУМ 12 мм х 10 м (0.1 мм)', category: 'Сантехника', price: 45, stock: 80, unit: 'шт' },
  { sku: 'SN-131', name: 'Прокладка силиконовая 1/2" (набор 5 шт)', category: 'Сантехника', price: 60, stock: 3, unit: 'уп' },

  { sku: 'EL-201', name: 'Кабель ВВГнг-LS 3х2.5 ГОСТ (бухта / отрез)', category: 'Электрика', price: 118, stock: 340, unit: 'м' },
  { sku: 'EL-202', name: 'Кабель ВВГнг-LS 3х1.5 ГОСТ', category: 'Электрика', price: 78, stock: 210, unit: 'м' },
  { sku: 'EL-209', name: 'Автоматический выключатель 16А 1P C (IEK)', category: 'Электрика', price: 245, stock: 19, unit: 'шт' },
  { sku: 'EL-215', name: 'Розетка двойная с заземлением скрытая белая', category: 'Электрика', price: 210, stock: 28, unit: 'шт' },
  { sku: 'EL-221', name: 'Выключатель одноклавишный наружный белый', category: 'Электрика', price: 135, stock: 14, unit: 'шт' },
  { sku: 'EL-230', name: 'Лампа светодиодная LED E27 12Вт 4000К нейтральный свет', category: 'Электрика', price: 95, stock: 64, unit: 'шт' },
  { sku: 'EL-238', name: 'Изолента ПВХ синяя 15 мм х 20 м', category: 'Электрика', price: 55, stock: 50, unit: 'шт' },
  { sku: 'EL-244', name: 'Клемма соединительная WAGO 221-413 (3 контакта)', category: 'Электрика', price: 48, stock: 0, unit: 'шт' },

  { sku: 'KR-301', name: 'Гвозди строительные 100х4.0 мм', category: 'Крепёж', price: 240, stock: 35, unit: 'кг' },
  { sku: 'KR-302', name: 'Гвозди строительные 70х3.0 мм', category: 'Крепёж', price: 245, stock: 22, unit: 'кг' },
  { sku: 'KR-305', name: 'Гвозди финишные оцинкованные 40 мм (100 г)', category: 'Крепёж', price: 65, stock: 18, unit: 'уп' },
  { sku: 'KR-310', name: 'Саморезы по дереву чёрные 3.5х51 мм (100 шт)', category: 'Крепёж', price: 110, stock: 40, unit: 'уп' },
  { sku: 'KR-314', name: 'Саморезы кровельные оцинкованные 4.8х35 с шайбой', category: 'Крепёж', price: 4, stock: 950, unit: 'шт' },
  { sku: 'KR-320', name: 'Дюбель-гвоздь 6х40 мм потай (50 шт)', category: 'Крепёж', price: 130, stock: 16, unit: 'уп' },
  { sku: 'KR-325', name: 'Уголок крепёжный усиленный 70х70х55 мм', category: 'Крепёж', price: 42, stock: 55, unit: 'шт' },

  { sku: 'HZ-401', name: 'Ведро строительное пластиковое 12 л с мерной шкалой', category: 'Хозтовары', price: 190, stock: 15, unit: 'шт' },
  { sku: 'HZ-405', name: 'Перчатки рабочие х/б с ПВХ точкой (10 класс)', category: 'Хозтовары', price: 32, stock: 120, unit: 'пар' },
  { sku: 'HZ-412', name: 'Пена монтажная бытовая 750 мл всесезонная', category: 'Хозтовары', price: 480, stock: 9, unit: 'шт' },
  { sku: 'HZ-418', name: 'Герметик силиконовый санитарный белый 280 мл', category: 'Хозтовары', price: 340, stock: 6, unit: 'шт' },
  { sku: 'HZ-422', name: 'Скотч малярный 48 мм х 40 м', category: 'Хозтовары', price: 145, stock: 24, unit: 'шт' },
  { sku: 'IN-501', name: 'Рулетка измерительная 5 м х 19 мм с магнитом', category: 'Инструмент', price: 310, stock: 8, unit: 'шт' },
  { sku: 'IN-508', name: 'Нож строительный 18 мм с металлической направляющей', category: 'Инструмент', price: 140, stock: 11, unit: 'шт' }
];

let allProducts = [];
let activeCategory = 'Все';
let searchQuery = '';
let visibleCount = PAGE_SIZE;

const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const categoriesEl = document.getElementById('categories');
const catalogGrid = document.getElementById('catalogGrid');
const resultsCount = document.getElementById('resultsCount');
const syncStatus = document.getElementById('syncStatus');
const emptyState = document.getElementById('emptyState');
const loadMoreWrap = document.getElementById('loadMoreWrap');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const reloadBtn = document.getElementById('reloadBtn');

// Модалка фото
const photoModal = document.getElementById('photoModal');
const openPhotoBtn = document.getElementById('openPhotoBtn');
const emptyPhotoBtn = document.getElementById('emptyPhotoBtn');
const closePhotoBtn = document.getElementById('closePhotoBtn');
const modalBackdrop = document.getElementById('modalBackdrop');
const photoInput = document.getElementById('photoInput');
const photoPreview = document.getElementById('photoPreview');
const fileLabelText = document.getElementById('fileLabelText');
const photoForm = document.getElementById('photoForm');

// Простой расчёт расстояния Левенштейна для поиска похожих слов с опечатками
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

// Оценивает совпадение товара с запросом:
// 2 = точное совпадение, 1 = похожее, 0 = не подходит
function getMatchScore(product, query) {
  const q = query.trim().toLowerCase();
  if (!q) return 2;

  const name = product.name.toLowerCase();
  const sku = product.sku.toLowerCase();
  const cat = product.category.toLowerCase();

  if (sku === q || name.includes(q)) return 2;

  const queryWords = q.split(/\s+/).filter(Boolean);
  const targetWords = (name + ' ' + sku + ' ' + cat).split(/[\s\-/,"()]+/).filter(Boolean);

  // Все слова из запроса нашлись как подстроки
  const allWordsIncluded = queryWords.every(qw =>
    targetWords.some(tw => tw.includes(qw))
  );
  if (allWordsIncluded) return 2;

  // Похожее совпадение: хотя бы часть слов совпала или есть опечатка 1-2 символа
  let matchedWords = 0;
  for (const qw of queryWords) {
    if (qw.length < 3) continue;
    const foundSimilar = targetWords.some(tw => {
      if (tw.includes(qw) || qw.includes(tw)) return true;
      const dist = levenshtein(qw, tw.slice(0, qw.length + 1));
      return dist <= (qw.length >= 5 ? 2 : 1);
    });
    if (foundSimilar) matchedWords++;
  }

  return matchedWords > 0 ? 1 : 0;
}

function loadProducts() {
  if (!SHEET_CSV_URL) {
    allProducts = DEMO_PRODUCTS;
    syncStatus.textContent = 'Демо-база (' + allProducts.length + ' поз.)';
    renderCategories();
    renderCatalog();
    return;
  }

  syncStatus.textContent = 'Обновление...';
  const urlWithNoCache = SHEET_CSV_URL + (SHEET_CSV_URL.includes('?') ? '&' : '?') + 't=' + Date.now();

  Papa.parse(urlWithNoCache, {
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
          unit: String(row.unit || row['Ед'] || 'шт').trim()
        }));

      const now = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
      syncStatus.textContent = 'Обновлено в ' + now;
      renderCategories();
      renderCatalog();
    },
    error: function() {
      syncStatus.textContent = 'Ошибка таблицы (демо)';
      allProducts = DEMO_PRODUCTS;
      renderCategories();
      renderCatalog();
    }
  });
}

function renderCategories() {
  const uniqueCats = ['Все', ...new Set(allProducts.map(p => p.category))];
  categoriesEl.innerHTML = '';

  uniqueCats.forEach(cat => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'cat-btn' + (cat === activeCategory ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      activeCategory = cat;
      visibleCount = PAGE_SIZE;
      renderCategories();
      renderCatalog();
    });
    categoriesEl.appendChild(btn);
  });
}

function createCardHtml(item) {
  let stockClass = 'stock-ok';
  let stockText = 'В наличии: ' + item.stock + ' ' + item.unit;

  if (item.stock <= 0) {
    stockClass = 'stock-out';
    stockText = 'Под заказ';
  } else if (item.stock <= 5) {
    stockClass = 'stock-low';
    stockText = 'Осталось мало: ' + item.stock + ' ' + item.unit;
  }

  const msg = encodeURIComponent(
    `Здравствуйте! Подскажите по товару: ${item.name} (арт. ${item.sku}), цена ${item.price} ₽`
  );
  const tgLink = `https://t.me/${STORE_TG_USERNAME}?text=${msg}`;

  return `
    <article class="product-card">
      <div class="product-meta">
        <span>${escapeHtml(item.category)}</span>
        <span class="sku">${escapeHtml(item.sku)}</span>
      </div>
      <div class="product-name">${escapeHtml(item.name)}</div>
      <div class="product-bottom">
        <div class="price-wrap">
          <div class="price">${item.price.toLocaleString('ru-RU')} ₽ <small>/ ${escapeHtml(item.unit)}</small></div>
          <span class="stock ${stockClass}">${stockText}</span>
        </div>
        <a class="btn-order" href="${tgLink}" target="_blank" rel="noopener">Уточнить</a>
      </div>
    </article>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderCatalog() {
  const byCategory = activeCategory === 'Все'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  const exact = [];
  const similar = [];

  for (const item of byCategory) {
    const score = getMatchScore(item, searchQuery);
    if (score === 2) exact.push(item);
    else if (score === 1) similar.push(item);
  }

  const totalFound = exact.length + similar.length;
  resultsCount.textContent = 'Найдено товаров: ' + totalFound;

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
    const exactSlice = exact.slice(0, visibleCount);
    html += exactSlice.map(createCardHtml).join('');
    rendered += exactSlice.length;
  }

  if (similar.length > 0 && rendered < visibleCount) {
    const remaining = visibleCount - rendered;
    const similarSlice = similar.slice(0, remaining);
    if (searchQuery.trim()) {
      html += '<div class="section-divider">Похожие товары</div>';
    }
    html += similarSlice.map(createCardHtml).join('');
    rendered += similarSlice.length;
  }

  catalogGrid.innerHTML = html;
  loadMoreWrap.hidden = rendered >= totalFound;
}

// События поиска (с небольшой задержкой, чтобы на 8000 товарах не дёргалось)
let searchTimer = null;
searchInput.addEventListener('input', () => {
  clearSearch.hidden = !searchInput.value;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = searchInput.value;
    visibleCount = PAGE_SIZE;
    renderCatalog();
  }, 150);
});

clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearch.hidden = true;
  visibleCount = PAGE_SIZE;
  renderCatalog();
  searchInput.focus();
});

loadMoreBtn.addEventListener('click', () => {
  visibleCount += PAGE_SIZE;
  renderCatalog();
});

reloadBtn.addEventListener('click', loadProducts);

// Модалка "По фото"
function openPhotoModal() {
  photoModal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closePhotoModal() {
  photoModal.hidden = true;
  document.body.style.overflow = '';
}

openPhotoBtn.addEventListener('click', openPhotoModal);
emptyPhotoBtn.addEventListener('click', openPhotoModal);
closePhotoBtn.addEventListener('click', closePhotoModal);
modalBackdrop.addEventListener('click', closePhotoModal);

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

  // Для продакшена здесь отправляется FormData на твоего TG-бота.
  // Для демо открываем чат с готовым текстом.
  const textParts = ['Здравствуйте! Хочу подобрать деталь по фото.'];
  if (comment) textParts.push('Комментарий: ' + comment);
  if (phone) textParts.push('Телефон: ' + phone);

  const tgUrl = `https://t.me/${STORE_TG_USERNAME}?text=${encodeURIComponent(textParts.join('\n'))}`;
  window.open(tgUrl, '_blank');
  closePhotoModal();
});

loadProducts();
