// EEKLERA Wiki — shared data (БЕЗ поиска - используем search-modal.js)
window.EEK = (function () {
  const profile = {
    fullName: "Колягина Валерия Юрьевна",
    alias: "EEKLERA",
    age: 20,
    birth: "4 августа 2005",
    origin: "Тамбов, Россия",
    base: "Москва",
    height: "173 см",
    clothes: "S / M",
    shoes: "38",
    license: "категория B",
    skills: ["актёрское мастерство", "вокал", "танцы", "верховая езда", "гимнастика", "работа на камеру", "стриминг"],
    contact: { tg: "@eeklera_men", note: "Только этот контакт публикуется на сайте." },
    socials: [
      { label: "Twitch", url: "https://twitch.tv/eeklera", handle: "twitch.tv/eeklera" },
      { label: "Telegram", url: "https://t.me/areeeelko", handle: "@areeeelko" },
      { label: "Instagram", url: "https://www.instagram.com/eekleraa", handle: "@eekleraa" },
      { label: "TikTok", url: "https://www.tiktok.com/@eeklera68", handle: "@eeklera68" }
    ],
    profiles: [
      { label: "Кинопоиск", url: "https://www.kinopoisk.ru/name/10256574/" },
      { label: "Кино-Театр", url: "https://www.kino-teatr.ru/kino/acter/w/ros/1112902/works/" },
      { label: "Фильмтулз", url: "https://ftoolz.ru/3902623/" },
      { label: "Кинолифт", url: "https://kinolift.com/ru/82928" }
    ],
    portfolio: [
      { label: "Визитка + фото", url: "https://disk.yandex.ru/d/1u_7rwJO9IRZqQ" },
      { label: "Видеовизитка", url: "https://disk.yandex.ru/d/mKSy4OcSUwBx4A" },
      { label: "Модельное портфолио", url: "https://disk.yandex.ru/d/X7HclaKpNoyCvg" }
    ],
    short: "Актриса, модель, стример и музыкальный артист. Москва · Тамбов.",
    long: "Валерия Колягина, известная под творческим псевдонимом EEKLERA, — российская актриса, модель, стример и музыкальный артист."
  };

  const acting = [
    { id: "revizory", title: "Ревизоры", year: 2025, format: "фильм", role: "Нина", premiere: "29 апреля 2025", status: "confirmed" },
    { id: "popytka-svyazi", title: "Попытка связи", year: 2024, format: "короткометражка", role: "не главная роль", status: "partial" },
    { id: "sashatanya", title: "СашаТаня", year: 2025, format: "сериал", role: "уточняется", status: "requires_verification" }
  ];

  const music = [
    { id: "bez-shansov", title: "Без шансов", date: "18 октября 2024", year: 2024, duration: "1:42", status: "confirmed" },
    { id: "trably", title: "Траблы", date: "26 августа 2025", year: 2025, duration: "2:14", status: "confirmed" },
    { id: "nudnaya-pechal", title: "Нудная печаль", date: "13 марта 2026", year: 2026, duration: "2:05", status: "partial", label: "VHQ Distribution", lyrics: "Колягина В. Ю.", composers: "Кальнин А. Н.", desc: "Третий сингл EEKLERA. Меланхоличный трек о внутренних переживаниях." }
  ];

  const gallery = Array.from({length: 12}, (_,i)=>{
    const n = String(i+1).padStart(2,"0");
    return { src: `assets/photo-${n}.jpg`, alt: `EEKLERA — портфолио ${n}` };
  });

  return { profile, acting, music, gallery };
})();

