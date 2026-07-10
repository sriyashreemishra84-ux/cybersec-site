document.addEventListener('DOMContentLoaded', function() {
  
  // Hide loader
  const loader = document.getElementById('loader');
  if(loader) loader.style.display = 'none';

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

  // FIXED HAMBURGER - This WILL work now
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  
  if(hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      if(navMenu.classList.contains('active')) {
        hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });

    // Close menu when link clicked
    document.querySelectorAll('#nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // Scroll to top
  const scrollBtn = document.getElementById('scroll-top');
  if(scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }
});
