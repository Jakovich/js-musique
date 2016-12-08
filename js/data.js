/**
  * @const
  * @type {object}
*/

const gameData = {
  welcome: {
    title: 'Правила игры',
    text: `Правила просты&nbsp;— за&nbsp;2 минуты дать
          максимальное количество правильных ответов.<br>
          На&nbsp;каждую мелодию всего 3 варианта ответа.<br>
          Удачи!`
    
  },
  questions: [
    
  {   
    type: 'genre',  
    title: 'Выберите инди-рок треки',
    genre: 'indirock',
    answers: [
      {
        src: 'audio/src-1',
        genre: 'indirock',
      },
      {
        src: 'audio/src-2',
        genre: 'rock',
      },
      {
        src: 'audio/src-3',
        genre: 'pop',
      },
      {
        src: 'audio/src-4',
        genre: 'pop-rock',
      }
    ]
  },
  {   
    type: 'artist',  
    title: 'Кто исполняет эту песню?',
    data: 'audio/pelageya.mp3',
    artist: 'Пелагея',
    answers: [
      {
        src: 'img/src-1',
        artist: 'Пелагея',
      },
      {
        src: 'img/src-2',
        artist: 'Краснознаменная дивизия имени моей бабушки',
      },
      {
        src: 'img/src-3',
        artist: 'Lorde',
      }
    ]
  },
  {   
    type: 'genre',  
    title: 'Выберите фолк треки',
    genre: 'folk',
    answers: [
      {
        src: 'audio/src-1',
        genre: 'indirock',
      },
      {
        src: 'audio/src-2',
        genre: 'folk',
      },
      {
        src: 'audio/src-3',
        genre: 'pop',
      },
      {
        src: 'audio/src-4',
        genre: 'pop-rock',
      }
    ]
  },
  {   
    type: 'genre',  
    title: 'Выберите поп треки',
    genre: 'folk',
    answers: [
      {
        src: 'audio/src-1',
        genre: 'indirock',
      },
      {
        src: 'audio/src-2',
        genre: 'folk',
      },
      {
        src: 'audio/src-3',
        genre: 'pop',
      },
      {
        src: 'audio/src-4',
        genre: 'pop-rock',
      }
    ]
  },
  {   
    type: 'artist',  
    title: 'Кто исполняет эту песню?',
    data: 'audio/yom.mp3',
    artist: 'Yom',
    answers: [
      {
        src: 'img/src-1',
        artist: 'Yom',
      },
      {
        src: 'img/src-2',
        artist: 'Ласковый май',
      },
      {
        src: 'img/src-3',
        artist: 'Lorde',
      }
    ]
  },
  {   
    type: 'artist',  
    title: 'Кто исполняет эту песню?',
    data: 'audio/orange blossom.mp3',
    artist: 'Orange Blossom',
    answers: [
      {
        src: 'img/src-1',
        artist: 'Orange Blossom',
      },
      {
        src: 'img/src-2',
        artist: 'Аллегрова',
      },
      {
        src: 'img/src-3',
        artist: 'Queen',
      }
    ]
  }
 
],
  result: {
    title: 'Вы настоящий меломан!',
    quantity: '4',
    time: '2',
    comparison: '80'
  },
  timer: {
    minutes: 2,
    seconds: 0
  }
  
};



const questions = gameData.questions;
const result = gameData.result;
const timer = gameData.timer;
const welcome = gameData.welcome;

export {questions, result, timer, welcome};
