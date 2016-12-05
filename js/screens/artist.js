import createElement from '../createElement';
import {renderElement} from '../renderElement';
import {genreScreen} from './genre';

const content = {
  question: 'Кто исполняет эту песню?',
  answers: [
    {
      id: 'answer-1',
      value: 'val-1',
      src: 'img/src-1',
      text: 'Пелагея'
    },
    {
      id: 'answer-2',
      value: 'val-2',
      src: 'img/src-2',
      text: 'Краснознаменная дивизия имени моей бабушки'
    },
    {
      id: 'answer-3',
      value: 'val-3',
      src: 'img/src-3',
      text: 'Lorde'
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
        <span class="timer-value-mins">${content.timer.minutes}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${content.timer.seconds}</span>
      </div>`;

const title = `<h2 class="title main-title">${content.question}</h2>`;

const createAnswerItem = (answerContent) => {
  return `<div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="${answerContent.id}" name="answer" value="${answerContent.value}" />
            <label class="main-answer" for="${answerContent.id}">
            <img class="main-answer-preview" src="${answerContent.src}">
            ${answerContent.text}
            </label>
          </div>`;
};

const answerItems = () => content.answers.reduce(function (sum, current) {
  return sum + createAnswerItem(current);
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
