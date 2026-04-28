// Мобильная навигация - УЛУЧШЕННАЯ
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('[data-sidenav]');
  const body = document.body;

  if (!burger || !nav) return;

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = nav.classList.contains('open');
    
    if (isOpen) {
      // Закрыть
      nav.classList.remove('open');
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
    } else {
      // Открыть
      nav.classList.add('open');
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.width = '100%';
    }
  });

  // Закрыть при клике на ссылку
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
    });
  });

  // Закрыть при ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
    }
  });
});