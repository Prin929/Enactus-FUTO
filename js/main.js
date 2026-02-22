const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, options);

faders.forEach(fader => appearOnScroll.observe(fader));
