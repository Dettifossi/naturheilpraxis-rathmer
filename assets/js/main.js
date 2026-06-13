/* Naturheilpraxis Detlef Rathmer — interactions */
(function () {
  "use strict";

  // ---- Mobile navigation toggle ----
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu when a link is tapped
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---- Scroll reveal ----
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // ---- Site-switcher click toggle ----
  var siteSwitcher = document.querySelector('.site-switcher');
  if (siteSwitcher) {
    var switchBtn = siteSwitcher.querySelector('.site-switcher__btn');
    switchBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      siteSwitcher.classList.toggle('is-open');
    });
    siteSwitcher.querySelector('.site-switcher__card').addEventListener('click', function (e) {
      e.stopPropagation();
    });
    document.addEventListener('click', function () {
      siteSwitcher.classList.remove('is-open');
    });
  }
})();
