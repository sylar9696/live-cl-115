/*
numeri random:
generare 10 numeri random (con un for o con un while) attraverso una funzione (copiamola da w3schools) e stamparli a schermo
*/

// numero random da 1 a 10
//Math.floor(Math.random() * 10) + 1;



for( let i = 0; i < 10; i++ ){
    document.writeln( `<p>${ randomica(100) }</p>` )
}

function randomica(max){
    return Math.floor(Math.random() * max) + 1
}

/*
pari o dispari:
scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari
*/



// function pariOdispari( n ){
//     if( n % 2 == 0 ){
//         document.writeln( `Il  numero random generato: ${n} è pari` )
//     } else{
//         document.writeln( `Il  numero random generato: ${n} è dispari` )
//     }
// }













function pariOdispari( n ){

    let risultato
    if( n % 2 == 0 ){
        return risultato = `${n} è pari`
    } else{
        return risultato = `${n} è dispari`
    }  
}

console.log( `Il  numero random generato: ${pariOdispari( randomica(100) )}`  )


/*
Funzione per calcolare la somma di due numeri
*/

function sommaDueNumeri(num1, num2){
    let somma = num1 + num2

    // console.log( somma )

    return somma

    // return num1 + num2

    // console.log( num1 + num2 )
}

console.log( `La somma dei due numeri è: ${ pariOdispari(sommaDueNumeri( randomica(50), randomica(100) )) }` )

/*
 Funzione per convertire una parola in maiuscolo
*/

// parola.toUppercase()

function parolaMaiuscola(parola){
    return parola.toUpperCase()
}

console.log( parolaMaiuscola( 'ciao' ) )

/*
 rendere la prima lettera di una parola maiuscola
*/

/*
def somma(a, b):
  return a + b

print(somma(1, 2))


in php 

function somma($a,$b) {
  return $a + $b;
}

*/


/*
 Funzione per convertire una parola in maiuscolo
*/

function toCapitalized(parola){
    let parolaArray = Array.from(parola)

    parolaArray[0] = parolaArray[0].toUpperCase()

    console.log( parolaArray )

    
    // let parolaArray = parola.split('')

    let parolaRiunita = ''

    parolaRiunita = parolaArray.join('')

    // for(let i = 0; i < parolaArray.length; i++){

    //     parolaRiunita += parolaArray[i]

    // }

    console.log( parolaRiunita )

}

toCapitalized('ciao')























/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari
poi inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/