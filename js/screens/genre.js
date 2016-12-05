import createElement from '../createElement';
import {renderElement} from '../renderElement';
import {resultScreen} from './result';

const content = {
  question: 'Выберите инди-рок треки',
  answerQuantity: 4
};

const title = `<h2 class="title">${content.question}</h2>`;
const createAnswerItem = (number) => {
  return `<div class="genre-answer">
            <div class="player-wrapper"></div>
            <input type="checkbox" name="answer" value="answer-${number}" id="a-${number}">
            <label class="genre-answer-check" for="a-${number}"></label>
          </div>`;
};

const createAnswerItems = () => {
  let answers = [];
  for (let i = 1; i < content.answerQuantity + 1; i++) {
    answers.push(i);
  }
  let answerItems = answers.reduce(function (sum, current) {
    return sum + createAnswerItem(current);
  }, '');
  return answerItems;
};


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
