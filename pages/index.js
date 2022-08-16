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


/*link radio-button with each other*/

/*search for radio-buttons in DOM*/
const radioButtonsDonations = document.querySelectorAll('input[name="donation"]');
const radioButtonsSupport = document.querySelectorAll('input[name="donation-amount"]');

/*link radio-buttons from Donations and Support sections at submit*/
supportButton.addEventListener('click', function linkRadioButtons (e) {
  e.preventDefault();
  for (let i = 0; i < radioButtonsDonations.length; i++)
  if (radioButtonsDonations[i].checked === true) {
    radioButtonsSupport[i].checked = true;
    console.log('ok!');
  }
});

