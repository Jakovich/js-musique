/**
  @param {string} htmlString
  @return {HTMLElement}
*/

const createElement = (htmlString) => {
 let domElement = document.createElement('div');
  domElement.innerHTML = htmlString;
  return domElement.firstChild;
}

export default createElement;
