let randomNum = Math.ceil(Math.random() * 10)

function ask() {
    let guessedNum = prompt("Guess a number between 1 and 10!")
    if (guessedNum == randomNum) {
        console.log("You got it!")
    } else {
        console.log("Keep trying!")
        ask()
    }
}

ask()





