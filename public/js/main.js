"use strict";

/*======================================*/
// Toggle Tabs

const buttonsWrapper = document.querySelector(".tabs__btns");
const contentWrapper = document.querySelector(".tabs__content");

buttonsWrapper.addEventListener("click", (event) => {
  let clickedBtn = event.target;
  let index = clickedBtn.dataset.value;

  buttonsWrapper
    .querySelector(".tabs__btn--active")
    .classList.remove("tabs__btn--active");
  clickedBtn.classList.add("tabs__btn--active");

  contentWrapper
    .querySelector(".tabs__item--show")
    .classList.remove("tabs__item--show");
  contentWrapper
    .querySelector(`.tabs__item[data-tab="${index}"]`)
    .classList.add("tabs__item--show");
  //contentWrapper.querySelector(`.tab--${index}`).classList.add('tabs__item--active');
});
