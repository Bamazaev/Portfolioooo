/* =============================================
   SCRIPT.JS — Олимҷон Шарипов Portfolio
   Trilingual | Dark/Light | 3D Effects
   ============================================= */

'use strict';

/* =============================================
   1. TRANSLATIONS — TG / RU / EN
   ============================================= */
const translations = {
  tg: {
    "nav.home":           "Асосӣ",
    "nav.about":          "Дар бораи ман",
    "nav.services":       "Хидматҳо",
    "nav.portfolio":      "Портфолио",
    "nav.skills":         "Маҳоратҳо",
    "nav.contact":        "Тамос",
    "nav.role":           "UI/UX & 3D Designer",
    "hero.status":        "Ҳоло барои лоиҳаҳои нав омодаам",
    "hero.greeting":      "Салом, ман",
    "hero.desc":          "Эҷодгари интерфейсҳои ҷолиби UI/UX, моделсозии зебои 3D дар Blender ва дизайнҳои визуалии сатҳи премиум. Идеяҳои шуморо ба воқеияти рақамӣ ва ҷаззоб табдил медиҳам.",
    "hero.viewWork":      "Дидани корҳо",
    "hero.hireMe":        "Фармоиш додан",
    "hero.qrPay":         "DC City QR",
    "hero.tools":         "Асбобҳо:",
    "stats.experience":   "Таҷрибаи касбӣ",
    "stats.years":        "Соли таҷриба",
    "stats.projects":     "Лоиҳаи муваффақ",
    "stats.clients":      "Қаноатмандии мизоҷон",
    "stats.support":      "Дастгирӣ ва ҳамкорӣ",
    "about.tag":          "ШИНОСОӢ",
    "about.title":        "Дар бораи ман ва",
    "about.titleHighlight": " раванди эҷоди ман",
    "about.desc":         "Ҳар як лоиҳа як қиссаи нодир аст. Ман дизайнро на танҳо зебо, балки содда ва коршоям месозам.",
    "about.heading":      "Ман Олимҷон Шарипов — Дизайнере, ки маҳсулотро зинда мекунад",
    "about.bio1":         "Ҳамчун як мутахассиси соҳаи UI/UX ва График Дизайн, мақсади асосии ман сохтани интерфейсҳое мебошад, ки корбарон онҳоро ба осонӣ истифода бурда, таҷрибаи фаромӯшнашаванда ба даст оранд. Ман бо воситаҳои замонавии Figma, Blender 3D ва маҷмӯаи Adobe кор мекунам.",
    "about.bio2":         "Аз эскизҳои аввалия то рендерҳои баландсифати 3D ва интерфейсҳои мобилии мукаммал, ман диққати махсусро ба тафсилот, психологияи ранг ва эстетикаи муосир медиҳам.",
    "about.f1Title":      "UI/UX Мобилӣ ва Веб",
    "about.f1Desc":       "Тарҳи интуитивӣ ва бароҳат барои корбарон",
    "about.f1Title2":     "3D Иллюстратсияҳо",
    "about.f1Desc2":      "Моделсозӣ ва рендери 3D дар Blender",
    "about.f1Title3":     "Брендинг ва Постерҳо",
    "about.f1Desc3":      "Эҷоди ҳувияти бренд ва графикаи таблиғотӣ",
    "about.f1Title4":     "Суръат ва Сифат",
    "about.f1Desc4":      "Супурдани саривақтии кор бо сифати максималӣ",
    "about.badgeLabel":   "Солҳои фаъолияти фаъол",
    "about.discuss":      "Муҳокимаи лоиҳа",
    "about.explore":      "Омӯхтани корҳо",
    "services.tag":       "ХИДМАТҲО",
    "services.title":     "Ман чиҳоро барои шумо",
    "services.titleHighlight": " сохта метавонам?",
    "services.desc":      "Хидматҳои ҳаматарафаи дизайн аз ғоя то омодасозӣ барои барномасозӣ ва чоп.",
    "services.s1Title":   "UI/UX Тарроҳии Барномаҳо",
    "services.s1Desc":    "Тарҳи пурраи интерфейси барномаҳои мобилӣ (iOS & Android) ва сомонаҳо дар Figma. Таҳқиқи рафтори корбар, прототипсозии интерактивӣ ва системаи тайёри дизайн.",
    "services.s1Item1":   "Барномаҳои мобилӣ (iOS / Android)",
    "services.s1Item2":   "Веб-сайтҳо ва Landing Page",
    "services.s1Item3":   "Прототипсозӣ ва аниматсияи Figma",
    "services.s2Title":   "3D Моделсозӣ ва Рендер",
    "services.s2Desc":    "Эҷоди иконаҳои футуристӣ ва 3D, рендерҳои маҳсулот барои таблиғот ва сомонаҳо дар Blender. Материалҳои воқеӣ ва визуализатсияи зебо.",
    "services.s2Item1":   "3D Иконаҳо ва Splash Screens",
    "services.s2Item2":   "Визуализатсияи маҳсулот",
    "services.s2Item3":   "Тарҳҳои изометрӣ ва рендер",
    "services.s3Title":   "Графика ва Баннерҳо",
    "services.s3Desc":    "Тарҳи баннерҳои тиҷоратӣ барои маркетплейсҳо, шабакаҳои иҷтимоӣ, постерҳои консертӣ ва рекламаи беруна бо сатҳи олии Photoshop.",
    "services.s3Item1":   "Карточкаҳои маркетплейс",
    "services.s3Item2":   "Баннерҳои сомона ва реклама",
    "services.s3Item3":   "Постерҳо ва муқоваҳо",
    "services.s4Title":   "Брендинг ва Айдентика",
    "services.s4Desc":    "Офаридани шахсияти шинохташаванда барои бренд: логотип, палитраи рангҳо, шрифти интихобӣ ва қоидаҳои истифодабарӣ.",
    "services.s4Item1":   "Логотипи замонавӣ ва векторӣ",
    "services.s4Item2":   "Китоби бренд (Brandbook)",
    "services.s4Item3":   "Маводҳои чопӣ ва визитка",
    "portfolio.tag":      "КОРҲОИ МАН",
    "portfolio.title":    "Намунаи лоиҳаҳои",
    "portfolio.titleHighlight": " интихобшуда",
    "portfolio.desc":     "Корҳои воқеии ман дар самтҳои UI/UX, моделсозии 3D ва тарҳи графикаи таблиғотӣ.",
    "portfolio.filterAll":  "Ҳама корҳо",
    "portfolio.filterUIUX": "UI/UX Дизайн",
    "portfolio.filter3D":   "3D Моделсозӣ",
    "portfolio.filterGraphic": "Графика & Постер",
    "portfolio.filterBanner":  "Баннерҳо",
    "portfolio.p1Title":  "Alif App — Тарҳи саҳифаи иконкаҳо",
    "portfolio.p1Desc":   "Интерфейси зебо ва қулайи мобилӣ барои интихоби иконкаҳои стандарти ва премиуми барнома бо мотиви миллӣ ва муосир.",
    "portfolio.p2Title":  "3D Иконкаи Figma — Рендери Blender",
    "portfolio.p2Desc":   "Рендери балансифати изометрии иконкаи машҳури Figma бо равшанидиҳии касбӣ ва сояҳои дақиқ дар Blender.",
    "portfolio.p3Title":  "3D Иконкаи Flutter бо материали металлӣ",
    "portfolio.p3Desc":   "Модели 3D ва коркарди материали металлии инъикоскунанда барои муҳити рақамӣ.",
    "portfolio.p4Title":  "Инфографикаи маҳсулот — Корди Samura",
    "portfolio.p4Desc":   "Тарҳи карточкаи тиҷоратӣ барои маркетплейсҳо бо инфографикаи муфассал ва эффекти визуалии қавӣ.",
    "portfolio.p5Title":  "Баннери таблиғотии хӯрокворӣ",
    "portfolio.p5Desc":   "Баннери динамикӣ бо композитсияи мутавозин ва рангҳои тару тоза барои таблиғи онлайн.",
    "portfolio.p6Title":  "Постери чорабинии мусиқавӣ ва DJ",
    "portfolio.p6Desc":   "Дизайни равшан, ҷавонписанд ва замонавӣ бо рангҳои сурху норанҷии барҷаста.",
    "portfolio.p7Title":  "Тарҳ ва композитсияи визуалӣ",
    "portfolio.p7Desc":   "Истифодаи шаклҳои муосир ва тобишҳои ранг барои ифодаи ғояҳои мураккаб.",
    "portfolio.p8Title":  "Графика барои муаррифӣ ва шабакаҳо",
    "portfolio.p8Desc":   "Омодасозии маводҳои босифат барои интишор дар интернет.",
    "skills.tag":         "МАҲОРАТҲО",
    "skills.title":       "Асбобҳо ва",
    "skills.titleHighlight": " донишҳои касбӣ",
    "skills.desc":        "Барномаҳо ва технологияҳое, ки ман ҳар рӯз барои эҷоди маҳсулоти беҳтарин истифода мебарам.",
    "skills.expert":      "Сатҳи олӣ",
    "skills.advanced":    "Пешрафта",
    "skills.good":        "Хуб",
    "skills.figmaDesc":   "UI/UX, Auto Layout, Variables, Design Systems, Interactive Prototyping.",
    "skills.blenderDesc": "3D Modeling, Lighting, Texturing, Shading, Cycles & Eevee Rendering.",
    "skills.psDesc":      "Композитинг, ретуш, баннерҳои таблиғотӣ, карточкаҳои маркетплейс.",
    "skills.aiDesc":      "Вектор, тарҳи логотипҳо, айдентикаи бренд, иконография.",
    "skills.uxDesc":      "User Research, User Flow, Wireframes, Usability Testing, App Guidelines.",
    "skills.codeDesc":    "HTML5, CSS3, JavaScript, Flutter UI layout understanding барои ҳамкории комил.",
    "qr.tag":             "ДАСТГИРӢ ВА ҲИСОБ",
    "qr.title":           "Пардохти мустақим ё пешпардохт",
    "qr.desc":            "Барои фармоиши тарҳҳо ё пардохти лоиҳа метавонед тавассути корти DC City мустақиман амалиёт иҷро намоед.",
    "qr.copy":            "Нусха бардоштан",
    "qr.safe":            "100% шаффоф, амн ва бевосита ба ҳисоб",
    "qr.scanHint":        "Бо барномаи DC City ё дигар бонкҳо скан кунед",
    "contact.tag":        "ТАМОС БО МАН",
    "contact.title":      "Лоиҳаи навро якҷоя",
    "contact.titleHighlight": " оғоз намоем!",
    "contact.desc":       "Идея ё саволе доред? Паём фиристед ё тавассути шабакаҳои иҷтимоӣ мустақиман нависед.",
    "contact.tgQuick":    "Ҷавоби фаврӣ дар чанд дақиқа",
    "contact.waQuick":    "Паёмнависӣ ё занги мустақим",
    "contact.locationLabel": "Макон",
    "contact.locationVal": "Душанбе, Тоҷикистон",
    "contact.locationSub": "Ҳамкории онлайн дар саросари ҷаҳон",
    "contact.emailSub":   "Барои пешниҳодҳои расмӣ ва шартномаҳо",
    "contact.formTitle":  "Паёми худро бинависед",
    "contact.formSub":    "Ман дар муддати кӯтоҳтарин ба шумо посух хоҳам дод.",
    "contact.nameLabel":  "Номи шумо *",
    "contact.namePh":     "Масалан: Ҷамшед",
    "contact.contactLabel": "Телефон ё Telegram *",
    "contact.contactPh":  "+992 90 000 0000",
    "contact.serviceLabel": "Кадом хидмат лозим аст?",
    "contact.optUIUX":    "UI/UX Тарроҳии барнома ё сомона",
    "contact.opt3D":      "3D Моделсозӣ ва Рендер",
    "contact.optGraphic": "Графика, постерҳо ва маркетплейс",
    "contact.optBranding": "Брендинг ва Логотип",
    "contact.optOther":   "Дигар лоиҳа",
    "contact.msgLabel":   "Тафсилоти лоиҳа *",
    "contact.msgPh":      "Дар бораи вазифа ва ҳадафи лоиҳаи худ нависед...",
    "contact.sendBtn":    "Ирсоли паём",
    "modal.toolsUsed":    "Асбобҳои корбурдӣ:",
    "modal.orderSame":    "Монанди ин фармоиш диҳед",
    "footer.tagline":     "UI/UX & Graphic & 3D Designer",
    "footer.rights":      "Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
    "typewriter.roles":   ["UI/UX Designer", "3D Визуализатор", "График Дизайнер", "Blender Artist", "Figma Expert"],
    "form.success":       "✅ Ташаккур! Паёми шумо қабул шуд. Ба зудӣ ҷавоб мегирем!",
    "form.error":         "⚠️ Лутфан ҳамаи майдонҳои ҳатмиро пур кунед.",
  },

  ru: {
    "nav.home":           "Главная",
    "nav.about":          "Обо мне",
    "nav.services":       "Услуги",
    "nav.portfolio":      "Портфолио",
    "nav.skills":         "Навыки",
    "nav.contact":        "Контакты",
    "nav.role":           "UI/UX & 3D Дизайнер",
    "hero.status":        "Открыт для новых проектов",
    "hero.greeting":      "Привет, я",
    "hero.desc":          "Создаю привлекательные интерфейсы UI/UX, 3D-визуализации в Blender и дизайн-материалы премиум-уровня. Превращаю ваши идеи в яркую цифровую реальность.",
    "hero.viewWork":      "Смотреть работы",
    "hero.hireMe":        "Нанять меня",
    "hero.qrPay":         "DC City QR",
    "hero.tools":         "Инструменты:",
    "stats.experience":   "Лет опыта",
    "stats.years":        "Года опыта",
    "stats.projects":     "Успешных проектов",
    "stats.clients":      "Довольных клиентов",
    "stats.support":      "Поддержка и сотрудничество",
    "about.tag":          "О ДИЗАЙНЕРЕ",
    "about.title":        "Обо мне и моём",
    "about.titleHighlight": " творческом процессе",
    "about.desc":         "Каждый проект — уникальная история. Я создаю дизайн не только красивым, но и удобным, функциональным.",
    "about.heading":      "Я Олимджон Шарипов — Дизайнер, который оживляет продукты",
    "about.bio1":         "Как специалист в области UI/UX и графического дизайна, моя основная цель — создавать интерфейсы, которые пользователи используют с лёгкостью и получают незабываемый опыт. Работаю с Figma, Blender 3D и пакетом Adobe.",
    "about.bio2":         "От первых эскизов до высококачественных 3D-рендеров и безупречных мобильных интерфейсов — я уделяю особое внимание деталям, психологии цвета и современной эстетике.",
    "about.f1Title":      "UI/UX для Мобайл & Веб",
    "about.f1Desc":       "Интуитивный и удобный дизайн для пользователей",
    "about.f1Title2":     "3D Иллюстрации",
    "about.f1Desc2":      "3D моделирование и рендер в Blender",
    "about.f1Title3":     "Брендинг и Постеры",
    "about.f1Desc3":      "Создание фирменного стиля и рекламной графики",
    "about.f1Title4":     "Скорость и Качество",
    "about.f1Desc4":      "Сдача работы в срок с максимальным качеством",
    "about.badgeLabel":   "Лет активной деятельности",
    "about.discuss":      "Обсудить проект",
    "about.explore":      "Посмотреть работы",
    "services.tag":       "УСЛУГИ",
    "services.title":     "Что я могу сделать",
    "services.titleHighlight": " для вас?",
    "services.desc":      "Комплексные дизайн-услуги от идеи до готовых материалов для разработки и печати.",
    "services.s1Title":   "UI/UX Дизайн Приложений",
    "services.s1Desc":    "Полный дизайн интерфейса мобильных приложений (iOS & Android) и сайтов в Figma. Исследование поведения пользователей, интерактивное прототипирование, Design System.",
    "services.s1Item1":   "Мобильные приложения (iOS / Android)",
    "services.s1Item2":   "Веб-сайты и Landing Page",
    "services.s1Item3":   "Прототипирование и анимация в Figma",
    "services.s2Title":   "3D Моделирование и Рендер",
    "services.s2Desc":    "Создание футуристических 3D-иконок, рендеров продуктов для рекламы в Blender. Реалистичные материалы, профессиональное освещение, красивая визуализация.",
    "services.s2Item1":   "3D Иконки и Splash Screens",
    "services.s2Item2":   "Визуализация продуктов",
    "services.s2Item3":   "Изометрические макеты и рендер",
    "services.s3Title":   "Графика и Баннеры",
    "services.s3Desc":    "Дизайн коммерческих баннеров для маркетплейсов, соцсетей (Instagram, Telegram), концертных постеров и наружной рекламы с высоким уровнем Photoshop.",
    "services.s3Item1":   "Карточки маркетплейса (Wildberries/Ozon)",
    "services.s3Item2":   "Баннеры сайтов и реклама",
    "services.s3Item3":   "Постеры и обложки",
    "services.s4Title":   "Брендинг и Айдентика",
    "services.s4Desc":    "Создание узнаваемой идентичности для бренда: логотип, цветовая палитра, шрифт и руководство по использованию (Brand Guidelines).",
    "services.s4Item1":   "Современный векторный логотип",
    "services.s4Item2":   "Брендбук (Brandbook)",
    "services.s4Item3":   "Печатные материалы и визитки",
    "portfolio.tag":      "МОИ РАБОТЫ",
    "portfolio.title":    "Избранные",
    "portfolio.titleHighlight": " проекты",
    "portfolio.desc":     "Реальные работы в направлениях UI/UX, 3D-моделирование и рекламная графика.",
    "portfolio.filterAll":  "Все работы",
    "portfolio.filterUIUX": "UI/UX Дизайн",
    "portfolio.filter3D":   "3D Моделирование",
    "portfolio.filterGraphic": "Графика & Постер",
    "portfolio.filterBanner":  "Баннеры",
    "portfolio.p1Title":  "Alif App — Дизайн страницы иконок",
    "portfolio.p1Desc":   "Красивый и удобный мобильный интерфейс для выбора стандартных и премиум-иконок приложения с национальными и современными мотивами.",
    "portfolio.p2Title":  "3D Иконка Figma — Blender Рендер",
    "portfolio.p2Desc":   "Высококачественный изометрический рендер знаменитой иконки Figma с профессиональным освещением и точными тенями в Blender.",
    "portfolio.p3Title":  "3D Иконка Flutter с металлическим материалом",
    "portfolio.p3Desc":   "3D-модель с обработкой отражающего металлического материала (Chrome/Metallic Reflection) для цифровой среды.",
    "portfolio.p4Title":  "Инфографика продукта — Нож Samura",
    "portfolio.p4Desc":   "Дизайн коммерческой карточки для маркетплейсов с подробной инфографикой и сильным визуальным эффектом.",
    "portfolio.p5Title":  "Рекламный баннер еды",
    "portfolio.p5Desc":   "Динамичный баннер со сбалансированной композицией и свежими цветами для онлайн-рекламы.",
    "portfolio.p6Title":  "Постер музыкального мероприятия и DJ",
    "portfolio.p6Desc":   "Яркий, молодёжный и современный дизайн с выразительными красно-оранжевыми цветами.",
    "portfolio.p7Title":  "Творческая визуальная композиция",
    "portfolio.p7Desc":   "Использование современных форм и цветовых переходов для выражения сложных идей.",
    "portfolio.p8Title":  "Графика для презентаций и соцсетей",
    "portfolio.p8Desc":   "Подготовка качественных материалов для публикации в интернете.",
    "skills.tag":         "НАВЫКИ",
    "skills.title":       "Инструменты и",
    "skills.titleHighlight": " профессиональные знания",
    "skills.desc":        "Программы и технологии, которые я использую каждый день для создания лучших продуктов.",
    "skills.expert":      "Высокий уровень",
    "skills.advanced":    "Продвинутый",
    "skills.good":        "Хороший",
    "skills.figmaDesc":   "UI/UX, Auto Layout, Variables, Design Systems, Interactive Prototyping.",
    "skills.blenderDesc": "3D Modeling, Lighting, Texturing, Shading, Cycles & Eevee Rendering.",
    "skills.psDesc":      "Композитинг, ретушь, рекламные баннеры, карточки маркетплейса.",
    "skills.aiDesc":      "Вектор, дизайн логотипов, айдентика бренда, иконография.",
    "skills.uxDesc":      "User Research, User Flow, Wireframes, Usability Testing, App Guidelines.",
    "skills.codeDesc":    "HTML5, CSS3, JavaScript, понимание Flutter UI layout для идеального взаимодействия.",
    "qr.tag":             "ОПЛАТА И ПОДДЕРЖКА",
    "qr.title":           "Прямая оплата или предоплата",
    "qr.desc":            "Для заказа дизайна или оплаты проекта вы можете напрямую провести операцию через карту DC City.",
    "qr.copy":            "Скопировать",
    "qr.safe":            "100% прозрачно, безопасно и напрямую на счёт",
    "qr.scanHint":        "Сканируйте приложением DC City или другими банками",
    "contact.tag":        "СВЯЗАТЬСЯ СО МНОЙ",
    "contact.title":      "Начнём новый проект",
    "contact.titleHighlight": " вместе!",
    "contact.desc":       "Есть идея или вопрос? Напишите мне или свяжитесь через соцсети.",
    "contact.tgQuick":    "Быстрый ответ за несколько минут",
    "contact.waQuick":    "Сообщение или прямой звонок",
    "contact.locationLabel": "Местоположение",
    "contact.locationVal": "Душанбе, Таджикистан",
    "contact.locationSub": "Онлайн-сотрудничество по всему миру",
    "contact.emailSub":   "Для официальных предложений и договоров",
    "contact.formTitle":  "Напишите своё сообщение",
    "contact.formSub":    "Я отвечу вам в кратчайшие сроки.",
    "contact.nameLabel":  "Ваше имя *",
    "contact.namePh":     "Например: Алишер",
    "contact.contactLabel": "Телефон или Telegram *",
    "contact.contactPh":  "+992 90 000 0000",
    "contact.serviceLabel": "Какая услуга нужна?",
    "contact.optUIUX":    "UI/UX Дизайн приложения или сайта",
    "contact.opt3D":      "3D Моделирование и Рендер",
    "contact.optGraphic": "Графика, постеры и маркетплейс",
    "contact.optBranding": "Брендинг и Логотип",
    "contact.optOther":   "Другой проект",
    "contact.msgLabel":   "Детали проекта *",
    "contact.msgPh":      "Опишите задачу и цель вашего проекта...",
    "contact.sendBtn":    "Отправить сообщение",
    "modal.toolsUsed":    "Использованные инструменты:",
    "modal.orderSame":    "Заказать похожее",
    "footer.tagline":     "UI/UX & Graphic & 3D Дизайнер",
    "footer.rights":      "Все права защищены.",
    "typewriter.roles":   ["UI/UX Дизайнер", "3D Визуализатор", "Графический Дизайнер", "Blender Artist", "Figma Expert"],
    "form.success":       "✅ Спасибо! Ваше сообщение принято. Скоро свяжемся с вами!",
    "form.error":         "⚠️ Пожалуйста, заполните все обязательные поля.",
  },

  en: {
    "nav.home":           "Home",
    "nav.about":          "About",
    "nav.services":       "Services",
    "nav.portfolio":      "Portfolio",
    "nav.skills":         "Skills",
    "nav.contact":        "Contact",
    "nav.role":           "UI/UX & 3D Designer",
    "hero.status":        "Open to new projects & collaborations",
    "hero.greeting":      "Hi, I'm",
    "hero.desc":          "Creating stunning UI/UX interfaces, beautiful 3D visualizations in Blender, and premium-level visual designs. I transform your ideas into engaging digital reality.",
    "hero.viewWork":      "View My Work",
    "hero.hireMe":        "Hire Me",
    "hero.qrPay":         "DC City QR",
    "hero.tools":         "Tools:",
    "stats.experience":   "Professional experience",
    "stats.years":        "Years experience",
    "stats.projects":     "Successful projects",
    "stats.clients":      "Client satisfaction",
    "stats.support":      "Support & collaboration",
    "about.tag":          "ABOUT ME",
    "about.title":        "About me and",
    "about.titleHighlight": " my creative process",
    "about.desc":         "Every project is a unique story. I design not just beautiful, but simple and highly functional experiences.",
    "about.heading":      "I'm Olimjon Sharipov — A Designer Who Brings Products to Life",
    "about.bio1":         "As a UI/UX and Graphic Design specialist, my primary goal is to build interfaces that users interact with effortlessly, gaining unforgettable experiences. I work with Figma, Blender 3D, and the Adobe Suite.",
    "about.bio2":         "From initial sketches to high-quality 3D renders and flawless mobile interfaces, I pay special attention to details, color psychology, and modern aesthetics.",
    "about.f1Title":      "Mobile & Web UI/UX",
    "about.f1Desc":       "Intuitive and comfortable design for users",
    "about.f1Title2":     "3D Illustrations",
    "about.f1Desc2":      "3D modeling and rendering in Blender",
    "about.f1Title3":     "Branding & Posters",
    "about.f1Desc3":      "Brand identity and advertising graphic design",
    "about.f1Title4":     "Speed & Quality",
    "about.f1Desc4":      "Delivering work on time with maximum quality",
    "about.badgeLabel":   "Years of active work",
    "about.discuss":      "Discuss a Project",
    "about.explore":      "Explore Work",
    "services.tag":       "SERVICES",
    "services.title":     "What can I create",
    "services.titleHighlight": " for you?",
    "services.desc":      "Full-cycle design services from concept to production-ready assets for development and print.",
    "services.s1Title":   "App UI/UX Design",
    "services.s1Desc":    "Complete interface design for mobile apps (iOS & Android) and websites in Figma. User behavior research, interactive prototyping, and ready-to-use design systems.",
    "services.s1Item1":   "Mobile Apps (iOS / Android)",
    "services.s1Item2":   "Websites & Landing Pages",
    "services.s1Item3":   "Figma Prototyping & Animation",
    "services.s2Title":   "3D Modeling & Rendering",
    "services.s2Desc":    "Creating futuristic 3D icons, product renders for advertising and websites in Blender. Realistic materials, professional lighting, and beautiful visualization.",
    "services.s2Item1":   "3D Icons & Splash Screens",
    "services.s2Item2":   "Product Visualization",
    "services.s2Item3":   "Isometric Layouts & Renders",
    "services.s3Title":   "Graphics & Banners",
    "services.s3Desc":    "Commercial banner design for marketplaces, social media (Instagram, Telegram), concert posters and outdoor advertising at a high Photoshop level.",
    "services.s3Item1":   "Marketplace Cards (Wildberries/Ozon)",
    "services.s3Item2":   "Website Banners & Ads",
    "services.s3Item3":   "Posters & Cover Designs",
    "services.s4Title":   "Branding & Identity",
    "services.s4Desc":    "Creating a recognizable brand identity: logo, color palette, selected typography, and usage guidelines (Brand Guidelines).",
    "services.s4Item1":   "Modern Vector Logo",
    "services.s4Item2":   "Brand Book (Brandbook)",
    "services.s4Item3":   "Print Materials & Business Cards",
    "portfolio.tag":      "MY WORKS",
    "portfolio.title":    "Selected",
    "portfolio.titleHighlight": " projects",
    "portfolio.desc":     "Real works in the fields of UI/UX, 3D modeling, and advertising graphic design.",
    "portfolio.filterAll":  "All Works",
    "portfolio.filterUIUX": "UI/UX Design",
    "portfolio.filter3D":   "3D Modeling",
    "portfolio.filterGraphic": "Graphics & Poster",
    "portfolio.filterBanner":  "Banners",
    "portfolio.p1Title":  "Alif App — Icon Selection Page Design",
    "portfolio.p1Desc":   "Beautiful and user-friendly mobile interface for selecting standard and premium app icons with national and modern motifs.",
    "portfolio.p2Title":  "3D Figma Icon — Blender Render",
    "portfolio.p2Desc":   "High-quality isometric render of the famous Figma icon with professional lighting and precise shadows in Blender.",
    "portfolio.p3Title":  "3D Flutter Icon with Metallic Material",
    "portfolio.p3Desc":   "3D model with reflective metallic material (Chrome/Metallic Reflection) for a digital environment.",
    "portfolio.p4Title":  "Product Infographic — Samura Knife",
    "portfolio.p4Desc":   "Commercial card design for marketplaces with detailed infographics, attractive typography, and strong visual effect.",
    "portfolio.p5Title":  "Food Advertising Banner",
    "portfolio.p5Desc":   "Dynamic banner with balanced composition and fresh colors for online advertising and social media.",
    "portfolio.p6Title":  "Music Event & DJ Poster",
    "portfolio.p6Desc":   "Bright, youthful, and modern design with striking red and orange colors and distinctive typography.",
    "portfolio.p7Title":  "Visual Composition & Creative Art",
    "portfolio.p7Desc":   "Using modern shapes and color gradients to express complex ideas.",
    "portfolio.p8Title":  "Graphics for Presentations & Social Media",
    "portfolio.p8Desc":   "Preparing high-quality materials for online publication and product showcasing.",
    "skills.tag":         "SKILLS",
    "skills.title":       "Tools and",
    "skills.titleHighlight": " professional knowledge",
    "skills.desc":        "Software and technologies I use every day to create the best products.",
    "skills.expert":      "Expert level",
    "skills.advanced":    "Advanced",
    "skills.good":        "Good",
    "skills.figmaDesc":   "UI/UX, Auto Layout, Variables, Design Systems, Interactive Prototyping.",
    "skills.blenderDesc": "3D Modeling, Lighting, Texturing, Shading, Cycles & Eevee Rendering.",
    "skills.psDesc":      "Compositing, retouching, advertising banners, marketplace product cards.",
    "skills.aiDesc":      "Vectors, logo design, brand identity, iconography.",
    "skills.uxDesc":      "User Research, User Flow, Wireframes, Usability Testing, App Guidelines.",
    "skills.codeDesc":    "HTML5, CSS3, JavaScript, Flutter UI layout understanding for perfect developer handoff.",
    "qr.tag":             "PAYMENT & SUPPORT",
    "qr.title":           "Direct payment or prepayment",
    "qr.desc":            "To order design work or pay for a project, you can directly perform the transaction via DC City card.",
    "qr.copy":            "Copy number",
    "qr.safe":            "100% transparent, secure, and directly to the account",
    "qr.scanHint":        "Scan with DC City app or other bank apps",
    "contact.tag":        "GET IN TOUCH",
    "contact.title":      "Let's start a new project",
    "contact.titleHighlight": " together!",
    "contact.desc":       "Have an idea or question? Send a message or reach out directly via social media.",
    "contact.tgQuick":    "Quick response within minutes",
    "contact.waQuick":    "Message or direct call",
    "contact.locationLabel": "Location",
    "contact.locationVal": "Dushanbe, Tajikistan",
    "contact.locationSub": "Online collaboration worldwide",
    "contact.emailSub":   "For official proposals and contracts",
    "contact.formTitle":  "Write your message",
    "contact.formSub":    "I'll get back to you in the shortest time possible.",
    "contact.nameLabel":  "Your name *",
    "contact.namePh":     "e.g. John Doe",
    "contact.contactLabel": "Phone or Telegram *",
    "contact.contactPh":  "+992 90 000 0000",
    "contact.serviceLabel": "What service do you need?",
    "contact.optUIUX":    "UI/UX App or Website Design",
    "contact.opt3D":      "3D Modeling & Rendering",
    "contact.optGraphic": "Graphics, Posters & Marketplace",
    "contact.optBranding": "Branding & Logo",
    "contact.optOther":   "Other project",
    "contact.msgLabel":   "Project details *",
    "contact.msgPh":      "Describe the task and goal of your project...",
    "contact.sendBtn":    "Send Message",
    "modal.toolsUsed":    "Tools used:",
    "modal.orderSame":    "Order something similar",
    "footer.tagline":     "UI/UX & Graphic & 3D Designer",
    "footer.rights":      "All rights reserved.",
    "typewriter.roles":   ["UI/UX Designer", "3D Visualizer", "Graphic Designer", "Blender 3D Artist", "Figma Expert"],
    "form.success":       "✅ Thank you! Your message has been received. We'll be in touch soon!",
    "form.error":         "⚠️ Please fill in all required fields.",
  }
};

