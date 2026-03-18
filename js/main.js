// ============================================================
// DEVIN DOBEK — BROADCAST MONITOR INTERACTIONS
// ============================================================

// ===== NAV SCROLL EFFECT =====
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
});

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
});

mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    });
});

// ===== SCROLL REVEAL ANIMATIONS =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            const siblings = parent.querySelectorAll(':scope > .reveal');
            if (siblings.length > 1) {
                const index = Array.from(siblings).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 120}ms`;
            }
            entry.target.classList.add('vis');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== YOUTUBE CLICK-TO-PLAY =====
function playVideo(el, videoId) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:0;';
    el.innerHTML = '';
    el.appendChild(iframe);

    // Update monitor frame state if present
    const monitorFrame = el.closest('.monitor-frame');
    if (monitorFrame) {
        const tally = monitorFrame.querySelector('.monitor-tally');
        const tc = monitorFrame.querySelector('.monitor-tc');
        if (tally) tally.classList.add('recording');
        if (tc) tc.textContent = 'PLAYING';
    }
}

// ===== RUNNING TIMECODE =====
(function startTimecode() {
    const tcEl = document.querySelector('.hero-timecode');
    if (!tcEl) return;
    const startTime = Date.now();

    function update() {
        const elapsed = Date.now() - startTime;
        const h = String(Math.floor(elapsed / 3600000)).padStart(2, '0');
        const m = String(Math.floor((elapsed % 3600000) / 60000)).padStart(2, '0');
        const s = String(Math.floor((elapsed % 60000) / 1000)).padStart(2, '0');
        const f = String(Math.floor((elapsed % 1000) / 33.33)).padStart(2, '0');
        tcEl.textContent = `${h}:${m}:${s}:${f}`;
        requestAnimationFrame(update);
    }
    // Delay start to match the timecode fade-in animation
    setTimeout(() => requestAnimationFrame(update), 1200);
})();

// ===== HERO PARALLAX =====
(function heroParallax() {
    const heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;
    const heroHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < heroHeight) {
            heroBg.style.transform = `translateY(${scrollY * 0.15}px)`;
        }
    }, { passive: true });
})();
