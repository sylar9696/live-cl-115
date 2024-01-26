/*
Stampiamo i numeri da 1 a 100 tramite la direttiva v-for
*/

const { createApp } = Vue
 
  createApp({
    data() {
      return {
        numeriReverse: [100, 99, 98],
        x: 100,
       nome: 'marco',
       cognome: 'rossi',
       numeroMax: 100,
       arrayNomi: ['alex', 'pippo','pluto'],
       classiCustom1: "text-danger",
       classiCustom2: "text-uppercase",
        A0: 1,
        A1: 2,
        movie: {
          images: [],
          title: 'The Mandalorian',
          category: 'Action',
          length: '120',
        }
      }
    },
    methods: {
        riassegna(){
         A0 = 3
         return A0
        },
        test(){
          console.log( this )
        }
    }
  }).mount('#app')
