'use strict';

// const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const highscore = document.querySelector('.highscore');
const general = () => {
  //   e.preventDefault();

  check.addEventListener('click', numberAletory);
  again.addEventListener('click', reiniciar);
};

/* Defininir numero aleatorio */
let ramdom = Math.trunc(Math.random() * 20) + 1; /* Num ramdom entre 0 y 20 */
let scores = 20;
let highscores = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const numberAletory = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('❌ No hay numero');
  } else if (guess !== ramdom) {
    if (scores > 0) {
      displayMessage(
        guess > ramdom ? '🚫 Numero muy alto!!!' : ' 🗯 Numero muy bajo'
      );
      score.textContent = --scores; /* Restar menos uno */
    } else {
      displayMessage('Loosing Game');
    }
  } else if (guess === ramdom) {
    number.textContent = ramdom;
    displayMessage('Grandioso ❤');
    document.querySelector('h1').textContent = 'ACERTASTE!!!!';
    document.querySelector('body').style.backgroundColor = 'green';
    number.style.width = '30rem';
    if (scores > highscores) {
      highscores = scores;
      highscore.textContent = highscores;
    }
  }
};

const reiniciar = () => {
  scores = 20;
  score.textContent = scores; /* scores 20 */
  ramdom = Math.trunc(Math.random() * 20) + 1;
  number.textContent = '?';
  /* Reasignar para no volver a tener el mismo numero */
  document.querySelector('h1').textContent = 'Adivina mi número!';

  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  number.style.width = '15rem';
  document.querySelector('.guess').value = '';
};
general();
