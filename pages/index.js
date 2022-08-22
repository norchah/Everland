const menuButton = document.querySelector(".header__menu-button");
const popup = document.querySelector(".popup");
const buttonsMenuLists = document.querySelectorAll(".menu__list-button");

/* Переменные и константы для слайдера*/
let offsetSliderEverland = 0; // значения cмещения от левого края
let slidePositionEverland = 1; // позиция слайда
let offsetSliderSpecProjects = 0;
let slidePositionSpecProjects = 1;

const sliderWindowEverland = document.querySelector(".everland.slider-window");
const sliderItemsEverland = sliderWindowEverland.querySelectorAll(
  ".everland__content.slider-item"
);
const sliderLineEverland = sliderWindowEverland.querySelector(
  ".everland__slider.slider-list"
);

const sliderWindowSpecProjects = document.querySelector(
  ".spec-projects.slider-window"
);
const sliderItemsSpecProjects = sliderWindowSpecProjects.querySelectorAll(
  ".spec-projects__content.slider-item"
);
const sliderLineSpecProjects = sliderWindowSpecProjects.querySelector(
  ".spec-projects__slider.slider-list"
);

const buttonsRight = document.querySelectorAll(".slider-btn-right");
const buttonsLeft = document.querySelectorAll(".slider-btn-left");

menuButton.addEventListener("click", () => {
  popup.classList.toggle("popup_opened");
});

/*smooth scroll to Support section*/
const supportButton = document.querySelector(
  ".button_location_donations-section"
);

supportButton.addEventListener("click", (e) => {
  e.preventDefault();
  const offsetTop = document.querySelector(".support").offsetTop;

  scroll({
    top: offsetTop - 80,
    behavior: "smooth",
  });
});

/*link radio-button with each other*/

/*search for radio-buttons in DOM*/
const radioButtonsDonations = document.querySelectorAll(
  ".form__item_donations-everland"
);
const radioButtonsSupport = document.querySelectorAll(
  ".form__item_donations-support"
);

/*link radio-buttons from Donations and Support sections at submit*/
supportButton.addEventListener("click", function linkRadioButtons(e) {
  e.preventDefault();
  for (let i = 0; i < radioButtonsDonations.length; i++)
    if (radioButtonsDonations[i].checked === true) {
      radioButtonsSupport[i].checked = true;
    }
});

/*show and hide donation amount field*/

/*search for elements in DOM*/
const inputsCollection = document.querySelectorAll(".form__item_text-input");
const lastTextInput = inputsCollection[inputsCollection.length - 1];
const lastRadioButtonDonations =
  radioButtonsDonations[radioButtonsDonations.length - 1];
const lastRadioButtonSupport =
  radioButtonsSupport[radioButtonsSupport.length - 1];

/*toggle donation amount field*/
function toggleElement() {
  if (
    lastTextInput.style.display === "none" ||
    lastTextInput.style.display === ""
  ) {
    lastTextInput.style.display = "block";
  } else {
    lastTextInput.style.display = "none";
  }
}

/*hide donation amount field in Support section*/
function hideElement(event) {
  if (event.target !== lastRadioButtonSupport) {
    lastTextInput.style.display = "none";
  }
}

/*show donation amount field from Donations section on submit*/
function showElement() {
  if (lastRadioButtonDonations.checked === true) {
    lastTextInput.style.display = "block";
  }
}

supportButton.addEventListener("click", showElement);

/*toggle donation amount field on click in both Donations and Support sections*/
lastRadioButtonDonations.addEventListener("click", toggleElement);
lastRadioButtonSupport.addEventListener("click", toggleElement);

/*hide donation amount field on click*/
radioButtonsSupport.forEach((el) => el.addEventListener("click", hideElement));
radioButtonsDonations.forEach((el) =>
  el.addEventListener("click", hideElement)
);

/* Слайдер */
const slideLeft = (event) => {
  const sliderWindow = event.currentTarget.closest(".slider-window");
  const sliderItems = sliderWindow.querySelectorAll(".slider-item");
  const sliderLine = sliderWindow.querySelector(".slider-list");
  const btnLeft = sliderWindow.querySelector(".slider-btn-left");
  const btnRight = sliderWindow.querySelector(".slider-btn-right");
  const everlandCount = sliderWindow.querySelector(".everland__count");

  let correctWidth = 0;

  let countItems = 0; // Количество элементов в слайдере
  sliderItems.forEach((el) => {
    countItems += 1;
  });

  const calculateLeftShift = (offset, countItems) => {
    btnRight.removeAttribute("disabled");

    let lineWidth = 0; // Общая длина всех элементов
    let itemWidth = 0; // Ширина элемента

    lineWidth = countItems * sliderItems[0].clientWidth;
    itemWidth = sliderItems[0].clientWidth + correctWidth;

    offset = offset - itemWidth;

    if (offset < 0) {
      offset = 0;
    }

    sliderLine.style.left = -offset + "px";

    return offset;
  };

  const calculatePositionLeft = (slidePosition) => {
    if (slidePosition > 1) {
      slidePosition -= 1;
    }
    if (slidePosition <= 1) {
      btnLeft.setAttribute("disabled", "disabled");
    }
    return slidePosition;
  };

  if (sliderWindow.classList.contains("everland")) {
    slidePositionEverland = calculatePositionLeft(slidePositionEverland);
    offsetSliderEverland = calculateLeftShift(offsetSliderEverland);
    if (everlandCount) {
      everlandCount.innerHTML = slidePositionEverland;
    }
  } else if (sliderWindow.classList.contains("spec-projects")) {
    correctWidth = 40;
    slidePositionSpecProjects = calculatePositionLeft(
      slidePositionSpecProjects
    );
    offsetSliderSpecProjects = calculateLeftShift(offsetSliderSpecProjects);
  }
};

