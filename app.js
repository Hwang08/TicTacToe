const scoreboard = document.querySelector('.scoreboard');
const scoreboardSquare = document.querySelectorAll('.scoreboard-square');
const playerX = document.querySelector('.playerX');
const player0 = document.querySelector('.player0');
const restartBTN = document.querySelector('.restart-btn');
const resetScoreBTN = document.querySelector('.reset-score-btn');
let currentPlayer = document.querySelector('.current-player');
let playerXScore = 0;
let player0Score = 0;
let gameOver = false;

function isGameOver() {
  let playerXWins1 = scoreboardSquare[0].innerHTML === "X" && scoreboardSquare[1].innerHTML === "X" && scoreboardSquare[2].innerHTML === "X";
  const playerXWins2 = scoreboardSquare[3].innerHTML === "X" && scoreboardSquare[4].innerHTML === "X" && scoreboardSquare[5].innerHTML === "X";
  const playerXWins3 = scoreboardSquare[6].innerHTML === "X" && scoreboardSquare[7].innerHTML === "X" && scoreboardSquare[8].innerHTML === "X";
  const playerXWins4 = scoreboardSquare[0].innerHTML === "X" && scoreboardSquare[3].innerHTML === "X" && scoreboardSquare[6].innerHTML === "X";
  const playerXWins5 = scoreboardSquare[1].innerHTML === "X" && scoreboardSquare[4].innerHTML === "X" && scoreboardSquare[7].innerHTML === "X";
  const playerXWins6 = scoreboardSquare[2].innerHTML === "X" && scoreboardSquare[5].innerHTML === "X" && scoreboardSquare[8].innerHTML === "X";
  const playerXWins7 = scoreboardSquare[0].innerHTML === "X" && scoreboardSquare[4].innerHTML === "X" && scoreboardSquare[8].innerHTML === "X";
  const playerXWins8 = scoreboardSquare[2].innerHTML === "X" && scoreboardSquare[4].innerHTML === "X" && scoreboardSquare[6].innerHTML === "X";

  if(playerXWins1) {
    playerXScore++;
    playerX.innerText = `Player X: ${playerXScore}`;
    gameOver = true;
  }
  if(playerXWins2) {
    playerXScore++;
    playerX.innerText = `Player X: ${playerXScore}`;
    gameOver = true;
  }
  if(playerXWins3) {
    playerXScore++;
    playerX.innerText = `Player X: ${playerXScore}`;
    gameOver = true;
  }
  if(playerXWins4) {
    playerXScore++;
    playerX.innerText = `Player X: ${playerXScore}`;
    gameOver = true;
  }
  if(playerXWins5) {
    playerXScore++;
    playerX.innerText = `Player X: ${playerXScore}`;
    gameOver = true;
  }
  if(playerXWins6) {
    playerXScore++;
    playerX.innerText = `Player X: ${playerXScore}`;
    gameOver = true;
  }
  if(playerXWins7) {
    playerXScore++;
    playerX.innerText = `Player X: ${playerXScore}`;
    gameOver = true;
  }
  if(playerXWins8) {
    playerXScore++;
    playerX.innerText = `Player X: ${playerXScore}`;
    gameOver = true;
  }

  let player0Wins1 = scoreboardSquare[0].innerHTML === "0" && scoreboardSquare[1].innerHTML === "0" && scoreboardSquare[2].innerHTML === "0";
  const player0Wins2 = scoreboardSquare[3].innerHTML === "0" && scoreboardSquare[4].innerHTML === "0" && scoreboardSquare[5].innerHTML === "0";
  const player0Wins3 = scoreboardSquare[6].innerHTML === "0" && scoreboardSquare[7].innerHTML === "0" && scoreboardSquare[8].innerHTML === "0";
  const player0Wins4 = scoreboardSquare[0].innerHTML === "0" && scoreboardSquare[3].innerHTML === "0" && scoreboardSquare[6].innerHTML === "0";
  const player0Wins5 = scoreboardSquare[1].innerHTML === "0" && scoreboardSquare[4].innerHTML === "0" && scoreboardSquare[7].innerHTML === "0";
  const player0Wins6 = scoreboardSquare[2].innerHTML === "0" && scoreboardSquare[5].innerHTML === "0" && scoreboardSquare[8].innerHTML === "0";
  const player0Wins7 = scoreboardSquare[0].innerHTML === "0" && scoreboardSquare[4].innerHTML === "0" && scoreboardSquare[8].innerHTML === "0";
  const player0Wins8 = scoreboardSquare[2].innerHTML === "0" && scoreboardSquare[4].innerHTML === "0" && scoreboardSquare[6].innerHTML === "0";

  if(player0Wins1) {
    player0Score++;
    player0.innerText = `Player 0: ${player0Score}`;
    gameOver = true;
  }
  if(player0Wins2) {
    player0Score++;
    player0.innerText = `Player 0: ${player0Score}`;
    gameOver = true;
  }
  if(player0Wins3) {
    player0Score++;
    player0.innerText = `Player 0: ${player0Score}`;
    gameOver = true;
  }
  if(player0Wins4) {
    player0Score++;
    player0.innerText = `Player 0: ${player0Score}`;
    gameOver = true;
  }
  if(player0Wins5) {
    player0Score++;
    player0.innerText = `Player 0: ${player0Score}`;
    gameOver = true;
  }
  if(player0Wins6) {
    player0Score++;
    player0.innerText = `Player 0: ${player0Score}`;
    gameOver = true;
  }
  if(player0Wins7) {
    player0Score++;
    player0.innerText = `Player 0: ${player0Score}`;
    gameOver = true;
  }
  if(player0Wins8) {
    player0Score++;
    player0.innerText = `Player 0: ${player0Score}`;
    gameOver = true;
  }

  console.log("PlayerX Score:" + playerXScore);
  console.log("Player0 Score:" + player0Score);
  console.log("");
}


