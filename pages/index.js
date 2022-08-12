const menuButton = document.querySelector(".header__menu-button");
const popup = document.querySelector(".popup");

menuButton.addEventListener("click", () => {
  popup.classList.toggle("popup_opened");
});



const accordion = document.querySelectorAll('accordion-body');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  });
}
