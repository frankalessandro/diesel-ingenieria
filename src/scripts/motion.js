import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Hero intro timeline ---------- */
function initHeroIntro() {
  const hero = document.querySelector("[data-hero]");
  if (!hero || reduceMotion) return;

  const kicker = hero.querySelector("[data-hero-kicker]");
  const lines = hero.querySelectorAll("[data-hero-line]");
  const sub = hero.querySelector("[data-hero-sub]");
  const cta = hero.querySelectorAll("[data-hero-cta]");
  const side = hero.querySelectorAll("[data-hero-side]");

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  if (kicker) tl.from(kicker, { opacity: 0, y: 20, duration: 0.6 });

  if (lines.length) {
    lines.forEach((line) => {
      const text = line.textContent;
      line.innerHTML = `<span class="inline-block will-change-transform">${text}</span>`;
    });
    tl.from(
      Array.from(lines).map((l) => l.firstElementChild),
      { yPercent: 118, duration: 1, stagger: 0.12 },
      "-=0.2",
    );
  }
  if (sub) tl.from(sub, { opacity: 0, y: 18, duration: 0.7 }, "-=0.55");
  if (cta.length) tl.from(cta, { opacity: 0, y: 18, duration: 0.6, stagger: 0.08 }, "-=0.5");
  if (side.length) tl.from(side, { opacity: 0, y: 30, duration: 0.7, stagger: 0.1 }, "-=0.6");
}

/* ---------- Generic reveals ---------- */
function initReveals() {
  if (reduceMotion) return;

  document.querySelectorAll("[data-reveal-group]").forEach((group) => {
    const items = group.querySelectorAll(".reveal, .reveal-x");
    if (!items.length) return;
    gsap.to(items, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: { trigger: group, start: "top 80%", once: true },
    });
  });

  document
    .querySelectorAll(".reveal:not([data-reveal-group] .reveal), .reveal-x:not([data-reveal-group] .reveal-x)")
    .forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    });

  // Line mask reveals
  document.querySelectorAll(".mask-reveal").forEach((line) => {
    const inner = line.querySelector("[data-mask-inner]") || line.firstElementChild;
    if (!inner) return;
    gsap.from(inner, {
      yPercent: 115,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: { trigger: line, start: "top 88%", once: true },
    });
  });
}

/* ---------- Animated counters ---------- */
function initCounters() {
  if (reduceMotion) return;
  document.querySelectorAll("[data-counter]").forEach((el) => {
    const target = parseFloat(el.dataset.counter || "0");
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const fmt = new Intl.NumberFormat("es-CO", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
      onUpdate: () => {
        el.textContent = fmt.format(obj.val);
      },
    });
  });
}

/* ---------- Parallax layers ---------- */
function initParallax() {
  if (reduceMotion) return;

  document.querySelectorAll("[data-parallax]").forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || "0.15");
    gsap.to(el, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest("[data-parallax-scope]") || el.parentElement || el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  document.querySelectorAll("[data-spin]").forEach((el) => {
    const deg = parseFloat(el.dataset.spin || "90");
    gsap.to(el, {
      rotate: deg,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement || el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  // Big outlined watermark drift
  document.querySelectorAll("[data-drift]").forEach((el) => {
    const dist = parseFloat(el.dataset.drift || "80");
    gsap.fromTo(
      el,
      { xPercent: 0 },
      {
        xPercent: dist,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("section") || el.parentElement || el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });
}

/* ---------- Horizontal pinned scroll ---------- */
function initHorizontalScroll() {
  if (reduceMotion) return;
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    document.querySelectorAll("[data-hscroll]").forEach((section) => {
      const track = section.querySelector("[data-hscroll-track]");
      if (!track) return;

      const getDistance = () => track.scrollWidth - document.documentElement.clientWidth + 96;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => "+=" + getDistance(),
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: tween,
      });

      // Progress line inside the section
      const bar = section.querySelector("[data-hscroll-progress]");
      if (bar) {
        gsap.to(bar, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + getDistance(),
            scrub: true,
          },
        });
      }
    });
  });
}

/* ---------- Global scroll progress bar ---------- */
function initProgressBar() {
  const bar = document.querySelector("[data-scroll-progress]");
  if (!bar || reduceMotion) return;
  gsap.to(bar, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: true },
  });
}

/* ---------- Navbar solidify on scroll ---------- */
function initNavbar() {
  const nav = document.querySelector("[data-nav]");
  if (!nav) return;
  ScrollTrigger.create({
    start: "top -40",
    end: 99999,
    toggleClass: { targets: nav, className: "is-scrolled" },
  });
}

/* ---------- Sliding hover indicator in the navbar ---------- */
function initNavIndicator() {
  const list = document.querySelector("[data-nav-links]");
  const indicator = document.querySelector("[data-nav-indicator]");
  if (!list || !indicator) return;

  const links = Array.from(list.querySelectorAll("[data-nav-link]"));
  const active = list.querySelector("[data-nav-link].is-active");
  const dur = reduceMotion ? 0 : 0.35;

  const place = (el, show = true) => {
    const lr = list.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    gsap.to(indicator, {
      x: r.left - lr.left,
      width: r.width,
      opacity: show ? 1 : 0,
      duration: dur,
      ease: "power3.out",
    });
  };

  const home = () => {
    if (active) place(active);
    else gsap.to(indicator, { opacity: 0, duration: dur });
  };

  links.forEach((el) => {
    el.addEventListener("mouseenter", () => place(el));
    el.addEventListener("focus", () => place(el));
  });
  list.addEventListener("mouseleave", home);
  window.addEventListener("resize", home);
  window.addEventListener("load", home);

  // Posición inicial (sin animar) sobre la página activa, si la hay.
  if (active) {
    const lr = list.getBoundingClientRect();
    const r = active.getBoundingClientRect();
    gsap.set(indicator, { x: r.left - lr.left, width: r.width, opacity: 1 });
  }
}

/* ---------- Nav de categorías con scrollspy (p.ej. /especialidades) ---------- */
function initCategorySpy() {
  const nav = document.querySelector("[data-spy-nav]");
  if (!nav) return;

  const links = Array.from(nav.querySelectorAll("[data-spy-link]"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length) return;

  const setActive = (id) => {
    links.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`));
    const activeLink = nav.querySelector(`[data-spy-link][href="#${id}"]`);
    if (activeLink) activeLink.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  };

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 45%",
      end: "bottom 45%",
      onToggle: (self) => {
        if (self.isActive) setActive(section.id);
      },
    });
  });
}

function init() {
  initHeroIntro();
  initReveals();
  initCounters();
  initParallax();
  initHorizontalScroll();
  initProgressBar();
  initNavbar();
  initNavIndicator();
  initCategorySpy();

  // Refresh once fonts / layout settle
  requestAnimationFrame(() => ScrollTrigger.refresh());
  window.addEventListener("load", () => ScrollTrigger.refresh());
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
