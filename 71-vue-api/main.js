/*Tramite una chiamata ad una API, stampiamo a schermo un numero casuale. */

/*
Tramite due chiamate axios, generiamo 2 numeri casuali: uno per l'utente e uno per il pc. 
Stampiamo in pagina i due numeri e il vincitore, ossia chi ha il numero più grande.
*/

const {
    createApp
} = Vue
createApp({
    data() {
        return {
            numeroUtente: 0,
            numeroPc: 0,
            vincitore: '',
            nomePokemon: ''
        }

    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/int')
            .then((result) => {

                console.log(result.data)

                this.numeroUtente = result.data.response

            })

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/int')
            .then((result) => {

                console.log(result.data)

                this.numeroPc = result.data.response

            })


    },
    methods: {
        cercaPokemon(){
            if( this.nomePokemon != '' ){
                axios
                .get(`https://pokeapi.co/api/v2/pokemon/${this.nomePokemon}`)
                .then((result) => {
    
                    console.log(result.data)
    
                })
            } else {
                alert("devi compilare l'input")
            }
        },
        // generaNumeroRandomUtente() {
        //     axios.get('https://flynn.boolean.careers/exercises/api/random/int').then((result) => {

        //         console.log(result.data)

        //         this.numeroUtente = result.data.response

        //     })
        // },
        // generaNumeroRandomPc() {
        //     axios.get('https://flynn.boolean.careers/exercises/api/random/int').then((result) => {

        //         console.log(result.data)

        //         this.numeroPc = result.data.response

        //     })
        // },
        gioca() {

            if (this.numeroUtente > this.numeroPc) {
                this.vincitore = 'Utente'
            } else if (this.numeroUtente < this.numeroPc) {
                this.vincitore = 'Pc'
            } else {
                this.vincitore = 'Nessuno è un pareggio'
            }
        }
    }
},).mount('#app')












/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/