currentPlayer = "X";

function switchPlayers() {
  console.log(`Current Player: ${currentPlayer}`);
  if (currentPlayer === "X") {
    currentPlayer = "0";
  } else {
    currentPlayer = "X";
  }
}

scoreboard.addEventListener('click', (event) => {
  if (!event.target.closest('.scoreboard-square')) return

  const boardSquare = event.target;

  switch (boardSquare.id) {
    case 'one':
      if(scoreboardSquare[0].innerHTML === "") {
        scoreboardSquare[0].innerHTML = currentPlayer;
        switchPlayers();
      }
      break;
    case 'two':
      if(scoreboardSquare[1].innerHTML === "") {
        scoreboardSquare[1].innerHTML = currentPlayer;
        switchPlayers();
      }
      break;
    case 'three':
      if(scoreboardSquare[2].innerHTML === "") {
        scoreboardSquare[2].innerHTML = currentPlayer;
        switchPlayers();
      }
      break;
    case 'four':
      if(scoreboardSquare[3].innerHTML === "") {
        scoreboardSquare[3].innerHTML = currentPlayer;
        switchPlayers();
      }
      break;
    case 'five':
      if(scoreboardSquare[4].innerHTML === "") {
        scoreboardSquare[4].innerHTML = currentPlayer;
        switchPlayers();
      }
      break;
    case 'six':
      if(scoreboardSquare[5].innerHTML === "") {
        scoreboardSquare[5].innerHTML = currentPlayer;
        switchPlayers();
      }
      break;
    case 'seven':
      if(scoreboardSquare[6].innerHTML === "") {
        scoreboardSquare[6].innerHTML = currentPlayer;
        switchPlayers();
      }
      break;
    case 'eight':
      if(scoreboardSquare[7].innerHTML === "") {
        scoreboardSquare[7].innerHTML = currentPlayer;
        switchPlayers();
      }
      break;
    case 'nine':
      if(scoreboardSquare[8].innerHTML === "") {
        scoreboardSquare[8].innerHTML = currentPlayer;
        switchPlayers();
      }
      break;
  }

  if(gameOver === false) {
    isGameOver();
  } else {
    console.log("Game is over");
  }

});


restartBTN.addEventListener('click', () => {
  scoreboardSquare.forEach(element => {
    element.innerHTML = "";
  });
  console.log("Restarted Game");
  gameOver = false;
});

resetScoreBTN.addEventListener('click', () => {
  playerXScore = 0;
  player0Score = 0;
  playerX.innerHTML = `Player X: ${playerXScore}`;
  player0.innerHTML = `Player 0: ${player0Score}`;
});