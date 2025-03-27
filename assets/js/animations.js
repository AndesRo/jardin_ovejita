// Animaciones iniciales
export function initAnimations() {
    // Animación loader
    gsap.from('.loader-ovejita', {
      duration: 1.5,
      rotate: 360,
      repeat: -1,
      ease: 'power2.inOut'
    });
  
    // Animación logo
    gsap.from('.navbar-brand img', {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: 'bounce.out'
    });
  }
  
  // Animaciones hover productos
  export function productHoverAnimations() {
    document.querySelectorAll('.product-card').forEach(card => {
      gsap.to(card, {
        duration: 0.3,
        ease: 'power2.out',
        y: -5,
        boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
        paused: true,
        overwrite: 'auto'
      });
  
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.3,
          y: -5,
          boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
        });
        gsap.to(card.querySelector('img'), {
          duration: 0.3,
          scale: 1.05
        });
      });
  
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.3,
          y: 0,
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        });
        gsap.to(card.querySelector('img'), {
          duration: 0.3,
          scale: 1
        });
      });
    });
  }
  
  // Animación ovejita decorativa
  export function floatingSheep() {
    gsap.to('.decorative-sheep', {
      duration: 2,
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }
  
  // Animaciones scroll-triggered
  export function scrollAnimations() {
    gsap.utils.toArray('.benefit-card').forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top center+=100',
        onEnter: () => {
          gsap.from(card, {
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: i * 0.2,
            ease: 'back.out(1.7)'
          });
        }
      });
    });
  }
  
  // Inicializar todas las animaciones
  document.addEventListener('DOMContentLoaded', () => {
    // Cargar GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
  
    // Ejecutar animaciones
    initAnimations();
    productHoverAnimations();
    floatingSheep();
    scrollAnimations();
  
    // Animación social links
    gsap.from('.social-links a', {
      duration: 1,
      stagger: 0.2,
      opacity: 0,
      x: 30,
      scrollTrigger: {
        trigger: '.social-links',
        start: 'top center'
      }
    });
  });