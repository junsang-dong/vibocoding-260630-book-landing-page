/* =========================================================
   The Vibe Coding Log — Landing Page Script
   1) Smooth Scroll      2) Mobile Nav Toggle
   3) Sticky Nav Shadow  4) Active Menu Highlight
   5) Scroll Reveal (Intersection Observer)
   6) Counter Animation  7) Accordion
   8) Back to Top
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- 1) SMOOTH SCROLL ---------- */
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId === "#" || targetId.length < 2) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // 모바일 메뉴가 열려 있으면 닫기
      closeMobileMenu();
    });
  });

  /* ---------- 2) MOBILE NAV TOGGLE ---------- */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  function closeMobileMenu() {
    navMenu.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "메뉴 열기");
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
  });

  /* ---------- 3) STICKY NAV SHADOW ---------- */
  const nav = document.getElementById("nav");
  const backToTop = document.getElementById("backToTop");

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 10);
    backToTop.classList.toggle("is-visible", y > 400);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 4) ACTIVE MENU HIGHLIGHT ---------- */
  const sections = document.querySelectorAll("section[id]");
  const menuLinks = document.querySelectorAll(".nav__link");

  const menuObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          menuLinks.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => menuObserver.observe(section));

  /* ---------- 5) SCROLL REVEAL ---------- */
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((el) => revealObserver.observe(el));

  /* ---------- 6) COUNTER ANIMATION ---------- */
  const counters = document.querySelectorAll(".counter");

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    const duration = 1500;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }

    requestAnimationFrame(tick);
  }

  /* ---------- 7) ACCORDION ---------- */
  const accordionHeaders = document.querySelectorAll(".accordion__header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const panel = header.nextElementSibling;
      const isOpen = item.classList.contains("is-open");

      // 다른 항목 닫기 (한 번에 하나만 열림)
      document.querySelectorAll(".accordion__item.is-open").forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem.querySelector(".accordion__header").setAttribute("aria-expanded", "false");
          openItem.querySelector(".accordion__panel").style.maxHeight = null;
        }
      });

      // 현재 항목 토글
      item.classList.toggle("is-open", !isOpen);
      header.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = !isOpen ? panel.scrollHeight + "px" : null;
    });
  });

  /* ---------- 8) BACK TO TOP ---------- */
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
