import createElement from '../createElement';
import renderElement from '../renderElement';
import welcomeScreen from './welcome';
import {welcome} from '../data';

export default (data) => {

  const titleHtml = `<h2 class="title">${data.title}</h2>`;
  const resultContent = `<div class="main-stat">За&nbsp;${data.time}&nbsp;минуты<br>вы&nbsp;отгадали ${data.quantity}&nbsp;мелодии</div>`;
  const comparison = `<span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${data.comparison}%&nbsp;игроков`;

  // Экран выбора исполнителя: уровень
  const content =
    `<section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      ${titleHtml}
      ${resultContent}
      ${comparison}
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;

  let resultScreen = createElement(content);

  let newGameButton = resultScreen.querySelector('.main-replay');
  newGameButton.onclick = (evt) => {
    evt.preventDefault();
    renderElement(welcomeScreen(welcome));
  };

  return resultScreen;
};
