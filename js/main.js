(function () {

  let template = document.querySelector('template');

  let loadTemplate = (templateName) => {
    var content = template.content ? template.content : template;
    return content.querySelector(templateName).cloneNode(true);
  };


  let slides = [
    loadTemplate('.main--welcome'),
    loadTemplate('.main--level-artist'),
    loadTemplate('.main--level-genre'),
    loadTemplate('.main--result')
  ];
  
  const CURRENT = -1;

  let select = (index) => {
    current = index;
    var mainElement = document.querySelector('.main');
    mainElement.parentNode.replaceChild(slides[index], mainElement);
  };

  document.onkeydown = (evt) => {
    evt.preventDefault();

    switch (evt.keyCode) {
      case 37: CURRENT--; break;
      case 39: CURRENT++; break;
    }

    select(CURRENT);
  };

  select(0);
})();

