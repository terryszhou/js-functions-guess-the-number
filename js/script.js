// console.log('hello frontend 👋')

function guessTheNumber(rand) {
  let guess = prompt("Guess our random number between 1-10")

  if (guess == rand) {
    return "Success! You have guesed our random number!"
  } else {
    return guessTheNumber(rand)
  }

}

let rand = Math.ceil(Math.random() * 10)

console.log(guessTheNumber(rand))