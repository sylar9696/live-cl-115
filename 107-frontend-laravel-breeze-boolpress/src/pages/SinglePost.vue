<script>

import axios from 'axios'

import {store} from '../store.js'

export default {
    name: 'SinglePost',
    components: {

    },
    data() {
        return {
            post: [],
            store
        }
    },
    methods: {
        getSinglePost() {

            axios.get(`${store.apiBaseUrl}/api/test/${this.$route.params.slug}`)
                .then(res => {
                    console.log(res)
                    if (res.data.success) {
                        this.post = res.data.post
                    } else {
                        //Redirect alla pagina 404
                        this.$router.push({ name: 'not-found' })
                    }
                })

        }
    },
    mounted() {
        this.getSinglePost()
    }
}

</script>

<template>
    <h1>{{ post?.title }}</h1>

    <img class="card-img-top" :src="`${store.apiBaseUrl}/storage/${post.cover_image}`" alt="Title" />
    <div class="card-body">
        <h4 class="card-title">{{ post?.title }}</h4>
        <p class="card-text">
            {{ post?.content }}
        </p>
        <p>
            Category: {{ post.category?.name }}
        </p>
        <p>
            Tags:
            <span class="me-3 btn btn-primary" v-for="(element, index) in post?.tags" :key="index">
                {{ element?.name }}
            </span>
        </p>
    </div>
</template>

<style scoped></style>
