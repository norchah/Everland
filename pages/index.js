const menuButton = document.querySelector(".header__menu-button");
const popup = document.querySelector(".popup");

/* Переменные и константы для слайдера*/
let offset = 0; // значение cмещения от левого края
const windowOfSlider = document.querySelector('.slider-window');
const buttonsRight = document.querySelectorAll('.slider-btn-right');
const buttonsLeft = document.querySelectorAll('.slider-btn-left');

menuButton.addEventListener("click", () => {
  popup.classList.toggle("popup_opened");
});


/*smooth scroll to Support section*/
const supportButton = document.querySelector('.button_location_donations-section')

supportButton.addEventListener('click', (e) => {
  e.preventDefault();
  const offsetTop = document.querySelector('.support').offsetTop;

  scroll({
    top: offsetTop - 80,
    behavior: "smooth"
  });
});



/*link radio-button with each other*/

/*search for radio-buttons in DOM*/
const radioButtonsDonations = document.querySelectorAll('.form__item_donations-everland');
const radioButtonsSupport = document.querySelectorAll('.form__item_donations-support');

/*link radio-buttons from Donations and Support sections at submit*/
supportButton.addEventListener('click', function linkRadioButtons(e) {
  e.preventDefault();
  for (let i = 0; i < radioButtonsDonations.length; i++)
    if (radioButtonsDonations[i].checked === true) {
      radioButtonsSupport[i].checked = true;
    }
});



/*show and hide donation amount field*/

/*search for elements in DOM*/
const inputsCollection = document.querySelectorAll('.form__item_text-input');
const lastTextInput = inputsCollection[inputsCollection.length - 1];
const lastRadioButtonDonations = radioButtonsDonations[radioButtonsDonations.length - 1];
const lastRadioButtonSupport = radioButtonsSupport[radioButtonsSupport.length - 1];

/*toggle donation amount field*/
function toggleElement() {
  if ((lastTextInput.style.display === "none" || lastTextInput.style.display === "")) {
    lastTextInput.style.display = "block";
  } else {
    lastTextInput.style.display = "none";
  }
}

/*hide donation amount field in Support section*/
function hideElement(event) {
  if (event.target !== lastRadioButtonSupport) {
    lastTextInput.style.display = "none";
  }
}

/*show donation amount field from Donations section on submit*/
function showElement() {
  if (lastRadioButtonDonations.checked === true) {
    lastTextInput.style.display = "block";
  }
}

supportButton.addEventListener('click', showElement)

/*toggle donation amount field on click in both Donations and Support sections*/
lastRadioButtonDonations.addEventListener('click', toggleElement);
lastRadioButtonSupport.addEventListener('click', toggleElement);

/*hide donation amount field on click*/
radioButtonsSupport.forEach((el) => el.addEventListener('click', hideElement));
radioButtonsDonations.forEach((el) => el.addEventListener('click', hideElement));


/* Слайдер */
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

  if (everlandCount) {
    slidePosition = countItems - ((lineWidth - offset) / itemWidth) + 1;
    everlandCount.innerHTML = slidePosition;
  }
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
  if (everlandCount) {
    slidePosition = countItems - ((lineWidth - offset) / itemWidth) + 1;
    everlandCount.innerHTML = slidePosition;
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
//АККОРДЕОН

const accordionItems = document.querySelectorAll('.features__accordion-button');

accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener('click', accordionHandler);
});

function accordionHandler(e) {
  const container = e.target.closest('.features__accordion-item');
  e.target.classList.toggle('features__accordion-button_type_cross');
  container.classList.toggle('features__accordion-item_type_opened');

}
