const menuButton = document.querySelector(".header__menu-button");
const popup = document.querySelector(".popup");

menuButton.addEventListener("click", () => {
  popup.classList.toggle("popup_opened");
});



/*smooth scroll to support page*/
const supportButton = document.querySelector('.button_support')

supportButton.addEventListener('click', (e) => {
  e.preventDefault();
  const offsetTop = document.querySelector('#support').offsetTop;

  scroll({
    top: offsetTop - 80,
    behavior: "smooth"
  });
});


