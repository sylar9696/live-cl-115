/*Esempio 1: stampare i numeri da 1 a 10 */

// for( let i = 1; i <= 10; i++ ){
//     console.log( i )
// }

// let i = 5

// while (i <= 4) {
  
//     // codice da eseguire
//     console.log( i )
    
//     // istruzioni per terminare il ciclo
//     i++
// }

// esempio 2: stampiamo l'array di parole 

// const parole = ["cane", "gatto", "albero", "macchina"]

// let x = 0;

// while( x < parole.length ){
//     console.log( parole[x] )
//     x++
// }


/*Esempio 1: stampare i numeri da 1 a 10, farlo con do while */

//let i = 5;

//do{

    // codice da eseguire
//    console.log(i)
 
    // istruzioni per terminare il ciclo 
//    i--

//}while( i => 4 ) //i=6

// Esempio 2: stampare un messaggio di errore finché l'utente non inserisce un numero valido

let numeroInserito


do{
    numeroInserito = prompt("inserisci un numero")
    
    

} while( isNaN(numeroInserito) )

console.log( "hai inserito il numero " + numeroInserito )