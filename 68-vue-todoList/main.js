const {
    createApp
} = Vue

createApp({
    data() {
        return {
            newTask: '',
            tasks: [
                'fare i compiti',
                'fare la spesa',
                'pulire casa'
            ]
        }
    },
    created() {

    },
    methods: {
        addTask() {

            if( this.newTask !== '' ){
                this.tasks.unshift( this.newTask )
            }

            this.newTask = ''
        },
        removeTask(index){
            this.tasks.splice( index, 1 )
        }
    }
}).mount('#app')