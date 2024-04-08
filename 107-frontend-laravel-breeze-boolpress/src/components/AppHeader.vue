<script>
import { RouterLink } from 'vue-router';


export default {
    name: 'AppHeader',
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
    }
}

</script>

<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Boolpress</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">

                        <!-- Router-link -->
                        <router-link :to="{ name: 'home' }" class="nav-link">
                            Home
                        </router-link>



                    </li>
                    <li>
                        <router-link :to="{ name: 'blog' }" class="nav-link">
                            blog
                        </router-link>
                    </li>

                </ul>

            </div>
        </div>
    </nav>

</template>

<style scoped></style>
