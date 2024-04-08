<script>

import {store} from '../store.js'

export default {
    name: 'AppPost',
    props: ['title', 'content', 'slug', 'category', 'tags', 'image'],
    components: {

    },
    data() {
        return {
            store
        }
    },
    methods: {

    },
    mounted() {
    }
}

</script>

<template>

    <router-link :to="{ name: 'single-post', params: { slug: slug } }">
        <div class="card mb-5">
            <img class="card-img-top" :src=' `${store.apiBaseUrl}/storage/${image}` ' alt="Title" />
            <div class="card-body">
                <h4 class="card-title">{{ title }}</h4>
                <p class="card-text">
                    {{ content }}
                </p>
                <p>
                    Category: {{ category }}
                </p>
                <p>
                  <span class="me-3 btn btn-primary" v-for="(element, index) in tags" :key="index">
                    {{ element.name }}
                  </span>  
                </p>
            </div>
        </div>
    </router-link>

</template>

<style scoped></style>
