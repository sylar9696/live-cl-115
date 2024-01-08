//cambiare il colore del titolo con una funzione custom tramite i suoi parametri

//trovo gli elemnti html e li inizializzo
const titolo = document.getElementById("titolo")
const buttonGiallo = document.getElementById("button-yellow")
const buttonRosso = document.getElementById("button-red")
const buttonBlue = document.getElementById("button-blue")
const buttonRandomColor = document.getElementById("buttonRandomColor")

buttonGiallo.addEventListener( 'click', function(){
    CambioColore( "text-warning" )
} )

buttonRosso.addEventListener( 'click', function(){
    CambioColore( "text-danger" )
} )

buttonBlue.addEventListener( 'click', function(){
    CambioColore( "text-primary text-uppercase" )
} )

buttonRandomColor.addEventListener( 'click', function(){

    let primoRandom = RandomNumber(0,255)
    let secondoRandom = RandomNumber(0,255)
    let terzoRandom = RandomNumber(0,255)

    CambioColoreRandomico( primoRandom, secondoRandom, terzoRandom )
} )

//funzione custom singola
function CambioColore( pippo ){
    //come si mette una classe sul titolo
    console.log( RandomNumber(0,100) )
    return titolo.className = pippo
}

function RandomNumber( min,max ){

    return Math.floor( Math.random()*(max-min + 1) + min )

}

function CambioColoreRandomico( primo,secondo,terzo ){
    return titolo.style.color = `rgb( ${primo}, ${secondo}, ${terzo} )`
}