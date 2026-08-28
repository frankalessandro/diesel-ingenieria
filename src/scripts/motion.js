import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

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
    // Momento de mayor impacto del sitio: cada línea del H1 se divide en
    // palabras (no en caracteres — a nivel char, los spans inline-block
    // rompen el word-wrap normal y pueden partir una palabra a la mitad)
    // y entran con un stagger marcado, en vez del simple slide de línea
    // completa que había antes.
    const wordBatches = Array.from(lines).map((line) => {
      const split = new SplitText(line, { type: "words", wordsClass: "inline-block will-change-transform" });
      return split.words;
    });
    tl.from(wordBatches.flat(), { yPercent: 130, duration: 0.9, stagger: 0.045, ease: "power4.out" }, "-=0.2");
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
      scale: 1,
      duration: 0.9,
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
        scale: 1,
        duration: 0.9,
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

/* ---------- Split-text reveals (headlines marcados a mano) ---------- */
function initSplitReveal() {
  if (reduceMotion) return;
  document.querySelectorAll("[data-split]").forEach((el) => {
    const type = el.dataset.split === "chars" ? "chars" : "words";
    const split = new SplitText(el, { type, wordsClass: "inline-block", charsClass: "inline-block" });
    const targets = type === "chars" ? split.chars : split.words;
    gsap.from(targets, {
      opacity: 0,
      yPercent: 100,
      duration: 0.7,
      stagger: type === "chars" ? 0.012 : 0.045,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
  });
}

/* ---------- SVG técnico que se "dibuja" al entrar (CircuitLine, dial del hero) ---------- */
function initDrawSVG() {
  document.querySelectorAll("[data-draw-scope]").forEach((svg) => {
    const targets = svg.querySelectorAll("[data-draw]");
    if (!targets.length) return;
    if (reduceMotion) {
      gsap.set(targets, { drawSVG: "100%" });
      return;
    }
    gsap.set(targets, { drawSVG: "0%" });
    gsap.to(targets, {
      drawSVG: "100%",
      duration: 1.3,
      stagger: 0.05,
      ease: "power2.inOut",
      scrollTrigger: { trigger: svg, start: "top 85%", once: true },
    });
  });
}

/* ---------- Pull magnético (solo 1-2 elementos focales por pantalla) ---------- */
function initMagnetic() {
  if (reduceMotion) return;
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic || "0.3");
    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "elastic.out(1,0.4)" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "elastic.out(1,0.4)" });

    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * strength);
      yTo((e.clientY - r.top - r.height / 2) * strength);
    });
    el.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}

/* ---------- Tilt 3D en tarjetas insignia (data-tilt) ---------- */
function initTilt() {
  if (reduceMotion) return;
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    const strength = parseFloat(card.dataset.tilt || "7");
    gsap.set(card, { transformPerspective: 800, transformStyle: "preserve-3d" });
    const rxTo = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3.out" });
    const ryTo = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3.out" });
    const liftTo = gsap.quickTo(card, "y", { duration: 0.5, ease: "power3.out" });

    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      ryTo(px * strength);
      rxTo(-py * strength);
    });
    card.addEventListener("mouseenter", () => liftTo(-4));
    card.addEventListener("mouseleave", () => {
      rxTo(0);
      ryTo(0);
      liftTo(0);
    });
  });
}

/* ---------- Selector de sectores: entrada suave del panel (la base sigue
   siendo el radio+CSS, esto es puramente aditivo y no rompe el fallback) ---------- */
function initSectorFlip() {
  if (reduceMotion) return;
  const radios = document.querySelectorAll('input[name="sector-tab"]');
  if (!radios.length) return;

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (!radio.checked) return;
      const id = radio.id.replace("tab-", "");
      const panel = document.querySelector(`[data-panel="${id}"]`);
      const btn = document.querySelector(`[data-btn="${id}"]`);
      if (panel) gsap.fromTo(panel, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
      if (btn) gsap.fromTo(btn, { scale: 0.94 }, { scale: 1, duration: 0.35, ease: "back.out(2)" });
    });
  });
}

