<template>
    <button>{{ propsCustomText }}</button>

</template>

<script>
export default{
    name: "Simplebutton",
    props: {
        propsCustomText: String
    }
}
</script>

<style scoped lang="scss">
button{
    font-size: 30px;
}
</style>