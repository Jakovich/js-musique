import createElement from '../createElement';
import welcomeScreen from './welcome';
import renderElement from '../renderElement';


/**
  * @const
  * @type {object}
*/
const result = {
  title: 'Вы настоящий меломан!',
  data: {
    quantity: '4',
    time: '2',
    comparison: '80'
  }
};

const title = `<h2 class="title">${result.title}</h2>`;
const resultContent = `<div class="main-stat">За&nbsp;${result.data.time}&nbsp;минуты<br>вы&nbsp;отгадали ${result.data.quantity}&nbsp;мелодии</div>`;
const comparison = `<span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${result.data.comparison}%&nbsp;игроков`;

// Экран выбора исполнителя: уровень
const resultScreen = createElement(
    `<section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      ${title}
      ${resultContent}
      ${comparison}
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`
);

let newGameButton = resultScreen.querySelector('.main-replay');
newGameButton.onclick = (evt) => {
  evt.preventDefault();
  renderElement(welcomeScreen);
};

export default resultScreen;