/* ---------- Manómetro de progreso de scroll (navbar) ---------- */
function initScrollGauge() {
  const arc = document.querySelector("[data-scroll-gauge]");
  if (!arc || typeof arc.getTotalLength !== "function") return;
  const len = arc.getTotalLength();
  gsap.set(arc, { strokeDasharray: len, strokeDashoffset: len });

  if (reduceMotion) {
    gsap.set(arc, { strokeDashoffset: 0 });
    return;
  }
  gsap.to(arc, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: true },
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

/* ---------- Muro de clientes: barrido de entrada + modal "Registro de cliente" ---------- */
function initClientWall() {
  const modal = document.querySelector("[data-client-modal]");
  if (!modal) return;

  // Barrido tipo escáner: una sola pasada cuando el panel entra en viewport.
  const scan = document.querySelector("[data-client-scan]");
  if (scan && !reduceMotion) {
    gsap.fromTo(
      scan,
      { xPercent: -100, opacity: 0 },
      {
        xPercent: 400,
        opacity: 1,
        duration: 1.1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: scan, start: "top 80%", once: true },
        onStart: () => gsap.set(scan, { opacity: 1 }),
        onComplete: () => gsap.set(scan, { opacity: 0 }),
      },
    );
  }

  const backdrop = modal.querySelector("[data-client-backdrop]");
  const dialog = modal.querySelector("[data-client-dialog]");
  const watermark = modal.querySelector("[data-client-watermark]");
  const titleEl = modal.querySelector("[data-cm-title]");
  const sectorEl = modal.querySelector("[data-cm-sector]");
  const listEl = modal.querySelector("[data-cm-list]");
  const bodies = document.querySelector("[data-client-bodies]");
  const closeBtn = modal.querySelector("[data-client-close]");
  const plates = document.querySelectorAll("[data-client-plate]");
  if (!bodies || !plates.length) return;

  let lastTrigger = null;
  let anim = null;

  const openModal = (slug, trigger) => {
    const src = bodies.querySelector(`[data-client-body="${slug}"]`);
    if (!src) return;
    lastTrigger = trigger || null;

    titleEl.textContent = src.dataset.name || "";
    sectorEl.textContent = src.dataset.sector || "";
    watermark.textContent = src.dataset.name || "";
    listEl.innerHTML = src.innerHTML;

    modal.hidden = false;
    document.documentElement.style.overflow = "hidden";
    closeBtn?.focus();

    anim?.kill();
    const items = listEl.querySelectorAll("[data-cm-item]");

    if (reduceMotion) {
      gsap.set([backdrop, dialog, watermark], { clearProps: "all" });
      gsap.set(items, { clearProps: "all" });
      return;
    }

    anim = gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      .fromTo(
        dialog,
        { opacity: 0, y: 44, scale: 0.96, clipPath: "inset(0% 0% 100% 0%)" },
        { opacity: 1, y: 0, scale: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.55 },
        "-=0.12",
      )
      .fromTo(watermark, { opacity: 0, xPercent: -58 }, { opacity: 0.6, xPercent: -50, duration: 0.6 }, "<")
      .fromTo(items, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.07 }, "-=0.25");
  };

  const closeModal = () => {
    document.documentElement.style.overflow = "";
    const finish = () => {
      modal.hidden = true;
      listEl.innerHTML = "";
    };
    anim?.kill();
    if (reduceMotion) {
      finish();
    } else {
      gsap
        .timeline({ onComplete: finish })
        .to(dialog, { opacity: 0, y: 22, scale: 0.97, duration: 0.24, ease: "power2.in" })
        .to(backdrop, { opacity: 0, duration: 0.2 }, "-=0.14");
    }
    lastTrigger?.focus();
  };

  plates.forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.dataset.slug, btn));
  });
  modal.querySelectorAll("[data-client-close], [data-client-backdrop]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });
  // Focus trap simple dentro del diálogo.
  modal.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || modal.hidden) return;
    const f = modal.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
    if (!f.length) return;
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
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

function init() {
  initHeroIntro();
  initReveals();
  initSplitReveal();
  initDrawSVG();
  initMagnetic();
  initTilt();
  initSectorFlip();
  initClientWall();
  initCounters();
  initParallax();
  initHorizontalScroll();
  initScrollGauge();
  initNavbar();
  initNavIndicator();

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
