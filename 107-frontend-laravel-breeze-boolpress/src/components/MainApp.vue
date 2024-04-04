<script>

import axios from 'axios';

export default {
  name: 'MainApp',
  data() {
    return {
      arrayPosts: [],
      currentPage: '',
      lastPage: ''
    }
  },
  methods: {
    getPosts(postApiPage) {

      axios.get('http://127.0.0.1:8000/api/test',

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

  <main>
    <h2>Qui stamperò i posts:</h2>

    <ul>
      <li v-for=" (element, index) in arrayPosts" :key="element.id">
        <a href="#">
          {{ element.title }}
        </a>
      </li>
    </ul>

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

  </main>

</template>

<style scoped>
ul li {
  text-align: left;
}
</style>
