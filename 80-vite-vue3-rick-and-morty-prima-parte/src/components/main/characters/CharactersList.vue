<template>
    <div class="row">
        
        <div v-if=" (store.loading) " class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <CharacterCard v-for="(element, index) in store.charactersList" :key="index" :propsElement="element" />
    </div>
</template>

<script>
import CharacterCard from './CharacterCard.vue'
import { store } from '../../../store'

export default {
    name: "CharactersList",
    components: {
        CharacterCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>