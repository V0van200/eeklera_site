// EEKLERA Wiki — shared data + search + chrome rendering.
// Edit this file to update content site-wide. Each entity has a status:
//   "confirmed" | "partial" | "requires_verification" | "internal"
// Internal entries are NOT rendered publicly.

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
    long: "Валерия Колягина, известная под творческим псевдонимом EEKLERA, — российская актриса, модель, стример и музыкальный артист. Её публичный образ строится на пересечении экранных проектов, музыкальных релизов, модельной эстетики и живого общения с аудиторией через Twitch и Telegram."
  };

  const acting = [
    { id: "revizory", title: "Ревизоры", year: 2025, format: "фильм", role: "Нина", premiere: "29 апреля 2025 — закрытая премьера", status: "confirmed",
      desc: "Закрытая премьера состоялась 29 апреля 2025 года. Валерия исполнила роль Нины. Биографически — переход от гостя на красной дорожке к собственной премьере.",
      sources: ["Telegram EEKLERA", "Кинопоиск"] },
    { id: "popytka-svyazi", title: "Попытка связи", year: 2024, format: "короткометражка, драма", role: "не главная роль (роль уточняется)", duration: "≈ 6 мин", rating: "16+", status: "partial",
      desc: "Один из первых экранных проектов. Драматическая короткометражка. Точная роль требует подтверждения по титрам.",
      sources: ["Кинопоиск", "Пользовательский архив"] },
    { id: "sashatanya", title: "СашаТаня", year: 2025, format: "сериал", role: "уточняется", status: "requires_verification",
      desc: "Информация о съёмках упомянута в Telegram-кружке от 1 июня 2025. Номер сезона, серия и название роли уточняются.",
      sources: ["Telegram EEKLERA"] },
    { id: "mister-nogot", title: "Мистер Ноготь", year: 2025, format: "сериал, комедия", role: "клиентка / посетительница (10 серия)", status: "partial",
      desc: "Эпизодическая роль. Год выхода уточняется (2025 vs 2026).",
      sources: ["Кинопоиск", "TVMaze"] },
    { id: "samogon", title: "Самогон", year: 2025, format: "военный фильм / сериал", role: "уточняется", status: "requires_verification",
      desc: "Карточка проекта зафиксирована в фильмографии. Тип участия уточняется.",
      sources: ["Кинопоиск"] },
    { id: "rezervatsiya", title: "Резервация", year: 2026, format: "сериал", role: "подруга Маши", status: "partial",
      desc: "Будущий проект. Роль второго плана.",
      sources: ["Кинопоиск", "Кино-Театр"] },
    { id: "tsvetochnoe-ozero", title: "Цветочное озеро", year: 2026, format: "мини-сериал", role: "девушка Никиты", status: "partial",
      desc: "Будущий мини-сериал. Запланирована премьера на платформе ivi.",
      sources: ["ivi.ru"] },
    { id: "sled", title: "След", year: null, format: "сериал", role: "уточняется", status: "requires_verification",
      desc: "Появление в одной из серий. Точные данные уточняются.", sources: ["Кинопоиск"] },
    { id: "golosa-ushedshih-dush", title: "Голоса ушедших душ", year: 2023, format: "сериал / проект", role: "уточняется", status: "requires_verification",
      desc: "Один из ранних проектов. Роль и серия уточняются.", sources: ["Внешний веб-обход"] }
  ];

  const mediaShows = [
    { id: "vopros-rebrom-og-buda", title: "«Вопрос Ребром» — OG Buda", date: "20 мая 2025", role: "участие в выпуске", url: "https://youtu.be/cmeneB34I8c", status: "confirmed",
      desc: "Гость выпуска — OG Buda. Валерия была в кадре." },
    { id: "vopros-rebrom-3dd", title: "«Вопрос Ребром» — Три Дня Дождя", date: "23 июля 2024", role: "задала вопрос Глебу", url: "https://youtu.be/2FyG0gQYR4o", status: "confirmed",
      desc: "Участвовала в выпуске и задала вопрос Глебу. Цитата: «Смотрим по ссылочке и ищем меня».” " },
    { id: "vyshel-iz-chata-amirchik", title: "«Вышел из чата» — Амирчик", date: null, role: "появление, 26:15", url: "https://vk.com/video-204749195_456243241", status: "confirmed",
      desc: "Шоу Жени Лизогуба. Таймкод 26:15." },
    { id: "karina-kross", title: "Шоу Карины Кросс", date: null, role: "съёмка", status: "requires_verification",
      desc: "Участвовала в съёмке шоу. Точная дата и название выпуска уточняются." },
    { id: "arbenina-skolko-tebe-let", title: "Диана Арбенина — «сколько тебе лет»", date: "27 мая 2025", role: "участие в клипе", url: "https://youtu.be/YSiJISTbD08", status: "confirmed",
      desc: "Официальный музыкальный клип. Более 1.1 млн просмотров на момент фиксации." }
  ];

  const music = [
    { id: "bez-shansov", title: "Без шансов", date: "18 октября 2024", year: 2024, duration: "1:42", label: "VHQ Distribution",
      lyrics: "Колягина В. Ю.", composers: "Попов Н. О., Филиппов Н. М.", url: "https://band.link/Eeklera", apple: "https://music.apple.com/ru/album/single/1771767235",
      shazam: "https://www.shazam.com/song/1771767238/", status: "confirmed", note: "Первый официальный сингл EEKLERA.",
      desc: "Дебютный сингл. Первая публикация на всех площадках через BandLink. Релиз сопровождался серией стримов и постов в Telegram." },
    { id: "trably", title: "Траблы", date: "26 августа 2025", year: 2025, duration: "2:14", label: "KhayyamRecords",
      lyrics: "Колягина В. Ю.", composers: "Максим Крамской", url: "https://band.link/hO9Mz",
      apple: "https://music.apple.com/ru/album/single/1834398310", yandex: "https://music.yandex.ru/artist/23105189",
      vk: "https://vk.com/audio_playlist-2000973891_24973891", status: "confirmed",
      desc: "Второй сингл. Презентация трека прошла 29 августа 2025 в Москве, пространство ЙОУ." },
    { id: "nudnaya-pechal", title: "Нудная печаль", date: "13 марта 2026", year: 2026, duration: "—", label: "—",
      lyrics: "—", composers: "—", status: "partial",
      desc: "Третий сингл EEKLERA. Метаданные и площадки уточняются." }
  ];

  const events = [
    { id: "first-pravda-perf", date: "28 апреля 2024", year: 2024, type: "выступление", title: "Первое выступление с собственным треком · PRAVDA", venue: "PRAVDA, Москва", role: "live", status: "confirmed",
      desc: "Первый выход на сцену с собственным материалом, ещё до официального релиза «Без шансов»." },
    { id: "vopros-rebrom-3dd", date: "23 июля 2024", year: 2024, type: "медиа-шоу", title: "«Вопрос Ребром» — Три Дня Дождя", venue: "YouTube", role: "участник", status: "confirmed",
      desc: "Появление в выпуске, вопрос Глебу." },
    { id: "popytka-svyazi", date: "2024", year: 2024, type: "съёмка", title: "Короткометражка «Попытка связи»", venue: "Россия", role: "роль уточняется", status: "partial",
      desc: "Участие в драматической короткометражке." },
    { id: "release-bez-shansov", date: "18 октября 2024", year: 2024, type: "релиз", title: "Премьера сингла «Без шансов»", venue: "все площадки", role: "артист", status: "confirmed",
      desc: "Первый официальный релиз EEKLERA." },
    { id: "lakhesis-danya", date: "13 декабря 2024", year: 2024, type: "выступление", title: "Разогрев у Дани Единицы · Лахесис", venue: "клуб «Лахесис», Москва", role: "разогрев", status: "confirmed",
      desc: "Выступление на разогреве. Промокод «БОБРЫ»." },
    { id: "gorod-slatt", date: "22 декабря 2024", year: 2024, type: "выступление", title: "Клабшоу с SLATT SAVAGE · ГОРОД", venue: "клуб ГОРОД, Москва", role: "live", status: "confirmed",
      desc: "Совместное выступление с артистом SLATT SAVAGE." },
    { id: "studio-stream", date: "23 февраля 2025", year: 2025, type: "стрим", title: "Студийный стрим — трек с нуля", venue: "студия звукозаписи", role: "live стрим", status: "confirmed",
      desc: "Live-формат: написание трека с нуля совместно с продюсером." },
    { id: "viki-stream", date: "8 апреля 2025", year: 2025, type: "стрим", title: "Совместный стрим с VIKIMOUSE", venue: "Twitch", role: "коллаборация", status: "confirmed",
      desc: "Готовили торт. Из подписи: «Вчера отлично постримили и приготовили классный, но чуть помятый торт»." },
    { id: "premiere-revizory", date: "29 апреля 2025", year: 2025, type: "премьера", title: "Закрытая премьера фильма «Ревизоры»", venue: "Москва", role: "роль Нины", status: "confirmed",
      desc: "Первая собственная красная дорожка." },
    { id: "ogbuda-show", date: "20 мая 2025", year: 2025, type: "медиа-шоу", title: "«Вопрос Ребром» — OG Buda", venue: "YouTube", role: "участник", status: "confirmed",
      desc: "Появление в выпуске с OG Buda." },
    { id: "arbenina-clip", date: "27 мая 2025", year: 2025, type: "клип", title: "Клип Дианы Арбениной «сколько тебе лет»", venue: "YouTube", role: "участие", status: "confirmed",
      desc: "Официальный музыкальный клип." },
    { id: "sashatanya-shoot", date: "1 июня 2025", year: 2025, type: "съёмка", title: "Съёмки «СашаТаня»", venue: "Москва", role: "уточняется", status: "requires_verification",
      desc: "Сообщение в Telegram о съёмках. Серия и роль уточняются." },
    { id: "birthday-2025", date: "4 августа 2025", year: 2025, type: "вечеринка", title: "Birthday EEKLERA · ЙОУ", venue: "ЙОУ / loft, Москва", role: "хост", status: "confirmed",
      desc: "Закрытая вечеринка. Дресс-код: готика, свэг. 18+." },
    { id: "release-trably", date: "26 августа 2025", year: 2025, type: "релиз", title: "Премьера сингла «Траблы»", venue: "все площадки", role: "артист", status: "confirmed",
      desc: "Второй сингл EEKLERA." },
    { id: "trably-party", date: "29 августа 2025", year: 2025, type: "вечеринка", title: "Презентация трека «Траблы» · ЙОУ", venue: "ЙОУ, Москва", role: "хост, артист", status: "confirmed",
      desc: "Вечеринка для своих, презентация трека." },
    { id: "wipo-eeklera", date: "27 сентября 2025", year: 2025, type: "выступление", title: "WIPO & EEKLERA · PRAVDA CLUB", venue: "PRAVDA CLUB, Варшавское ш. 26 стр.12", role: "live", status: "confirmed",
      desc: "Клабшоу WIPO & EEKLERA. Выход в 18:10." },
    { id: "mone-2025", date: "20 октября 2025", year: 2025, type: "показ", title: "MONE IMPRESSION 2025", venue: "Москва", role: "модель", status: "partial",
      desc: "Участие в fashion-показе MONE. Точные ссылки на видео и фото уточняются." },
    { id: "release-nudnaya", date: "13 марта 2026", year: 2026, type: "релиз", title: "Премьера сингла «Нудная печаль»", venue: "все площадки", role: "артист", status: "partial",
      desc: "Третий сингл. Метаданные уточняются." },
    { id: "miss-tambov", date: "2021", year: 2021, type: "конкурс", title: "Мисс Тамбовская область — 2021", venue: "Тамбов", role: "топ-10 финалисток", status: "confirmed",
      desc: "Один из первых публичных проектов. Сцена, дефиле, выступления." }
  ];

  const people = [
    { id: "vikimouse", name: "VIKIMOUSE / Вика", role: "стримерша", relation: "совместный стрим, готовили торт", date: "8 апреля 2025", status: "confirmed" },
    { id: "danya", name: "Даня Единица / Даниил Крюков", role: "артист", relation: "разогрев у Дани в клубе «Лахесис»", date: "13 декабря 2024", status: "confirmed", note: "Артист из Тамбова." },
    { id: "slatt", name: "SLATT SAVAGE", role: "артист", relation: "совместное клабшоу", date: "22 декабря 2024", status: "confirmed" },
    { id: "wipo", name: "WIPO", role: "артист", relation: "совместное событие WIPO & EEKLERA", date: "27 сентября 2025", status: "confirmed" },
    { id: "arbenina", name: "Диана Арбенина", role: "музыкант", relation: "участие в клипе «сколько тебе лет»", date: "27 мая 2025", status: "confirmed" },
    { id: "ogbuda", name: "OG Buda", role: "артист", relation: "выпуск «Вопрос Ребром»", date: "20 мая 2025", status: "confirmed" },
    { id: "3dd", name: "Три Дня Дождя / Глеб", role: "группа", relation: "выпуск «Вопрос Ребром»", date: "23 июля 2024", status: "confirmed" },
    { id: "amirchik", name: "Амирчик", role: "артист", relation: "выпуск «Вышел из чата»", date: null, status: "confirmed" },
    { id: "krosss", name: "Карина Кросс", role: "блогер / шоу", relation: "съёмка в шоу", date: null, status: "requires_verification" },
    { id: "kramskoy", name: "Максим Крамской", role: "композитор", relation: "автор музыки «Траблы»", date: "2025", status: "confirmed" },
    { id: "popov-filippov", name: "Никита Попов · Назар Филиппов", role: "композиторы", relation: "авторы музыки «Без шансов»", date: "2024", status: "confirmed" }
  ];

  const places = [
    { id: "pravda", name: "PRAVDA / PRAVDA CLUB", city: "Москва", events: ["28 апреля 2024 — первое выступление", "27 сентября 2025 — WIPO & EEKLERA"] },
    { id: "lakhesis", name: "Клуб «Лахесис»", city: "Москва", events: ["13 декабря 2024 — разогрев у Дани Единицы"] },
    { id: "gorod", name: "Клуб «ГОРОД»", city: "Москва", events: ["22 декабря 2024 — клабшоу с SLATT SAVAGE"] },
    { id: "yo", name: "ЙОУ / loft", city: "Москва", events: ["4 августа 2025 — birthday party", "29 августа 2025 — презентация «Траблы»"] },
    { id: "mone", name: "MONE", city: "Москва", events: ["20 октября 2025 — MONE IMPRESSION 2025"] }
  ];

  const sources = [
    { id: "tg", name: "Telegram EEKLERA", url: "https://t.me/areeeelko", type: "первоисточник", trust: "high",
      what: "анонсы, премьеры, цитаты, даты событий" },
    { id: "twitch", name: "Twitch", url: "https://twitch.tv/eeklera", type: "первоисточник", trust: "high",
      what: "стримы, формат, прямой контакт с аудиторией" },
    { id: "kp", name: "Кинопоиск", url: "https://www.kinopoisk.ru/name/10256574/", type: "база фильмов", trust: "high",
      what: "фильмография, годы, форматы проектов" },
    { id: "kt", name: "Кино-Театр.ру", url: "https://www.kino-teatr.ru/kino/acter/w/ros/1112902/works/", type: "база фильмов", trust: "high",
      what: "карточка актрисы, проекты" },
    { id: "tvmaze", name: "TVMaze", url: "https://www.tvmaze.com/people/482102/valeria-kolagina", type: "база фильмов", trust: "medium",
      what: "англоязычная карточка, роли" },
    { id: "ym", name: "Яндекс Музыка", url: "https://music.yandex.ru/artist/23105189", type: "стриминг", trust: "high",
      what: "релизы, метаданные треков" },
    { id: "apple", name: "Apple Music", url: "https://music.apple.com/ru/album/single/1834398310", type: "стриминг", trust: "high",
      what: "релизы, площадка" },
    { id: "shazam", name: "Shazam", url: "https://www.shazam.com/song/1771767238/", type: "стриминг", trust: "high",
      what: "трек «Без шансов»" },
    { id: "twitchtracker", name: "TwitchTracker", url: "https://streamscharts.com/channels/eeklera", type: "статистика", trust: "medium",
      what: "история стримов, аудитория" },
    { id: "filmtoolz", name: "Filmtoolz / Кастинг", url: "https://casting.filmtoolz.ru/3902623/", type: "актёрский профиль", trust: "high",
      what: "официальный кастинг-профиль" },
    { id: "kinolift", name: "Кинолифт", url: "https://kinolift.com/ru/82928", type: "актёрский профиль", trust: "high",
      what: "официальная актёрская страница" },
    { id: "filmnavi", name: "Filmnavi", url: "https://filmnavi.ru/person/valeriya-kolyagina", type: "база фильмов", trust: "medium",
      what: "сводная карточка актрисы" },
    { id: "ivi", name: "ivi.ru — «Цветочное озеро»", url: "https://www.ivi.tv/watch/tsvetochnoe-ozero", type: "стриминг видео", trust: "high",
      what: "карточка проекта 2026" },
    { id: "miss-tambov-1", name: "ProTambov — Мисс Тамбов 2021", url: "https://protambov.ru/2021/11/15/miss-tambovskaja-oblast-2021-oficialnye-foto-uchastnic/", type: "СМИ", trust: "high",
      what: "официальные фото участниц конкурса" },
    { id: "miss-tambov-2", name: "448verst — досье Мисс Тамбов", url: "https://448verst.ru/publikaczii/dosug/18483-dose-krasotyi-do-finala-konkursa-%C2%ABmiss-tambovskaya-oblast-%E2%80%93-2021%C2%BB-ostalas-nedelya-%2812%29.html", type: "СМИ", trust: "high",
      what: "досье финалисток" }
  ];

  // ----- Build a flat searchable index -----
  function flatten(){
    const out = [];
    out.push({ cat: "Профиль", title: "EEKLERA / Валерия Колягина", url: "biography.html", desc: profile.short, status: "confirmed", keywords: "валерия колягина eeklera биография тамбов москва актриса модель стример" });
    acting.forEach(a => out.push({ cat: "Актёрка", title: a.title, url: `acting-project.html?id=${a.id}`, desc: `${a.year ?? "—"} · ${a.format} · ${a.role}`, status: a.status, keywords: `${a.title} ${a.role} ${a.format} ${a.year ?? ""}` }));
    mediaShows.forEach(m => out.push({ cat: "Медиа-шоу", title: m.title, url: `media-shows.html#${m.id}`, desc: m.desc, status: m.status, keywords: `${m.title} ${m.role}` }));
    music.forEach(m => out.push({ cat: "Музыка", title: m.title, url: `music-release.html?id=${m.id}`, desc: `${m.date} · ${m.duration} · ${m.label}`, status: m.status, keywords: `${m.title} eeklera трек сингл ${m.year}` }));
    events.forEach(e => out.push({ cat: "Событие", title: e.title, url: `events.html#${e.id}`, desc: `${e.date} · ${e.venue}`, status: e.status, keywords: `${e.title} ${e.type} ${e.venue} ${e.year}` }));
    people.forEach(p => out.push({ cat: "Связи", title: p.name, url: `people.html#${p.id}`, desc: p.relation, status: p.status, keywords: `${p.name} ${p.role} ${p.relation}` }));
    sources.forEach(s => out.push({ cat: "Источник", title: s.name, url: `sources.html#${s.id}`, desc: s.what, status: "confirmed", keywords: `${s.name} ${s.type} ${s.what}` }));
    return out;
  }

  // Static gallery — uses the assets/photo-NN.jpg files
  const gallery = Array.from({length: 12}, (_,i)=>{
    const n = String(i+1).padStart(2,"0");
    return { src: `assets/photo-${n}.jpg`, alt: `EEKLERA — портфолио ${n}` };
  });

  return { profile, acting, mediaShows, music, events, people, places, sources, gallery, searchIndex: flatten };
})();

