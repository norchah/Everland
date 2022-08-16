const menuButton = document.querySelector(".header__menu-button");
const popup = document.querySelector(".popup");

menuButton.addEventListener("click", () => {
  popup.classList.toggle("popup_opened");
});



/*smooth scroll to Support section*/
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

/*hide donation amount field*/
function hideElement() {
//  if(!(lastRadioButtonDonations) || !(lastRadioButtonSupport))
//  {
    lastTextInput.style.display = "none";
//  }
}

/*toggle donation amount field on click in both Donations and Support sections*/
lastRadioButtonDonations.addEventListener('click', toggleElement);
lastRadioButtonSupport.addEventListener('click', toggleElement);

/*hide donation amount field on click*/
//radioButtonsSupport.forEach(el => el.addEventListener('click', hideElement));
radioButtonsSupport[0].addEventListener('click', hideElement);
radioButtonsSupport[1].addEventListener('click', hideElement);
radioButtonsSupport[2].addEventListener('click', hideElement);
radioButtonsSupport[3].addEventListener('click', hideElement);
radioButtonsDonations[0].addEventListener('click', hideElement);
radioButtonsDonations[1].addEventListener('click', hideElement);
radioButtonsDonations[2].addEventListener('click', hideElement);
radioButtonsDonations[3].addEventListener('click', hideElement);








