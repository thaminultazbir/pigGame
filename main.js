'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling Dice Funtionality
btnRollDice.addEventListener('click', ()=>{
    // Genarationg Random dice roll
    const dice = Math.trunc(Math.random()*6) + 1;
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `./img/dice-${dice}.png`;

    if(dice !== 1){
        currentScore += dice;
        // currentScore0El.textContent = currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
        //Switch  Player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});