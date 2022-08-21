const menuButton = document.querySelector(".header__menu-button");
const popup = document.querySelector(".popup");

/* Переменные и константы для слайдера*/
let offsetSliderEverland = 0; // значения cмещения от левого края
let offsetSliderSpecProjects = 0;
const windowOfSlider = document.querySelector('.slider-window');
const buttonsRight = document.querySelectorAll('.slider-btn-right');
const buttonsLeft = document.querySelectorAll('.slider-btn-left');



/* Слайдер */
const slideLeft = (event) => {
  const sliderWindow = event.currentTarget.closest('.slider-window');
  const sliderItems = sliderWindow.querySelectorAll('.slider-item');
  const sliderLine = sliderWindow.querySelector('.slider-list');
  const btnLeft = sliderWindow.querySelector('.slider-btn-left');
  const btnRight = sliderWindow.querySelector('.slider-btn-right');
  const everlandCount = sliderWindow.querySelector('.everland__count');

  let correct = 0;

  const calculateLeftShift = (offset) => {

    btnRight.removeAttribute('disabled');

    let slidePosition = 0; // позиция элемента в слайдере
    let countItems = 0; // Количество элементов в слайдере
    let lineWidth = 0; // Общая длина всех элементов
    let itemWidth = 0; // Ширина элемента

    sliderItems.forEach(el => { countItems += 1; });

    lineWidth = countItems * sliderItems[0].clientWidth;
    itemWidth = sliderItems[0].clientWidth + correct;

    offset = offset - itemWidth;

    if (offset < 0) {
      offset = 0
    }

    sliderLine.style.left = -offset + 'px';

    if (offset < itemWidth) {
      btnLeft.setAttribute('disabled', 'disabled');
    }

    if (everlandCount) {
      slidePosition = countItems - ((lineWidth - offset) / itemWidth) + 1;
      everlandCount.innerHTML = Math.round(slidePosition);
    }

    return offset;
  }

  if (sliderWindow.classList.contains('everland')) {
    offsetSliderEverland = calculateLeftShift(offsetSliderEverland);
  }
  else if (sliderWindow.classList.contains('spec-projects')) {
    correct = 40;
    offsetSliderSpecProjects = calculateLeftShift(offsetSliderSpecProjects);
  }
};

const slideRight = (event) => {
  const sliderWindow = event.currentTarget.closest('.slider-window');
  const sliderItems = sliderWindow.querySelectorAll('.slider-item');
  const sliderLine = sliderWindow.querySelector('.slider-list');
  const btnLeft = sliderWindow.querySelector('.slider-btn-left');
  const btnRight = sliderWindow.querySelector('.slider-btn-right');
  const everlandCount = sliderWindow.querySelector('.everland__count');

  let correct = 0;

  const calculateRightShift = (offset) => {

    btnLeft.removeAttribute('disabled');

    let slidePosition = 0; // позиция элемента в слайдере
    let countItems = 0; // Количество элементов в слайдере
    let lineWidth = 0; // Общая длина всех элементов
    let itemWidth = 0; // Ширина элемента

    sliderItems.forEach(el => {
      countItems += 1;
    });

    lineWidth = countItems * sliderItems[0].clientWidth;
    itemWidth = sliderItems[0].clientWidth + correct;
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

    if (everlandCount) {
      slidePosition = countItems - ((lineWidth - offset) / itemWidth) + 1;
      everlandCount.innerHTML = Math.round(slidePosition);
    }
    console.log(correct);
    return offset;
  }

  if (sliderWindow.classList.contains('everland')) {
    offsetSliderEverland = calculateRightShift(offsetSliderEverland);
  }
  else if (sliderWindow.classList.contains('spec-projects')) {
    correct = 40;
    offsetSliderSpecProjects = calculateRightShift(offsetSliderSpecProjects);
  }
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
