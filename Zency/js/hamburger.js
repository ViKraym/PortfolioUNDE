document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu-list').classList.toggle('active');

    // Добавляем/убираем overflow у body при открытии/закрытии меню
    document.body.classList.toggle('no-scroll');
});
