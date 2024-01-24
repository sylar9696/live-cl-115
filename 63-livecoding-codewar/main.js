// CodeWar: Javascript filter - 2 = https://www.codewars.com/kata/5262fa26875ed24a3e000029
// Usiamo il Filter
// Kyu: 7

// Creare un array di oggetti con chiavi: cliente e piano
// dato che i piani dell'hotel sono 3 creare una funzione che resistuisca tutte le persone che abitano nel piano richiesto 

// esempio:
// function roomMates( rooms, 1 ) should return ["Jill", "Jackson", "Jan", "Eve", "John"]

const hotels = [{
        name: 'John Doe',
        floor: 1
    },
    {
        name: 'Jane Smith',
        floor: 2
    },
    {
        name: 'David Johnson',
        floor: 3
    },
    {
        name: 'Emily Brown',
        floor: 1
    },
    {
        name: 'Michael Davis',
        floor: 2
    },
    {
        name: 'Sophia Wilson',
        floor: 3
    },
    {
        name: 'William Taylor',
        floor: 1
    },
    {
        name: 'Olivia Miller',
        floor: 2
    },
    {
        name: 'James Anderson',
        floor: 3
    },
    {
        name: 'Emma White',
        floor: 1
    },
    {
        name: 'Daniel Martin',
        floor: 2
    },
    {
        name: 'Ava Garcia',
        floor: 3
    },
    {
        name: 'Liam Martinez',
        floor: 1
    },
    {
        name: 'Mia Robinson',
        floor: 2
    },
    {
        name: 'Benjamin Lee',
        floor: 3
    },
];

function roomMates( array, floor) {

    return array.filter( element => floor === element.floor )

}

const chiAbitaAlPIano3 =  roomMates( hotels, 3 )

console.log( chiAbitaAlPIano3 )

//Jaden Casing Strings: https://www.codewars.com/kata/5390bac347d09b7da40006f6
// Kyu: 7

//creare una funzione chiamata "Jaden-Cased" per ottenere da una stringa data tutte le volte le singole parole con la prima lettera in maiuscolo

// Esempio:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


// let capitalizedParts = [];


// function jsCapitalize(sentence) {

//     let parts = sentence.split(' ');

//     parts.forEach(element => {

//         let firstLetter = element.charAt(0).toUpperCase();
//         let otherLetters = element.substring(1);
//         capitalizedParts.push(`${firstLetter}${otherLetters}`)
//     });

//     return capitalizedParts.join(' ')

//     console.log(parts)
//     console.log(capitalizedParts)

// }

// console.log( jsCapitalize('lorem ipsum') )


function JadenCased(string) {
    let arrayFromString = string.split(" ")
    let capitalizedArray = arrayFromString.map(string => string[0].toUpperCase() + string.slice(1))
    return capitalizedArray.join(" ")
}

console.log( JadenCased('lorem ipsum dolor malet') )

//Build Tower: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript
// Kyu 6

//Costruisci una torre a forma di piramide, come una matrice/lista di stringhe, dato un numero intero positivo . Un palazzone è rappresentato con carattere.number of floors"*"

// Ad esempio, una torre con piani ha il seguente aspetto:3
// [
//     "  *  ",
//     " *** ", 
//     "*****"
// ]

function creaTorre( floors ){
    if( floors < 1 ){
        console.log( "c'è un errore inserisci un numero maggiore di 1" )
    }

    const tower = []

    for( let i = 0; i <= floors; i++ ){
        const row = new Array(i)

        for( let j = 0; j < i; j++ ){
            row[j] = '*'
        }

        tower.push( '' + row.join(' ') )

    }

    return tower;
}

const tower3 = creaTorre( 3 )

console.log( tower3 )