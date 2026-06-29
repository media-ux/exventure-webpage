/* ============================================================
   Shared mobile navigation
   Works with any nav rendered as .nav > .nav-inner > (.nav-logo, .nav-links)
   regardless of which React/JS component produced it.
   - injects a hamburger button into .nav-inner
   - toggles a full-width drop panel for .nav-links on small screens
   - makes hover dropdowns (.nav-dropdown) tap-to-expand on mobile
   ============================================================ */
(function () {
  var BREAKPOINT = 980;

  function enhance(navInner) {
    if (!navInner || navInner.dataset.mnav === "1") return;
    navInner.dataset.mnav = "1";

    var nav = navInner.closest(".nav");
    var burger = document.createElement("button");
    burger.className = "nav-burger";
    burger.setAttribute("aria-label", "Toggle menu");
    burger.setAttribute("aria-expanded", "false");
    burger.innerHTML = '<span></span><span></span><span></span>';

    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle("nav-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-menu-open", open);
    });

    // place burger at the end of nav-inner
    navInner.appendChild(burger);

    // Close menu when any link inside the panel is tapped
    var links = navInner.querySelector(".nav-links");
    if (links) {
      links.addEventListener("click", function (e) {
        var a = e.target.closest("a");
        var trigger = e.target.closest(".nav-dropdown-trigger");
        if (trigger) {
          // mobile: toggle the dropdown open inline
          if (window.innerWidth <= BREAKPOINT) {
            e.preventDefault();
            var dd = trigger.closest(".nav-dropdown");
            if (dd) dd.classList.toggle("dd-open");
          }
          return;
        }
        if (a) {
          nav.classList.remove("nav-open");
          document.body.classList.remove("nav-menu-open");
          burger.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  function scan() {
    document.querySelectorAll(".nav-inner").forEach(enhance);
  }

  // React renders async — poll briefly until the nav exists, then observe.
  var tries = 0;
  var iv = setInterval(function () {
    scan();
    if (document.querySelector('.nav-inner[data-mnav="1"]') || ++tries > 60) {
      clearInterval(iv);
    }
  }, 50);

  // Keep scanning for client-side route swaps / late mounts
  var mo = new MutationObserver(function () { scan(); });
  if (document.body) mo.observe(document.body, { childList: true, subtree: true });

  // Reset on resize back to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > BREAKPOINT) {
      document.querySelectorAll(".nav.nav-open").forEach(function (n) {
        n.classList.remove("nav-open");
      });
      document.body.classList.remove("nav-menu-open");
      document.querySelectorAll(".nav-burger[aria-expanded='true']").forEach(function (b) {
        b.setAttribute("aria-expanded", "false");
      });
    }
  });
})();
