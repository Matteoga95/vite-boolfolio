import { createRouter, createWebHistory } from "vue-router";

import SingleProjectView from './views/SingleProjectView.vue'
import homeView from './views/homeView.vue'
import NotFoundView from './views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/home',
            name: 'home',
            component: homeView
        },
        {
            path: '/projects/:slug',
            name: 'singleProject',
            component: SingleProjectView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFoundView
        }
    ]
})

export { router }