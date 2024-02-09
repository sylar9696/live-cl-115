<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer>
        <div>
            <img src="../assets/img/la-molisana-logo.png" alt="Logo Footer">
            <div>
                <nav>
                    <div>
                        <h4>pastificio</h4>
                        <ul>
                            <li><a href="#">Il Pastificio</a></li>
                            <li><a href="#">Grano</a></li>
                            <li><a href="#">Filiera</a></li>
                            <li><a href="#">100 anni di pasta</a></li>
                            <li><a href="#">Sartoria della pasta</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>prodotti</h4>
                        <ul>
                            <li><a href="#">Le classiche</a></li>
                            <li><a href="#">Le Integrali</a></li>
                            <li><a href="#">Le Speciali</a></li>
                            <li><a href="#">Le Biologiche</a></li>
                            <li><a href="#">Le Gluten-free</a></li>
                        </ul>
                    </div>

                </nav>
            </div>
        </div>
        <div class="bg-footer"></div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

footer {

    padding: 30px 0 300px;

    > div:first-child {
        margin: 0 auto;
        width: 80%;
        display: flex;
        align-items: center;
        gap: 20px;

        nav {
            display: flex;
            align-items: center;
    
            h4 {
                text-transform: uppercase;
                color: $footerLists;
            }
        }
    }

    .bg-footer{
        background-image: url('../assets/img/footer-montagne-bottom.jpg');
        @include background-cover;
        min-height: 200px;
    }

}
</style>