import createElement from '../createElement';
import {welcomeScreen} from './welcome';
import {renderElement} from '../renderElement';


const content = {
  title: 'Вы настоящий меломан!',
  result: {
    quantity: '4&nbsp;мелодии',
    time: '2&nbsp;минуты'
  },
  comparison: '80%&nbsp;игроков'
};

const title = `<h2 class="title">${content.title}</h2>`;
const result = `<div class="main-stat">За&nbsp;${content.result.time}<br>вы&nbsp;отгадали ${content.result.quantity}</div>`;
const comparison = `<span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${content.comparison}`;

// Экран выбора исполнителя: уровень
export const resultScreen = createElement(
    `<section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      ${title}
      ${result}
      ${comparison}
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`
);

let newGameButton = resultScreen.querySelector('.main-replay');
newGameButton.onclick = (evt) => {
  evt.preventDefault();
  renderElement(welcomeScreen);
};
