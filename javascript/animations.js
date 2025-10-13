// ------------------------------
// IntersectionObserver: Fade-in Animations 
// ------------------------------
const hiddenElements = document.querySelectorAll('.hidden');

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

hiddenElements.forEach(el => {
  el.style.transitionDelay = '0.05s';
  fadeObserver.observe(el);
});
