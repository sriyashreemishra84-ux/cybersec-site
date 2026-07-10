// Hide loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if(loader) loader.style.display = 'none';
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace(/\D/g,'');
    const increment = target / 200;
    if(count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target + (target == 99 ? '%' : '+');
    }
  };
  updateCount();
});

// FIXED: Mobile Hamburger Menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburgerBtn.innerHTML = navMenu.classList.contains('active') 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Scroll to top
const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});
