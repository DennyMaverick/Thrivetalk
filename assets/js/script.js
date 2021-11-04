window.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.getElementById('burger');
  const burgerIcon = document.querySelector('.burger-icon');
  const headerMobileNav = document.querySelector('.header__mobile');
  const overlayModal = document.querySelector(".overlay-modal-mobile");
  const bodyElement = document.querySelector("body");
  const activeLinks = document.querySelectorAll(".header__mobile--nav a");

  activeLinks.forEach(function (item) {
    item.addEventListener("click", function () {
      console.log("yea");
      //  скрыть модальное окно - оверлэй
      overlayModal.classList.add("hidden");
      // убрать бургер-иконке класс active
      burgerIcon.classList.remove("active");
      // убрать мобильную навигацию
      headerMobileNav.classList.remove("header__mobile--appears");
    });
  });

  burgerMenu.addEventListener('click', function() {
    // запретить скролл
    bodyElement.classList.toggle("no-scroll");
    // показать или убрать мобильную навигацию
    headerMobileNav.classList.toggle('header__mobile--appears');
    // показать или скрыть модальное окно - оверлэй 
    overlayModal.classList.toggle("hidden");
    // добавить или убрать бургер-иконке класс active
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
      burgerMenu.classList.add("hidden");
      // сделать кнопку бургер по умолчанию
      burgerIcon.classList.remove("active");
      // Убрать модальное окно
      overlayModal.classList.add("hidden");
      // скрыть меню бомильной навигации
      headerMobileNav.classList.remove("header__mobile--appears");
    }
  });


});

