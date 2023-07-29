let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


if (sum <= 20) {
    console.log("Do you want to draw a new card?")
} else if (sum===21) {
    console.log("Blackjack!!!")
    hasBlackJack = true
} else {
    console.log("Busted!")
    let isAlive = false
}

