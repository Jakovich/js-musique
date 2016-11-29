import {welcomeScreen} from './screens/welcome';
import {artistScreen} from './screens/artist';
import {genreScreen} from './screens/genre';
import {resultScreen} from './screens/result';

(function () {
  
  let slides = [
    welcomeScreen,
    artistScreen,
    genreScreen,
    resultScreen
  ];

  let current = -1;

  let select = (index) => {
    current = index;
    let mainElement = document.querySelector('.main');
    mainElement.parentNode.replaceChild(slides[index], mainElement);
  };

  document.onkeydown = (evt) => {
    evt.preventDefault();

    switch (evt.keyCode) {
      case 37: current--; break;
      case 39: current++; break;
    }

    select(current);
  };

  select(0);

})();

