import {welcomeScreen} from './screens/welcome';
import {artistScreen} from './screens/artist';
import {renderElement} from './renderElement';

(function () {
  renderElement(welcomeScreen);
  let playButton = document.querySelector('.main-play');
  playButton.onclick = () => renderElement(artistScreen);
})();

