//createelement

let elementoHtml = "div"
let mainHtml = document.querySelector( "main" )

let elemCreato = document.createElement( elementoHtml ) // <div></div>
console.log( elemCreato )

mainHtml.append( elemCreato )

// mainHtml.innerHTML += elemCreato

const divHtml = document.querySelector("div")

divHtml.prepend( document.createElement("p") )

divHtml.prepend("ciao mondo")

divHtml.prepend( document.createElement("span"), "altro paragrafo", document.createElement("strong") )