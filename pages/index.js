const menuButton = document.querySelector(".header__menu-button");
const popup = document.querySelector(".popup");

menuButton.addEventListener("click", () => {
  popup.classList.toggle("popup_opened");
});




const accordion = document.querySelector('.accordion__items')
accordion.addEventListener('click', toggleAccordion)
const accordionHeadings = accordion.querySelectorAll('.accordion__heading');
const accordionButton = accordion.querySelectorAll('.accordion__button');

function toggleAccordion(evt) {
  const accordionItem = evt.target.closest('.accordion__heading')
  if (accordionItem) {
      accordionItem.parentNode.classList.toggle('accordion__opened')
      toggleOtherItems(accordionItem)
  }
}

function toggleOtherItems(accordionTop) {
  Array.from(accordionHeadings).forEach(top => {
      if (top != accordionTop) {
          top.parentNode.classList.remove('accordion__opened')
      }
  });
}
