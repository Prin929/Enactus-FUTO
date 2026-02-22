// Fade-in Animation (existing)
const faders = document.querySelectorAll('.fade-in');
const options = { threshold:0.3 };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, options);
faders.forEach(fader=>appearOnScroll.observe(fader));

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', ()=>{
  navLinks.classList.toggle('active');
});
