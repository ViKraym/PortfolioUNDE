// ========================================== Добавляем плавный скролл для всех ссылок с якорями
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Учитываем высоту шапки
        behavior: 'smooth'
      });
    }
  });
});

// ========================================== Активируем анимацию для секций при прокрутке
const animateOnScroll = () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
};

// ========================================== Запускаем при загрузке и скролле
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// ========================================== Открытие изображений в полноэкранном режиме
document.querySelectorAll('.portfolio__item img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <img src="${img.src}" alt="${img.alt}">
        <p>${img.nextElementSibling.textContent}</p>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close').addEventListener('click', () => {
      modal.remove();
    });
  });
});

// ========================================== Работающая форма обратной связи

document.querySelector('.contacts__form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const submitBtn = this.querySelector('button');
  const originalText = submitBtn.textContent;

  // Имитация отправки
  submitBtn.textContent = 'Отправка...';
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.textContent = 'Отправлено!';
    this.reset();
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  }, 1500);
});

// ========================================== Добавьте кнопки фильтрации в HTML перед секцией портфолио
const filters = {
  'all': 'Все проекты',
  'apartment': 'Квартиры',
  'cafe': 'Кафе и рестораны',
  'house': 'Частные дома',
  'commercial': 'Коммерческие помещения'
};

// Создание контейнера для фильтров
const filterContainer = document.createElement('div');
filterContainer.className = 'portfolio-filters';
Object.entries(filters).forEach(([key, text]) => {
  const btn = document.createElement('button');
  btn.className = 'filter-btn';
  btn.dataset.filter = key;
  btn.innerHTML = `<span class="filter-icon">${key === 'all' ? '★' : '·'}</span> ${text}`;
  filterContainer.appendChild(btn);
});

// Вставка перед портфолио
document.querySelector('#portfolio .container').prepend(filterContainer);

// Оптимизированная функция фильтрации
function filterProjects(filterValue) {
  const items = document.querySelectorAll('.portfolio__item');
  const activeBtn = document.querySelector(`.filter-btn[data-filter="${filterValue}"]`);
  
  // Анимация и переключение
  items.forEach(item => {
    if (filterValue === 'all' || 
    item.dataset.category.split(' ').includes(filterValue)) {
      item.style.opacity = '0';
      setTimeout(() => {
        item.style.display = 'block';
        setTimeout(() => { item.style.opacity = '1'; }, 50);
      }, 200);
    } else {
      item.style.opacity = '0';
      setTimeout(() => { item.style.display = 'none'; }, 200);
    }
  });

  // Обновление активной кнопки
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.querySelector('.filter-icon').textContent = '·';
  });
  activeBtn.classList.add('active');
  activeBtn.querySelector('.filter-icon').textContent = '★';
}

// Обработчики событий
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    filterProjects(this.dataset.filter);
    
    // Плавная прокрутка к секции
    document.querySelector('#portfolio').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Инициализация
filterProjects('all');


// ========================================== Добавьте div с id="map" в раздел контактов
function initMap() {
  const location = { lat: 44.868329, lng: 38.157563 }; // Координаты Абинска
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: location
  });
  new google.maps.Marker({ position: location, map: map });
}


// ========================================== Динамические эффекты при наведении Анимация ховера для кнопок и карточек
document.querySelectorAll('.btn, .portfolio__item, .services__item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.transform = 'scale(1.02)';
    el.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
  });
  
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'scale(1)';
    el.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  });
});
