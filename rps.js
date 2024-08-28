const readlineSync = require("readline-sync")

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1
    
    if (num == 1) {
        return "scissors"
    }else if (num == 2){
        return "paper"
    }else{
        return "rock"
    }
}

function getHumanChoice() {
    console.log("------------------------------")
    let side = readlineSync.question("Pick: Rock, Scissors or paper\n")
    side = side.toLowerCase();
    return side;
}

function determineWinner(human, computer) {
    if (human === computer) {
        return "draw";
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock")
    ) {
        return "human";
    } else {
        return "robot";
    }
}
function fiveRounds() {
    let humanScore = 0;
    let robotScore = 0;
    
    for (let round = 1; round <= 5; round++) {
        
    console.log("------------------------------")
    console.log(`Round: ${round}`)
    
        let humanChoice = getHumanChoice()
        
        let computerChoice = getComputerChoice()
        console.log(`Computer choice: ${computerChoice}`)
        
        let result = determineWinner(humanChoice, computerChoice)
        
        if (result === "human") {
            humanScore++;
        }else {
            robotScore++
        }
        console.log(`human ${humanScore} robot: ${robotScore}`)
        
    }
        console.log("------------------------------")
    
        if (humanScore > robotScore){
            console.log(`Human won with ${humanScore} congratulations`)
        }
        
        console.log("------------------------------")
        
}

fiveRounds()
