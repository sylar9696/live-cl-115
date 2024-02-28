const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Ciao Mondo',
            apiUrl: 'server.php',
            todoList: [],
            todoItem: ''
        }
    },
    mounted() {
        this.readList()
    },
    methods: {
        readList() {
            axios.get(this.apiUrl)
                .then((response) => {
                    console.log(response.data)
                    this.todoList = response.data
                    // console.log(  )
                })
        },
        updateList() {

            const data = {
                todoItem: this.todoItem
            }

            //http://localhost:8888?todoitem=css

            axios.post(
                this.apiUrl,
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    console.log(response.data)
                    this.todoList = response.data
                })
        }
    }
}).mount('#app')