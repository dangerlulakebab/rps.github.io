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

function playRound(human, computer) {
    
}

human = getHumanChoice();
robot = getComputerChoice();

