<script>

export default {
    name: "AppHeader",
    data() {
        return {
            ArrayLinksMenu: [
                {
                    nome: 'Home',
                    link: '#',
                    current: false
                },
                {
                    nome: 'Prodotti',
                    link: '#',
                    current: true
                },
                {
                    nome: 'Chi siamo',
                    link: '#',
                    current: false
                },
                {
                    nome: 'Contatti',
                    link: '#',
                    current: false
                }
            ]
        }
    }
}

</script>

<template>
    <header>
        <figure>
            <img src="../assets/img/la-molisana-logo.png" alt="Logo" width="180">
        </figure>

        <nav>
            <ul>
                <li :class=" element.current ? 'active' : '' " v-for=" (element, index) in ArrayLinksMenu " :key="index">
                    <a :href="element.link">{{ element.nome }}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {

    figure {
        display: flex;
        justify-content: center;
    }

    ul{
        display: flex;
        gap: 15px;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        
        li{
            padding: 10px;
            &:hover{
                background-color: #DEE9F9;
            }
        }
    }
}


</style>
