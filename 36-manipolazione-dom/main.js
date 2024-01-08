//rendere l'elemento h2 rosso con la classe del css di bootstrap

const titolo = document.getElementById( "titolo1" )
const button = document.getElementById( "btn-red" )
const NomePersonaHtml = document.getElementById( "NomePersona" )


button.addEventListener( "click", function(){
    //logica dopo il click
    titolo.className = `${ titolo.classList } text-uppercase`
    titolo.style.backgroundColor = "blue"

    console.log( NomePersonaHtml.value )
    
} )

titolo.append( `Sono il titolo con append` )
