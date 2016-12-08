import welcomeScreen from './screens/welcome';
import renderElement from './renderElement';
import {welcome} from './data'


(function () {
  renderElement(welcomeScreen(welcome));
})();