/* =============================================
   2. STATE
   ============================================= */
let currentLang  = 'tg';
let currentTheme = 'dark';
let typewriterIndex    = 0;
let typewriterCharIdx  = 0;
let typewriterDeleting = false;
let typewriterTimer    = null;

/* =============================================
   3. LANGUAGE SYSTEM
   ============================================= */
function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined && typeof t[key] === 'string') el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
  // Typewriter roles
  resetTypewriter();
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('portfolio-lang', lang);
  applyTranslations(lang);
  // Update all lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* =============================================
   4. THEME SYSTEM
   ============================================= */
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
}

function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

/* =============================================
   5. NAVBAR SCROLL BEHAVIOUR
   ============================================= */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 20;
    navbar.classList.toggle('scrolled', scrolled);

    // Scroll progress bar
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      scrollProgress.style.width = pct + '%';
    }

    // Active nav link
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 90;
      if (window.scrollY >= top) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
}

/* =============================================
   6. MOBILE MENU
   ============================================= */
function initMobileMenu() {
  const btn    = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const links  = drawer.querySelectorAll('.mobile-nav-link');

  function closeMenu() {
    btn.classList.remove('active');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
  function openMenu() {
    btn.classList.add('active');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  btn.addEventListener('click', () => {
    drawer.classList.contains('open') ? closeMenu() : openMenu();
  });
  links.forEach(l => l.addEventListener('click', closeMenu));
  drawer.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => { setLanguage(b.dataset.lang); closeMenu(); });
  });
  drawer.querySelector('.btn-primary')?.addEventListener('click', closeMenu);
}

