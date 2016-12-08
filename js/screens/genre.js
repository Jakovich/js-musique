import createElement from '../createElement';
import screenShow from '../screenShow';
import timerHtml from './timerTemplate';

export default (data) => {
  const title = `<h2 class="title main-title">${data.title}</h2>`;

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
  const createAnswerItems = () => data.answers.reduce(function (sum, current, index) {
    return sum + createAnswerItem(index + 1);
  }, '');

// Экран выбора исполнителя: уровень
  const content =
    `<section class="main main--level main--level-genre">
      ${timerHtml}
      <div class="main-wrap">
        ${title}
        <form class="genre">
          ${createAnswerItems()}
          <button class="genre-answer-send" type="submit">Ответить</button>
        </form>
      </div>
    </section>`;

  let genreScreen = createElement(content);
  let answerButton = genreScreen.querySelector('.genre-answer-send');
  let answers = genreScreen.querySelectorAll('.genre input[name=answer]');

  answerButton.onclick = (evt) => {
    evt.preventDefault();
    for (const it of answers) {
      if (it.checked) {
        screenShow();
        break;
      }
    }
  };

  return genreScreen;

};
