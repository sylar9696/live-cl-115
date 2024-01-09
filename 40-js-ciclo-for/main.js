// // const spanHtml = document.querySelectorAll('span')

// // console.log( spanHtml[1], spanHtml )



// // for( let x=0; x < spanHtml.length; x++){
// //     spanHtml[x].style.color = "red"
// // }

// const ul = document.querySelector("ul.list");
// // const ul = document.querySelector("ul");

// for (let index = 0; index < 10; index++) {
//   const element = `<li class="box box--${index}"> Numero stampato: ${index} </li>`;
//   ul.innerHTML += element;
  
//   //oppure cosa possiamo utilizzare per aggiungere elementi al DOM?
// }

// // // let x = 2;

// // // y = x++; 

// // // // y = 2, x = 3
// // // console.log( y, x )

// // let x = 2;

// // y = ++x; 

// // // y = 3, x = 3

// // console.log( y, x )





// let arrayDiOggettiDiMacchine = [
//     {
//         porte: 5,
//         marca: ford
//     },
//     {
//         porte: 5,
//         marca: fiat
//     },
//     {
//         porte: 5,
//         marca: hyundai
//     }
// ]


//stampare tutti i numeri da 0 a 1000
const ul = document.querySelector( 'ul.list' )

// console.log( (5 % 2) === 0 )


for( let i = 0; i <= 1000; i++ ){

    if( (i % 2) === 0 ){
        const element = `<li style="color: red"> ${i} </li>`
        ul.innerHTML += element
    } else {
        const element = `<li style="color: blue"> ${i} </li>`
        ul.innerHTML += element
    }

}

//stampare tutti i numeri da  1000 a 0 
for( let i = 1000; i >= 0; i-- ){

    const element = `<li> ${i} ciao </li>`

    ul.innerHTML += element
}





























/*
**Consegna:**

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

**Prima di partire a scrivere codice poniamoci qualche domanda:**

Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?

**Consigli del giorno:**

1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.

**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. 
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/