/* =============================================
   7. TYPEWRITER EFFECT
   ============================================= */
function resetTypewriter() {
  clearTimeout(typewriterTimer);
  typewriterIndex   = 0;
  typewriterCharIdx = 0;
  typewriterDeleting = false;
  runTypewriter();
}

function runTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;
  const roles = translations[currentLang]['typewriter.roles'];
  const current = roles[typewriterIndex];

  if (!typewriterDeleting) {
    el.textContent = current.slice(0, typewriterCharIdx + 1);
    typewriterCharIdx++;
    if (typewriterCharIdx === current.length) {
      typewriterDeleting = true;
      typewriterTimer = setTimeout(runTypewriter, 2000);
      return;
    }
  } else {
    el.textContent = current.slice(0, typewriterCharIdx - 1);
    typewriterCharIdx--;
    if (typewriterCharIdx === 0) {
      typewriterDeleting = false;
      typewriterIndex = (typewriterIndex + 1) % roles.length;
    }
  }
  typewriterTimer = setTimeout(runTypewriter, typewriterDeleting ? 60 : 90);
}

/* =============================================
   8. STATS COUNTER
   ============================================= */
function animateCounters() {
  const nums = document.querySelectorAll('.stat-number');
  nums.forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  });
}

/* =============================================
   9. SCROLL REVEAL (IntersectionObserver)
   ============================================= */
