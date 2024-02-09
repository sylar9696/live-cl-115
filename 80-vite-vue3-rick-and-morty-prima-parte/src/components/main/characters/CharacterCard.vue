<template>
    <div class="col-4 mt-5">
        <figure>
            <img class="rounded-circle" :src="propsElement.image" alt="">
        </figure>
        <h3>{{ propsElement.name }}</h3>
        <h5>{{ propsElement.species }}</h5>
        <h5>
            {{ propsElement.status }}
        </h5>
    </div>
</template>

<script>
export default {
    name: "CharacterCard",
    props: [
        'propsElement'
    ],
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped></style>