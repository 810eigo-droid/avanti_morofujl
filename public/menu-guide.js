(function(){
  var imageBase=location.hostname.indexOf('github.io')>-1?'/avanti_morofujl/public/images/':'/images/';
  if(location.hostname.indexOf('github.io')>-1){var mobileHero=document.querySelector('.mg-hero source');if(mobileHero)mobileHero.setAttribute('srcset',imageBase+'hero-main-sp.webp');var finalCta=document.querySelector('.mg-final');if(finalCta){var applyFinalBg=function(){finalCta.style.backgroundImage=matchMedia('(max-width:700px)').matches?'url("'+imageBase+'footer-bg-sp.webp")':'linear-gradient(#6411242e,#6411242e),url("'+imageBase+'footer-bg.webp")';};applyFinalBg();addEventListener('resize',applyFinalBg);}}
  document.querySelectorAll('.mg-placeholder').forEach(function(slot){var label=slot.querySelector('strong');if(!label)return;var image=new Image();image.onload=function(){slot.style.backgroundImage='url("'+image.src+'")';slot.style.setProperty('--mg-ratio',image.naturalWidth+'/'+image.naturalHeight);slot.classList.add('is-loaded');slot.setAttribute('role','img');slot.setAttribute('aria-label',label.textContent.replace('.webp','')+'の写真');};image.src=imageBase+label.textContent.trim();});
  var header=document.querySelector('.mg-header'),toggle=document.querySelector('.mg-menu-toggle');
  if(header&&toggle){toggle.addEventListener('click',function(){var open=header.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});header.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){header.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');});});}
  var tabs=Array.from(document.querySelectorAll('.mg-tabs [role="tab"]')),panels=Array.from(document.querySelectorAll('.mg-panel'));
  var panelWrap=document.querySelector('.mg-panels'),tabBar=document.querySelector('.mg-tabs');
  // 追従中のタブバーの真下にパネル上端（＝そのタブの画像）が来るようスクロールする
  function showPanelTop(){
    if(!panelWrap||!tabBar)return;
    var stickyTop=parseFloat(getComputedStyle(tabBar).top)||0;
    var offset=stickyTop+tabBar.getBoundingClientRect().height+8;
    var y=panelWrap.getBoundingClientRect().top+window.pageYOffset-offset;
    window.scrollTo({top:Math.max(0,y),behavior:'smooth'});
  }
  tabs.forEach(function(tab){tab.addEventListener('click',function(){var name=tab.dataset.tab;tabs.forEach(function(t){t.setAttribute('aria-selected',String(t===tab));});panels.forEach(function(p){p.classList.toggle('is-active',p.dataset.panel===name);});showPanelTop();});});
  var slider=document.querySelector('.mg-slider'),track=document.querySelector('.mg-slider-track'),cards=Array.from(document.querySelectorAll('.mg-slide')),dots=Array.from(document.querySelectorAll('.mg-dots button'));
  if(!slider||!track||!cards.length)return;
  var count=cards.length;
  // 末尾から先頭へ戻るときの巻き戻しを見せないため、1組ぶん複製しておく
  cards.forEach(function(card){var clone=card.cloneNode(true);clone.setAttribute('aria-hidden','true');track.appendChild(clone);});
  var slides=Array.from(track.querySelectorAll('.mg-slide')),base=slides[0].offsetLeft,index=0,timer=0;
  function mark(i){dots.forEach(function(d,n){d.classList.toggle('is-active',n===i%count);});}
  function place(i,instant){slider.scrollTo({left:slides[i].offsetLeft-base,behavior:instant?'auto':'smooth'});mark(i);}
  function go(i){index=i;place(i);}
  function step(){
    if(index+1<count){go(index+1);return;}
    place(count);                                        // 複製した1枚目へなめらかに送る
    setTimeout(function(){index=0;place(0,true);},760);   // 同じ絵のまま先頭へ瞬間移動
  }
  function schedule(wait){clearTimeout(timer);timer=setTimeout(function(){step();schedule(4200);},wait||4200);}
  dots.forEach(function(dot,i){dot.addEventListener('click',function(){go(i);schedule(6000);});});
  slider.addEventListener('pointerdown',function(){schedule(6500);},{passive:true});
  schedule(2000);
})();
(function(){
  var modal=document.getElementById('mg-call');
  if(!modal)return;
  var opener=null;
  function open(event){
    event.preventDefault();
    opener=event.currentTarget;
    modal.hidden=false;
    document.body.style.overflow='hidden';
    var first=modal.querySelector('.mg-call-option');
    if(first)first.focus();
  }
  function close(){
    if(modal.hidden)return;
    modal.hidden=true;
    document.body.style.overflow='';
    if(opener&&opener.focus)opener.focus();
  }
  document.querySelectorAll('a[href^="tel:"]').forEach(function(link){
    if(modal.contains(link))return;
    link.addEventListener('click',open);
  });
  modal.querySelectorAll('[data-mg-call-close]').forEach(function(el){
    el.addEventListener('click',close);
  });
  modal.querySelectorAll('.mg-call-option').forEach(function(el){
    el.addEventListener('click',function(){setTimeout(close,150)});
  });
  document.addEventListener('keydown',function(event){
    if(event.key==='Escape')close();
  });
})();
(function(){
  var track=document.querySelector('.mg-course-slider');
  if(!track)return;
  var dotWrap=document.querySelector('.mg-course-dots'),
      prev=document.querySelector('.mg-course-prev'),
      next=document.querySelector('.mg-course-next'),
      raf=0,downX=0,downY=0;

  // まだ用意されていない画像のスライドは、対応する丸印ごと取り除く
  Array.prototype.slice.call(track.querySelectorAll('img')).forEach(function(img){
    function drop(){
      var i=Array.prototype.indexOf.call(track.children,img);
      if(dotWrap&&dotWrap.children[i])dotWrap.children[i].remove();
      img.remove();
      sync();
    }
    if(img.complete){if(!img.naturalWidth)drop();}
    else img.addEventListener('error',drop);
  });

  function count(){return track.children.length;}
  function dots(){return dotWrap?Array.prototype.slice.call(dotWrap.children):[];}
  function current(){return Math.round(track.scrollLeft/track.clientWidth);}
  var photo=track.parentNode;
  function mark(){
    raf=0;
    var i=current();
    dots().forEach(function(dot,n){dot.classList.toggle('is-active',n===i);});
    // 1枚目は実際のコース写真。2枚目以降はイメージ写真のため注記を出す
    if(photo)photo.classList.toggle('is-sub',i>=1);
  }
  function sync(){
    var single=count()<2;
    [dotWrap,prev,next].forEach(function(el){if(el)el.style.display=single?'none':'';});
    mark();
  }
  function goTo(i){
    var n=count();
    if(n<2)return;
    i=(i+n)%n;
    track.scrollTo({left:track.clientWidth*i,behavior:'smooth'});
  }
  if(dotWrap)dotWrap.addEventListener('click',function(event){
    var button=event.target.closest('button');
    if(button)goTo(dots().indexOf(button));
  });
  if(prev)prev.addEventListener('click',function(){goTo(current()-1);});
  if(next)next.addEventListener('click',function(){goTo(current()+1);});
  // 写真をタップしても次の1枚へ。指で払った場合は送らない
  track.addEventListener('pointerdown',function(event){downX=event.clientX;downY=event.clientY;},{passive:true});
  track.addEventListener('click',function(event){
    if(event.target.closest('.mg-course-arrow'))return;
    if(Math.abs(event.clientX-downX)>10||Math.abs(event.clientY-downY)>10)return;
    goTo(current()+1);
  });
  track.addEventListener('scroll',function(){if(!raf)raf=requestAnimationFrame(mark);},{passive:true});
  sync();
})();

(function(){
  // FVの見出し2行（ポップ）と、その下のリード文（バースト）
  var lines=Array.prototype.slice.call(document.querySelectorAll('.mg-hero-line')),
      lead=document.querySelector('.mg-hero-burst'),
      all=lines.concat(lead?[lead]:[]);
  if(!all.length)return;

  var linePlays=0,LINE_LIMIT=2;   // 見出しの自動再生は読み込み時と1回戻ったときの計2回まで

  function restart(targets,solo){
    targets.forEach(function(el){el.classList.remove('is-playing','is-solo');});
    void document.body.offsetWidth;      // アニメーションを頭から再生し直すためのリセット
    targets.forEach(function(el){
      if(solo&&el===lead)el.classList.add('is-solo');   // 見出しを待たずすぐ出す
      el.classList.add('is-playing');
    });
  }
  function autoPlay(){
    var withLines=linePlays<LINE_LIMIT;
    if(withLines)linePlays++;
    // 文字の小さいリード文は毎回、見出しのポップは上限まで
    restart(withLines?all:(lead?[lead]:[]),!withLines);
  }
  autoPlay();
  // クリックは本人の操作なので、常に全体を再生する
  all.forEach(function(el){el.addEventListener('click',function(){restart(all,false);});});
  // 一度画面から出て、戻ってきたとき
  if('IntersectionObserver' in window){
    var wasOut=false;
    new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting){wasOut=true;return;}
        if(wasOut){wasOut=false;autoPlay();}
      });
    },{threshold:.6}).observe(all[0]);
  }
  // 別ページから戻ってきたとき
  addEventListener('pageshow',function(event){if(event.persisted)autoPlay();});
})();

