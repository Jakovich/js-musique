import createElement from '../createElement';
import renderElement from '../renderElement';
import artistScreen from './artist';
/**
  * @const
  * @type {object}
*/
const welcome = {
  gameTitle: 'Угадай мелодию',
  rules: {
    title: 'Правила игры',
    text: `Правила просты&nbsp;— за&nbsp;2 минуты дать
        максимальное количество правильных ответов.<br>
        На&nbsp;каждую мелодию всего 3 варианта ответа.<br>
        Удачи!`
  }
};

const title = `<section class="logo" title=${welcome.gameTitle}><h1>${welcome.gameTitle}</h1></section>`;

const rules = `<h2 class="title main-title">${welcome.rules.title}</h2>
      <p class="text main-text">
        ${welcome.rules.text}
      </p>`;

// Экран приветствия
const welcomeScreen = createElement(
    `<section class="main main--welcome">
      ${title}
      <button class="main-play">Начать игру</button>
      ${rules}
    </section>`
  );

let playButton = welcomeScreen.querySelector('.main-play');
playButton.onclick = () => renderElement(artistScreen);


export default welcomeScreen;