function initScrollReveal() {
  // Animate counters once visible
  const statsSection = document.querySelector('.stats-section');
  let countersDone = false;

  // Progress bars
  const progressBars = document.querySelectorAll('.progress-bar-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stats counters
        if (statsSection && statsSection.contains(entry.target) && !countersDone) {
          countersDone = true;
          animateCounters();
        }
        // Skills progress bars
        if (entry.target.classList.contains('skill-card')) {
          const bar = entry.target.querySelector('.progress-bar-fill');
          if (bar) {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => { bar.style.width = width; }, 100);
          }
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll(
    '.stat-card, .service-card, .portfolio-card, .skill-card, ' +
    '.contact-card, .about-grid, .section-header, .qr-card, .contact-form-card, ' +
    '.hero-content, .hero-visual'
  ).forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

/* =============================================
   10. 3D TILT ON CARDS
   ============================================= */
function initTilt() {
  if (window.innerWidth < 768) return; // Skip on mobile

  document.querySelectorAll('.tilt-element').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 14;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 14;
      card.style.transform = `perspective(600px) rotateX(${-y}deg) rotateY(${x}deg) translateZ(4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateZ(0)';
      card.style.transition = 'transform 0.5s cubic-bezier(.23,1,.32,1)';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });
    card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });
  });

  // 3D Hero Card
  const heroCard = document.getElementById('hero-card-3d');
  if (heroCard) {
    heroCard.parentElement.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 20;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 20;
      heroCard.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg)`;
    });
    heroCard.parentElement.addEventListener('mouseleave', () => {
      heroCard.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
      heroCard.style.transition = 'transform 0.8s cubic-bezier(.23,1,.32,1)';
      setTimeout(() => { heroCard.style.transition = ''; }, 800);
    });
    heroCard.parentElement.addEventListener('mouseenter', () => { heroCard.style.transition = 'none'; });
  }
}

