/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function greetings(name) { 
    //return 'ciao'
    return `Ciao ${name}`
}


// Invoca la funzione qui e stampa il risultato in console
greetings()
const hi = greetings(userName) 
console.log(hi)

// const hello = hi + ' ' + userName
// console.log(hello)



//Risultato atteso se si passa 'Mario': // ciao Mario
