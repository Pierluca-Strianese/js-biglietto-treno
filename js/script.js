// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const chilometri = prompt('Quanti km vuoi percorrere?');

const eta = prompt('Quale e\' la tua eta\'');

let prezzofinale = (chilometri * 0.21);

if (eta < 18) {
    prezzofinale = ((chilometri * 0.21) - ((chilometri * 0.21) / 100 * 20)).toPrecision(3);
}

if (eta > 65) {
    prezzofinale = ((chilometri * 0.21) - ((chilometri * 0.21) / 100 * 40)).toPrecision(3);
}


console.log('km:', chilometri);
console.log('eta:', eta);
console.log('prezzofinale:', prezzofinale);
