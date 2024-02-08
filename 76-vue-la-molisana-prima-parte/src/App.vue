<script>

import AppHeader from './components/AppHeader.vue'
import ListProducts from './components/ListProducts.vue'
import AppFooter from './components/AppFooter.vue'

export default{
  components: {
    AppHeader,
    ListProducts,
    AppFooter
  }
}

</script>

<template>
  <AppHeader/>

  <main>
    <ListProducts/>
  </main>

  <AppFooter/>

</template>

<style lang="scss">

@use './styles/general.scss';

main{
  text-align: center;
}

</style>
