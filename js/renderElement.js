export const renderElement = (element) => {
  let mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(element, mainElement);
};

