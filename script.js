/*Rock, Paper, Scissors*/
const  gameChoice= ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore=0;

//Computer choice function
function computerPlay(){
    const number= gameChoice[Math.floor(Math.random()*3)];
    return number;
}

function playGame(playerSelection, computerSelection){
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();

    const playerMessage=`You win! ${playerSelection} beats ${computerSelection}`;
    const computerMessage=`You lost! computer won this round because ${computerSelection} beats ${playerSelection}`;
//Determine the winner
    if(playerSelection === computerSelection){
        console.log('The game ended in a tie')
    }else if(playerSelection==='rock'){
        if(computerSelection ==='paper'){
            console.log(computerMessage);
            computerScore++;
        } else{
             console.log(playerMessage);
             playerScore++;
        }
     }
    else if(playerSelection==='paper'){
        if(computerSelection==='scissors'){
            console.log(computerMessage);
            computerScore++;
        } else{
            console.log(playerMessage);
            playerScore++;
        }
    }
    else if(playerSelection==='scissors'){
        if(computerSelection==='rock'){
            console.log(computerMessage);
            computerScore++;
        } else{
            console.log(playerMessage);
            playerScore++;
        }
    }
}


function game(rounds){
    const computerSelection = computerPlay();
    for(let i=0; i<rounds; i++){
        playGame(prompt('Rock, paper, or scissors',computerSelection),computerSelection);
        
    }
    if(playerScore>computerScore){
        console.log(`You are the winner with a score of ${playerScore}`);
    } else if(playerScore<computerScore){
        console.log(`You lost, computer won with a score of ${computerScore}`);
    }else{
        console.log('The game is a tie');
    }
}

game(5);
    





