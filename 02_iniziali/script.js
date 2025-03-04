/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function inizials(elements){
    const newArray =[]
    for(let i = 0; i < elements.length; i++){
        let list = elements[i]
        newArray.push(list[0])
    }
    return newArray
}


// Invoca la funzione qui e stampa il risultato in console
let newArray = inizials(names)
console.log(newArray)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]