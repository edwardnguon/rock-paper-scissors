function computerMove() {
    const num = Math.floor(Math.random() * 3)
    if (num == 0) {
        return "rock"
    } else if (num == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

const score = {
    wins: 0,
    losses: 0,
    ties: 0,
};

function game(move) {
    const compMove = computerMove();
    if (move == "rock") {
        if (compMove == "rock") {
            score.ties++
        } else if (compMove == "paper") {
            score.losses++
        } else {
            score.wins++
        }
    }

    if (move == "paper") {
        if (compMove == "rock") {
            score.wins++
        } else if (compMove == "paper") {
            score.ties++
        } else {
            score.losses++
        }
    }

    if (move == "scissors") {
        if (compMove == "rock") {
            score.losses++
        } else if (compMove == "paper") {
            score.wins++
        } else {
            score.ties++
        }
    }

    document.querySelector(".score").innerText = "Wins: " + score.wins + "\nLosses: " + score.losses + "\nTies: " + score.ties
    document.querySelector(".compMove").innerText = "Computer Move: " + compMove.toUpperCase()
}