import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メニュー・価格｜ワイン食堂 アバンティ モロフジ",
  description: "料理写真、メニュー・価格、ワイン、店主についてご案内するアバンティ モロフジの新しいご案内ページです。",
  openGraph: {
    title: "メニュー・価格｜ワイン食堂 アバンティ モロフジ",
    description: "本格的な料理を肩肘張らずに。料理、価格、ワイン、店主についてご案内します。",
    images: [{ url: "https://avanti-morofuji-kurume.ricky-o.chatgpt.site/images/og.jpg", width: 2848, height: 1504 }],
  },
  twitter: { card: "summary_large_image", title: "メニュー・価格｜アバンティ モロフジ", description: "料理、価格、ワイン、店主についてご案内します。", images: ["https://avanti-morofuji-kurume.ricky-o.chatgpt.site/images/og.jpg"] },
};

const phone = "0942-31-3360";
const slides = [
  ["01", "ヤリイカとイカ墨ソースリゾット"], ["02", "ピスタチオのセミフレッド"],
  ["03", "サンマのスパゲティ"], ["04", "ピスタチオのクリームソーススパゲティ"],
  ["05", "大振りのラム肉"], ["06", "蝦夷鹿の赤ワイン煮込み＆パスタ"],
  ["07", "カリフラワーと羊のチーズのパスタ"], ["08", "カボチャとサツマイモのキッシュ"],
  ["09", "甘エビとヤリイカのレモンクリームソーススパゲティ"], ["10", "ベルギー風 牛肉と野菜のビール煮込みグラタン"],
  ["11", "オイルサーディン"], ["12", "サツマイモのニョッキ 4種のチーズソース"], ["13", "カーチョ・エ・ペペ"],
];

function Placeholder({ name, size, className = "" }: { name: string; size: string; className?: string }) {
  return <div className={`mg-placeholder ${className}`}><small>IMAGE PLACEHOLDER</small><strong>{name}</strong><span>推奨 {size} / WEBP</span></div>;
}

