import { createRouter, createWebHistory } from "vue-router";

import SingleProjectView from './views/SingleProjectView.vue'
import homeView from './views/homeView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: homeView
        },
        {
            path: '/projects/:slug',
            name: 'singleProject',
            component: SingleProjectView
        }
    ]
})

export { router }