let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

playRound(playerChoice, computerChoice);

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


function playRound(playerChoice, computerChoice) {
    console.log("Your choice: " + playerChoice);
    console.log("Computer's choice: " + computerChoice);
    
    if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose!");
            } else if (computerChoice == "rock") {
                console.log("It's a tie!");
            } else {
                console.log("You win!");
            }
    }
    else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose!");
        } else if (computerChoice == "paper") {
            console.log("It's a tie!");
        } else {
            console.log("You win!");
        }
    }
    else {
        if (computerChoice == "rock") {
            console.log("You lose!");
        } else if (computerChoice == "scissors") {
            console.log("It's a tie!");
        } else {
            console.log("You win!");
        }
    }
}