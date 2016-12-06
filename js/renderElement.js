/**
  @param {HTMLElement} element
*/

const renderElement = (element) => {
  let mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(element, mainElement);
};

export default renderElement;
