import React, { useEffect, useMemo, useState } from 'react'

const messages = {
  ru: {
    nav: {
      tours: 'Туры',
      services: 'Услуги',
      about: 'О гиде',
      contact: 'Контакты'
    },
    hero: {
      kicker: 'Частный гид в Баку и по Азербайджану',
      title: 'Туры, которые показывают Азербайджан по‑настоящему',
      text: 'Комфортные маршруты по Баку и регионам Азербайджана: индивидуальные экскурсии, поездки для пар, семей и небольших групп, а также трансферы из аэропорта.',
      primary: 'Написать в WhatsApp',
      secondary: 'Позвонить'
    },
    stats: [
      ['Индивидуальный подход', 'маршрут под ваши интересы и темп'],
      ['Трансферы и туры', 'от аэропорта до многодневных поездок'],
      ['Русский язык', 'понятное сопровождение на всём маршруте']
    ],
    highlightsTitle: 'Почему выбирают Rafi Tours',
    highlights: [
      {
        title: 'Живой Баку без шаблонов',
        text: 'История, архитектура, современные районы, вечерние виды и местные места — в одном продуманном маршруте.'
      },
      {
        title: 'Комфорт и спокойствие',
        text: 'Помощь с логистикой, встреча в аэропорту, рекомендации по отелю и понятный план на каждый день.'
      },
      {
        title: 'Маршрут под вас',
        text: 'Романтическая поездка, семейный отдых, первая поездка в Азербайджан или насыщенный тур по достопримечательностям.'
      }
    ],
    toursTitle: 'Популярные маршруты',
    toursSubtitle: 'Ниже — примеры направлений и форматов, которые можно собрать в ваш личный маршрут.',
    tours: [
      {
        title: 'Баку за 1 день',
        text: 'Старый город, набережная, панорамы, современная архитектура и лучшие точки для фото.'
      },
      {
        title: 'История и наследие',
        text: 'Ичеришехер, Девичья башня, дворцы, караван-сарай и атмосфера старого Баку.'
      },
      {
        title: 'Природа и регионы',
        text: 'Гобустан, Габала, Шахдаг и другие поездки за пределы города — с комфортным трансфером.'
      },
      {
        title: 'Трансфер + личный гид',
        text: 'Встреча в аэропорту, сопровождение, помощь с размещением и планом отдыха.'
      }
    ],
    servicesTitle: 'Что входит в сервис',
    services: [
      'Трансфер из аэропорта и по городу',
      'Индивидуальные и мини‑групповые туры',
      'Помощь с планированием поездки',
      'Маршрут под интересы гостей',
      'Подсказки по ресторанам, локациям и отдыху'
    ],
    aboutTitle: 'О гиде',
    aboutText: 'Этот проект создан как современная визитка и посадочная страница для частного гида. Основа контента и фотографий взята из вашего исходного проекта, а интерфейс полностью переосмыслен под удобный, современный и лёгкий для публикации React‑сайт на GitHub Pages.',
    galleryTitle: 'Атмосфера маршрутов',
    contactTitle: 'Связаться и забронировать',
    contactText: 'Если хотите обсудить поездку, подобрать маршрут или заранее заказать трансфер — просто напишите или позвоните.',
    contact: {
      phone: 'Телефон',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Локация'
    },
    footer: 'Rafi Tours — современный landing page для гида по Баку и Азербайджану.'
  },
  en: {
    nav: {
      tours: 'Tours',
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      kicker: 'Private guide in Baku & Azerbaijan',
      title: 'Tours that show Azerbaijan the right way',
      text: 'Comfortable routes across Baku and Azerbaijan: private tours, family trips, small groups, and airport transfers with personal guidance.',
      primary: 'Message on WhatsApp',
      secondary: 'Call now'
    },
    stats: [
      ['Personal approach', 'routes adapted to your pace and interests'],
      ['Transfers & tours', 'from airport pickup to multi-day trips'],
      ['Russian-speaking support', 'clear communication throughout the trip']
    ],
    highlightsTitle: 'Why choose Rafi Tours',
    highlights: [
      {
        title: 'A real Baku experience',
        text: 'History, architecture, modern districts, evening views, and local places — all combined into one smart route.'
      },
      {
        title: 'Comfort and confidence',
        text: 'Help with logistics, airport pickup, hotel tips, and a clear plan for every day of the trip.'
      },
      {
        title: 'Built around your trip',
        text: 'Perfect for couples, families, first-time visitors, or travelers who want a deeper look at Azerbaijan.'
      }
    ],
    toursTitle: 'Popular tour ideas',
    toursSubtitle: 'Below are route concepts that can be combined into a personal travel plan.',
    tours: [
      {
        title: 'Baku in one day',
        text: 'Old City, boulevard, viewpoints, modern architecture, and the best spots for memorable photos.'
      },
      {
        title: 'History & heritage',
        text: 'Icherisheher, Maiden Tower, palaces, caravanserai, and the atmosphere of historic Baku.'
      },
      {
        title: 'Nature & regions',
        text: 'Gobustan, Gabala, Shahdag, and other day trips outside the city with comfortable transport.'
      },
      {
        title: 'Transfer + private guide',
        text: 'Airport pickup, local guidance, hotel help, and a travel plan built around your arrival.'
      }
    ],
    servicesTitle: 'What the service includes',
    services: [
      'Airport and city transfers',
      'Private and small-group tours',
      'Trip planning support',
      'Routes built around guest interests',
      'Recommendations for restaurants, locations, and leisure'
    ],
    aboutTitle: 'About this landing page',
    aboutText: 'This project was rebuilt as a modern portfolio-quality landing page for a private guide. It uses your original photos and source material, while the UI has been redesigned as a clean React app that runs perfectly on GitHub Pages.',
    galleryTitle: 'Route atmosphere',
    contactTitle: 'Get in touch and book',
    contactText: 'If you want to discuss a trip, choose a route, or reserve an airport transfer in advance — just message or call.',
    contact: {
      phone: 'Phone',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Location'
    },
    footer: 'Rafi Tours — modern landing page for a Baku & Azerbaijan guide.'
  }
}

