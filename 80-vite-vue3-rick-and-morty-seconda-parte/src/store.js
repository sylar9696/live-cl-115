import { reactive } from 'vue'

export const store = reactive({

    loading: true,
    charactersList: [],

    
    apiUrl: 'https://rickandmortyapi.com/api/character',
    searchText: "",
    statusValue: ''
    
});