<script>
import AppHeader from './components/header/AppHeader.vue'
import CharactersList from './components/main/characters/CharactersList.vue'
import AppSearch from './components/main/AppSearch.vue'

import { store } from './store'
import axios from 'axios'

export default {
  components: {
    AppHeader,
    CharactersList,
    AppSearch
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCharacters() {

      store.loading = true
      // let myUrl = store.apiUrl
      store.apiUrl = 'https://rickandmortyapi.com/api/character'

      //condizione se si usa la ricerca
      if( store.searchText ){
        store.apiUrl += `?name=${store.searchText}`
        // 'https://rickandmortyapi.com/api/character?name=morty'
      }

      if( store.statusValue ){

        if( store.searchText ){
          store.apiUrl += `&status=${store.statusValue}`
          // 'https://rickandmortyapi.com/api/character?name=morty&status=alive'
        } else {
          store.apiUrl += `?status=${store.statusValue}`
          // 'https://rickandmortyapi.com/api/character?status=alive'
        }

      }


      axios
        .get(store.apiUrl)
        .then(res => {
          console.log(res.data)

          //inserisco gli oggetti dentro 'array'
          store.charactersList = res.data.results

          store.loading = false

        })
    }
  },
  mounted() {
    this.getCharacters()
  }
}
</script>

<template>
  <AppHeader />
  <main class="container text-center">
    <AppSearch @performSearch="getCharacters"/>
    <CharactersList />
  </main>
</template>

<style></style>
