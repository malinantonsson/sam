export function navToggle() {
  const navToggle = document.querySelector(".nav__toggle");
  const navWrapper = document.querySelector(".nav__nav");
  const navIsOpenClass = "nav__nav--open";
  const navToggleOpenClass = "nav__toggle--open";

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navWrapper.classList.toggle(navIsOpenClass);
      navToggle.classList.toggle(navToggleOpenClass);
    });
  }
}
