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


let scores, currentScore, activePlayer, playing;
const init = function(){

    score0El.textContent = 0;
    score1El.textContent = 0;
    
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    
    
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

const switchPlayer = () =>{
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};


// Rolling Dice Funtionality
btnRollDice.addEventListener('click', ()=>{
    if(playing){
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
            switchPlayer();
        }
    }
});

btnhold.addEventListener('click', ()=>{
    if(playing){
        // Add Current Score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


        //Check if the Player's score >= 100, Finish the game.
        if(scores[activePlayer] >= 15){
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        //Switch the next player.
        else{
            switchPlayer();
        }
    }
    
});

btnNewGame.addEventListener('click', init);