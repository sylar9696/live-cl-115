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
            <div class="">
                <label for="" class="form-label">Status</label>
                <select
                    class="form-select form-select-lg"
                    name=""
                    id=""
                    v-model="store.statusValue"
                >
                    <option :value="element" v-for="(element, index) in characterStatusValue" :key="index">{{ element }}</option>
                </select>
            </div>
            
        </div>
        <div>
            <button
                class="btn btn-primary"
                @click.prevent="$emit('performSearch')"
            >Cerca</button>
        </div>
    </div>
</template>

<script>

import {store} from '../../store'

export default {
    name:"AppSearch",
    data () {
        return {
            store,
            characterStatusValue: [
                'alive',
                'dead',
                'unknown'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>