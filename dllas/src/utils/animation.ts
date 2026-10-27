export const setupScrollAnimation = () => {
  const handleScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      const isVisible = rect.top <= windowHeight * 0.85 && rect.bottom >= windowHeight * 0.1;
      el.classList.toggle('visible', isVisible);
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
