/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function inizials(list, letter) {
    const newArray = []
    for (let i = 0; i < list.length; i++) {

        let iniziale = list[i]

        if (iniziale[0] === letter) {
            newArray.push(iniziale)
        }

        console.log(iniziale)
    }
    return newArray
}

// Invoca la funzione qui e stampa il risultato in console
let newArray = inizials(names, 'A')
console.log(newArray)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]