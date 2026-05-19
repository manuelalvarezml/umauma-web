(function () {
  function init() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var list = document.querySelectorAll(".reveal-on-scroll");
    if (!list.length) return;
    document.documentElement.classList.add("js-reveal");
    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < list.length; i++) list[i].classList.add("reveal-visible");
      return;
    }
    var io = new IntersectionObserver(
      function (entries, o) {
        for (var j = 0; j < entries.length; j++) {
          var e = entries[j];
          if (!e.isIntersecting) continue;
          e.target.classList.add("reveal-visible");
          o.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.02 }
    );
    for (var k = 0; k < list.length; k++) io.observe(list[k]);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
