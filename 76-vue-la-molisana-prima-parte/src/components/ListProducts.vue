<script>
    export default{
        name: 'ListProducts'
    }
</script>

<template>
    <div class="background-img">
        <h2>--Lista prodotti--</h2>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
.background-img{
    background-image: url('../assets/img/fondo-pag-speciali.jpg');
    @include background-cover;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    padding: 30px 0;
}

</style>