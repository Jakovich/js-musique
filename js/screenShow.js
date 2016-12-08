import {questions} from './data';
import {result} from './data';
import artistScreen from './screens/artist';
import genreScreen from './screens/genre';
import resultScreen from './screens/result';
import renderElement from './renderElement';

let counter = 0;

const show = () => {
  if (counter === questions.length) {
    renderElement(resultScreen(result));
    counter = 0;
  } else {
    switch (questions[counter].type) {
      case 'artist':
        renderElement(artistScreen(questions[counter]));
        break;
      case 'genre':
        renderElement(genreScreen(questions[counter]));
        break;
    }
    counter++;
  }
};

export default show;
