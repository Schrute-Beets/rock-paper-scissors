function getPlayerChoice() {
    let validPlayerInput = false;
    
    while (validPlayerInput == false) {
        let playerInput = prompt("Throw your choice!")
        let playerSelection = playerInput.toLowerCase();
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
            validPlayerInput = true;
        } else {
            console.log("Please throw a valid choice");
        }
    }
    console.log(playerSelection);
    return playerSelection;
}


function getComputerChoice() {
    let number = Math.floor(Math.random()*3);
    let computerSelection;
    if (number == 0){
        computerSelection = "rock";
    } else if (number == 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

