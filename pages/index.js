const menuButton = document.querySelector(".header__menu-button");
const popup = document.querySelector(".popup");

menuButton.addEventListener("click", () => {
  popup.classList.toggle("popup_opened");
});


//АККОРДЕОН

//добавляю в массив все аккордеон айтемы
const accordionItems = Array.from(document.querySelectorAll('.features__accordion-item'));

//на каждый навешиваю при клике функцию, чтоб они открывались и менялась кнопка
accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener('click', accordionHandler);
});

//функция
function accordionHandler(e) {
  e.preventDefault();
  //получаю конкретный аккордион айтем по клику
  let currentAccordionItem = e.target.closest('.features__accordion-item');
  //получаю кнопку
  let accordionButton = e.target.nextElementSibling;
  //конкретному аккордеону меняем класс
  currentAccordionItem.classList.toggle('features__accordion-item_type_opened');

  //конструкция для кнопки, если у конкретного аккордеон айтема есть класс, который откроет содерджимое
  //то кнопке его тоже надо поменять
  if (currentAccordionItem.classList.contains('features__accordion-item_type_opened')) {
    accordionButton.classList.toggle('features__accordion-button_type_cross');
  }
  else {
    accordionButton.classList.remove('features__accordion-button_type_cross');
  }
}




