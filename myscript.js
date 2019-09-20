
      let playerSelection;
      let computerSelection = ComputerPlay();
      let cs=0;
      let ps=0;
      let round =0;


    function ComputerPlay(){
      const rand = Math.random();
      if (rand<0.34) {
        return "rock";
      }else if (rand <= 0.67) {
        return "paper";
      }else {
        return "scissors";}
    }

    function playRound(playerSelection,computerSelection){

      playerSelection = prompt("Which one do you choose Rock, Paper, Scissors ?").toLowerCase();

      if (playerSelection===computerSelection) {
      return "Tie!"+"Let's play Again.";
      }

      else if (playerSelection==="rock") {
        if (computerSelection==="scissors") {
        ps++;
        return "rock wins!" + " " + "You beat the computer,nice Job!";
        }else {
        cs++;
        return "paper wins!" + " " + "Computer beats you,!";
        }
      }

      else if (playerSelection==="paper") {
        if (computerSelection==="scissors") {
        cs++;
        return "scissors wins!" + " " + "Computer beats you,!";
        }else {
        ps++;
        return "paper wins!" + " " + "You beat the computer,nice Job!";
        }
      }

      else if (playerSelection==="scissors") {
        if (computerSelection==="paper") {
        ps++;
        return "scissors wins!" + " " + "You beat the computer,nice Job!";
        }else {
        cs++;
        return "rock wins!" + " " + "Computer beats you,!";
        }
       }
       else {
       return "Check what you type !!!"
       }
    }

    function game(){

      while (ps<3 && cs<3) {
        alert(playRound(playerSelection,ComputerPlay()));
        if(ps==3){
          alert("YOU WIN. YOU : " + ps + " and COMPUTER : " + cs );
          alert("Refresh The Page To Play Again");
          break;
        }else if (cs==3) {
          alert("COMPUTER WINS. COMPUTER : " + cs + " and YOU : " + ps);
          alert("Refresh The Page To Play Again");
          break;
        }
      }
    }

    function myfunction(){
      game();
    }


    // const playerSelection ="rock";
    // const computerSelection = ComputerPlay()
    // console.log(playRound(playerSelection,computerSelection))
