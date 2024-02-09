<template>
    <div class="col-3">
        <figure>
            <img :src="propsSrc" :alt="propsTitolo">
        </figure>
        <h4>{{ propsTitolo }}</h4>
    </div>
</template>

<script>
export default {
    name: "SingleProduct",
    props: {
        propsSrc: String,
        propsTitolo: String
    }
}
</script>

<style scoped lang="scss">
    .col-3{
        flex-basis: calc( 100% / 4 - 20px );
        background-color: #fff;
        padding: 30px;

        figure{
            img{
                width: 100%;
                display: block;
            }
        }

        h4{
            color: #405680;
        }
    }

</style>