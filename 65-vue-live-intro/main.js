/*
Predisponiamo due input, in cui inseriremo Nome e Cognome.
In un paragrafo utilizzare Nome e Cognome per salutare l’utente
*/

const { createApp } = Vue
 
  createApp({
    data() {
      return {
        nomeData: '',
        cognomeData: ''
      }
    },
    methods: {
        funzioneComparsa(){
            // if(this.nomeData && this.cognomeData){

            //     return `ciao ${this.nomeData} ${this.cognomeData}`

            // }

            return (this.nomeData && this.cognomeData) ? `ciao ${this.nomeData} ${this.cognomeData}` : ''
        }
    }
  }).mount('#app')

// function nomeFUnzione(){

// }

// const nomeFUnzione = () => {

// }