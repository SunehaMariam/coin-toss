function tossCoin() {
    let flipCoin = ["Head","Tail"];

let random = Math.floor(Math.random() * flipCoin.length)
let toss = flipCoin[random]
document.getElementById('toss').textContent = "You got: " + toss;
}
