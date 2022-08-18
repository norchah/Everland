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
const radioButtonsDonations = document.querySelectorAll('.form__item_donations-everland');
const radioButtonsSupport = document.querySelectorAll('.form__item_donations-support');

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

/*hide donation amount field in Support section*/
function hideElement(event) {
  if(event.target !== lastRadioButtonSupport) {
    lastTextInput.style.display = "none";
  }
}

/*show donation amount field from Donations section on submit*/
function showElement() {
  if (lastRadioButtonDonations.checked === true) {
    lastTextInput.style.display = "block";
  }
}

supportButton.addEventListener('click', showElement)

/*toggle donation amount field on click in both Donations and Support sections*/
lastRadioButtonDonations.addEventListener('click', toggleElement);
lastRadioButtonSupport.addEventListener('click', toggleElement);

/*hide donation amount field on click*/
radioButtonsSupport.forEach((el) => el.addEventListener('click', hideElement));
radioButtonsDonations.forEach((el) => el.addEventListener('click', hideElement));



//АККОРДЕОН

const accordionItems = document.querySelectorAll('.features__accordion-button');

accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener('click', accordionHandler);
});

function accordionHandler(e) {
  const container = e.target.closest('.features__accordion-item');
  e.target.classList.toggle('features__accordion-button_type_cross');
  container.classList.toggle('features__accordion-item_type_opened');

  document.querySelectorAll('.features__accordion-content').transition = 'transition 1s';

}




