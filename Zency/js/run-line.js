document.addEventListener('DOMContentLoaded', function() {
  const marqueeContent = document.querySelector('.marquee-content');
  const originalText = marqueeContent.textContent.trim();
  
  // Дублируем текст 10 раз для плавности
  marqueeContent.textContent = originalText.repeat(10);
});