const cards = [
  { image: './assets/baku-night.jpg', tag: 'Baku' },
  { image: './assets/old-city.jpg', tag: 'Old City' },
  { image: './assets/flame-towers.jpg', tag: 'Modern Baku' },
  { image: './assets/gobustan.jpg', tag: 'Gobustan' },
  { image: './assets/gabala.jpg', tag: 'Gabala' },
  { image: './assets/shahdag.jpg', tag: 'Shahdag' },
  { image: './assets/venice.jpg', tag: 'City Walks' },
  { image: './assets/group-tour.jpg', tag: 'Private Groups' }
]

const gallery = [
  './assets/group-tour.jpg',
  './assets/group-tour-2.jpg',
  './assets/car.jpg',
  './assets/bus.jpg',
  './assets/airport.jpg',
  './assets/guide-portrait-2.jpg'
]

function useLanguage() {
  const initial = (() => {
    const saved = localStorage.getItem('rafi-lang')
    if (saved === 'ru' || saved === 'en') return saved
    return navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'en'
  })()
  const [lang, setLang] = useState(initial)
  useEffect(() => {
    localStorage.setItem('rafi-lang', lang)
    document.documentElement.lang = lang
  }, [lang])
  return [lang, setLang]
}

export function App() {
  const [lang, setLang] = useLanguage()
  const t = useMemo(() => messages[lang], [lang])

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <img src="./assets/fav.png" alt="Rafi Tours" />
          <div>
            <strong>Rafi Tours</strong>
            <span>{lang === 'ru' ? 'Баку • Азербайджан' : 'Baku • Azerbaijan'}</span>
          </div>
        </div>
        <nav className="nav">
          <a href="#tours">{t.nav.tours}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="lang-switch">
          <button className={lang === 'ru' ? 'active' : ''} onClick={() => setLang('ru')}>RU</button>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">{t.hero.kicker}</span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.text}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="https://wa.me/994515316888" target="_blank" rel="noreferrer">{t.hero.primary}</a>
            <a className="btn btn-secondary" href="tel:+994515316888">{t.hero.secondary}</a>
          </div>
        </div>
        <div className="hero-media">
          <img src="./assets/hero.jpg" alt="Baku skyline" />
        </div>
      </section>

      <section className="stats-bar">
        {t.stats.map(([title, text]) => (
          <article key={title} className="stat-card">
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="section">
        <div className="section-head">
          <h2>{t.highlightsTitle}</h2>
        </div>
        <div className="grid three-up">
          {t.highlights.map((item) => (
            <article key={item.title} className="glass-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tours" className="section section-dark">
        <div className="section-head">
          <h2>{t.toursTitle}</h2>
          <p>{t.toursSubtitle}</p>
        </div>
        <div className="grid tour-grid">
          {t.tours.map((tour, index) => (
            <article key={tour.title} className="tour-card">
              <img src={cards[index].image} alt={cards[index].tag} />
              <div className="tour-card-body">
                <span>{cards[index].tag}</span>
                <h3>{tour.title}</h3>
                <p>{tour.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section split-section">
        <div className="split-text">
          <h2>{t.servicesTitle}</h2>
          <ul className="service-list">
            {t.services.map((service) => <li key={service}>{service}</li>)}
          </ul>
        </div>
        <div className="split-media portrait-stack">
          <img className="portrait-main" src="./assets/guide-portrait.jpg" alt="Guide portrait" />
          <img className="portrait-accent" src="./assets/car.jpg" alt="Transport option" />
        </div>
      </section>

      <section id="about" className="section split-section reverse">
        <div className="split-media gallery-column">
          {gallery.map((src) => <img key={src} src={src} alt="Rafi Tours gallery" />)}
        </div>
        <div className="split-text sticky-copy">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </div>
      </section>

      <section className="section section-dark compact-gallery">
        <div className="section-head">
          <h2>{t.galleryTitle}</h2>
        </div>
        <div className="grid gallery-grid">
          {gallery.map((src) => <img key={src} src={src} alt="Travel gallery" />)}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-copy">
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
        </div>
        <div className="contact-card">
          <div><strong>{t.contact.whatsapp}</strong><a href="https://wa.me/994515316888" target="_blank" rel="noreferrer">+994 51 531 68 88</a></div>
          <div><strong>{t.contact.phone}</strong><a href="tel:+994515316888">+994 51 531 68 88</a></div>
          <div><strong>{t.contact.email}</strong><a href="mailto:ruftmahmudov342@gmail.com">ruftmahmudov342@gmail.com</a></div>
          <div><strong>{t.contact.location}</strong><span>{lang === 'ru' ? 'Баку, Азербайджан' : 'Baku, Azerbaijan'}</span></div>
        </div>
      </section>

      <footer className="footer">{t.footer}</footer>
    </div>
  )
}