/* =============================================
   11. AMBIENT CANVAS (Floating Orbs)
   ============================================= */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const orbs = Array.from({ length: 6 }, (_, i) => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: 180 + Math.random() * 220,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
    hue: [260, 290, 200, 320, 180, 240][i],
    alpha: 0.06 + Math.random() * 0.08,
  }));

  function drawOrbs() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    orbs.forEach(o => {
      o.x += o.dx;
      o.y += o.dy;
      if (o.x < -o.r) o.x = canvas.width + o.r;
      if (o.x > canvas.width + o.r) o.x = -o.r;
      if (o.y < -o.r) o.y = canvas.height + o.r;
      if (o.y > canvas.height + o.r) o.y = -o.r;

      const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      grad.addColorStop(0, `hsla(${o.hue}, 80%, 60%, ${o.alpha})`);
      grad.addColorStop(1, `hsla(${o.hue}, 80%, 60%, 0)`);
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    });
    requestAnimationFrame(drawOrbs);
  }
  drawOrbs();
}

/* =============================================
   12. CUSTOM CURSOR
   ============================================= */
function initCursor() {
  if (window.innerWidth < 1024) return;
  const glow = document.getElementById('cursor-glow');
  const dot  = document.getElementById('cursor-dot');
  if (!glow || !dot) return;

  let mx = 0, my = 0;
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    glow.style.left = mx + 'px';
    glow.style.top  = my + 'px';
  }, { passive: true });

  document.addEventListener('mousedown', () => {
    dot.style.transform  = 'translate(-50%,-50%) scale(0.6)';
    dot.style.background = 'var(--clr-accent)';
  });
  document.addEventListener('mouseup', () => {
    dot.style.transform  = 'translate(-50%,-50%) scale(1)';
    dot.style.background = 'var(--clr-primary)';
  });

  document.querySelectorAll('a, button, .tilt-element, .portfolio-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.width  = '22px';
      dot.style.height = '22px';
      dot.style.background = 'var(--clr-accent)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.width  = '10px';
      dot.style.height = '10px';
      dot.style.background = 'var(--clr-primary)';
    });
  });
}

