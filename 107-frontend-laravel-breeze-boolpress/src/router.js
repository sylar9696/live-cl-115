import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue'
import PostList from './pages/PostList.vue'
import SinglePost from './pages/SinglePost.vue'
import NotFound from './pages/NotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/blog',
            name: 'blog',
            component: PostList
        },
        {
            path: '/blog/:slug',
            name: 'single-post',
            component: SinglePost
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
        }
    ]
});


export { router };