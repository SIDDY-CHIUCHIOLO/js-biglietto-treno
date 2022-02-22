
const kilometriRichiesti = prompt("Quanti kilometri devi fare?")
console.log(kilometriRichiesti);

let costoNonScontato = (kilometriRichiesti * 0.21).toFixed(2);
console.log(costoNonScontato)

let scontoGiovani = costoNonScontato * 20 / 100;

let costoBigliettoGiovani = (costoNonScontato - scontoGiovani).toFixed(2);
console.log(costoBigliettoGiovani);

let scontoAnziani = costoNonScontato * 40 / 100;

let costoBigliettoAnziani = (costoNonScontato - scontoAnziani).toFixed(2);
console.log(costoBigliettoAnziani);

const etàCliente = prompt("Quanti anni hai?")
console.log(etàCliente);

if (etàCliente < 18){
    console.log(costoBigliettoGiovani)
    document.getElementById("my-costo-biglietto").innerHTML = costoBigliettoGiovani

} else if (etàCliente > 65){
    console.log(costoBigliettoAnziani)
    document.getElementById("my-costo-biglietto").innerHTML = costoBigliettoAnziani

} else {
    console.log(costoNonScontato)
    document.getElementById("my-costo-biglietto").innerHTML = costoNonScontato
}


