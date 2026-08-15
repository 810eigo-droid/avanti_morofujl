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
            __html: `(function(){function check(el){var urls=Array.from(getComputedStyle(el).backgroundImage.matchAll(/url\\(["']?(.*?)["']?\\)/g),function(m){return m[1]});urls.forEach(function(src){var img=new Image();img.onload=function(){el.classList.add('image-loaded')};img.src=src})}document.querySelectorAll('.hero-photo,.image-slot').forEach(check)})();`,
          }}
        />
      </body>
    </html>
  );
}
