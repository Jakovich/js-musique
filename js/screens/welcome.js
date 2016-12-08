import createElement from '../createElement';
import screenShow from '../screenShow';

export default (data) => {
  const title = '<section class="logo" title="Угадай мелодию!"><h1>Угадай мелодию!</h1></section>';

  const rules = `<h2 class="title main-title">${data.title}</h2>
      <p class="text main-text">
        ${data.text}
      </p>`;
  const content = `<section class="main main--welcome">
      ${title}
      <button class="main-play">Начать игру</button>
      ${rules}
    </section>`;

// Экран приветствия
  let welcomeScreen = createElement(content);

  let playButton = welcomeScreen.querySelector('.main-play');

  playButton.onclick = (evt) => {
    evt.preventDefault();
    screenShow();
  };

  return welcomeScreen;

};
