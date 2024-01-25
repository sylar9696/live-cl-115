/*
Creiamo una pagina con all’interno un titolo di colore rosso.
Al click di un bottone il titolo diventerà blu.
*/

const { createApp } = Vue
 
  createApp({
    data() {
      return {
        btnClicked: false
      }
    },
    methods: {
        changeColor(){
          if( !this.btnClicked ){
            this.btnClicked = true
          } else {
            this.btnClicked = false
          }
        }
    }
  }).mount('#app')
