let match;

playGame();


function playGame() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        if (match == "loss") {
            losses++;
        }
        else if (match == "tie") {
            ties++;
        }
        else {
            wins++;
        }

        console.log("Wins: " + wins + "   " + "Losses: " + losses + "   " + "Ties: " + ties);
        
    }
}

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
            match = "loss";
            console.log("You lose!");
            } else if (computerChoice == "rock") {
                match = "tie";
                console.log("It's a tie!");
            } else {
                match = "win";
                console.log("You win!");
            }
    }
    else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            match = "loss";
            console.log("You lose!");
        } else if (computerChoice == "paper") {
            match = "tie";
            console.log("It's a tie!");
        } else {
            match = "win";
            console.log("You win!");
        }
    }
    else {
        if (computerChoice == "rock") {
            match = "loss";
            console.log("You lose!");
        } else if (computerChoice == "scissors") {
            match = "tie";
            console.log("It's a tie!");
        } else {
            match = "win";
            console.log("You win!");
        }
    }
}