alert("WELCOME TO THE GAME");
alert ("No, why winter is comming, is why Winter is here!!");
alert("3");
alert("2");
alert("1");

var playerScore = 0;
var computerScore = 0;
var tiedScore =0;
var cont = 0; 

function computerPlay() {
  let pcSelect = Math.floor(Math.random()*3);
  if (pcSelect === 0 ) {
    let selection = "Rock!"; 
  } else if (pcSelect === 1) {
    let selection = "Paper!"; 
  } else {
    let selection = "Scissors!"; 
  }

  return Selection;
}
//Computer Choice! 
function playRound (PlayerSelection,computerSelection) 
    let result =  "";

    if (playerSelection === computerSelection) {
        tiedScore++;
        result = "TIED!"; 

     } else if (playerSelection === "rock"&& computerSelection === "Scissors!" || playerSelection === "paper"&& computerSelection === "Rock!" 
     || playerSelection === "scissors"&& computerSelection === "Paper!"  ) {
        playerScore++;
        result = "YOU WIN!"; 
     } else {
        computerScore++;
        result = "Loser!"; 
     }
   } 

function game ()  {

    var Selection = prompt("ROCK PAPER OR SCISSORS?");
    var playerSelection = Selection.toLowerCase();

    do {
        cont = cont + 1; 
        playRound();
        
    } while (cont = 5)            
    } 


    game(); 

  const playerSelection = "";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection,computerSelection));