import createElement from '../createElement';
import renderElement from '../renderElement';

import screenShow from '../screenShow';


// Экран выбора исполнителя: уровень
export default (data) => {
  const timerHtml =
    `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      </svg>
      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">2</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">0</span>
      </div>`;

  const titleHtml = `<h2 class="title main-title">${data.title}</h2>`;

  /**
    * @param {object} answerContent
    * @param {number} index
    * @return {string}
    //создание структуры html ответа
  */
  const createAnswerItem = (answerContent, index) => {
    return `<div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${index}" />
            <label class="main-answer" for="answer-${index}">
            <img class="main-answer-preview" src="${answerContent.src}">
            ${answerContent.artist}
            </label>
          </div>`;
  };

  /**
    * @return {string}
    //создание html всех ответов
  */
  const answerItems = () => data.answers.reduce(function (sum, current, index) {
    return sum + createAnswerItem(current, index + 1);
  }, '');

  const content = `<section class="main main--level main--level-artist">
      ${timerHtml}
  
      <div class="main-wrap">
        <div class="main-timer"></div>
  
        ${titleHtml}
        <div class="player-wrapper"></div>
        <form class="main-list">
          ${answerItems()}
          
        </form>
      </div>
    </section>`
  

  let artistScreen = createElement(content);
  console.log(data.answers)
  let variantButtons = artistScreen.querySelectorAll('.main-answer');
  for (const it of variantButtons) {
    it.onclick = () => screenShow();
  }
  return artistScreen;
}


