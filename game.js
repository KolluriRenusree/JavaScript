let userScore = 0;
let computerScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msgPara = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const playGame = (userChoice) => {
    const compChoice = genComputerChoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
};

const drawGame = () => {
    msgPara.innerText = "Game Draw! 😐";
    msgPara.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msgPara.innerText = `You Win! 🎉 ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msgPara.innerText = `You Lose! ❌ ${compChoice} beats ${userChoice}`;
        msgPara.style.backgroundColor = "red";
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
