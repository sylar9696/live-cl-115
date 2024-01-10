const arrowDownHtml = document.querySelector('.fa-chevron-down')
const arrowUpHtml = document.querySelector('.fa-chevron-up')

const figureHtml = document.querySelector('figure')

console.log( figureHtml )

const images = [
    './img/01.jpg', //0
    './img/02.jpg', //1
    './img/03.jpg', //2
    './img/04.jpg', //3
    './img/05.jpg'  //4
];

//Creare i tag img dentro figure

for( let i = 0; i < images.length; i++ ){
    if( i === 0 ){
        figureHtml.innerHTML += `
            <img class="active" src="${images[ i ]}" alt="immagini carosello">
        `
    } else {
        figureHtml.innerHTML += `
            <img src="${images[ i ]}" alt="immagini carosello">
        `
    }    
}

let immagineCorrente = 0

// console.log( arrowDownHtml, arrowUpHtml )

arrowUpHtml.addEventListener( "click", function(){
    
    let arrayTagsImmagini = document.querySelectorAll( 'figure img' )
    console.log( arrayTagsImmagini )
        
    arrayTagsImmagini[immagineCorrente].classList.remove( 'active' )

    if( immagineCorrente == 0 ){
        immagineCorrente = arrayTagsImmagini.length - 1
    } else {
        immagineCorrente--
    }

    arrayTagsImmagini[immagineCorrente].classList.add( 'active' )
    
    

} )



arrowDownHtml.addEventListener( "click", function(){

    let arrayTagsImmagini = document.querySelectorAll( 'figure img' )
    console.log( arrayTagsImmagini )
        
    arrayTagsImmagini[immagineCorrente].classList.remove( 'active' )

    if( immagineCorrente == arrayTagsImmagini.length - 1 ){
        immagineCorrente = 0
    } else {
        immagineCorrente++
    }

    arrayTagsImmagini[immagineCorrente].classList.add( 'active' )

} )

// let arrayNormale = [
//     "<img class='active' src='./img/01.jpg' alt='immagini carosello'>",
//     "<img src='./img/02.jpg' alt='immagini carosello'>",
//     "<img src='./img/03.jpg' alt='immagini carosello'>",
//     "<img src='./img/04.jpg' alt='immagini carosello'>",
//     "<img src='./img/05.jpg' alt='immagini carosello'>"
// ]





/*
JSnack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.


snake 6
-Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.

blocco 2

**Snack2**

Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

**Snack3**

Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

 
*/