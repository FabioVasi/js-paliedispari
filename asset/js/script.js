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

// chiedo all'utente di scegliere Pari o Dispari
const userChoise = prompt("Scegli Pari o Dispari");

// se l'utente inserisce una parola diversa da Pari o Dispari lo avviso altrimenti vado avanti
if (userChoise == 'Pari' || userChoise == 'Dispari') {
    
} else {
    alert('Hai fatto una scelta non esistente, ritenta');
} 

// chiedo all'utente di inserire un numero tra 1 e 5 se è troppo alto o e è troppo basso lo avviso
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

// loggo in console la scelta dell'utente e i numeri generati
console.log(userChoise, userNumber, randomNumber);

// creo una funzione che abbia come valori la scelta dell'utente ed  i due numeri generati "userNumber, randomNumber"
function sommaNumeri(userChoise, userNumber, randomNumber) {

// creo una costante che sia uguale alla somma dei numeri generati
    const result = userNumber + randomNumber;

    // verifico se il numero generato è pari o dispari e se corrisponde alla scelta dell'utente
    if(result % 2 === 0 && userChoise == 'Pari') {

        // se pari lo dichiaro vincitore
        console.log(result + " vince pari");
    
    } else if((result % 2 !== 0 && userChoise == 'Dispari')) {

        // se dispari lo dichiaro vincitore
        console.log(result + " vince dispari");

    // se il numero non corrisponde alla scelta dell'utente lo dichiaro sconfitto 
    } else {

        alert('Hai perso');
    
    }

    // chiedo il risultato    
    return result

}

// loggo in console la funzione
console.log(sommaNumeri(userChoise, userNumber, randomNumber));



// chiedo all'utente di inserire una parola
const palindromeWord = prompt("Inserisci una parola casuale");

// se non inserisce nulla nel prompt lo avviso altrimenti vado avanti
if(palindromeWord == "") {

    alert("Inserisci una parola")// alert

}

// inverto il di posto le lettere della parola inserita dall'utente
const reverseWord = palindromeWord.split("").reverse().join("");

// loggo in console la parola inserita dall'utente e il suo inverso
console.log(palindromeWord, reverseWord);

// creo una funzione per verificare che la parola inserita dall'utente sia palindroma
function palindrome(palindromeWord, reverseWord) {


    if(palindromeWord == reverseWord) {
// se la parola inserita dall'utente è uguale alla sua variante inversa allora è Palindroma (la loggo in console e return = true)
        console.log("la parola è palindroma");

        return true;

    } else {
// se la parola inserita dall'utente è diversa dalla sua variante inversa allora non è Palindroma (la loggo in console e return = false)
        console.log("la parola non è palindroma");

        return false;

    }

}
// loggo in console la funzione
console.log(palindrome(palindromeWord, reverseWord));