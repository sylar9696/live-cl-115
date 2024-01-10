// creare un array di frutta e stamparlo in pagina

const frutta = [ "banana",  "pera", "mela","fragola" ]

for( let i = 0; i < frutta.length; i++ ){
    console.log( frutta[i] )
}

//controllare se "mela" è presente
let variabileControllore = false;

for( let i = 0; i < frutta.length; i++ ){

    if( frutta[i] === "mela" ){
        variabileControllore = true
    }

}

if ( variabileControllore == true  ){
    console.log( "c'è una mela" )
} else {
    console.log( "Non ci sono mele" )
}

// if ( frutta.includes("mela")  ){
//     console.log( "c'è una mela" )
// } else {
//     console.log( "Non ci sono mele" )
// }

const fruttiHtml = document.getElementById("frutti")
const btnCreaFruttoHtml = document.getElementById("btnCreaFrutto")
const scriviFruttoHtml = document.getElementById("scriviFrutto")
const rimuoviMelaHtml = document.getElementById("rimuoviMela")

for(let i = 0; i < frutta.length; i++){
    fruttiHtml.innerHTML += `<li>${ frutta[i] }</li>`
}

//creiamo un bottone con cui aggiungere un nuovo elemento all'array
btnCreaFruttoHtml.addEventListener("click", function(){
    frutta.push( scriviFruttoHtml.value )

    console.log( frutta )

    fruttiHtml.innerHTML += `<li>${ frutta[ frutta.length - 1 ] }</li>`

})

//rimuoviamo mela 
let indiceElementoDaRimuovere;

rimuoviMelaHtml.addEventListener("click", function(){
    for( let i = 0; i < frutta.length; i++ ){
    
        if( frutta[i] === "mela" ){
            indiceElementoDaRimuovere = i
            console.log( indiceElementoDaRimuovere )
        }
    
    }
    frutta.splice( indiceElementoDaRimuovere,1 )
    console.log( frutta )

    fruttiHtml.innerHTML = ""

    for(let i = 0; i < frutta.length; i++){
        fruttiHtml.innerHTML += `<li>${ frutta[i] }</li>`
    }
})








/*
Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.


---------------------------------------------------------------------------------------


Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.






*/


















