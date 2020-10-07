let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computer-Score_span = document.getElementById("computer-score");
const Scoreboard_div = document.querySelector(".score-board");
const result_p = querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = [ 'r', 'p', 's'];
    console.log = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    
}
functionconvertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)  beats ${convertToWord(computerChoice)};
}
function lose() {
    console.log("LOST");
}

function draw() {
    console.log("DRAW");
}

function game(userChoice){
    const computerChoice =getComputerChoice();
    switch (userChoice * computerChoice){
        case"rs":
        case"pr":
        case"sp":
        win()
        break;
        case "rp":
        case "ps":
        case "sr":
        lose()
        break;
        case"rr":
        case"pp":
        case"ss":
        draw()
        break;

    }
    
}

function main() {
rock_div.addEventListener('click', function() {

 game("r");
})

paper_div.addEventListener('click', function() {

game("p");
})

scissors_div.addEventListener('click', function() {

game("s");
})
}

main();

