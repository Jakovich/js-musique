import createElement from '../createElement';
import {renderElement} from '../renderElement';
import {resultScreen} from './result';


/**
  * @const
  * @type {object}
*/
const genre = {
  question: 'Выберите инди-рок треки',
  answers: [
    {
      audio: 'src-1',
      correct: true
    },
    {
      audio: 'src-2',
      correct: false
    },
    {
      audio: 'src-3',
      correct: false
    },
    {
      audio: 'src-4',
      correct: false
    }
  ]
};

const title = `<h2 class="title">${genre.question}</h2>`;

/**
  * @param {number} index
  * @return {string}
  //создание структуры html ответа 
*/
const createAnswerItem = (index) => {
  return `<div class="genre-answer">
            <div class="player-wrapper"></div>
            <input type="checkbox" name="answer" value="answer-${index}" id="a-${index}">
            <label class="genre-answer-check" for="a-${index}"></label>
          </div>`;
};

/**
  * @return {string}
  //создание html всех ответов
*/
const createAnswerItems = () => 
  genre.answers.reduce(function (sum, current, index) {
    return sum + createAnswerItem(index+1);
  }, '');
  



// Экран выбора исполнителя: уровень
export const genreScreen = createElement(
    `<section class="main main--level main--level-genre">
      ${title}
      <form class="genre">
        ${createAnswerItems()}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </section>`
);

let answerButton = genreScreen.querySelector('.genre-answer-send');
let answers = genreScreen.querySelectorAll('.genre input[name=answer]');

answerButton.onclick = (evt) => {
  evt.preventDefault();
  for (const it of answers) {
    if (it.checked) {
      renderElement(resultScreen);
      break;
    }
  }
};
