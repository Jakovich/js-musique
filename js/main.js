import {welcomeScreen} from './screens/welcome';
import {artistScreen} from './screens/artist';
import {renderElement} from './renderElement';

(function () {
  var welcomeElement = welcomeScreen;
  renderElement(welcomeScreen);
  var playButton = document.querySelector('.main-play');
  playButton.onclick = () => renderElement(artistScreen);
})();

