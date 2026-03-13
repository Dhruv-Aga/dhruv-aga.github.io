(function () {
  const reveals = document.querySelectorAll('.reveal');
  const progress = document.getElementById('scroll-indicator');
  const bentoCards = document.querySelectorAll('.bento-card');
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalStory = document.getElementById('modal-story');
  const modalTech = document.getElementById('modal-tech');
  const modalImpact = document.getElementById('modal-impact');

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
    if (progress) progress.style.width = width + '%';
  }

  function openProjectModal(card) {
    if (!modal || !card) return;
    modalTitle.textContent = card.dataset.projectTitle || 'Project';
    modalStory.textContent = card.dataset.projectStory || '';
    modalTech.textContent = card.dataset.projectTech || '';
    modalImpact.textContent = card.dataset.projectImpact || '';
    modal.showModal();
  }

  bentoCards.forEach((card) => {
    card.addEventListener('click', () => openProjectModal(card));
  });

  modal?.addEventListener('click', (event) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (!isInDialog) modal.close();
  });

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();