(function(){
  // 本文中のリンクから、該当するメニュータブを開いた状態で飛ばす
  document.querySelectorAll('[data-mg-tab]').forEach(function(link){
    link.addEventListener('click',function(){
      var tab=document.querySelector('.mg-tabs [data-tab="'+link.getAttribute('data-mg-tab')+'"]');
      if(tab)tab.click();
    });
  });
})();
(function(){
  // FV右上の店名を、読み込みから5秒間だけ画面に追従させる
  var name=document.querySelector('.mg-hero-name');
  if(!name)return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  name.classList.add('is-following');
  function release(){name.classList.remove('is-following','is-fading');}
  setTimeout(function(){
    // 画面が動いていなければ位置が変わらないのでそのまま解除、
    // スクロール済みなら一度そっと消してから元の位置へ戻す
    if(scrollY>40){
      name.classList.add('is-fading');
      setTimeout(release,500);
    }else{
      release();
    }
  },5000);
})();
(function(){
  // FV右上のロゴ画像。読み込めたら文字表示と差し替える
  var name=document.querySelector('.mg-hero-name'),logo=name&&name.querySelector('.mg-hero-logo');
  if(!logo)return;
  logo.addEventListener('load',function(){
    logo.hidden=false;
    name.classList.add('has-logo');
  });
  logo.addEventListener('error',function(){logo.remove();});
  if(logo.complete&&logo.naturalWidth)logo.dispatchEvent(new Event('load'));
})();
(function(){
  // スマホでは外部リンクを同じタブで開く。
  // 新しいタブだと履歴が無く、戻るボタンでページへ帰れないため
  if(!matchMedia('(max-width:900px)').matches)return;
  document.querySelectorAll('a[target="_blank"]').forEach(function(link){
    link.removeAttribute('target');
  });
})();
