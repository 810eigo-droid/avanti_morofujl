(function(){
  var imageBase=location.hostname.indexOf('github.io')>-1?'/avanti_morofujl/public/images/':'/images/';
  if(location.hostname.indexOf('github.io')>-1){var mobileHero=document.querySelector('.mg-hero source');if(mobileHero)mobileHero.setAttribute('srcset',imageBase+'hero-main-sp.webp');var finalCta=document.querySelector('.mg-final');if(finalCta){var applyFinalBg=function(){finalCta.style.backgroundImage=matchMedia('(max-width:700px)').matches?'url("'+imageBase+'footer-bg-sp.webp")':'linear-gradient(#6411242e,#6411242e),url("'+imageBase+'footer-bg.webp")';};applyFinalBg();addEventListener('resize',applyFinalBg);}}
  document.querySelectorAll('.mg-placeholder').forEach(function(slot){var label=slot.querySelector('strong');if(!label)return;var image=new Image();image.onload=function(){slot.style.backgroundImage='url("'+image.src+'")';slot.classList.add('is-loaded');slot.setAttribute('role','img');slot.setAttribute('aria-label',label.textContent.replace('.webp','')+'の写真');};image.src=imageBase+label.textContent.trim();});
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
  var dots=Array.from(document.querySelectorAll('.mg-course-dots button')),
      prev=document.querySelector('.mg-course-prev'),
      next=document.querySelector('.mg-course-next'),
      total=track.children.length,raf=0,downX=0,downY=0;
  if(total<2)return;
  function current(){return Math.round(track.scrollLeft/track.clientWidth);}
  function mark(){
    raf=0;
    var i=current();
    dots.forEach(function(dot,n){dot.classList.toggle('is-active',n===i);});
  }
  function goTo(i){
    i=(i+total)%total;
    track.scrollTo({left:track.clientWidth*i,behavior:'smooth'});
  }
  dots.forEach(function(dot,i){dot.addEventListener('click',function(){goTo(i);});});
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
})();
(function(){
  var burst=document.querySelector('.mg-hero-burst');
  if(!burst)return;
  function play(){
    burst.classList.remove('is-bursting');
    void burst.offsetWidth;              // アニメーションを頭から再生し直すためのリセット
    burst.classList.add('is-bursting');
  }
  play();
  burst.addEventListener('click',play);
  // 一度画面から出て、戻ってきたときにもう一度
  if('IntersectionObserver' in window){
    var wasOut=false;
    new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting){wasOut=true;return;}
        if(wasOut){wasOut=false;play();}
      });
    },{threshold:.6}).observe(burst);
  }
  // 別ページから戻ってきたとき
  addEventListener('pageshow',function(event){if(event.persisted)play();});
})();
(function(){
  if(!('IntersectionObserver' in window))return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  document.documentElement.classList.add('mg-motion');

  // [セレクタ, 動き] の順に割り当てる。先に付いたものが優先される
  var plan=[
    ['.mg-section-head','mg-reveal-text'],
    ['.mg-seasonal','mg-reveal'],
    ['.mg-tax-note','mg-reveal'],
    ['.mg-tab-visual','mg-reveal-zoom'],
    ['.mg-course-photo','mg-reveal-left'],
    ['.mg-course>div:last-child','mg-reveal-right'],
    ['.mg-drink-intro','mg-reveal'],
    ['.mg-menu-group','mg-reveal'],
    ['.mg-two-col>div:first-child','mg-reveal-left'],
    ['.mg-two-col>div:last-child','mg-reveal-right'],
    ['.mg-scene-grid article','mg-reveal'],
    ['.mg-budget','mg-reveal'],
    ['.mg-faq-list details','mg-reveal'],
    ['.mg-access-info','mg-reveal-left'],
    ['.mg-map','mg-reveal-right']
  ];

  var items=[];
  plan.forEach(function(entry){
    document.querySelectorAll(entry[0]).forEach(function(el){
      if(el.classList.contains('mg-reveal'))return;      // 二重指定を避ける
      el.classList.add('mg-reveal',entry[1]);
      // 兄弟が並ぶ場合は順に遅らせて、流れるように出す
      var order=Array.prototype.indexOf.call(el.parentNode.children,el);
      if(order>0)el.style.animationDelay=Math.min(order,5)*90+'ms';
      items.push(el);
    });
  });

  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      // 画面に入ったとき、または上へ通り過ぎたときに表示する
      // （素早くスクロールしても取り残されないようにするため）
      if(!entry.isIntersecting&&entry.boundingClientRect.top>=0)return;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    });
  },{threshold:.12,rootMargin:'0px 0px -7% 0px'});
  items.forEach(function(el){observer.observe(el);});

  // 価格と数字はゆっくり脈打たせて目を引く
  ['.mg-price','.mg-number-feature strong','.mg-number-price'].forEach(function(selector){
    var el=document.querySelector(selector);
    if(el)el.classList.add('mg-pulse');
  });
})();
