// chiedo all'utente di inserire una parola, faccio un prompt
let word = prompt("Inserisci una parola:");

//faccio una funzione per verificare se è palindroma: prendo la parola, ne separo le lettere, ne inverto l'ordine e li riunisco in stringa

function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join(''); 
    return word === reversedWord;  
}

