/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function inizials(){
    const newArray =[]
    for(let i = 0; i < names.length; i++){
        let iniziale = names[i]
        newArray.push(iniziale[0])
    }
    return newArray
}


// Invoca la funzione qui e stampa il risultato in console
let newArray = inizials()
console.log(newArray)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]