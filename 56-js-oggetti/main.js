// const array = [1,2,3,4,5]

// console.log(array[1])

// const post = {
//     titolo: "titolo del post",
//     descrizione: "lorem ipsum breve",
//     testo: "lorem ipsum dolor malet....................",
//     numeroParole: 500,
//     linkImmagine: "htpps:immagine.com"
// }

// // console.log(  post.prorpietaOggetto = {
// //     test: "prova"
// // })

// console.log( post )

// const arrayPosts = [
//     {
//         titolo: "titolo del post 1",
//         descrizione: "lorem ipsum breve",
//         testo: "lorem ipsum dolor malet....................",
//         numeroParole: 500,
//         linkImmagine: "https://picsum.photos/200/300",
//         commenti: [
//             {
//                 titolo: "prmo commento",
//                 testo: "lorem ipsum"
//             },
//             {
//                 titolo: "prmo commento",
//                 testo: "voluto"
//             },
//             {
//                 titolo: "prmo commento",
//                 testo: "lorem ipsum"
//             },
//         ]
//     },
//     {
//         titolo: "titolo del post 2",
//         descrizione: "lorem ipsum breve",
//         testo: "lorem ipsum dolor malet....................",
//         numeroParole: 500,
//         linkImmagine: "https://picsum.photos/200/300",
//         commenti: [
//             {
//                 titolo: "prmo commento",
//                 testo: "lorem ipsum"
//             },
//             {
//                 titolo: "prmo commento",
//                 testo: "lorem ipsum"
//             },
//             {
//                 titolo: "prmo commento",
//                 testo: "lorem ipsum"
//             },
//         ]
//     },
//     {
//         titolo: "titolo del post 3",
//         descrizione: "lorem ipsum breve",
//         testo: "lorem ipsum dolor malet....................",
//         numeroParole: 500,
//         linkImmagine: "https://picsum.photos/200/300",
//         commenti: [
//             {
//                 titolo: "prmo commento",
//                 testo: "lorem ipsum"
//             },
//             {
//                 titolo: "prmo commento",
//                 testo: "lorem ipsum"
//             },
//             {
//                 titolo: "prmo commento",
//                 testo: "lorem ipsum"
//             },
//         ]
//     },
//     {
//         titolo: "titolo del post 4",
//         descrizione: "lorem ipsum breve",
//         testo: "lorem ipsum dolor malet....................",
//         numeroParole: 500,
//         linkImmagine: "https://picsum.photos/200/300",
//         commenti: [
//             {
//                 titolo: "prmo commento",
//                 testo: "lorem ipsum"
//             },
//             {
//                 titolo: "prmo commento",
//                 testo: "lorem ipsum"
//             },
//             {
//                 titolo: "prmo commento",
//                 testo: "lorem ipsum"
//             },
//         ]
//     }
// ]

// console.log( arrayPosts[0].commenti[1].testo )

// for( let i = 0; i < arrayPosts.length; i++ ){
//     let elemento = arrayPosts[i]

//     console.log( elemento )
//     console.log( elemento.titolo )

//     document.querySelector("main .row").innerHTML += `
//         <div class="card col">
//                 <img class="card-img-top" src='${elemento.linkImmagine}' alt="Title" />
//                 <div class="card-body">
//                     <h4 class="card-title">
//                     ${elemento.titolo}
//                     </h4>
//                     <p class="card-text">
//                     ${elemento.descrizione}
//                     </p>
//                 </div>
//             </div>

//         `

// }


// let utenti = [
//     {
//       id: 1,
//       nome: "John Doe",
//       cognome: "Doe",
//       email: "johndoe@example.com",
//     },
//     {
//       id: 2,
//       nome: "Jane Doe",
//       cognome: "Doe",
//       email: "janedoe@example.com",
//     },
// ];

// // utenti = utenti[0].colore = "rosso"

// console.log( utenti[0].colore = "rosso" )
// console.log( utenti[0] )

// delete utenti[0]["nome"]

// console.log(utenti)





































// definiamo un array di oggetti:
// - ogni elemento dell'array è un oggetto che rappresenta una classe
// - ogni classe ha le proprietà nome e numeroStudenti

const classi = [{
        nome: 'Classe#1',
        numeroStudenti: 10,
    },
    {
        nome: 'Classe#2',
        numeroStudenti: 12,
    },
];

console.log(classi)

// creiamo un oggetto che rappresenta una nuova classe
const nuovaCLasse = {
    nome: 'Classe#3',
    numeroStudenti: 30,
}

// aggiungiamo la nuova classe all'array iniziale
classi.push(nuovaCLasse)
classi.push({
    nome: 'Classe#4',
    numeroStudenti: 20,
})

console.log(classi)


//for in
const palla = {
    prezzo: 12,
    tipo: "pallina da golf",
    proprietaOggetto: {
        "nome": "pippo",
        "cognome": "pluto"
    }
};


for (let key in palla) {
    //stampa tutti i valori delle chiavi
    console.log(palla[key]);

    //stampa tutte le chiavi
    console.log(key);

    //controllo se è presente una chiave specifica
    if (key === "tipo") {
        //se si aggiungo una nuova chiave e valore all'oggetto
        palla.colore = "blue"
    }

}

console.log(palla)

// Risultato atteso: 
// 12
// pallina da golf
// non per forza in questo ordine





































//classe javascript
class Animale {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    cammina() {
        console.log(`${this.nome} sta camminando`);
    }
}

class Cane extends Animale {
    constructor(nome, tipo, razza) {
        super(nome, tipo);
        this.razza = razza;
    }

    abbaia() {
        console.log(`${this.nome} sta abbaiando`);
    }
}

const mioCane = new Cane("Fido", "Cane", "Labrador");

mioCane.cammina();
mioCane.abbaia();




/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.

*/