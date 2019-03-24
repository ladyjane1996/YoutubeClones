alert("WELCOME TO THE GAME");
alert ("No, why winter is comming, is why Winter is here!!");
alert("3");
alert("2");
alert("1");

var playerScore = 0;
var computerScore = 0;
var tiedScore =0;



function game ()  {

  let playerSelection;

  do {  

     playerSelection = prompt("ROCK PAPER OR SCISSORS?").toLowerCase(); } while ( playerSelection !== "rock" && playerSelection !=="paper" &&  playerSelection !=="scissors");
           
    const computerSelection = computerPlay ();
    computerPlay();
    playRound (playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection))

  } 

function computerPlay() {
  let pcSelect = Math.floor(Math.random()*3);
  if (pcSelect === 0 ) {
    return "rock";
  } else if (pcSelect === 1) {
    return "paper";
  } else {
    return "scissors"; 
  }
}
//Computer Choice! 

function playRound (playerSelection, computerSelection) {
  
    if (playerSelection === computerSelection) {
        tiedScore++;
        return " Tied Game. Try Again ";

      } else if (playerSelection==="rock"){ 
        if (computerSelection === "scissors") {
          playerScore ++;
         return "you Rock, Rock Beat Scissors"
        }else {
          computerScore++;
          return "you lose, Paper Beat Rock"
         }

       } else if ( playerSelection=== "paper" ) {
        if (computerSelection==="rock") {
          playerScore++;
          return "You Rock, Paper beat Rock!"
         
        } else {
          computerScore++
          return "you Lose, Scissor Beat Paper!"
        }
      
      } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
          playerScore++
          return "you rock!, Scissor Beat Paper!"
        } else {
          computerScore++
          return "you Lose, Rock beat Scissor !"
        }
      }
    } 

   function finalScore () {

    if (playerScore > computerScore) {
    console.log ("YOU ROCk, YOU WIN!!");
    }else if ( playerScore < computerScore){
    console.log("Loser");
    }else if (playerScore === computerScore) {
    console.log ("DrawGame!");
    }
  }

    for( let cont = 0; cont < 5; cont ++) {
      game(); 
   }

  finalScore();