/* =============================================
   13. PORTFOLIO FILTER
   ============================================= */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const category = card.dataset.category;
        const show = filter === 'all' || category === filter;
        card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        if (show) {
          card.classList.remove('hidden');
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.classList.add('hidden'); }, 350);
        }
      });
    });
  });
}

/* =============================================
   14. LIGHTBOX MODAL
   ============================================= */
function initLightbox() {
  const modal   = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const backdrop = modal.querySelector('.lightbox-backdrop');

  document.querySelectorAll('.preview-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const img   = btn.dataset.img;
      const title = btn.dataset.title;
      const cat   = btn.dataset.cat;
      const tools = btn.dataset.tools;

      document.getElementById('lightbox-img').src = img;
      document.getElementById('lightbox-img').alt = title;
      document.getElementById('lightbox-title').textContent = title;
      document.getElementById('lightbox-cat').textContent   = cat;
      document.getElementById('lightbox-tools').textContent = tools;

      // Description from nearest portfolio-desc
      const card = btn.closest('.portfolio-card');
      const desc = card ? card.querySelector('.portfolio-desc')?.textContent : '';
      document.getElementById('lightbox-desc').textContent = desc || '';

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => { document.getElementById('lightbox-img').src = ''; }, 350);
  }

  closeBtn.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeLightbox();
  });

  // Modal order button closes modal
  document.getElementById('modal-order-btn')?.addEventListener('click', closeLightbox);
}

