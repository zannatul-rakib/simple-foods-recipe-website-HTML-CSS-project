const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(
    `Please check again your class name, there is no ${selector} class`
  );
};

const links = getElement(".nav-links");
const navBtnDOM = getElement(".btn-nav");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-link");
});
