const menuButton = document.querySelector(".header__menu-button");
const popup = document.querySelector(".popup");

menuButton.addEventListener("click", () => {
  popup.classList.toggle("popup_opened");
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




