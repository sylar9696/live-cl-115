<script>

import AppHeader from './components/AppHeader.vue'
import ListProducts from './components/ListProducts.vue'
import AppFooter from './components/AppFooter.vue'
import SimpleButton from './components/SimpleButton.vue'

export default{
  components: {
    AppHeader,
    ListProducts,
    AppFooter,
    SimpleButton
  }
}

</script>

<template>

  <SimpleButton
    :propsCustomText=" 'ciao dal props' "
  />
  <SimpleButton
    :propsCustomText=" 'ciao dal props 2' "
  />
  <SimpleButton
    :propsCustomText=" 'ciao dal props 3' "
  />

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
