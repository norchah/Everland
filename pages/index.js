const menuButton = document.querySelector(".header__menu-button");
const popup = document.querySelector(".popup");

menuButton.addEventListener("click", () => {
  popup.classList.toggle("popup_opened");
});




//Аккордеон
const accordionItems = Array.from(document.querySelectorAll('.features__accordion-item'));

accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener('click', accordionHandler);
});

function accordionHandler(e) {
  e.preventDefault();
  let currentAccordionItem = e.target.closest('.features__accordion-item');
  
  currentAccordionItem.classList.toggle('features__accordion_type_opened');

  
   }
//вот эта часть не работает
let accordionButton = document.querySelectorAll('.features__accordion-button')

   if (currentAccordionItem.classList.contains('features__accordion_type_opened')) {
    accordionButton.classList.add('features__accordion-button_type_cross');
   } else {
    accordionButton.classList.remove('features__accordion-button_type_cross');
    
   }