// ============== CHROME (topbar, sidenav, footer, search) ==============
window.EEKChrome = (function(){
  const NAV = [
    { group: "Главное", items: [
      { url: "index.html", label: "Главная", num: "00" },
      { url: "biography.html", label: "Биография", num: "01" },
      { url: "timeline.html", label: "Хронология", num: "02" }
    ]},
    { group: "Деятельность", items: [
      { url: "acting.html", label: "Актёрка", num: "03" },
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

  function topbar(){
    return `
<header class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="index.html">
      <span class="brand-mark"></span>
      <span class="brand-name">EEKLERA</span>
      <span class="brand-sub">— wiki</span>
    </a>
    <button class="search-pill" onclick="EEKChrome.openSearch()" aria-label="Поиск по сайту" type="button">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      <input id="search-input-top" placeholder="Поиск: Ревизоры, Без шансов, Тамбов, 2025..." readonly />
      <kbd>⌘K</kbd>
    </button>
    <nav class="top-links">
      <a href="biography.html">Био</a>
      <a href="acting.html">Кино</a>
      <a href="music.html">Музыка</a>
      <a href="contacts.html" class="top-cta">Сотрудничество</a>
    </nav>
  </div>
</header>`;
  }

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
            <span>${it.label}</span><span class="num">${it.num}</span>
          </a></li>`).join("")}
      </ul>
    </div>`).join("")}
  <div class="nav-group">
    <h4 class="nav-title">Поиск</h4>
    <button class="filter-btn" onclick="EEKChrome.openSearch()" style="width:100%;text-align:left;padding:8px 11px">⌘ K — открыть поиск</button>
  </div>
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

  function searchOverlay(){
    return `
<div class="search-overlay" id="search-overlay" role="dialog" aria-modal="true">
  <div class="search-modal">
    <div class="search-modal-input">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      <input id="search-input" type="search" placeholder="Ищите проект, событие, человека, год…" autocomplete="off" />
      <button onclick="EEKChrome.closeSearch()">ESC</button>
    </div>
    <div class="search-results" id="search-results"></div>
  </div>
</div>`;
  }

  function highlight(text, q){
    if(!q) return text;
    try{
      const re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + ")", "ig");
      return text.replace(re, "<em>$1</em>");
    } catch(e){ return text; }
  }

  function search(q){
    const idx = window.EEK.searchIndex();
    if(!q || !q.trim()){
      // show top picks
      return idx.slice(0, 12);
    }
    const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
    const scored = idx.map(item => {
      const hay = (item.title + " " + item.desc + " " + item.keywords + " " + item.cat).toLowerCase();
      let score = 0;
      tokens.forEach(t => {
        if(hay.includes(t)) score += 1;
        if(item.title.toLowerCase().includes(t)) score += 2;
      });
      return {item, score};
    }).filter(x => x.score > 0).sort((a,b)=>b.score-a.score).slice(0, 30);
    return scored.map(x=>x.item);
  }

  function renderResults(q){
    const wrap = document.getElementById("search-results");
    if(!wrap) return;
    const results = search(q);
    if(!results.length){
      wrap.innerHTML = `<div class="search-empty">Ничего не нашлось по запросу «${q}»</div>`;
      return;
    }
    // group
    const groups = {};
    results.forEach(r => { (groups[r.cat] = groups[r.cat] || []).push(r); });
    let html = "";
    Object.keys(groups).forEach(g => {
      html += `<div class="group-title">${g}</div>`;
      groups[g].forEach(r => {
        const statusPill = r.status === "confirmed" ? `<span class="pill ok">подтв.</span>`
          : r.status === "partial" ? `<span class="pill partial">частично</span>`
          : r.status === "requires_verification" ? `<span class="pill req">уточняется</span>` : "";
        html += `
        <a class="search-result" href="${r.url}">
          <div class="cat">${r.cat}</div>
          <div>
            <div class="ttl">${highlight(r.title, q)}</div>
            <div class="desc">${highlight(r.desc || "", q)}</div>
          </div>
          <div>${statusPill}</div>
        </a>`;
      });
    });
    wrap.innerHTML = html;
  }

  function openSearch(){
    document.getElementById("search-overlay").classList.add("open");
    setTimeout(()=>document.getElementById("search-input").focus(),50);
    renderResults("");
  }
  function closeSearch(){
    document.getElementById("search-overlay").classList.remove("open");
  }

  function init(){
    document.body.insertAdjacentHTML("afterbegin", topbar());
    document.body.insertAdjacentHTML("beforeend", footer());
    document.body.insertAdjacentHTML("beforeend", searchOverlay());
    const sn = document.querySelector("[data-sidenav]");
    if(sn) sn.outerHTML = sidenav();

    document.addEventListener("keydown", e => {
      if((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)){
        e.preventDefault();
        const open = document.getElementById("search-overlay").classList.contains("open");
        open ? closeSearch() : openSearch();
      }
      if(e.key === "Escape") closeSearch();
      if(e.key === "/" && document.activeElement.tagName !== "INPUT"){
        e.preventDefault(); openSearch();
      }
    });

    document.getElementById("search-overlay").addEventListener("click", e => {
      if(e.target.id === "search-overlay") closeSearch();
    });

    const inp = document.getElementById("search-input");
    inp.addEventListener("input", e => renderResults(e.target.value));
  }

  // helpers used by pages
  function statusPill(status){
    if(status === "confirmed") return `<span class="pill ok">подтверждено</span>`;
    if(status === "partial") return `<span class="pill partial">частично</span>`;
    if(status === "requires_verification") return `<span class="pill req">уточняется</span>`;
    return "";
  }

  return { init, openSearch, closeSearch, NAV, statusPill };
})();

document.addEventListener("DOMContentLoaded", () => window.EEKChrome.init());
