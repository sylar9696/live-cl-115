/*
- creare la griglia statica
- trovato la griglia con javascript
- ciclato 64 volte la crwazione di un div con classe box
    - creare un array di numeri random da 1 a 64 senza ripetizioni
    - innestare uno span dentro il div box
    - a ogni ciclo abbiamo aggiunto un adEventListener al click su ogni box
    - nell'evento al click, inserir euna condiizone di controllo sul numero dello span per controllare se è pari o dispari aggiungendo la rispettiva classe colore
*/




const grigliaHtml = document.getElementById('griglia')
let arrayNumeriSingolli = []

do {

    let randomNum = randomica(64)

    if (!arrayNumeriSingolli.includes(randomNum)) {

        arrayNumeriSingolli.push(randomNum)
    }


} while (arrayNumeriSingolli.length !== 64)

//1- creiamo 64 celle nella griglia
for (let i = 0; i < 64; i++) {
    //creo un singolo div vuoto
    let box = document.createElement("div")



    //associo la classe al div creato
    box.classList.add("box")

    //inseriamo i numeri in modo sequenziale
    box.innerHTML = `<span>${ arrayNumeriSingolli[i] }</span>`

    box.addEventListener('click', function () {
        // this.classList.toggle("active")

        // pariOdispari( parseInt( box.innerText ) )
        // console.log( this.querySelector( "span" ).innerText )

        console.log( this )

        let specificoSpanHtml = this.querySelector( "span" ).innerText

        if ( specificoSpanHtml % 2 == 0) {
            this.classList.toggle("green")
        } else {
            this.classList.toggle("red")
        }


        //controllo condizionale pari e dispari

    })

    //inserisco il div nella griglia
    grigliaHtml.append(box)

}


//funzione da 1 a ....
function randomica(max) {
    return Math.floor(Math.random() * max) + 1
}




console.log(arrayNumeriSingolli)
















/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. 
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


*/