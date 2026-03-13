(function () {
  const reveals = document.querySelectorAll('.reveal');
  const progress = document.getElementById('scroll-indicator');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach((el) => observer.observe(el));

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const width = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    progress.style.width = width + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();
