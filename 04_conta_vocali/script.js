/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function vowels(){
    let numberVowels= 0
    for(let i = 0; i < word.length; i++){

        let vocali = word[i]

        if(vocali === "a" || vocali === "e" ||vocali === "i" || vocali === "o" || vocali === "u"){
            numberVowels++
        }
        
        
    }
    return numberVowels
}


// Invoca la funzione qui e stampa il risultato in console
let numberVowels = vowels()
console.log(numberVowels)



//Risultato atteso se si passa 'javascript': 3 (a, a, i)