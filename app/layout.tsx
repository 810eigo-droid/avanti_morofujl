import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ワイン食堂 アバンティ モロフジ｜西鉄久留米の隠れ家イタリアン",
  description: "西鉄久留米駅徒歩4分。イタリア修業の店主がつくる南欧料理と自然派ワインを、17席の小さな隠れ家で。デート・女子会・貸切にも。",
  openGraph: {
    title: "ワイン食堂 アバンティ モロフジ",
    description: "西鉄久留米駅から徒歩4分。南欧料理とワインを楽しむ17席の隠れ家。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ワイン食堂 アバンティ モロフジ" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function check(el){if(!el.classList.contains('menu-gallery-photo')){var note=document.createElement('small');note.className='image-disclaimer';note.textContent='※画像はイメージです';el.appendChild(note)}var urls=Array.from(getComputedStyle(el).backgroundImage.matchAll(/url\\(["']?(.*?)["']?\\)/g),function(m){return m[1]});urls.forEach(function(src){var img=new Image();img.onload=function(){el.classList.add('image-loaded')};img.src=src})}document.querySelectorAll('.hero-photo,.image-slot').forEach(check)})();(function(){var viewport=document.querySelector('.menu-gallery-window');if(!viewport)return;var cards=Array.from(viewport.querySelectorAll('.menu-gallery-card'));var dots=Array.from(document.querySelectorAll('.menu-gallery-dots button'));if(!cards.length||!dots.length)return;var active=0,timer=0,raf=0;function mark(index){active=index;dots.forEach(function(dot,i){var on=i===index;dot.classList.toggle('is-active',on);if(on)dot.setAttribute('aria-current','true');else dot.removeAttribute('aria-current')})}function go(index){var inset=innerWidth<=800?innerWidth*.16:innerWidth*.08;viewport.scrollTo({left:Math.max(0,cards[index].offsetLeft-inset),behavior:'smooth'});mark(index)}function update(){raf=0;var target=viewport.scrollLeft+(innerWidth<=800?innerWidth*.16:innerWidth*.08);var nearest=0,distance=Infinity;cards.forEach(function(card,i){var value=Math.abs(card.offsetLeft-target);if(value<distance){distance=value;nearest=i}});mark(nearest)}function stop(){if(timer){clearInterval(timer);timer=0}}dots.forEach(function(dot,i){dot.addEventListener('click',function(){stop();go(i)})});viewport.addEventListener('scroll',function(){if(!raf)raf=requestAnimationFrame(update)},{passive:true});viewport.addEventListener('pointerdown',stop,{passive:true});viewport.addEventListener('touchstart',stop,{passive:true});if(!matchMedia('(prefers-reduced-motion: reduce)').matches){timer=setInterval(function(){if(!document.hidden)go((active+1)%cards.length)},5000)}})();(function(){var header=document.querySelector('.site-header');var button=document.querySelector('.menu-toggle');if(!header||!button)return;function close(){header.classList.remove('menu-open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','メニューを開く')}button.addEventListener('click',function(){var open=header.classList.toggle('menu-open');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く')});header.querySelectorAll('nav a').forEach(function(link){link.addEventListener('click',close)})})();`,
          }}
        />
      </body>
    </html>
  );
}
