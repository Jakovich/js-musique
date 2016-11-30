import createElement from '../createElement';
import {renderElement} from '../renderElement';
import {resultScreen} from './result';

// Экран выбора исполнителя: уровень
export const genreScreen = createElement(
    `<section class="main main--level main--level-genre">
      <h2 class="title">Выберите инди-рок треки</h2>
      <form class="genre">
        <div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="answer-1" id="a-1">
          <label class="genre-answer-check" for="a-1"></label>
        </div>
  
        <div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="answer-1" id="a-2">
          <label class="genre-answer-check" for="a-2"></label>
        </div>
  
        <div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="answer-1" id="a-3">
          <label class="genre-answer-check" for="a-3"></label>
        </div>
  
        <div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="answer-1" id="a-4">
          <label class="genre-answer-check" for="a-4"></label>
        </div>
  
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
