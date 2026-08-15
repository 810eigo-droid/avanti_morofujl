const phone = "0942-31-3360";

const externalLinks = {
  instagram: "https://www.instagram.com/wine_avanti_morofujl/",
  line: "https://page.line.me/vas6118r",
  facebook: "https://www.facebook.com/avantimorofuji/",
  tabelog: "https://tabelog.com/fukuoka/A4008/A400801/40036124/",
  gnavi: "https://r.gnavi.co.jp/9ku61t3z0000/",
};

const menuSlides = [
  { number: "01", category: "RISOTTO", title: "ヤリイカとイカ墨ソースリゾット", description: "ヤリイカの旨みと、濃厚なイカ墨ソース。" },
  { number: "02", category: "DOLCE", title: "ピスタチオのセミフレッド（アイスクリーム）とチョコレートマデルナッサ", description: "香ばしいピスタチオとチョコレートの余韻。" },
  { number: "03", category: "PASTA", title: "サンマのスパゲティ", description: "旬のサンマを楽しむ、季節のスパゲティ。" },
  { number: "04", category: "PASTA", title: "ピスタチオのクリームソーススパゲティ", description: "ピスタチオのコクを生かしたクリーム仕立て。" },
  { number: "05", category: "CARNE", title: "大振りのラム肉", description: "食べ応えのある大振りのラム肉。" },
  { number: "06", category: "CARNE & PASTA", title: "蝦夷鹿のイタリア仕込みのスーパートスカーナ、モンテアンティコ（赤ワイン）煮込み＆パスタ", description: "赤ワインでじっくり煮込んだ蝦夷鹿をパスタと。" },
  { number: "07", category: "PASTA", title: "カリフラワーと羊のチーズのせ、ピスタチオソースのパスタ", description: "羊のチーズとピスタチオが香るひと皿。" },
  { number: "08", category: "QUICHE", title: "カボチャとサツマイモのキッシュ", description: "カボチャとサツマイモのやさしい甘み。" },
  { number: "09", category: "PASTA", title: "甘エビとヤリイカのレモンクリームソーススパゲティ", description: "甘エビとヤリイカに、爽やかなレモンクリーム。" },
  { number: "10", category: "GRATIN", title: "ベルギー風 牛肉と野菜のビール煮込みグラタン", description: "牛肉と野菜をビールで煮込んだベルギー風グラタン。" },
  { number: "11", category: "ANTIPASTO", title: "オイルサーディン", description: "旨み豊かなオイルサーディンを、ワインのお供に。" },
  { number: "12", category: "GNOCCHI", title: "サツマイモのニョッキ 4種のチーズソース", description: "サツマイモの甘みと、4種のチーズの濃厚なソース。" },
  { number: "13", category: "PASTA", title: "カーチョ・エ・ペペ", description: "チーズと黒胡椒で仕上げる、ローマ伝統のパスタ。" },
].map((slide) => ({ ...slide, src: `/images/menu-slide-${slide.number}.webp`, name: `menu-slide-${slide.number}.webp` }));

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
          <img className="header-logo" src="/images/logo-main.webp" alt="AVANTI モロフジ" />
        </a>
        <nav id="site-nav" aria-label="メインメニュー">
          <a href="#story">お店について</a>
          <a href="#menu">料理とワイン</a>
          <a href="#hours">営業時間・定休日</a>
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
          <div><strong>西鉄久留米駅から</strong><span>徒歩4分</span></div>
          <div><strong>グラスワイン</strong><span>常時6種〜</span></div>
          <div><strong>お席</strong><span>17席</span></div>
        </div>
      </section>

      <section className="menu-gallery" aria-labelledby="menu-gallery-title">
        <div className="menu-gallery-heading">
          <div><span className="section-kicker">A TASTE OF AVANTI</span><h2 id="menu-gallery-title">おいしい夜は、<br />話が尽きない。</h2></div>
          <p>気になる料理を囲んで、グラスを重ねて。いつもの友人と、時間を忘れる夜を。</p>
        </div>
        <div className="menu-gallery-window">
          <div className="menu-gallery-track">
            <div className="menu-gallery-set">
              {menuSlides.map((slide, index) => (
                <article className={`menu-gallery-card menu-gallery-card-${(index % 3) + 1}`} key={slide.name}>
                  <ImageSlot src={slide.src} name={slide.name} size="推奨 800 × 1000px" className="menu-gallery-photo" />
                  <div className="menu-gallery-copy">
                    <small>MENU {slide.number} / {slide.category}</small>
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="menu-gallery-dots" aria-label="料理写真を選ぶ">
          {menuSlides.map((slide, index) => <button className={index === 0 ? "is-active" : ""} type="button" data-slide={index} aria-label={`${slide.number} ${slide.title}`} aria-current={index === 0 ? "true" : undefined} key={slide.number} />)}
        </div>
        <section className="party-plan-feature" aria-labelledby="party-plan-title">
          <div className="party-plan-visual">
            <ImageSlot src="/images/5500.webp" name="5500.webp" size="正方形推奨 1200 × 1200px" className="party-plan-photo" />
            <ImageSlot src="/images/5500-sub.webp" name="5500-sub.webp" size="正方形推奨 1200 × 1200px" className="party-plan-photo party-plan-photo-sub" />
            <span className="party-plan-ribbon">MOST POPULAR</span>
          </div>
          <div className="party-plan-content">
            <div className="party-plan-heading"><span>RECOMMENDED PARTY PLAN</span><h2 id="party-plan-title">人気の<br />飲み放題付きコース</h2><p>4名様より・お電話でのご予約限定</p></div>
            <div className="party-plan-prices"><div><small>女性</small><strong>5,500</strong><span>円（税込）</span></div><div><small>男性</small><strong>6,000</strong><span>円（税込）</span></div></div>
            <p className="party-plan-lead">良質なワインと南欧料理を、ゆっくり楽しめる人気プラン。<br />プラス1,000円で、メイン料理を国産牛肉に変更できます。</p>
            <dl className="party-plan-facts"><div><dt>利用可能人数</dt><dd>4〜17名様</dd></div><div><dt>飲み放題</dt><dd>あり・2時間制</dd></div><div><dt>滞在可能時間</dt><dd>乾杯スタートから2時間15分</dd></div></dl>
            <div className="party-plan-menu"><h3>COURSE MENU</h3><ul><li>前菜2品<span>5種の鮮魚の豪華カルパッチョを含む</span></li><li>アヒージョ</li><li>パン</li><li>ピッツァ</li><li>パスタ</li><li>お肉<span>＋1,000円で国産牛肉ランプに変更可能</span></li></ul></div>
            <a className="party-plan-call" href={`tel:${phone.replaceAll("-", "")}`}><small>このコースを電話で予約する</small><strong>{phone}</strong></a>
            <details className="party-plan-notes"><summary>注意事項を確認する</summary><div><p><b>このコースは電話予約のみです。食べログなどのネット予約では受け付けておりません。</b></p><p>飲み放題は2時間制（20分前ラストオーダー）です。</p><p>各コースのご予約は2日前までにご連絡ください。貸切・ご予算などもご相談いただけます。最大17名様まで着席可能です。</p><p>コース内容は一部変更になる場合がございます。</p><p><b>飲み物の例</b><br />ビール、ワイン、カクテル、ハイボール、焼酎、ソフトドリンク、ノンアルコールカクテルなど<br />※ビールは中瓶でお一人様1本まで（ご予約人数分）</p></div></details>
          </div>
        </section>
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

      <section className="access section" id="access" style={{ "--access-bg": "url(/images/access-bg.webp)" } as React.CSSProperties}>
        <div className="access-info">
          <span className="section-kicker">INFORMATION</span>
          <h2>ワイン食堂<br />アバンティ モロフジ</h2>
          <dl>
            <div><dt>住所</dt><dd>〒830-0032<br />福岡県久留米市東町397-6 1F<br /><small>西鉄久留米駅より徒歩4分</small></dd></div>
            <div id="hours"><dt>営業時間</dt><dd>月〜木 18:00–22:30<br />金・土・祝 18:00–23:00<br /><small>料理・ドリンクのL.O.あり／早めに閉店する場合があります</small></dd></div>
            <div><dt>定休日</dt><dd>日曜日 <small>（臨時休業あり）</small></dd></div>
            <div><dt>お席</dt><dd>17席／全席禁煙／貸切可</dd></div>
          </dl>
          <div className="social-links">
            <a className="social-badge social-instagram" href={externalLinks.instagram} target="_blank" rel="noreferrer"><span className="social-mark" aria-hidden="true">IG</span><span className="social-copy"><small>公式SNS</small><strong>Instagram</strong></span><b aria-hidden="true">↗</b></a>
            <a className="social-badge social-line" href={externalLinks.line} target="_blank" rel="noreferrer"><span className="social-mark" aria-hidden="true">LINE</span><span className="social-copy"><small>友だち追加</small><strong>公式LINE</strong></span><b aria-hidden="true">↗</b></a>
            <a className="social-badge social-facebook" href={externalLinks.facebook} target="_blank" rel="noreferrer"><span className="social-mark" aria-hidden="true">f</span><span className="social-copy"><small>公式ページ</small><strong>Facebook</strong></span><b aria-hidden="true">↗</b></a>
            <a className="social-badge social-tabelog" href={externalLinks.tabelog} target="_blank" rel="noreferrer"><span className="social-mark" aria-hidden="true">食</span><span className="social-copy"><small>予約・口コミ</small><strong>食べログ</strong></span><b aria-hidden="true">↗</b></a>
            <a className="social-badge social-gnavi" href={externalLinks.gnavi} target="_blank" rel="noreferrer"><span className="social-mark" aria-hidden="true">ぐ</span><span className="social-copy"><small>店舗情報</small><strong>ぐるなび</strong></span><b aria-hidden="true">↗</b></a>
          </div>
        </div>
        <div className="access-visuals">
          <div className="shop-exterior-wrap">
            <ImageSlot src="/images/shop.webp" name="shop.webp" size="2810 × 1504px" className="shop-exterior" />
            <span>オレンジ色の外観が目印です</span>
          </div>
          <div className="map">
          <iframe title="ワイン食堂 アバンティ モロフジ周辺のGoogleマップ" src="https://www.google.com/maps?q=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E4%B9%85%E7%95%99%E7%B1%B3%E5%B8%82%E6%9D%B1%E7%94%BA397-6&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          <a className="map-open" href="https://www.google.com/maps/search/?api=1&query=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E4%B9%85%E7%95%99%E7%B1%B3%E5%B8%82%E6%9D%B1%E7%94%BA397-6" target="_blank" rel="noreferrer"><span>Google Maps</span><strong>大きな地図で開く ↗</strong></a>
          </div>
        </div>
      </section>

      <section className="reservation" style={{ "--reservation-bg": "url(/images/footer-bg.webp)" } as React.CSSProperties}>
        <img className="reservation-sp-image" src="/images/footer-bg-sp.webp" alt="" aria-hidden="true" />
        <p>お席に限りがあるため、ご予約がおすすめです。</p>
        <h2>今夜のテーブルを、<br />ご用意してお待ちしています。</h2>
        <a href={`tel:${phone.replaceAll("-", "")}`}><small>電話で予約する</small>{phone}</a>
        <span>受付は営業時間内／ネット予約は食べログから</span>
      </section>

      <footer>
        <img className="footer-logo" src="/images/logo-main.webp" alt="AVANTI モロフジ" />
        <p>© AVANTI MOROFUJI</p>
      </footer>

      <div className="mobile-cta">
        <a href={`tel:${phone.replaceAll("-", "")}`}>電話で予約</a>
        <a href={externalLinks.tabelog} target="_blank" rel="noreferrer">ネット予約</a>
      </div>
      <a className="back-to-top" href="#top" aria-label="ページの先頭へ戻る">↑</a>
    </main>
  );
}
