// if ( 2 > 1 || 5 < 3 ) {

//     // blocco di istruzioni 1
//     // Se la condizione è vera
//     document.writeln( "La condizione è VERA" )

// } else {

//     // blocco di istruzioni 2
//     // Se la condizione è falsa

//     document.writeln( "La condizione è FALSA" )

// }



// Problema 1:
// Chiediamo all'utente due parole in successione.
// Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.

// 0- creare variabili per le parole
//     0A- come recupero le parole?
//         0B - lascio all'utente il modo di scrivere le parole
//             0C - soluzioni: prompt o input text

// 1- creare console log di quello che stiamo scrivendo
//     1A - console log parola1 e parola2

// 2- creiamo una condizionale if else
// 2.1 - utilizzo variabileStringa.length

let parola1 = prompt("Inserisci la prima parola")
let parola2 = prompt("Inserisci la seconda parola")

console.log(parola1, parola2, parola1.length)

// if( parola1.length > parola2.length && parola1.length >= 0 && parola2.length >= 0 ){
//     //se è vera
//     document.writeln( `la parola: ${parola1} è più grande, perchè i caratteri suoi sono: ${parola1.length}, la parola 2: ${parola2} ha : ${parola2.length} caratteri` )
// } else {
//     //se è falsa
//     document.writeln( `la parola: ${parola2} è più grande, perchè i caratteri suoi sono: ${parola2.length}, la parola 1: ${parola1} ha : ${parola1.length} caratteri` )
// }

if (parola1.length === 0 || parola2.length === 0) {

    //se una delle due condizioni è vera

    document.writeln("noooo compila tutti i campi dei prompt")
} else if (parola1.length > parola2.length) {
    document.writeln(`la parola: ${parola1} è più grande, perchè i caratteri suoi sono: ${parola1.length}, la parola 2: ${parola2} ha : ${parola2.length} caratteri`)
} else if (parola1.length < parola2.length) {
    document.writeln(`la parola: ${parola2} è più grande, perchè i caratteri suoi sono: ${parola2.length}, la parola 1: ${parola1} ha : ${parola1.length} caratteri`)
} else if (parola1.length === parola2.length) {
    document.writeln(`le parole: ${parola1} ${parola2} sono lunghe uguali`)

    if (parola1 == parola2) {
        document.writeln(`le parole ${parola1} ${parola2} sono identiche`)
    } else {
        document.writeln(`le parole ${parola1} ${parola2} sono diverse`)
    }


} else {
    document.writeln("è successo un errore inaspettato!!")
}


// if( "cibo" ){
//     console.log( true )
// } else {
//     console.log( false )
// }


// 0 ( tipo di dato: numero ) === 0 ( tipo di dato: stringa ) ====> falso
// 0 ( tipo di dato: numero ) === 0 ( tipo di dato: numero ) ====> vero

// 0 ( tipo di dato: numero ) == 0 ( tipo di dato: stringa ) ====> vero
// 0 ( tipo di dato: numero ) == 0 ( tipo di dato: numero ) ====> vero




const now = new Date();

// Su d possiamo chiamare diverse funzioni, per avere diverse informazioni

let ore = now.getHours() //Get the hour (0-23)
let minuti = now.getMinutes() // Get the minute (0-59)
let giorni = now.getDay() // Get the day as number (0-6)
let annoIntero = now.getFullYear() // Get Year as 2019

console.log( ore, minuti, giorni, annoIntero )

// let classeMacchina = {
//     "portiere" : 4,
//     "coloreMacchina": "nero",
//     "numeroPasseggeri": 7,

//     funzione: calcolaVelocità
// }