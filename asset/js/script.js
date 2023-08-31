/*
Pari e Dispari.
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

Palidroma.
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.

Consigli del giorno.
Scriviamo sempre in italiano i passaggi che vogliamo fare.
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
non partiamo a bomba con la scrittura delle funzioni, ma prima scriviamo la logica come facciamo di solito, poi passiamo al refactoring e cerchiamo di capire cosa sia meglio creare come funzione.
*/

/*
Strumenti.

- prompt
- function
- result
- if/else
- log

*/

const userNumber = Number(prompt("Scegli un numero tra 1 e 5"));

if(userNumber > 5) {

    alert("Hai inserito un numero troppo alto, ritenta")

} else if(userNumber <= 0) {

    alert("Hai inserito un numero troppo basso, ritenta")

}

const randomNumber = Math.floor(Math.random() * 5) + 1;

console.log(userNumber, randomNumber);

function sommaNumeri(userNumber, randomNumber) {

    const result = userNumber + randomNumber

    if(result % 2 === 0) {
        
        console.log(result + " vince pari");
    
    } else {
    
        console.log(result + " vince dispari");
    
    }
    
    return result

}

console.log(sommaNumeri(userNumber, randomNumber));