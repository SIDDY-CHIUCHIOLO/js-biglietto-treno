
const kilometers = prompt("How many kilometers do you want to travel?")
document.getElementById("my-kilometers").innerHTML = kilometers;
console.log(kilometers);


let priceWithoutDiscount =  kilometers * 0.21;
document.getElementById("my-price-without-discount").innerHTML = priceWithoutDiscount;
console.log(priceWithoutDiscount);


const passengerAge = prompt("How old are you?")
document.getElementById("my-passenger-age").innerHTML = passengerAge;
console.log(passengerAge);