/* =============================================
   15. QR COPY BUTTON
   ============================================= */
function initQRCopy() {
  const btn = document.getElementById('copy-qr-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const num = document.getElementById('qr-digits')?.textContent || '9762 0000 8638 3725';
    navigator.clipboard.writeText(num).then(() => {
      const span = document.getElementById('copy-text');
      const icon = btn.querySelector('i');
      btn.classList.add('copied');
      if (span) span.textContent = '✓ Нусха шуд!';
      if (icon) { icon.className = 'fa-solid fa-check'; }
      setTimeout(() => {
        btn.classList.remove('copied');
        if (span) span.setAttribute('data-i18n', 'qr.copy');
        applyTranslations(currentLang);
        if (icon) { icon.className = 'fa-regular fa-copy'; }
      }, 2500);
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = num;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    });
  });
}

/* =============================================
   16. CONTACT FORM
   ============================================= */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = form.querySelector('#user-name')?.value.trim();
    const contact = form.querySelector('#user-contact')?.value.trim();
    const message = form.querySelector('#user-message')?.value.trim();
    const fb      = document.getElementById('form-feedback');

    if (!name || !contact || !message) {
      fb.textContent = translations[currentLang]['form.error'];
      fb.className = 'form-feedback error';
      return;
    }

    // Simulate send (in real use, integrate Formspree/Telegram Bot)
    const btn = form.querySelector('.btn-submit');
    btn.disabled = true;
    btn.textContent = '⏳ Ирсол мешавад...';
    setTimeout(() => {
      fb.textContent = translations[currentLang]['form.success'];
      fb.className = 'form-feedback success';
      form.reset();
      btn.disabled = false;
      applyTranslations(currentLang);
    }, 1500);
  });
}

/* =============================================
   17. SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* =============================================
   18. SCROLL PROGRESS BAR (inject DOM)
   ============================================= */
function createScrollProgressBar() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.prepend(bar);
}

/* =============================================
   19. INIT EVERYTHING
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {

  // Load preferences
  const savedLang  = localStorage.getItem('portfolio-lang')  || 'tg';
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

  setTheme(savedTheme);
  setLanguage(savedLang);

  // Theme toggle button
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

  // Language buttons (navbar & mobile)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (!btn.closest('.mobile-drawer')) {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    }
  });

  // Inject scroll progress bar
  createScrollProgressBar();

  // Initialize modules
  initNavbar();
  initMobileMenu();
  initAmbientCanvas();
  initCursor();
  initTilt();
  initScrollReveal();
  initPortfolioFilter();
  initLightbox();
  initQRCopy();
  initContactForm();
  initSmoothScroll();

  // Start typewriter
  setTimeout(runTypewriter, 400);

  console.log('%c🎨 Олимҷон Шарипов — Portfolio', 'color:#7c5cfc;font-size:1.1rem;font-weight:bold;');
  console.log('%cUI/UX & 3D & Graphic Designer | Душанбе, Тоҷикистон', 'color:#b06af3;');
});
