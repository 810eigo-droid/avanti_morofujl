(function () {
  var viewport = document.querySelector('.menu-gallery-window');
  var dots = Array.from(document.querySelectorAll('.menu-gallery-dots button'));
  if (!viewport || dots.length < 2) return;

  var timer = 0;
  var delay = 4200;

  function currentIndex() {
    var active = dots.findIndex(function (dot) { return dot.classList.contains('is-active'); });
    return active < 0 ? 0 : active;
  }

  function schedule(wait) {
    window.clearTimeout(timer);
    timer = window.setTimeout(advance, wait || delay);
  }

  function advance() {
    var next = (currentIndex() + 1) % dots.length;
    dots[next].click();
    schedule();
  }

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () { schedule(); });
  });
  viewport.addEventListener('pointerdown', function () { schedule(6000); }, { passive: true });
  viewport.addEventListener('touchstart', function () { schedule(6000); }, { passive: true });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) window.clearTimeout(timer);
    else schedule(1200);
  });

  schedule(1800);
})();
