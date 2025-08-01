document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu-list').classList.toggle('active');

    // Добавляем/убираем overflow у body при открытии/закрытии меню
    document.body.classList.toggle('no-scroll');
});

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const header = document.querySelector('header');
  
  if (currentScroll > lastScroll && currentScroll > 60) {
    // Прокрутка вниз
    header.classList.add('hide');
  } else {
    // Прокрутка вверх
    header.classList.remove('hide');
  }
  
  lastScroll = currentScroll;
});