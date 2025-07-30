const slidesContainer = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');
const indicatorsContainer = document.querySelector('.indicators');
let currentSlide = 0;
let isAnimating = false;

// Создаем индикаторы
slides.forEach((_, index) => {
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  indicator.addEventListener('click', () => !isAnimating && showSlide(index));
  indicatorsContainer.appendChild(indicator);
});

// Функция плавного перехода между слайдами
function showSlide(n) {
  if (isAnimating) return;
  isAnimating = true;
  
  const newIndex = normalizeSlideIndex(n);
  const direction = newIndex > currentSlide ? 'next' : 'prev';
  
  // Подготовка слайдов
  slides.forEach(slide => {
    slide.style.transition = 'none';
    slide.style.transform = 'translateX(0)';
    slide.style.zIndex = 0;
  });
  
  const current = slides[currentSlide];
  const next = slides[newIndex];
  
  // Позиционирование
  current.style.zIndex = 2;
  next.style.zIndex = 1;
  
  if (direction === 'next') {
    next.style.transform = 'translateX(100%)';
  } else {
    next.style.transform = 'translateX(-100%)';
  }
  
  // Запуск анимации
  setTimeout(() => {
    current.style.transition = 'transform 1500ms ease-in-out';
    next.style.transition = 'transform 1500ms ease-in-out';
    
    if (direction === 'next') {
      current.style.transform = 'translateX(-100%)';
      next.style.transform = 'translateX(0)';
    } else {
      current.style.transform = 'translateX(100%)';
      next.style.transform = 'translateX(0)';
    }
  }, 10);
  
  // Обновление состояния после анимации
  setTimeout(() => {
    currentSlide = newIndex;
    updateIndicators();
    isAnimating = false;
  }, 510);
}

// Обновление индикаторов
function updateIndicators() {
  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
}

// Нормализация индекса
function normalizeSlideIndex(index) {
  return (index + slides.length) % slides.length;
}

// Обработчики событий
prevButton.addEventListener('click', () => !isAnimating && showSlide(currentSlide - 1));
nextButton.addEventListener('click', () => !isAnimating && showSlide(currentSlide + 1));

// Автопрокрутка
let autoSlide = setInterval(() => {
  if (!isAnimating) showSlide(currentSlide + 1);
}, 3000);

// Пауза при наведении
slidesContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
slidesContainer.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => {
    if (!isAnimating) showSlide(currentSlide + 1);
  }, 3000);
});

// Инициализация
showSlide(0);
