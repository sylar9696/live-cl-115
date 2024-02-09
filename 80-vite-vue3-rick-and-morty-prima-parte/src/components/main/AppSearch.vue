<template>
    <div class="d-flex align-items-end gap-4">
        <div class="text-start w-50">
            <label for="character" class="form-label">Ricerca Personaggi</label>
            <input
                type="text"
                class="form-control"
                name="character"
                id="character"
                placeholder="Scrivi nome personaggio"
                v-model="store.searchText"
            />
        </div>
        <div>
            <button class="btn btn-primary">Cerca</button>
        </div>
    </div>
</template>

<script>

import {store} from '../../store'

export default {
    name:"AppSearch",
    data () {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>