function getComputerChoice() {
    let number = Math.floor(Math.random()*3);
    let choice;
    if (number == 0){
        choice = "rock";
    } else if (number == 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}