export default function MenuGuidePage() {
  return <main className="mg-page" id="top">
    <link rel="stylesheet" href="/menu-guide.css" />
    <header className="mg-header">
      <a className="mg-brand" href="#top"><img src="/images/logo-main.webp" alt="アバンティ モロフジ" /></a>
      <nav className="mg-nav" aria-label="新ページ メインメニュー">
        <a href="#menu">メニュー・価格</a><a href="#wine">ワイン</a><a href="#owner">店主について</a><a href="#scene">こんな時に</a><a href="#group">コース・貸切</a><a href="#faq">よくある質問</a><a href="#access">アクセス</a>
      </nav>
      <a className="mg-header-call" href="tel:0942313360"><small>ご予約・お問い合わせ</small>{phone}</a>
      <button className="mg-menu-toggle" type="button" aria-label="メニューを開く" aria-expanded="false"><span></span><span></span><span></span></button>
    </header>

    <section className="mg-hero">
      <picture><source media="(max-width:700px)" srcSet="/images/hero-main-sp.webp" /><img src="/images/hero-main.webp" alt="アバンティ モロフジの料理と店内" /></picture>
      <div className="mg-hero-shade"></div>
      <div className="mg-hero-content"><p>WINE SHOKUDO · KURUME</p><h1>“食堂”の気軽さで、<br /><em>本格的なひと皿を。</em></h1><div className="mg-hero-lead">イタリアで修業した店主の南欧料理と、<br />自分の好みを探せるグラスワイン。</div><div className="mg-hero-actions"><a href="#menu">メニュー・価格を見る</a><a href="tel:0942313360">電話で予約する</a></div></div>
      <div className="mg-hero-facts"><span>西鉄久留米駅から<strong>徒歩4分</strong></span><span>グラスワイン<strong>常時6種類</strong></span><span>お席<strong>17席</strong></span></div>
    </section>

    <section className="mg-gallery" aria-labelledby="mg-gallery-title">
      <div className="mg-section-head"><small>A TASTE OF AVANTI</small><h2 id="mg-gallery-title">まずは、料理を見てください。</h2><p>写真を横に動かして、今夜食べたいひと皿を。</p></div>
      <div className="mg-slider" tabIndex={0}><div className="mg-slider-track">{slides.map(([no, title]) => <article className="mg-slide" key={no}><img src={`/images/menu-slide-${no}.webp`} alt={title} /><div><small>MENU {no}</small><h3>{title}</h3></div></article>)}</div></div>
      <div className="mg-dots" aria-label="料理写真を選ぶ">{slides.map(([no, title], i) => <button type="button" className={i === 0 ? "is-active" : ""} data-slide={i} aria-label={`${no} ${title}`} key={no}></button>)}</div>
    </section>

    <section className="mg-menu" id="menu">
      <div className="mg-section-head mg-section-head-dark"><small>MENU & PRICE</small><h2>メニュー・価格</h2><p>気になる料理と価格を、こちらからご覧いただけます。</p></div>
      <div className="mg-tabs" role="tablist" aria-label="メニューカテゴリー">
        <button role="tab" aria-selected="true" data-tab="course">おすすめコース</button><button role="tab" aria-selected="false" data-tab="small">前菜・小皿</button><button role="tab" aria-selected="false" data-tab="main">パスタ・メイン</button><button role="tab" aria-selected="false" data-tab="drink">ワイン・ドリンク</button>
      </div>
      <div className="mg-panels">
        <section className="mg-panel is-active" data-panel="course"><article className="mg-course"><div className="mg-course-photo"><img src="/images/5500.webp" alt="飲み放題付きコースの料理" /></div><div><span className="mg-label">MOST RECOMMENDED</span><h3>人気の飲み放題付きコース</h3><p className="mg-price"><small>女性</small>5,500円 <small>男性</small>6,000円 <i>（税込）</i></p><p>前菜2品、アヒージョ、パン、ピッツァ、パスタ、お肉を楽しめる電話予約限定コースです。</p><dl><div><dt>利用人数</dt><dd>4〜17名様</dd></div><div><dt>飲み放題</dt><dd>2時間制</dd></div><div><dt>予約条件</dt><dd>2日前まで・電話予約のみ</dd></div></dl><a href="tel:0942313360">このコースを電話で予約する</a></div></article></section>
        <section className="mg-panel" data-panel="small"><div className="mg-menu-list"><article><div><b>辛いサラミが入った砂肝のアヒージョ</b><p>店主おすすめ。正式メニュー表の価格を追加予定です。</p></div><strong>価格追加予定</strong></article><article className="mg-data-slot"><div><b>正式な前菜・小皿メニュー</b><p>料理名と価格をここへ追加します。</p></div><strong>¥ ---</strong></article></div></section>
        <section className="mg-panel" data-panel="main"><div className="mg-menu-list"><article><div><b>カーチョ・エ・ペペ</b><p>店主おすすめ</p></div><strong>価格追加予定</strong></article><article><div><b>ヤリイカと季節野菜のスパゲティ</b><p>店主おすすめ</p></div><strong>価格追加予定</strong></article><article><div><b>ピスタチオソースのスパゲティ</b><p>店主おすすめ</p></div><strong>価格追加予定</strong></article></div></section>
        <section className="mg-panel" data-panel="drink"><div className="mg-drink-intro"><b>グラスワインは常時6種類</b><p>正式なワイン・ドリンク名と価格を追加予定です。</p></div><div className="mg-menu-list"><article className="mg-data-slot"><div><b>グラスワイン・ドリンク</b><p>正式メニュー表の内容をここへ追加します。</p></div><strong>¥ ---</strong></article></div></section>
      </div>
    </section>

    <section className="mg-wine mg-content-section" id="wine">
      <div className="mg-two-col"><div><span className="mg-kicker">WINE FOR EVERY TABLE</span><h2>ワインは、<br />詳しくなくても大丈夫。</h2><p>ワインは、産地やブドウ品種によって味わいが変わります。アバンティ モロフジでは、いろいろな味を楽しめるグラスワインを常時6種類ご用意しています。</p><p>これまであまりワインを飲んでこなかった方も、料理と一緒に試しながら、自分の好きな一杯を探してみてください。</p><div className="mg-number-feature"><strong>6</strong><span>種類のグラスワインを<br />常時ご用意</span></div></div><Placeholder name="wine-about.webp" size="1600 × 1100px" /></div>
    </section>

    <section className="mg-owner mg-content-section" id="owner">
      <div className="mg-two-col mg-two-col-reverse"><Placeholder name="chef-owner.webp" size="1200 × 1500px" className="mg-owner-photo" /><div><span className="mg-kicker">THE OWNER CHEF</span><h2>料理には真面目。<br />話すと、ちょっと面白い店主です。</h2><p>料理ごとに素材の旨みをどう引き出すかを考え、丁寧な接客と笑顔を大切にしています。本人はまだまだ、と言いますが、常連のお客様からは「真面目で堅い。でも話すと面白い」と言われます。</p><p>自分の力を試したい、自分の商売で自立したい。そんな思いから始めたこの店で、料理を通して楽しい食文化を経験してもらうことを願っています。</p><blockquote>特に嬉しかった出来事の一つが、この店で初めて知り合ったお客様同士が、その後結婚されたこと。人と人の時間が生まれる場所になれたことを嬉しく思っています。</blockquote></div></div>
    </section>

    <section className="mg-scenes mg-content-section" id="scene">
      <div className="mg-section-head"><small>FOR YOUR NIGHT</small><h2>こんな夜に、アバンティを。</h2><p>騒がしい居酒屋ではなく、料理・ワイン・会話を落ち着いて楽しむ大人の食堂です。</p></div>
      <div className="mg-scene-grid"><article><span>01</span><h3>夫婦・カップルで</h3><p>料理とワインを楽しみながら、ゆっくり話したい夜に。</p></article><article><span>02</span><h3>友人との夕食に</h3><p>きちんと美味しい料理を囲んで、落ち着いて飲みたい夜に。</p></article><article><span>03</span><h3>ワインを知りたい時に</h3><p>料理と一緒にいろいろ試しながら、好きな味を探したい時に。</p></article></div>
      <p className="mg-budget">お酒を楽しまれる場合は、<strong>お一人6,000円前後</strong>がひとつの目安です。</p>
    </section>

    <section className="mg-group mg-content-section" id="group">
      <div className="mg-two-col"><div><span className="mg-kicker">COURSE · GROUP · PRIVATE</span><h2>コースも、貸切も。<br />人数とご予算に合わせて。</h2><p>飲み放題付きコースのほか、コース料理とアラカルトのドリンクを組み合わせることもできます。人数が多い場合の貸切はもちろん、少人数でもご予算によってご相談いただけます。</p><ul><li>コース・飲み放題に対応</li><li>最大17名様まで着席可能</li><li>貸切は人数・ご予算に応じて相談</li></ul><a className="mg-outline-call" href="tel:0942313360">電話で相談する　{phone}</a></div><Placeholder name="course-group.webp" size="1600 × 1100px" /></div>
    </section>

    <section className="mg-faq mg-content-section" id="faq">
      <div className="mg-section-head"><small>FOR FIRST VISIT</small><h2>初めての方へ</h2><p>来店前に気になることをまとめました。</p></div>
      <div className="mg-faq-list"><details><summary>ワインに詳しくなくても大丈夫ですか？</summary><p>はい。グラスワインを常時6種類ご用意しています。料理と一緒に試しながら、好みの味を探していただけます。</p></details><details><summary>予算はいくらくらいですか？</summary><p>お酒を楽しまれる場合は、お一人6,000円前後がひとつの目安です。ご注文内容によって変わります。</p></details><details><summary>貸切できますか？</summary><p>人数が多い場合はもちろん、少人数でもご予算によってご相談可能です。詳しくはお電話ください。</p></details><details><summary>コースや飲み放題はありますか？</summary><p>コース・飲み放題に対応しています。5,500円のおすすめコースは電話予約のみで承ります。</p></details><details><summary>店内はどんな雰囲気ですか？</summary><p>店名には「食堂」とありますが、料理・ワイン・会話をゆっくり楽しんでいただく落ち着いた雰囲気です。</p></details></div>
    </section>

    <section className="mg-access mg-content-section" id="access">
      <div className="mg-access-info"><span className="mg-kicker">INFORMATION & ACCESS</span><h2>ワイン食堂<br />アバンティ モロフジ</h2><dl><div><dt>住所</dt><dd>〒830-0032<br />福岡県久留米市東町397-6 1F<br /><small>西鉄久留米駅より徒歩4分</small></dd></div><div><dt>営業時間</dt><dd>月〜木 18:00–22:30<br />金・土・祝 18:00–23:00</dd></div><div><dt>定休日</dt><dd>日曜日（臨時休業あり）</dd></div><div><dt>お席</dt><dd>17席／全席禁煙／貸切可</dd></div></dl><a href="tel:0942313360">電話する　{phone}</a></div><div className="mg-map"><iframe title="アバンティ モロフジ Googleマップ" src="https://www.google.com/maps?q=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E4%B9%85%E7%95%99%E7%B1%B3%E5%B8%82%E6%9D%B1%E7%94%BA397-6&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe><p>〒830-0032 福岡県久留米市東町397-6 1F</p></div>
    </section>

    <section className="mg-final"><span>RESERVATION</span><h2>本格イタリアンを、気軽に。<br />今夜はアバンティで。</h2><p>17席の小さなお店です。ご来店前のご予約をおすすめします。</p><a href="tel:0942313360"><small>電話で予約する</small>{phone}</a></section>
    <footer className="mg-footer"><img src="/images/logo-main.webp" alt="アバンティ モロフジ" /><a href="/">現在のトップページへ戻る</a><small>© AVANTI MOROFUJI</small></footer>
    <div className="mg-mobile-cta"><a href="tel:0942313360">電話で予約</a><a href="#menu">メニュー・価格</a></div>
    <a className="mg-to-top" href="#top" aria-label="ページ上部へ戻る">↑</a>
    <script src="/menu-guide.js" defer></script>
  </main>;
}
