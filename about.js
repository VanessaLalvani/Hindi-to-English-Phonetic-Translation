// ============================================
// FORCE CUSTOM CURSORS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.cursor = "url('Match/cursormatch.png') 16 16, auto";
    document.documentElement.style.cursor = "url('Match/cursormatch.png') 16 16, auto";

    const observer = new MutationObserver(() => {
        if (!document.body.style.cursor.includes('cursormatch')) {
            document.body.style.cursor = "url('Match/cursormatch.png') 16 16, auto";
        }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
});

// ============================================
// NAVBAR — hide on scroll, show at top
// ============================================
const navbar = document.querySelector('.navbar');
const SHOW_THRESHOLD = 50;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll <= SHOW_THRESHOLD) {
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
    }
}, false);

// ============================================
// SCROLL REVEAL — generic .reveal elements
// ============================================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// ============================================
// CLOSING SECTION — reveal on scroll
// ============================================
function initClosingReveal() {
    const closingText = document.querySelector('.closing-text');
    const ctaLink     = document.querySelector('.cta-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (closingText) closingText.classList.add('visible');
                if (ctaLink)     ctaLink.classList.add('visible');
                observer.disconnect();
            }
        });
    }, { threshold: 0.2 });

    const closingSection = document.querySelector('.closing-section');
    if (closingSection) observer.observe(closingSection);
}

// ============================================
// SECTION TAGS + COLS — staggered reveal
// ============================================
function initSectionReveal() {
    const targets = document.querySelectorAll(
        '.section-tag, .col-heading, .body-text, .strategy-item, .research-question, .pull-quote, .rq-text'
    );

    targets.forEach(el => {
        el.classList.add('reveal');
    });

    document.querySelectorAll('.strategy-item').forEach((item, i) => {
        item.classList.add(`reveal-delay-${Math.min(i + 1, 5)}`);
    });

    initScrollReveal();
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initSectionReveal();
    initClosingReveal();
});