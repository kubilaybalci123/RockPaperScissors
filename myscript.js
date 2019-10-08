let computerSelection;
let playerSelection;
let round = 0;
let cs = 0;
let ps = 0;

var rock = document.getElementById("rock");
var paper = document.getElementById('paper');
var scissors = document.getElementById("scissors");

var results = document.getElementById("results");
var scores = document.getElementById("scores");
var winner = document.getElementById("winner");



rock.addEventListener("click", function() {
  playerSelection = "rock";
  if (ps == 5 || cs == 5) {
    return;
  }
  playRound()
});

paper.addEventListener("click", function() {
  playerSelection = "paper";
  if (ps == 5 || cs == 5) {
    return;
  }
  playRound()
});

scissors.addEventListener("click", function() {
  playerSelection = "scissors";
  if (ps == 5 || cs == 5) {
    return;
  }
  playRound()
});



function playRound() {

  function ComputerPlay() {
    const rand = Math.random();
    if (rand < 0.34) {
      return "rock";
    } else if (rand <= 0.67) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  computerSelection = ComputerPlay();

  if (playerSelection === computerSelection) {
    results.innerHTML = " Tie!" + "Let's play Again.";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      ps++;
      results.innerHTML = "rock wins!" + " " + "You beat the computer,nice Job!";
    } else {
      cs++;
      results.innerHTML = "paper wins!" + " " + "Computer beats you,!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      cs++;
      results.innerHTML = "scissors wins!" + " " + "Computer beats you,!";
    } else {
      ps++;
      results.innerHTML = "paper wins!" + " " + "You beat the computer,nice Job!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      ps++;
      results.innerHTML = "scissors wins!" + " " + "You beat the computer,nice Job!";
    } else {
      cs++;
      results.innerHTML = "rock wins!" + " " + "Computer beats you,!";
    }
  }

  scoreBoard();

}

function scoreBoard() {

  scores.innerHTML = "YourScore : " + ps + " <br> " + "ComputerScore :" + cs;
  if (ps == 5) {
    winner.innerHTML = "YOU WIN";
    resetGame();
  } else if (cs == 5) {
    winner.innerHTML = "COMPUTER WINS";
    resetGame();
  }
}

function resetGame() {
  var resetButton = document.createElement("BUTTON");
  document.body.appendChild(resetButton);
  resetButton.innerHTML = "PLAY AGAIN";
  resetButton.style.color = "white";
  resetButton.style.backgroundColor = "#d24f4f";
  resetButton.style.height = "70px";
  resetButton.style.weight = "100px";
  resetButton.style.borderRadius = "20px";
  resetButton.style.borderColor = "orange";

  resetButton.addEventListener("click", function() {
    ps = 0,
    cs = 0,
    resetButton.style.display = "none",
    winner.innerHTML = "";
    scores.innerHTML = "";
    results.innerHTML = "";

  });
}
