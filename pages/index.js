
/* Переменные и константы для слайдера*/
let offset = 0; // значение cмещения от левого края
const windowOfSlider = document.querySelector('.slider-window');
const buttonsRight = document.querySelectorAll('.slider-btn-right');
const buttonsLeft = document.querySelectorAll('.slider-btn-left');

/* Для слайдера */
const slideLeft = (event) => {
  const sliderWindow = event.currentTarget.closest('.slider-window');
  const sliderItems = sliderWindow.querySelectorAll('.slider-item');
  const sliderLine = sliderWindow.querySelector('.slider-list');
  const btnLeft = sliderWindow.querySelector('.slider-btn-left');
  const btnRight = sliderWindow.querySelector('.slider-btn-right');
  const everlandCount = sliderWindow.querySelector('.everland__count');

  let slidePosition = 0; // позиция элемента в слайдере
  let countItems = 0; // Количество элементов в слайдере
  let lineWidth = 0; // Общая длина всех элементов
  let itemWidth = 0; // Ширина элемента

  btnRight.removeAttribute('disabled');
  sliderItems.forEach(el => { countItems += 1; });
  lineWidth = countItems * sliderItems[0].clientWidth;
  itemWidth = sliderItems[0].clientWidth;
  offset = offset - itemWidth;
  if (offset < 0) {
    offset = 0
  }
  sliderLine.style.left = -offset + 'px';
  if (offset < itemWidth) {
    btnLeft.setAttribute('disabled', 'disabled');
  }

  slidePosition = countItems - ((lineWidth - offset) / itemWidth) + 1;
  everlandCount.innerHTML = slidePosition;
};

const slideRight = (event) => {
  const sliderWindow = event.currentTarget.closest('.slider-window');
  const sliderItems = sliderWindow.querySelectorAll('.slider-item');
  const sliderLine = sliderWindow.querySelector('.slider-list');
  const btnLeft = sliderWindow.querySelector('.slider-btn-left');
  const btnRight = sliderWindow.querySelector('.slider-btn-right');
  const everlandCount = sliderWindow.querySelector('.everland__count');

  btnLeft.removeAttribute('disabled');

  let slidePosition = 0; // позиция элемента в слайдере
  let countItems = 0; // Количество элементов в слайдере
  let lineWidth = 0; // Общая длина всех элементов
  let itemWidth = 0; // Ширина элемента

  sliderItems.forEach(el => {
    countItems += 1;
  });

  lineWidth = countItems * sliderItems[0].clientWidth;
  itemWidth = sliderItems[0].clientWidth;
  offset = offset + itemWidth;

  if (offset > (lineWidth - itemWidth)) {
    offset = lineWidth - itemWidth;
  }
  if (offset > lineWidth) {
    offset = offset - itemWidth;
  }
  if (offset > (lineWidth - itemWidth * 2)) {
    btnRight.setAttribute('disabled', 'disabled');
  }

  sliderLine.style.left = -offset + 'px';

  slidePosition = countItems - ((lineWidth - offset) / itemWidth) + 1;
  everlandCount.innerHTML = slidePosition;
}

/* "Вешаем прослушку" на левые кнопки слайдеров
и отключаем все левые кнопки */
buttonsLeft.forEach(el => {
  el.addEventListener('click', (event) => {
    slideLeft(event);
  });
  el.setAttribute('disabled', 'disabled');
});

/* "Вешаем прослушку" на правые кнопки слайдеров */
buttonsRight.forEach(el => {
  el.addEventListener('click', (event) => {
    slideRight(event);
  });
});

/* const correctSlider = () => {
  const sliderWindow = windowOfSlider.closest('.slider-window');
  const sliderItems = windowOfSlider.querySelectorAll('.slider-item');
  const sliderLine = windowOfSlider.querySelector('.slider-list');

  let countItems = 0;
  let lineWidth = 0;
  let itemWidth = 0;
  slidePosition = 0;

  sliderItems.forEach(el => { countItems += 1; });

  lineWidth = countItems * sliderItems[0].clientWidth;
  itemWidth = sliderItems[0].clientWidth;


  slidePosition = countItems - ((lineWidth - offset) / itemWidth) + 1;
}; */

/* correctSlider(); */
/* window.addEventListener('resize', correctSlider); */



