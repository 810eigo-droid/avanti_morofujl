const phone = "0942-31-3360";

const externalLinks = {
  instagram: "https://www.instagram.com/wine_avanti_morofujl/",
  tabelog: "https://tabelog.com/fukuoka/A4008/A400801/40036124/",
  gnavi: "https://r.gnavi.co.jp/9ku61t3z0000/",
};

const menuSlides = Array.from({ length: 8 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return { src: `/images/menu-slide-${number}.webp`, name: `menu-slide-${number}.webp`, number };
});

function ImageSlot({
  src,
  name,
  size,
  className = "",
}: {
  src: string;
  name: string;
  size: string;
  className?: string;
}) {
  return (
    <div className={`image-slot ${className}`} style={{ backgroundImage: `url(${src})` }}>
      <div className="slot-note">
        <span>PHOTO</span>
        <strong>{name}</strong>
        <small>{size}</small>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="アバンティ モロフジ トップへ">
          <span>WINE SHOKUDO <em>アバンティ モロフジ</em></span>
          AVANTI MOROFUJI
        </a>
        <nav id="site-nav" aria-label="メインメニュー">
          <a href="#story">お店について</a>
          <a href="#menu">料理とワイン</a>
          <a href="#access">店舗情報</a>
        </nav>
        <a className="header-call" href={`tel:${phone.replaceAll("-", "")}`}>
          <small>ご予約・お問い合わせ</small>
          {phone}
        </a>
        <button className="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="メニューを開く">
          <span /><span /><span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" style={{ "--hero-desktop": "url(/images/hero-main.webp)", "--hero-mobile": "url(/images/hero-main-sp.webp)" } as React.CSSProperties} role="img" aria-label="店内や料理のメイン写真を入れる場所">
          <div className="hero-placeholder">
            <span>MAIN PHOTO</span>
            <strong>hero-main.webp</strong>
            <small>推奨 1920 × 1280px</small>
          </div>
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">4 min. from Nishitetsu Kurume</p>
          <h1>
            <span className="hero-line">“食堂”の気軽さで、</span>
            <span className="hero-line hero-line-accent">本格的なひと皿を。</span>
          </h1>
          <p className="hero-copy">
            イタリアで修業した店主がつくる南欧料理と、自然派・オレンジワイン。
            <br className="pc" />17席の小さな隠れ家で、気取らないおいしい時間を。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${phone.replaceAll("-", "")}`}>電話で席を予約する</a>
            <a className="button button-ghost" href={externalLinks.tabelog} target="_blank" rel="noreferrer">ネット予約・空席確認</a>
          </div>
        </div>
        <div className="hero-facts" aria-label="店舗の特徴">
          <div><strong>駅から</strong><span>徒歩4分</span></div>
          <div><strong>グラスワイン</strong><span>常時6種〜</span></div>
          <div><strong>お席</strong><span>17席</span></div>
        </div>
      </section>

      <section className="menu-gallery" aria-labelledby="menu-gallery-title">
        <div className="menu-gallery-heading">
          <div><span className="section-kicker">A TASTE OF AVANTI</span><h2 id="menu-gallery-title">今夜、出会えるひと皿。</h2></div>
          <p>季節の食材とワインに寄り添う料理を、写真で少しずつご紹介します。</p>
        </div>
        <div className="menu-gallery-window">
          <div className="menu-gallery-track">
            {[0, 1].map((setIndex) => (
              <div className="menu-gallery-set" key={setIndex} aria-hidden={setIndex === 1 ? "true" : undefined}>
                {menuSlides.map((slide, index) => (
                  <article className={`menu-gallery-card menu-gallery-card-${(index % 3) + 1}`} key={`${setIndex}-${slide.name}`}>
                    <ImageSlot src={slide.src} name={slide.name} size="推奨 800 × 1000px" className="menu-gallery-photo" />
                    <div className="menu-gallery-copy">
                      <small>MENU {slide.number}</small>
                      <h3>料理名が入ります</h3>
                      <p>料理の特徴を短い文章でご紹介します。</p>
                      <strong>¥0,000 <em>税込</em></strong>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="intro section" id="story">
        <div className="section-kicker">OUR TABLE</div>
        <div className="intro-grid">
          <div>
            <h2>久留米の路地裏に、<br />小さな南欧の食卓を。</h2>
          </div>
          <div className="intro-copy">
            <p>西鉄久留米駅から歩いて4分。路地の先にあるアバンティ モロフジは、ワインと南欧料理を肩肘張らずに楽しめる小さな食堂です。</p>
            <p>デートや女子会、仕事帰りの一杯からご家族での食事まで。グラスを片手に、今夜食べたいものをゆっくり選んでください。</p>
          </div>
        </div>
        <div className="photo-collage">
          <ImageSlot src="/images/food-signature.webp" name="food-signature.webp" size="推奨 1200 × 900px" className="photo-large" />
          <ImageSlot src="/images/chef-cooking.webp" name="chef-cooking.webp" size="推奨 900 × 1200px" className="photo-tall" />
          <blockquote>「ワインに詳しくなくても大丈夫。料理に合う一杯をご案内します。」</blockquote>
        </div>
      </section>

      <section className="features section" id="menu">
        <div className="section-heading">
          <div><span className="section-kicker">FOOD & WINE</span><h2>今夜の一杯が進む、<br />三つの楽しみ。</h2></div>
          <p>季節の食材を使った料理と、気軽なグラスワイン。メニューはその日の仕入れで変わります。</p>
        </div>
        <div className="feature-list">
          <article>
            <span className="number">01</span>
            <ImageSlot src="/images/food-tapas.webp" name="food-tapas.webp" size="推奨 1000 × 750px" />
            <h3>彩り豊かな小皿料理</h3>
            <p>前菜やタパスを少しずつ。最初の一杯から食卓が楽しくなる、ワイン食堂ならではのひと皿を。</p>
          </article>
          <article>
            <span className="number">02</span>
            <ImageSlot src="/images/wine-selection.webp" name="wine-selection.webp" size="推奨 1000 × 750px" />
            <h3>選ぶ時間も楽しいワイン</h3>
            <p>定番はもちろん、自然派やオレンジワインも。好みや料理に合わせて、おすすめをご提案します。</p>
          </article>
          <article>
            <span className="number">03</span>
            <ImageSlot src="/images/food-main.webp" name="food-main.webp" size="推奨 1000 × 750px" />
            <h3>イタリア仕込みの南欧料理</h3>
            <p>素材を生かしたビストロ料理を気軽な価格で。日常の夜にも、少し特別な日にもどうぞ。</p>
          </article>
        </div>
        <div className="menu-note">
          <strong>PARTY PLAN</strong>
          <p>飲み放題付きプラン <b>5,500円（税込）〜</b></p>
          <span>ご予算に応じたコース・貸切も承ります。お電話でご相談ください。</span>
        </div>
      </section>

      <section className="occasion section">
        <ImageSlot src="/images/interior-wide.webp" name="interior-wide.webp" size="推奨 1800 × 1000px" className="occasion-photo" />
        <div className="occasion-card">
          <span className="section-kicker">FOR YOUR NIGHT</span>
          <h2>大切な人と、<br />いつもの仲間と。</h2>
          <ul>
            <li><span>01</span>ゆっくり話したいデートに</li>
            <li><span>02</span>料理を囲む女子会・ご友人と</li>
            <li><span>03</span>16名様までの着席貸切に</li>
          </ul>
          <p>お祝い・サプライズもご相談いただけます。</p>
        </div>
      </section>

      <section className="access section" id="access">
        <div className="access-info">
          <span className="section-kicker">INFORMATION</span>
          <h2>ワイン食堂<br />アバンティ モロフジ</h2>
          <dl>
            <div><dt>住所</dt><dd>〒830-0032<br />福岡県久留米市東町397-6 1F<br /><small>西鉄久留米駅より徒歩4分</small></dd></div>
            <div><dt>営業時間</dt><dd>月〜木 18:00–22:30<br />金・土・祝 18:00–23:00<br /><small>料理・ドリンクのL.O.あり／早めに閉店する場合があります</small></dd></div>
            <div><dt>定休日</dt><dd>日曜日 <small>（臨時休業あり）</small></dd></div>
            <div><dt>お席</dt><dd>17席／全席禁煙／貸切可</dd></div>
          </dl>
          <div className="social-links">
            <a href={externalLinks.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href={externalLinks.tabelog} target="_blank" rel="noreferrer">食べログ ↗</a>
            <a href={externalLinks.gnavi} target="_blank" rel="noreferrer">ぐるなび ↗</a>
          </div>
        </div>
        <a className="map" href="https://www.google.com/maps/search/?api=1&query=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E4%B9%85%E7%95%99%E7%B1%B3%E5%B8%82%E6%9D%B1%E7%94%BA397-6" target="_blank" rel="noreferrer">
          <span>KURUME</span>
          <div className="map-pin">A</div>
          <strong>Google Mapsで開く ↗</strong>
        </a>
      </section>

      <section className="reservation">
        <p>お席に限りがあるため、ご予約がおすすめです。</p>
        <h2>今夜のテーブルを、<br />ご用意してお待ちしています。</h2>
        <a href={`tel:${phone.replaceAll("-", "")}`}><small>電話で予約する</small>{phone}</a>
        <span>受付は営業時間内／ネット予約は食べログから</span>
      </section>

      <footer>
        <div className="brand"><span>WINE SHOKUDO</span>AVANTI MOROFUJI</div>
        <p>© AVANTI MOROFUJI</p>
      </footer>

      <div className="mobile-cta">
        <a href={`tel:${phone.replaceAll("-", "")}`}>電話で予約</a>
        <a href={externalLinks.tabelog} target="_blank" rel="noreferrer">ネット予約</a>
      </div>
    </main>
  );
}