// ============== CHROME (sidenav, footer) БЕЗ ПОИСКА ==============
window.EEKChrome = (function(){
  const NAV = [
    { group: "Главное", items: [
      { url: "index.html", label: "Главная", num: "00" },
      { url: "biography.html", label: "Биография", num: "01" },
      { url: "timeline.html", label: "Хронология", num: "02" }
    ]},
    { group: "Деятельность", items: [
      { url: "acting.html", label: "Актриса", num: "03" },
      { url: "music.html", label: "Музыка", num: "04" },
      { url: "modeling.html", label: "Модельная", num: "05" },
      { url: "streaming.html", label: "Стриминг", num: "06" }
    ]},
    { group: "Архив", items: [
      { url: "events.html", label: "События", num: "07" },
      { url: "media-shows.html", label: "Медиа-участия", num: "08" },
      { url: "people.html", label: "Люди и связи", num: "09" },
      { url: "gallery.html", label: "Медиа-галерея", num: "10" }
    ]},
    { group: "Справочно", items: [
      { url: "sources.html", label: "Источники", num: "11" },
      { url: "contacts.html", label: "Контакты", num: "12" }
    ]}
  ];

  function sidenav(currentPath){
    const cp = currentPath || (location.pathname.split("/").pop() || "index.html");
    return `
<aside class="sidenav">
  ${NAV.map(group => `
    <div class="nav-group">
      <h4 class="nav-title">${group.group}</h4>
      <ul class="nav-list">
        ${group.items.map(it => `
          <li><a href="${it.url}" class="${it.url===cp?"active":""}">
            <span>${it.label}</span>
            <span class="num">${it.num}</span>
          </a></li>`).join("")}
      </ul>
    </div>`).join("")}
</aside>`;
  }

  function footer(){
    const p = window.EEK.profile;
    return `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="name">EEKLERA</div>
      <p>Персональная wiki Валерии Колягиной — актрисы, модели, стримера и музыкального артиста. Архив проектов, событий, релизов и источников.</p>
      <div class="row">
        ${p.socials.map(s => `<a href="${s.url}" class="chip" target="_blank" rel="noopener">${s.label}</a>`).join("")}
      </div>
    </div>
    <div>
      <h5>Разделы</h5>
      <ul>
        <li><a href="biography.html">Биография</a></li>
        <li><a href="acting.html">Актёрка</a></li>
        <li><a href="music.html">Музыка</a></li>
        <li><a href="streaming.html">Стриминг</a></li>
        <li><a href="modeling.html">Модельная</a></li>
      </ul>
    </div>
    <div>
      <h5>Архив</h5>
      <ul>
        <li><a href="events.html">События</a></li>
        <li><a href="timeline.html">Хронология</a></li>
        <li><a href="media-shows.html">Медиа-участия</a></li>
        <li><a href="people.html">Люди</a></li>
        <li><a href="gallery.html">Галерея</a></li>
      </ul>
    </div>
    <div>
      <h5>Справочно</h5>
      <ul>
        <li><a href="sources.html">Источники</a></li>
        <li><a href="contacts.html">Контакты</a></li>
        <li><a href="https://t.me/eeklera_men" target="_blank" rel="noopener">TG: @eeklera_men</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-inner" style="margin-top:32px;border-top:1px solid var(--ink-line);padding-top:24px;display:flex;justify-content:space-between;align-items:center">
    <div class="mono-sm">© 2026 · EEKLERA Wiki · все материалы — со ссылкой на источник</div>
    <div class="mono-sm">last updated 2026.04 · v.1.0</div>
  </div>
</footer>`;
  }

  function init(){
    const sn = document.querySelector("[data-sidenav]");
    if(sn) sn.outerHTML = sidenav();
    document.body.insertAdjacentHTML("beforeend", footer());
  }

  function statusPill(status){
    if(status === "confirmed") return `<span class="pill ok">подтверждено</span>`;
    if(status === "partial") return `<span class="pill partial">частично</span>`;
    if(status === "requires_verification") return `<span class="pill req">уточняется</span>`;
    return "";
  }

  return { init, NAV, statusPill };
})();

document.addEventListener("DOMContentLoaded", () => window.EEKChrome.init());
