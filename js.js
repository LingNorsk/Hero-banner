const heroCard = document.querySelector('.hero-card');
if (heroCard) {
    heroCard.addEventListener('mousemove', (e) => {
        const rect = heroCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        gsap.to(heroCard, {
            duration: 0.3,
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 3500,
            ease: "power2.out"
        });
    });

    heroCard.addEventListener('mouseleave', () => {
        gsap.to(heroCard, {
            duration: 0.5,
            rotateX: 0,
            rotateY: 0,
            ease: "power2.out"
        });
    });
}

// "Contact me" - GitHub
const contactBtn = document.getElementById('contact-btn');
if (contactBtn) {
    contactBtn.addEventListener('click', function() {
        window.open('https://github.com/LingNorsk/Hero-banner', '_blank', 'noopener');
    });
}