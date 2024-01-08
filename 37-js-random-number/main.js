//generiamo un numeor random dopo il click al bottone
    // - creare un bottone
    // - associare funzione al click

const risultatoHtml = document.getElementById("risultato")
const bottoneHtml = document.getElementById("button")

// bottoneHtml.addEventListener( "click", function(){
//     //al click succede...random number
//     console.log( Math.floor(Math.random()*(100-0 + 1)+0) )

//     // Math.floor(Math.random()*(max-min+1)+min)
    
// } )

bottoneHtml.addEventListener( "click", function(){
    console.log( RandomNumber( 0,100, "ciao dalla funzione" ) )
} )

// bottoneHtml.addEventListener( "click", RandomNumber( 0, 100 ) )

//invocazione di funzione
console.log( RandomNumber( 0,5 ), "numero random senza evento" )

function RandomNumber( min,max, saluto ){

    console.log( saluto )
    return Math.floor( Math.random()*(max-min + 1) + min )

}