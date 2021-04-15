'use strict';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let h1 = document.getElementById('color'),
    button = document.getElementById('change'),
    letters = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let random = function() {
  let result = '#';
  for (let i = 0; i < 6; i++) {
    result +=letters[getRandomInt(0, 16)];
  }
  return result;
};

button.addEventListener('click', function() {
  let i = random();
  document.body.style = `background-color: ${i}`;
  h1.textContent = `${i}`;
  button.style = `color: ${i}`;
});


