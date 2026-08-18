(function(){
  var imageBase=location.hostname.indexOf('github.io')>-1?'/avanti_morofujl/public/images/':'/images/';
  if(location.hostname.indexOf('github.io')>-1){var mobileHero=document.querySelector('.mg-hero source');if(mobileHero)mobileHero.setAttribute('srcset',imageBase+'hero-main-sp.webp');var finalCta=document.querySelector('.mg-final');if(finalCta)finalCta.style.backgroundImage='linear-gradient(#641124e8,#641124e8),url("'+imageBase+'footer-bg.webp")';}
  document.querySelectorAll('.mg-placeholder').forEach(function(slot){var label=slot.querySelector('strong');if(!label)return;var image=new Image();image.onload=function(){slot.style.backgroundImage='url("'+image.src+'")';slot.classList.add('is-loaded');slot.setAttribute('role','img');slot.setAttribute('aria-label',label.textContent.replace('.webp','')+'の写真');};image.src=imageBase+label.textContent.trim();});
  var header=document.querySelector('.mg-header'),toggle=document.querySelector('.mg-menu-toggle');
  if(header&&toggle){toggle.addEventListener('click',function(){var open=header.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});header.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){header.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');});});}
  var tabs=Array.from(document.querySelectorAll('.mg-tabs [role="tab"]')),panels=Array.from(document.querySelectorAll('.mg-panel'));
  tabs.forEach(function(tab){tab.addEventListener('click',function(){var name=tab.dataset.tab;tabs.forEach(function(t){t.setAttribute('aria-selected',String(t===tab));});panels.forEach(function(p){p.classList.toggle('is-active',p.dataset.panel===name);});});});
  var slider=document.querySelector('.mg-slider'),track=document.querySelector('.mg-slider-track'),cards=Array.from(document.querySelectorAll('.mg-slide')),dots=Array.from(document.querySelectorAll('.mg-dots button'));
  if(!slider||!track||!cards.length)return;
  var index=0,timer=0;
  function go(i){index=(i+cards.length)%cards.length;slider.scrollTo({left:cards[index].offsetLeft-slider.offsetLeft,behavior:'smooth'});dots.forEach(function(d,n){d.classList.toggle('is-active',n===index);});}
  function schedule(wait){clearTimeout(timer);timer=setTimeout(function(){go(index+1);schedule(4200);},wait||4200);}
  dots.forEach(function(dot,i){dot.addEventListener('click',function(){go(i);schedule(6000);});});
  slider.addEventListener('pointerdown',function(){schedule(6500);},{passive:true});
  schedule(2000);
})();
