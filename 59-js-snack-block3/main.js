// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.

const auto = [
  { marca: "Fiat", modello: "500", alimentazione: "benzina" },
  { marca: "Fiat", modello: "Panda", alimentazione: "benzina" },
  { marca: "Fiat", modello: "Tipo", alimentazione: "diesel" },
  { marca: "Lancia", modello: "Ypsilon", alimentazione: "gpl" },
  { marca: "Lamborghini", modello: "Huracán", alimentazione: "elettrico" },
  { marca: "Audi", modello: "A4", alimentazione: "metano" },
  { marca: "BMW", modello: "320i", alimentazione: "benzina" },
  { marca: "Mercedes-Benz", modello: "C-Class", alimentazione: "diesel" },
  { marca: "Tesla", modello: "Model 3", alimentazione: "elettrico" }
];

const benzina = auto.filter( 
  (element) =>element.alimentazione === "benzina"
)

const diesel = auto.filter( 
  (element) => element.alimentazione === "diesel" 

)

const altreAuto = auto.filter( 
  (element) => element.alimentazione !== "diesel" && element.alimentazione !== "benzina"
)

console.log( benzina, diesel, altreAuto )

// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const nomi = [
  "Mario",
  "GIOVANNI",
  "Marco",
  "Luca",
  "ANDREA",
  "AlessaNdro",
  "MaTTeo",
  "Francesco",
  "EmANuele"
];

const nomiFormattati = nomi.map(
  element => element[0].toUpperCase() + element.slice(1).toLowerCase()
)

console.log( nomiFormattati )


/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.

Es:
[
  { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
  { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
  { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]

Crea un nuovo array con la lista dei mammiferi.
*/

const animali = [
  {
    name: "Leone",
    family: "Felidae",
    class: "Mammalia"
  },
  {
    name: "Tigre",
    family: "Felidae",
    class: "Mammalia"
  },
  {
    name: "Elefante",
    family: "Elephantidae",
    class: "Mammalia"
  },
  {
    name: "Giraffa",
    family: "Giraffidae",
    class: "Mammalia"
  },
  {
    name: "Giaguaro",
    family: "Felidae",
    class: "Mammalia"
  },
  {
    name: "Canguro",
    family: "Macropodidae",
    class: "Mammalia"
  },
  {
    name: "Orso",
    family: "Ursidae",
    class: "Mammalia"
  },
  {
    name: "Pinguino",
    family: "Spheniscidae",
    class: "Aves"
  },
  {
    name: "Uccello del paradiso",
    family: "Paradisaeidae",
    class: "Aves"
  }
];

const Mammalia = animali.filter( 
  (element) =>element.class === "Mammalia"
)

console.log( Mammalia )









/*
Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione 
Creare un carosello come nella foto allegata. 

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider. 

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello. 

Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo. 

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente. 

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. 

*/