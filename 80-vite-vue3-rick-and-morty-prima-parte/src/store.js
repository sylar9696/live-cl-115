import { reactive } from 'vue'

export const store = reactive({

    searchText: "",
    loading: true,
    charactersList: [],
    apiUrl: 'https://rickandmortyapi.com/api/character'
    
});