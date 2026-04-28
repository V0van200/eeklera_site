// EEKLERA Wiki — Mobile Navigation Enhancement
// Добавляем функционал мобильного меню к существующему коду

(function() {
  // Ждем загрузки DOM
  document.addEventListener('DOMContentLoaded', function() {
    
    // Создаем кнопку мобильного меню если её нет
    const topbar = document.querySelector('.topbar-inner');
    if (topbar && !document.querySelector('.mobile-menu-toggle')) {
      const menuBtn = document.createElement('button');
      menuBtn.className = 'mobile-menu-toggle';
      menuBtn.innerHTML = '☰';
      menuBtn.setAttribute('aria-label', 'Toggle menu');
      topbar.insertBefore(menuBtn, topbar.firstChild);
      
      // Обработчик клика по кнопке меню
      menuBtn.addEventListener('click', function() {
        const sidenav = document.querySelector('.sidenav');
        if (sidenav) {
          sidenav.classList.toggle('mobile-open');
          menuBtn.innerHTML = sidenav.classList.contains('mobile-open') ? '✕' : '☰';
          document.body.style.overflow = sidenav.classList.contains('mobile-open') ? 'hidden' : '';
        }
      });
    }
    
    // Закрытие меню при клике по ссылке
    const sidenavLinks = document.querySelectorAll('.sidenav a');
    sidenavLinks.forEach(link => {
      link.addEventListener('click', function() {
        const sidenav = document.querySelector('.sidenav');
        const menuBtn = document.querySelector('.mobile-menu-toggle');
        if (sidenav && menuBtn && sidenav.classList.contains('mobile-open')) {
          sidenav.classList.remove('mobile-open');
          menuBtn.innerHTML = '☰';
          document.body.style.overflow = '';
        }
      });
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', function(e) {
      const sidenav = document.querySelector('.sidenav');
      const menuBtn = document.querySelector('.mobile-menu-toggle');
      
      if (sidenav && menuBtn && 
          sidenav.classList.contains('mobile-open') && 
          !sidenav.contains(e.target) && 
          !menuBtn.contains(e.target)) {
        sidenav.classList.remove('mobile-open');
        menuBtn.innerHTML = '☰';
        document.body.style.overflow = '';
      }
    });
    
    // Закрытие меню при изменении размера окна
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth > 980) {
          const sidenav = document.querySelector('.sidenav');
          const menuBtn = document.querySelector('.mobile-menu-toggle');
          if (sidenav) {
            sidenav.classList.remove('mobile-open');
            document.body.style.overflow = '';
          }
          if (menuBtn) {
            menuBtn.innerHTML = '☰';
          }
        }
      }, 250);
    });
    
  });
})();
