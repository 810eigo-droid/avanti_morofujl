import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://avanti-morofuji-kurume.ricky-o.chatgpt.site"),
  title: "ワイン食堂 アバンティ モロフジ｜西鉄久留米の隠れ家イタリアン",
  description: "西鉄久留米駅徒歩4分。イタリア修業の店主がつくる南欧料理と自然派ワインを、17席の小さな隠れ家で。デート・女子会・貸切にも。",
  openGraph: {
    title: "ワイン食堂 アバンティ モロフジ",
    description: "西鉄久留米駅から徒歩4分。南欧料理とワインを楽しむ17席の隠れ家。",
    locale: "ja_JP",
    type: "website",
    url: "https://avanti-morofuji-kurume.ricky-o.chatgpt.site/",
    siteName: "ワイン食堂 アバンティ モロフジ",
    images: [{ url: "/images/og.jpg?v=teams-20260815-1", secureUrl: "https://avanti-morofuji-kurume.ricky-o.chatgpt.site/images/og.jpg?v=teams-20260815-1", type: "image/jpeg", width: 2848, height: 1504, alt: "ワイン食堂 アバンティ モロフジ｜西鉄久留米駅から徒歩4分" }],
  },
  twitter: { card: "summary_large_image", title: "ワイン食堂 アバンティ モロフジ", description: "西鉄久留米駅から徒歩4分。南欧料理とワインを楽しむ17席の隠れ家。", images: ["/images/og.jpg?v=teams-20260815-1"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){if(matchMedia('(max-width:800px)').matches){document.querySelectorAll('a[target="_blank"]').forEach(function(link){link.removeAttribute('target')})}})();
(function(){function check(el){if(!el.classList.contains('menu-gallery-photo')){var note=document.createElement('small');note.className='image-disclaimer';note.textContent='※画像はイメージです';el.appendChild(note)}var urls=Array.from(getComputedStyle(el).backgroundImage.matchAll(/url\\(["']?(.*?)["']?\\)/g),function(m){return m[1]});urls.forEach(function(src){var img=new Image();img.onload=function(){el.classList.add('image-loaded')};img.src=src})}document.querySelectorAll('.hero-photo,.image-slot').forEach(check)})();
(function(){var viewport=document.querySelector('.menu-gallery-window');if(!viewport)return;var set=viewport.querySelector('.menu-gallery-set');var cards=Array.from(viewport.querySelectorAll('.menu-gallery-card'));var dots=Array.from(document.querySelectorAll('.menu-gallery-dots button'));if(!set||!cards.length||!dots.length)return;cards.forEach(function(card){var clone=card.cloneNode(true);clone.setAttribute('aria-hidden','true');set.appendChild(clone)});var cycle=cards[cards.length-1].nextElementSibling.offsetLeft-cards[0].offsetLeft;var origin=cards[0].offsetLeft;var active=0,raf=0,last=0,pauseUntil=0,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;function mark(index){active=index;dots.forEach(function(dot,i){var on=i===index;dot.classList.toggle('is-active',on);if(on)dot.setAttribute('aria-current','true');else dot.removeAttribute('aria-current')})}function pause(){pauseUntil=performance.now()+4500;viewport.classList.remove('is-auto-moving');last=0}function go(index){pause();var inset=innerWidth<=800?innerWidth*.16:innerWidth*.08;viewport.scrollTo({left:Math.max(0,cards[index].offsetLeft-inset),behavior:'smooth'});mark(index)}function update(){raf=0;var inset=innerWidth<=800?innerWidth*.16:innerWidth*.08;var target=((viewport.scrollLeft+inset-origin)%cycle+cycle)%cycle+origin;var nearest=0,distance=Infinity;cards.forEach(function(card,i){var value=Math.abs(card.offsetLeft-target);if(value<distance){distance=value;nearest=i}});mark(nearest)}function animate(time){if(time>=pauseUntil&&!document.hidden){viewport.classList.add('is-auto-moving');if(last){viewport.scrollLeft+=(time-last)*.016;if(viewport.scrollLeft>=cycle)viewport.scrollLeft-=cycle}last=time}else{last=0}requestAnimationFrame(animate)}dots.forEach(function(dot,i){dot.addEventListener('click',function(){go(i)})});viewport.addEventListener('scroll',function(){if(!raf)raf=requestAnimationFrame(update)},{passive:true});viewport.addEventListener('pointerdown',pause,{passive:true});viewport.addEventListener('touchstart',pause,{passive:true});if(!reduced)requestAnimationFrame(animate)})();
(function(){var header=document.querySelector('.site-header');var button=document.querySelector('.menu-toggle');if(!header||!button)return;function close(){header.classList.remove('menu-open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','メニューを開く')}button.addEventListener('click',function(){var open=header.classList.toggle('menu-open');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く')});header.querySelectorAll('nav a').forEach(function(link){link.addEventListener('click',close)})})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;document.documentElement.classList.add('motion-ready');var selectors=['.menu-gallery-heading','.intro-grid','.photo-collage','.section-heading','.feature-list article','.party-plan-feature','.occasion-photo','.occasion-card','.access-info','.shop-exterior-wrap','.map','.reservation>p','.reservation>h2','.reservation>a','.social-badge'];var items=[];selectors.forEach(function(selector){document.querySelectorAll(selector).forEach(function(el){el.classList.add('motion-reveal');if(selector==='.occasion-photo'||selector==='.shop-exterior-wrap')el.classList.add('from-left');if(selector==='.occasion-card'||selector==='.map')el.classList.add('from-right');items.push(el)})});var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -7% 0px'});items.forEach(function(el){observer.observe(el)})})();",
          }}
        />
        <script src="/carousel-autoplay.js" defer />
        <script src="/text-motion.js" defer />
      </body>
    </html>
  );
}
