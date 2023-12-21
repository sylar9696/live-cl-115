document.writeln('<h1 class="test">Hello world</h1>')

document.writeln('Hello world')

alert('Hello world')

document.getElementById('saluto').innerHTML = "<p>ciao sono ale</p>";


//variabili

//inizializzo le mie variabili
let nomeVariabile = 5;
const nomePersona = 'alessio';

//Far compare nel body: "Ciao, piacere di conoscert: alessio"
document.writeln( "<p>Ciao, piacere di conoscerti: " + nomePersona + " " + nomeVariabile + 2 + "</p>");

//stampa di numeri cno writeLn
document.writeln( 72+81 );

//come si modificano variabili e costanti
nomeVariabile = 80
//non si può modificare perchè è una costante
// nomePersona = "mattia"

console.log( nomeVariabile );
// console.log( nomePersona );

//somma di: nomeVariabile + 100, il risultato lo associamo a una variabile chiamata somma
let somma = nomeVariabile + 100
console.log( somma )

//variabile inizializzata vuota
let miaVariabile;
console.log( "valore variabile inizializzata vuota: ", 5 + 10 )

let numeroVirgola = 5.2;


//come prendere i dati dall' utente

let nomeUtente = prompt( "dammi il tuo nome:", "fabio" );
let cognomeUtente = prompt( "dammi il tuo cognome:", "rossi" );
let eta = prompt( "dammi il tuo cognome:", 30 );

console.log( nomeUtente , cognomeUtente, eta );

console.log(  eta -0 ); //3010

let numeroGrande = 100000;

console.log( `ciao sono ${ numeroGrande } è un bellissimo numero` )