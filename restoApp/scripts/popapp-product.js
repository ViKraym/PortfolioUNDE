document.addEventListener('DOMContentLoaded', function() {
  // Находим все элементы меню
  const menuItems = document.querySelectorAll('.menu-element');
  
  // Находим модальное окно
  const modal = document.getElementById('productModal');
  const closeBtn = document.querySelector('.close-modal');
  
  // Данные о товарах (можно заменить на запрос к API)
  const productsData = {
    pizza: {
      title: 'Пицца',
      ingredients: 'Тесто, томатный соус, сыр моцарелла, ветчина, грибы',
      weight: '450 г',
      price: '590 ₽',
      image: 'restoApp/assets/images/pizza.webp'
    },
    soup: {
      title: 'Супы',
      ingredients: 'Куриный бульон, картофель, морковь, лук, зелень',
      weight: '350 г',
      price: '320 ₽',
      image: 'restoApp/assets/images/supiy.webp'
    },
    // Добавьте данные для других товаров
  };
  
  // Обработчик клика по элементам меню
  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Получаем тип продукта из alt изображения
      const productType = this.querySelector('img').alt;
      const product = productsData[productType];
      
      // Заполняем модальное окно данными
      document.querySelector('.product-title').textContent = product.title;
      document.querySelector('.ingredients p').textContent = product.ingredients;
      document.querySelector('.weight-price p:first-child').innerHTML = `<strong>Вес:</strong> ${product.weight}`;
      document.querySelector('.price').innerHTML = `<strong>Цена:</strong> ${product.price}`;
      document.querySelector('.product-image img').src = product.image;
      document.querySelector('.product-image img').alt = product.title;
      
      // Показываем модальное окно
      modal.style.display = 'flex';
    });
  });
  
  // Закрытие модального окна
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Закрытие при клике вне окна
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
