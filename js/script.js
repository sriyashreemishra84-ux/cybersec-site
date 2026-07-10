// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200; // Lower = faster

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if(count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target + (target == 99 ? '%' : '+');
      }
    };
    updateCount();
  });
};

// Run when page loads
window.addEventListener('load', animateCounters);
