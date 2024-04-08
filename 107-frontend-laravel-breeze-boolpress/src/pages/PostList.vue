<script>

import axios from 'axios';

import AppPost from '../components/AppPost.vue'

import {store} from '../store.js'

export default {
  name: 'PostList',
  components: {
    AppPost
  },    
  data() {
    return {
      arrayPosts: [],
      currentPage: '',
      lastPage: '',
      store
    }
  },
  methods: {
    getPosts(postApiPage) {

      axios.get(`${store.apiBaseUrl}/api/test`,

        {
          params: {
            page: postApiPage
          }
        }

      )
        .then(res => {
          console.log(res.data.posts.data)

          // this.arrayPosts = res.data.posts

          this.arrayPosts = res.data.posts.data
          this.currentPage = res.data.posts.current_page
          this.lastPage = res.data.posts.last_page
        })

    }
  },
  mounted() {
    this.getPosts(1)
  }
}
</script>

<template>

  <main class="container">
    <h2 class="text-center">Qui stamperò i posts:</h2>

    <div class="d-flex justify-content-center mt-5">
        <div>

            <!-- ciclare il componente appPost -->
            <AppPost
                v-for=" (element, index) in arrayPosts"
                :key="element.id"
                :title=" element.title "
                :content=" element.content "
                :slug=" element.slug "
                :category=" element.category ? element.category.name : '' "
                :tags="element.tags"
                :image="element.cover_image"/>

            <!-- <ul>
              <li v-for=" (element, index) in arrayPosts" :key="element.id">

                <router-link :to="{ name: 'single-post', params: {slug: element.slug} }">
                    {{ element.title }}
                </router-link>

              </li>
            </ul> -->
        
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item" :class=" { 'disabled': currentPage === 1 } ">
                  <button class="page-link" @click="getPosts( currentPage - 1 )">Previous</button>
                </li>
        
                <li class="page-item" v-for=" (element,index) in lastPage " :key="index">
                  <button class="page-link" @click="getPosts( element )">{{ element }}</button>
                </li>
        
                <li class="page-item" :class=" { 'disabled': currentPage === lastPage } " >
                  <button class="page-link" @click="getPosts( currentPage + 1 )">Next</button>
                </li>
              </ul>
            </nav>
        </div>
    </div>


  </main>

</template>

<style scoped>
ul li {
  text-align: left;
}
</style>
