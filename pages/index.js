
/* Переменные для секции Фотопроекты spec-projects*/
let offset = 0; // cмещение от левого края
const sliderLine = document.querySelector('.spec-projects__slider-line');
const fotoSpecProjects = document.querySelector('.spec-projects__foto');
const buttonLeftSpecProjects = document.querySelector('.spec-projects__button-left');
const buttonRightSpecProjects = document.querySelector('.spec-projects__button-right');

/* Для слайдера */
const slidePictureLeft = (line, foto, btnLeft, btnRight) => {
  btnRight.removeAttribute('disabled');
  offset = offset - foto.clientWidth;
  if (offset < 0) {
    offset = 0
  }
  if (offset < foto.clientWidth) {
    btnLeft.setAttribute('disabled', 'disabled');
  }
  line.style.left = -offset + 'px';
  line.clientWidth;
};

const slidePictureRight = (line, foto, btnLeft, btnRight) => {
  btnLeft.removeAttribute('disabled');
  offset = offset + foto.clientWidth;
  if (offset > (line.clientWidth - foto.clientWidth)) {
    offset = line.clientWidth - foto.clientWidth;
  }
  line.style.left = -offset + 'px';
  if (offset > (line.clientWidth - (2 * foto.clientWidth))) {
    btnRight.setAttribute('disabled', 'disabled');
  }
}

buttonRightSpecProjects.addEventListener('click', () => {
  slidePictureRight(sliderLine, fotoSpecProjects, buttonLeftSpecProjects, buttonRightSpecProjects);
});

buttonLeftSpecProjects.addEventListener('click', () => {
  slidePictureLeft(sliderLine, fotoSpecProjects, buttonLeftSpecProjects, buttonRightSpecProjects);
});

buttonLeftSpecProjects.setAttribute('disabled', 'disabled');



