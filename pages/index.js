
/* Переменные для секции Фотопроекты spec-projects*/
let offset = 0; // cмещение от левого края
const sliderLine = document.querySelector('.spec-projects__slider-line');
const fotoSpecProjects = document.querySelector('.spec-projects__foto');
const buttonLeftSpecProjects = document.querySelector('.spec-projects__button-left');
const buttonRightSpecProjects = document.querySelector('.spec-projects__button-right');

/* spec-projects Фотопроекты */
buttonLeftSpecProjects.addEventListener('click', () => {
  offset = offset + fotoSpecProjects.clientWidth;
  if (offset > (sliderLine.clientWidth - fotoSpecProjects.clientWidth)) { offset = 0 }
  sliderLine.style.left = -offset + 'px';
  console.log(sliderLine.clientWidth);
});
buttonRightSpecProjects.addEventListener('click', () => {
  offset = offset - fotoSpecProjects.clientWidth;
  if (offset < 0) { offset = sliderLine.clientWidth - fotoSpecProjects.clientWidth }
  sliderLine.style.left = -offset + 'px';
  sliderLine.clientWidth;
});




