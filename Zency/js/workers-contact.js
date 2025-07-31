
document.addEventListener('DOMContentLoaded', () => {
    const contacts = document.querySelectorAll('.workers-contact');
    
    contacts.forEach(contact => {
        contact.addEventListener('click', () => {
            const icons = contact.nextElementSibling;
            icons.classList.toggle('active');
            contact.classList.toggle('active'); // Добавляем/убираем поворот
        });
    });
});