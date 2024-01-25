const { createApp } = Vue
 
  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        numero: 23,
        classeCustom: 'text-danger',
        items: [
            {
                text: 'lorem ipsum'
            },
            {
                text: 'lorem ipsum 2'
            },
            {
                text: 'lorem ipsum 3'
            },
            {
                text: 'lorem ipsum 4'
            }
        ]
      }
    },
    methods: {
        nomeFunzione: function(){
            // let message = 'pippo'
            return this.message
        },
        aumentaNumero: function(){
            this.numero++
        }
    }
  }).mount('#app')