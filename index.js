//document.getElementById("count").innerText = 5
 

 let countEl = document.getElementById("count-el")

console.log(countEl)
let count = 0
 
function increment() {
    console.log("clicked")
    count += 1
    countEl.innerText = count
    console.log(count)
} 

function save() {
    console.log(count)
}
/* let name = "Kaspar"
let greeting = "Tere, minu nimi on "

let mygreeting = greeting + name

console.log(mygreeting) */

