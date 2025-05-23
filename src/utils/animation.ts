export const setupScrollAnimation = () => {
  const handleScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (rect.top <= windowHeight * 0.75) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  // Trigger once on load
  setTimeout(handleScroll, 100);
  
  return () => window.removeEventListener('scroll', handleScroll);
};

export const initAnimations = () => {
  document.addEventListener('DOMContentLoaded', () => {
    setupScrollAnimation();
  });
};