window.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.getElementById('burger');
  const burgerIcon = document.querySelector('.burger-icon');
  const headerMobileNav = document.querySelector('.header__mobile');

  burgerMenu.addEventListener('click', function() {
    headerMobileNav.classList.toggle('header__mobile--appears');
   
    burgerIcon.classList.toggle('active');
  });
// скрыть или показать бургер меню
  if (document.documentElement.clientWidth < 768) {
    burgerMenu.classList.remove('hidden');
  } else {
    burgerMenu.classList.add('hidden');
  }
  // скрыть или показать бургер меню при ресайзе окна
  window.addEventListener('resize', function() {
    if (document.documentElement.clientWidth < 768) {
      // до 768px
      burgerMenu.classList.remove('hidden');
    } else {
      // свыше 768px
      burgerMenu.classList.add('hidden');
      // сделать кнопку бургер по умолчанию
      burgerIcon.classList.remove('active');
      // скрыть меню бомильной навигации
      headerMobileNav.classList.remove('header__mobile--appears');
    }
  });


});

