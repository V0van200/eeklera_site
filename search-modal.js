// Модальный поиск по сайту
(function() {
  const modal = document.getElementById('searchModal');
  const trigger = document.getElementById('searchTrigger');
  const closeBtn = document.getElementById('searchClose');
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  
  let currentIndex = -1;
  let searchData = [];

  // Открыть модалку
  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 100);
  }

  // Закрыть модалку
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    input.value = '';
    showEmptyState();
    currentIndex = -1;
  }

  // События
  trigger?.addEventListener('click', openModal);
  closeBtn?.addEventListener('click', closeModal);
  
  modal?.querySelector('.search-modal-backdrop')?.addEventListener('click', closeModal);

  // Клавиатурные шорткаты
  document.addEventListener('keydown', (e) => {
    // Ctrl+K или Cmd+K - открыть поиск
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openModal();
    }
    
    // ESC - закрыть
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }

    // Навигация стрелками
    if (modal.classList.contains('active')) {
      const items = results.querySelectorAll('.search-result-item');
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentIndex = Math.min(currentIndex + 1, items.length - 1);
        updateActive(items);
      }
      
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentIndex = Math.max(currentIndex - 1, -1);
        updateActive(items);
      }
      
      if (e.key === 'Enter' && currentIndex >= 0) {
        e.preventDefault();
        items[currentIndex]?.click();
      }
    }
  });

  // Обновить активный элемент
  function updateActive(items) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === currentIndex);
      if (i === currentIndex) {
        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    });
  }

  // Поиск при вводе
  input?.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    
    if (!query) {
      showEmptyState();
      return;
    }

    performSearch(query);
  });

  // Пустое состояние
  function showEmptyState() {
    results.innerHTML = `
      <div class="search-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <p>Начните вводить для поиска</p>
      </div>
    `;
  }

  // Выполнить поиск
  function performSearch(query) {
    // Данные для поиска (можно расширить)
    const pages = [
      { 
        title: 'Главная', 
        desc: 'EEKLERA — актриса, модель, стример, музыкальный артист', 
        url: 'index.html',
        category: 'Главное',
        keywords: ['главная', 'главное', 'eeklera', 'эклера', 'колягина', 'валерия']
      },
      { 
        title: 'Биография', 
        desc: 'Полная биография: детство, образование, карьера', 
        url: 'biography.html',
        category: 'Главное',
        keywords: ['биография', 'био', 'о себе', 'история', 'жизнь', 'детство']
      },
      { 
        title: 'Актёрская деятельность', 
        desc: 'Фильмография, роли, актёрские работы', 
        url: 'acting.html',
        category: 'Деятельность',
        keywords: ['актриса', 'актёрка', 'фильмы', 'роли', 'кино', 'сериалы']
      },
      { 
        title: 'Музыка', 
        desc: 'Дискография, релизы, музыкальные проекты', 
        url: 'music.html',
        category: 'Деятельность',
        keywords: ['музыка', 'песни', 'релизы', 'треки', 'альбомы']
      },
      { 
        title: 'Модельная деятельность', 
        desc: 'Модельные съёмки, портфолио, фотосессии', 
        url: 'modeling.html',
        category: 'Деятельность',
        keywords: ['модель', 'модельная', 'фото', 'съёмки', 'портфолио']
      },
      { 
        title: 'Стриминг', 
        desc: 'Twitch стримы, онлайн трансляции', 
        url: 'streaming.html',
        category: 'Деятельность',
        keywords: ['стриминг', 'стримы', 'twitch', 'твич', 'онлайн']
      },
      { 
        title: 'События', 
        desc: 'Важные события, мероприятия, выступления', 
        url: 'events.html',
        category: 'Архив',
        keywords: ['события', 'мероприятия', 'выступления', 'концерты']
      },
      { 
        title: 'Хронология', 
        desc: 'Временная линия событий', 
        url: 'timeline.html',
        category: 'Архив',
        keywords: ['хронология', 'таймлайн', 'временная', 'линия']
      },
      { 
        title: 'Медиа-участия', 
        desc: 'Интервью, подкасты, медиа-появления', 
        url: 'media-shows.html',
        category: 'Архив',
        keywords: ['медиа', 'интервью', 'подкасты', 'эфиры']
      },
      { 
        title: 'Люди и связи', 
        desc: 'Коллаборации, партнёры, знакомства', 
        url: 'people.html',
        category: 'Архив',
        keywords: ['люди', 'связи', 'коллаборации', 'партнёры']
      },
      { 
        title: 'Медиа-галерея', 
        desc: 'Фотогалерея, визуальные материалы', 
        url: 'gallery.html',
        category: 'Архив',
        keywords: ['галерея', 'фото', 'фотографии', 'картинки']
      },
      { 
        title: 'Источники', 
        desc: 'Ссылки на источники информации', 
        url: 'sources.html',
        category: 'Справочно',
        keywords: ['источники', 'ссылки', 'references']
      },
      { 
        title: 'Контакты', 
        desc: 'Контактная информация, соцсети', 
        url: 'contacts.html',
        category: 'Справочно',
        keywords: ['контакты', 'связь', 'соцсети', 'социальные']
      }
    ];

    // Фильтруем результаты
    const filtered = pages.filter(page => {
      const searchString = `${page.title} ${page.desc} ${page.keywords.join(' ')}`.toLowerCase();
      return searchString.includes(query);
    });

    // Показываем результаты
    if (filtered.length === 0) {
      results.innerHTML = `
        <div class="search-empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <p>Ничего не найдено по запросу "<strong>${escapeHtml(query)}</strong>"</p>
        </div>
      `;
      return;
    }

    results.innerHTML = filtered.map(page => {
      const titleHighlighted = highlightText(page.title, query);
      const descHighlighted = highlightText(page.desc, query);
      
      return `
        <a href="${page.url}" class="search-result-item">
          <div class="search-result-title">${titleHighlighted}</div>
          <div class="search-result-desc">${descHighlighted}</div>
          <div class="search-result-meta">
            <span class="search-result-badge">${page.category}</span>
          </div>
        </a>
      `;
    }).join('');

    currentIndex = -1;
  }

  // Подсветка совпадений
  function highlightText(text, query) {
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
  }

  // Экранирование HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Экранирование regex
  function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Инициализация
  showEmptyState();
})();