const slideRight = (event) => {
  const sliderWindow = event.currentTarget.closest(".slider-window");
  const sliderItems = sliderWindow.querySelectorAll(".slider-item");
  const sliderLine = sliderWindow.querySelector(".slider-list");
  const btnLeft = sliderWindow.querySelector(".slider-btn-left");
  const btnRight = sliderWindow.querySelector(".slider-btn-right");
  const everlandCount = sliderWindow.querySelector(".everland__count");

  let correctWidth = 0;
  let countItems = 0; // Количество элементов в слайдере

  sliderItems.forEach((el) => {
    countItems += 1;
  });

  const calculateRightShift = (offset, countItems) => {
    btnLeft.removeAttribute("disabled");

    let lineWidth = 0; // Общая длина всех элементов
    let itemWidth = 0; // Ширина элемента

    lineWidth = countItems * sliderItems[0].clientWidth;
    itemWidth = sliderItems[0].clientWidth + correctWidth;
    offset = offset + itemWidth;

    if (offset > lineWidth - itemWidth) {
      offset = lineWidth - itemWidth;
    }

    if (offset > lineWidth) {
      offset = offset - itemWidth;
    }

    sliderLine.style.left = -offset + "px";

    return offset;
  };

  const calculatePositionRight = (slidePosition, countItems) => {
    if (slidePosition < countItems) {
      slidePosition += 1;
    }
    if (slidePosition >= countItems) {
      btnRight.setAttribute("disabled", "disabled");
    }
    return slidePosition;
  };

  if (sliderWindow.classList.contains("everland")) {
    slidePositionEverland = calculatePositionRight(
      slidePositionEverland,
      countItems
    );
    offsetSliderEverland = calculateRightShift(offsetSliderEverland);
    if (everlandCount) {
      everlandCount.innerHTML = slidePositionEverland;
    }
  } else if (sliderWindow.classList.contains("spec-projects")) {
    correctWidth = 40;
    slidePositionSpecProjects = calculatePositionRight(
      slidePositionSpecProjects,
      countItems
    );
    offsetSliderSpecProjects = calculateRightShift(offsetSliderSpecProjects);
  }
};

/* Коррекция позиции слайдера при изменении размера экрана */
const correctSlidersPositions = () => {
  let correctWidth = 0;

  const correctPosition = (
    sliderItems,
    sliderLine,
    offsetSlider,
    slidePosition
  ) => {
    let countItems = 0; // Количество элементов в слайдере
    let lineWidth = 0; // Общая длина всех элементов
    let itemWidth = 0; // Ширина элементаet

    sliderItems.forEach((item) => {
      countItems += 1;
    });

    lineWidth = countItems * sliderItems[0].clientWidth;
    itemWidth = sliderItems[0].clientWidth + correctWidth;
    offsetSlider = offsetSlider + itemWidth * (slidePosition - 1);
    sliderLine.style.left = -offsetSlider + "px";

    return offsetSlider;
  };

  offsetSliderEverland = 0;
  correctWidth = 0;
  offsetSliderEverland = correctPosition(
    sliderItemsEverland,
    sliderLineEverland,
    offsetSliderEverland,
    slidePositionEverland
  );

  offsetSliderSpecProjects = 0;
  correctWidth = 40;
  offsetSliderSpecProjects = correctPosition(
    sliderItemsSpecProjects,
    sliderLineSpecProjects,
    offsetSliderSpecProjects,
    slidePositionSpecProjects
  );
};

window.addEventListener("resize", correctSlidersPositions);

/* "Вешаем прослушку" на левые кнопки слайдеров
и отключаем все левые кнопки */
buttonsLeft.forEach((el) => {
  el.addEventListener("click", (event) => {
    slideLeft(event);
  });
  el.setAttribute("disabled", "disabled");
});
/* "Вешаем прослушку" на правые кнопки слайдеров */
buttonsRight.forEach((el) => {
  el.addEventListener("click", (event) => {
    slideRight(event);
  });
});

//АККОРДЕОН

const accordionItems = document.querySelectorAll(".features__accordion-button");

accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener("click", accordionHandler);
});

function accordionHandler(e) {
  const container = e.target.closest(".features__accordion-item");
  e.target.classList.toggle("features__accordion-button_type_cross");
  container.classList.toggle("features__accordion-item_type_opened");
}

//menu buttons mob version

buttonsMenuLists.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const list = btn.closest(".menu__item");
    const secondary = list.querySelector(".menu__secondary");
    const target = e.target;
    secondary.classList.toggle("menu__secondary_opened");
    if (
      target.classList.contains("menu__list-heading_arrow_down") &&
      target.classList.contains("menu__list-heading")
    ) {
      target.classList.remove("menu__list-heading_arrow_down");
      target.classList.add("menu__list-heading_arrow_up");
    } else if (
      target.classList.contains("menu__list-heading_arrow_up") &&
      target.classList.contains("menu__list-heading")
    ) {
      target.classList.add("menu__list-heading_arrow_down");
      target.classList.remove("menu__list-heading_arrow_up");
    }
  });
});
