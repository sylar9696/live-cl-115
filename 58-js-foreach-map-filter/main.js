	
const numeri = [1, 2, 3, 4, 5];

let nuovoArray = []
//salvare in un nuovo array il quadrato di ogni numero
for( let i = 0; i < numeri.length; i++ ){
    nuovoArray.push(numeri[i]** 2)
}

console.log( nuovoArray )


const quadrati = numeri.map( (element) => element * element );

console.log(quadrati); // [1, 4, 9, 16, 25]


const pari = numeri.filter( (element) => {

  if(element % 2 === 0) {
    return true;
  }
  
  return false;
});


const pari2 = numeri.filter( (element) => element % 2 === 0 ? true : false)

    // if(element % 2 === 0) {
    //   return true;
    // }
    
    // return false;


console.log(pari); // [2, 4]

let age = "ciao"

let message =
  age >= 18 ? 'You are an adult' :
  age >= 13 ? 'You are a teenager' :
  age >= 3 ? 'You are a child' :
  'You are a toddler';

console.log( message )