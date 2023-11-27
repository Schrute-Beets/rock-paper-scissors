function getPlayerChoice() {
    let validPlayerInput = false;
    let playerInput;
    let playerChoice
    
    while (validPlayerInput == false) {
        playerInput = prompt("Throw your choice!")
        playerChoice = playerInput.toLowerCase();
        if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
            validPlayerInput = true;
        } else {
            console.log("Please throw a valid choice");
        }
    }
    return playerChoice;
}


function getComputerChoice() {
    let number = Math.floor(Math.random()*3);
    let computerChoice;
    
    if (number == 0){
        computerChoice = "rock";
    } else if (number == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

