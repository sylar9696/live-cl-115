// setTimeout(myFunction, 3000);
 
// function myFunction() {
//   alert('Hello');
// }

// let button = document.getElementById('stop')

// const clock = setInterval(myFunction, 3000);
// //console.log(clock) <- cosa ci restituirà?

// function myFunction() {
//  alert('Hello');
// }

// button.addEventListener('click', function(){
//     clearInterval(clock )
// })


// const array = [1, 2, 3, 4];

// for (let i = 0; i < array.length; i++) {
//  console.log(array[i]); //stampa un elemento alla volta
// }

// console.log('Ciao');//viene stampato dopo il for


// setTimeout(esciDalParcheggio, 4000); 

// passaAuto('Macchina nera');
// passaAuto('Macchina rossa');
// passaAuto('Macchina verde');

// function esciDalParcheggio() {
//    console.log('Esco dal parcheggio!');
// }

// function passaAuto(nomeAuto){
//   console.log("Sta passando la " + nomeAuto);
//   // codice che fa passare l'automobile nomeAuto
//   console.log("È passata la " + nomeAuto);
// }



/*
Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.

Dopo il tempo indicato, appare un alert()
*/

// let quantoManca = parseInt(prompt( "quanti minuti mancano per la pasta ?" ))

// setTimeout( function(){
//     alert( "è pronta la pasta" )
// }, quantoManca * 60 * 1000 )


/*
Cliccando su un pulsante, viene avviato un cronometro.
Per fermare il cronometro, bisogna cliccare su un secondo pulsante.
*/

// let playHtml = document.getElementById( "play" )
// let stopHtml = document.getElementById( "stop" )
// let resetHtml = document.getElementById( "reset" )
// let tempoHtml = document.getElementById( "tempo" )

// let cronometro;
// let secondi = 0

// playHtml.addEventListener("click", function(){

//     cronometro = setInterval( function() {
//         secondi++
//         tempoHtml.innerHTML = secondi
//     }, 1000 )

// })

// resetHtml.addEventListener( "click", function(){
//     secondi = 0
//     tempoHtml.innerHTML = secondi

// } )

// stopHtml.addEventListener( "click", function(){
//     clearInterval(cronometro)
// } )


/*
Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
    - SETINTERVAL
    - SOTTRAZIONE
    - VARIABILE SECONDI
*/

let secondi = 10

let contoAllaRovescia = document.getElementById('contoAllaRovescia') 

contoAllaRovescia.innerHTML = secondi

const conto = setInterval( countdown, 1000 )


function countdown(){

    if(secondi === 0){
        clearInterval(conto)
        contoAllaRovescia.innerHTML = "Auguriiiii!"
    } else {
        secondi--
        contoAllaRovescia.innerHTML = secondi
    }

}


/*
Ciao ragazze e ciao ragazzi!
Esercizio di oggi: :orologio1: Boom Countdown :collisione:
nome repo: js-simon

Descrizione:
fruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani! Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

Consigli del giorno:
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?


*/

const d = new Date().getTime();
console.log( d )
