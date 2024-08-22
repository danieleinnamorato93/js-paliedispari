//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt('Pari o dispari?');
let userNumber = parseInt(prompt('Scegli un numero tra 1 e 5:'));

//determino se è pari o dispari
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}

//Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).

const computerNumber = Math.floor(Math.random() * 5) + 1;

//Sommiamo i due numeri

//Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)

//Dichiariamo chi ha vinto.