function game() {
    let count = 0;
    let wins = 0;
    let losses = 0;
    let draws = 0;
    
    while (count < 5) {


        let userChoice = prompt("Choose either Rock, Paper, or Scizzors:")

        let computerChoice = computerPlay();
        function computerPlay() {
            let random = ["rock", "paper", "scizzors"];
            return (random[Math.floor(Math.random() * random.length)]);
        }

        function playRound(userChoice, computerChoice) {
            if (userChoice.toLowerCase() === "rock" && computerChoice === "rock") {
                draws += 1;
                return "Draw"
            } else if (userChoice.toLowerCase() === "rock" && computerChoice === "paper") {
                losses += 1;
                return "You lose, paper beats rock."
            } else if (userChoice.toLowerCase() === "rock" && computerChoice === "scizzors") {
                wins += 1;
                return "You win! Rock beats scizzors!"
            } else if (userChoice.toLowerCase() === "paper" && computerChoice === "rock") {
                wins += 1;
                return "You win! Paper beats rock!"
            } else if (userChoice.toLowerCase() === "paper" && computerChoice === "paper") {
                draws += 1;
                return "Draw"
            } else if (userChoice.toLowerCase() === "paper" && computerChoice === "scizzors") {
                losses += 1;
                return "You lose, scizzors beats paper."
            } else if (userChoice.toLowerCase() === "scizzors" && computerChoice === "rock") {
                losses += 1;
                return "You lose, rock beats scizzors."
            } else if (userChoice.toLowerCase() === "scizzors" && computerChoice === "paper") {
                wins += 1;
                return "You win! Scizzors beats paper!"
            } else if (userChoice.toLowerCase() === "scizzors" && computerChoice === "scizzors") {
                draws += 1;
                return "Draw"
            }
        }
        console.log(userChoice);
        console.log(computerChoice);
        console.log(playRound(userChoice, computerChoice));
        console.log("Wins: " + wins + ", Losses: " + losses + ", Draws: " + draws);
        count++;
    }
}



console.log(game());


