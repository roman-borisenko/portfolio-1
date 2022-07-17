const burgerMenuButton = (buttonSelector, menuSelector) => {
  const burgerButton = document.querySelector(buttonSelector),
    dropDownMenu = document.querySelector(menuSelector);

  burgerButton.addEventListener("click", function (e) {
    e.stopPropagation();
    burgerButton.classList.toggle("burger__button--active");
    dropDownMenu.classList.toggle("header__menu--active");
    // document.body.classList.toggle("lock");
  });

  document.addEventListener("click", function () {
    burgerButton.classList.remove("burger__button--active");
    dropDownMenu.classList.remove("header__menu--active");
  });

  dropDownMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
};

// ЗНИКНЕННЯ І ПОЯВА ХЕДЕРУ ПРИ СКРОЛІ

const hidingHeaderBehaviour = (selector) => {
  let lastScroll = 0;
  const defaultOffset = 200;
  const header = document.querySelector(selector);

  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains("hide");

  window.addEventListener("scroll", () => {
    if (
      scrollPosition() > lastScroll &&
      !containHide() &&
      scrollPosition() > defaultOffset
    ) {
      //scroll down
      header.classList.add("hide");
    } else if (scrollPosition() < lastScroll && containHide()) {
      //scroll up
      header.classList.remove("hide");
    }

    lastScroll = scrollPosition();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  burgerMenuButton(".burger__button", ".header__menu--dropDown");
  hidingHeaderBehaviour(".header");
});
