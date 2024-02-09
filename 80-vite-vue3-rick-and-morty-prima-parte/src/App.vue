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
    <AppSearch />
    <CharactersList />
  </main>
</template>

<style></style>
