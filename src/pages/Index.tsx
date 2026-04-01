export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">VINYL<span style={{ color: "var(--primary)" }}>*</span>DINER</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Афиша</a>
          <a href="#">Адреса</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-label">Открыты каждый день</div>
            <h1 className="hero-title">
              БЕЗ ПОНТОВ,
              <br />
              ТОЛЬКО <span>ВКУС</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Эстетика 70-х в современной подаче. Локальные продукты, огненные блюда
              и атмосфера для настоящих ценителей вкуса и стиля.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать стол
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню ↓
              </button>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">4.9</span>
                <span className="hero-stat-label">Рейтинг</span>
              </div>
              <div className="hero-stat-div" />
              <div className="hero-stat">
                <span className="hero-stat-num">1200+</span>
                <span className="hero-stat-label">Гостей в месяц</span>
              </div>
              <div className="hero-stat-div" />
              <div className="hero-stat">
                <span className="hero-stat-num">с 2022</span>
                <span className="hero-stat-label">В деле</span>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              СВЕЖАК
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ЭСТЕТИКА
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ОГОНЬ 🔥
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * СМЭШ-БУРГЕРЫ КОТОРЫЕ РВУТ * КРАФТОВЫЕ КОКТЕЙЛИ * ТОЛЬКО РЕТРО ВАЙБ * ОТКРЫТЫ ДО 2:00 * ЛУЧШИЕ В ГОРОДЕ *
            СМЭШ-БУРГЕРЫ КОТОРЫЕ РВУТ * КРАФТОВЫЕ КОКТЕЙЛИ * ТОЛЬКО РЕТРО ВАЙБ * ОТКРЫТЫ ДО 2:00 * ЛУЧШИЕ В ГОРОДЕ
          </div>
        </div>

        {/* MENU */}
        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ВЫБОР ШЕФА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню →
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">🏆 Хит продаж</span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Классический бургер"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Классика</h3>
                  <span className="price">1 400 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Тройной смэш из мраморной говядины, фирменный соус, маринованные огурцы на бриоши.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                🌶️ Острое
              </span>
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Неоновая пицца"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Электро Пепперони</h3>
                  <span className="price">1 800 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Двойная пепперони, острый мёд, тесто на живой закваске.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                ✨ Топовый дринк
              </span>
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Диско Сауэр"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Диско Сауэр</h3>
                  <span className="price">1 200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Джин, цветок бузины, голубой чай и съедобная золотая пыльца.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VIBE SECTION */}
        <section className="retro-vibe">
          <div>
            <div className="vibe-badge">Наша философия</div>
            <h2 className="vibe-title">ВАЙБ-ЧЕК ПРОЙДЕН.</h2>
            <p className="vibe-text">
              Мы не просто кормим — мы создаём моменты. От плейлиста хип-хопа 90-х до
              диванов в стиле 70-х, каждый уголок продуман для твоего идеального кадра.
              Никакого дресс-кода, только вкус и атмосфера.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "32px" }}>
              <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
                Наша история
              </button>
              <button className="btn-cta" style={{ background: "transparent", color: "white", borderColor: "white" }}>
                Забронировать →
              </button>
            </div>

            <div className="vibe-features">
              <div className="vibe-feature">
                <span className="vibe-feature-icon">🎵</span>
                <div>
                  <strong>Живая музыка</strong>
                  <p>Каждую пятницу и субботу</p>
                </div>
              </div>
              <div className="vibe-feature">
                <span className="vibe-feature-icon">🌿</span>
                <div>
                  <strong>Локальные продукты</strong>
                  <p>Фермы Московской области</p>
                </div>
              </div>
              <div className="vibe-feature">
                <span className="vibe-feature-icon">🍹</span>
                <div>
                  <strong>Авторские коктейли</strong>
                  <p>15+ позиций от бармена</p>
                </div>
              </div>
            </div>
          </div>
          <div className="vibe-img"></div>
        </section>

        {/* EVENTS BANNER */}
        <section className="events-section section-padding">
          <div className="events-header">
            <h2 className="section-title">АФИША</h2>
            <a href="#" style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase", fontSize: "14px" }}>
              Все события →
            </a>
          </div>
          <div className="events-grid">
            <div className="event-card" style={{ background: "var(--primary)" }}>
              <div className="event-date">12 ИЮЛЯ</div>
              <h3 className="event-name">VINYL NIGHT</h3>
              <p className="event-desc">DJ-сет в стиле 70-80-х. Пластинки, дискотека, ретро-коктейли.</p>
              <button className="btn-cta" style={{ background: "white", marginTop: "20px" }}>Купить билет</button>
            </div>
            <div className="event-card" style={{ background: "var(--secondary)", color: "white" }}>
              <div className="event-date">19 ИЮЛЯ</div>
              <h3 className="event-name">JAZZ & FOOD</h3>
              <p className="event-desc">Квинтет живого джаза + сет-меню от шефа за 3 900 ₽ на двоих.</p>
              <button className="btn-cta" style={{ background: "var(--accent)", color: "var(--dark)", marginTop: "20px" }}>Забронировать</button>
            </div>
            <div className="event-card" style={{ background: "var(--accent)", color: "var(--dark)" }}>
              <div className="event-date">26 ИЮЛЯ</div>
              <h3 className="event-name">BRUNCH CLUB</h3>
              <p className="event-desc">Воскресный бранч с неограниченными мимозами с 11:00 до 15:00.</p>
              <button className="btn-cta" style={{ background: "var(--dark)", color: "white", marginTop: "20px" }}>Узнать больше</button>
            </div>
          </div>
        </section>

        {/* INSTAGRAM GRID */}
        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "12px", textAlign: "center" }}>
            @VINYL.DINER
          </h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: "40px", fontWeight: 600 }}>
            Подписывайся — делаем вкусно и красиво каждый день
          </p>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Блюдо дня"
              />
              <div className="social-overlay">
                <span>❤️ 842</span>
              </div>
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Атмосфера"
              />
              <div className="social-overlay">
                <span>❤️ 1.2K</span>
              </div>
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Коктейли"
              />
              <div className="social-overlay">
                <span>❤️ 654</span>
              </div>
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Команда"
              />
              <div className="social-overlay">
                <span>❤️ 978</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">VINYL<span style={{ color: "var(--primary)" }}>*</span>DINER</div>
          <p style={{ color: "#666", lineHeight: 1.6, maxWidth: "280px" }}>
            Твоё место для еды высокого качества и лоу-фай атмосферы.
            С 2022 года, но ощущается как 1974.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
            <a href="#" className="social-link">IG</a>
            <a href="#" className="social-link">TW</a>
            <a href="#" className="social-link">TK</a>
            <a href="#" className="social-link">VK</a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Афиша</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Политика</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Условия</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Вт–Чт: 12:00 – 23:00</li>
            <li>Пт–Сб: 12:00 – 02:00</li>
            <li>Вс: 11:00 – 21:00</li>
            <li style={{ color: "var(--primary)", fontWeight: 700 }}>Пн: Выходной</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Адрес</h4>
          <ul>
            <li>ул. Арбат, 24</li>
            <li>Москва, 119002</li>
            <li style={{ marginTop: "8px" }}>
              <a href="tel:+74951234567" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "none" }}>
                +7 (495) 123-45-67
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2025 VINYL DINER</span>
          <span>ВКУС КЛАССИКИ</span>
          <span>Сделано с 🔥</span>
        </div>
      </footer>
    </>
  );
}
