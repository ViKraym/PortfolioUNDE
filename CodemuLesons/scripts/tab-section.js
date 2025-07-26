document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabSections = document.querySelectorAll('.tab-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем активный класс у всех кнопок и секций
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabSections.forEach(section => section.classList.remove('active'));
            
            // Получаем ID секции из атрибута data-target
            const targetSection = document.querySelector(button.dataset.target);
            
            // Добавляем активный класс текущей кнопке и секции
            button.classList.add('active');
            targetSection.classList.add('active');
        });
    });
});
