import createElement from '../createElement';
import {renderElement} from '../renderElement';
import {genreScreen} from './genre';


/**
  * @const
  * @type {object}
*/
const artist = {
  question: 'Кто исполняет эту песню?',
  answers: [
    {
      src: 'img/src-1',
      text: 'Пелагея',
      correct: true
    },
    {
      src: 'img/src-2',
      text: 'Краснознаменная дивизия имени моей бабушки',
      correct: false
    },
    {
      
      src: 'img/src-3',
      text: 'Lorde',
      correct: false
    }
  ],
  timer: {
    minutes: 2,
    seconds: 0
  }
};

const timer =
       `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      </svg>
      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${artist.timer.minutes}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${artist.timer.seconds}</span>
      </div>`;

const title = `<h2 class="title main-title">${artist.question}</h2>`;
/**
  * @param {number} index
  * @param {object} answerContent
  * @return {string}
  //создание структуры html ответа 
*/
const createAnswerItem = (answerContent, index) => {
  return `<div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-${index}" name="answer" value="val-${index}" />
            <label class="main-answer" for="answer-${index}">
            <img class="main-answer-preview" src="${answerContent.src}">
            ${answerContent.text}
            </label>
          </div>`;
};

/**
  * @return {string}
  //создание html всех ответов
*/
const answerItems = () => artist.answers.reduce(function (sum, current, index) {
  return sum + createAnswerItem(current, index + 1);
}, '');

// Экран выбора исполнителя: уровень
export const artistScreen = createElement(
    `<section class="main main--level main--level-artist">
      ${timer}
  
      <div class="main-wrap">
        <div class="main-timer"></div>
  
        ${title}
        <div class="player-wrapper"></div>
        <form class="main-list">
          ${answerItems()}
          
        </form>
      </div>
    </section>`
  );

let variantButtons = artistScreen.querySelectorAll('.main-answer');
for (const it of variantButtons) {
  it.onclick = () => renderElement(genreScreen);
}
