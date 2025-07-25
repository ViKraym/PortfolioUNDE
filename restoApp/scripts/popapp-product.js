document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu-element');
  const modal = document.getElementById('productModal');
  const closeBtn = document.querySelector('.close-modal');

  // Данные о товарах (можно заменить на API)
  const products = {
    pizza: {
      title: 'Пицца «Маргарита»',
      ingredients: 'Тесто, томатный соус, сыр моцарелла, помидоры, базилик',
      weight: '450 г',
      price: '590 ₽',
      image: 'restoApp/assets/images/pizza.webp'
    },
    soup: {
      title: 'Томатный суп',
      ingredients: 'Томаты, сливки, чеснок, базилик, гренки',
      weight: '350 г',
      price: '320 ₽',
      image: 'restoApp/assets/images/supiy.webp'
    },
    // Добавьте остальные товары
  };

  // Обработчик клика
  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const productId = this.querySelector('img').alt; // pizza, soup и т.д.
      const product = products[productId];

      // Заполняем модальное окно
      document.querySelector('.product-title').textContent = product.title;
      document.querySelector('.ingredients-text').textContent = product.ingredients;
      document.querySelector('.weight').textContent = product.weight;
      document.querySelector('.price-value').textContent = product.price;
      
      // Указываем полный путь к изображению
      const imgElement = document.querySelector('.product-image img');
      imgElement.src = window.location.pathname.includes('PortfolioUNDE') 
        ? '/PortfolioUNDE/' + product.image 
        : product.image;
      imgElement.alt = product.title;

      // Показываем модальное окно
      modal.style.display = 'flex';
    });
  });

  // Закрытие модалки
  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
