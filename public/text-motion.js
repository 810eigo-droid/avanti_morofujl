(function () {
  var targets = [
    ['.party-plan-heading h2', 'text-stomp'],
    ['.intro blockquote', 'text-baseline'],
    ['.features .section-heading h2', 'text-zoom'],
    ['.access-info h2', 'text-pop']
  ];
  var items = [];
  targets.forEach(function (entry) {
    var element = document.querySelector(entry[0]);
    if (!element) return;
    element.classList.add('text-motion', entry[1]);
    items.push(element);
  });
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (item) { item.classList.add('text-motion-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('text-motion-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.35, rootMargin: '0px 0px -6% 0px' });
  items.forEach(function (item) { observer.observe(item); });
})();
