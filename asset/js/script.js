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
- const
- function
- return/result
- if/else
- log
- alert
*/

// chiedo all'utente di inserire un numero tra 1 e 5
const userNumber = Number(prompt("Scegli un numero tra 1 e 5"));

// se è troppo alto
if(userNumber > 5) {

    alert("Hai inserito un numero troppo alto, ritenta")// alert 1
// se è troppo basso
} else if(userNumber <= 0) {

    alert("Hai inserito un numero troppo basso, ritenta")// alert 2

}

// genero un numero random per il computer
const randomNumber = Math.floor(Math.random() * 5) + 1;

// loggo in console i numeri generati
console.log(userNumber, randomNumber);

// creo una funzione che abbia come valori i miei due numeri "userNumber, randomNumber"
function sommaNumeri(userNumber, randomNumber) {
// creo una costante che sia uguale alla somma dei miei numeri
    const result = userNumber + randomNumber
// verifico se il numero generato è pari o dispari
    if(result % 2 === 0) {
// se pari lo dichiaro vincitore        
        console.log(result + " vince pari");
    
    } else {
// se dispari lo dichiaro vincitore      
        console.log(result + " vince dispari");
    
    }
// chiedo il risultato    
    return result

}
// loggo in console la funzione
console.log(sommaNumeri(userNumber, randomNumber));