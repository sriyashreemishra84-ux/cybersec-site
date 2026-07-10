// Loader
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
});

// Dark mode toggle
const toggle = document.getElementById('theme-toggle');
toggle.onclick = () => {
  document.body.dataset.theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
};

// Mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.onclick = () => navLinks.classList.toggle('show');

// Counter animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / 100;
    if(count < target){
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 20);
    } else counter.innerText = target + '+';
  }
  update();
});
