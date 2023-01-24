import { createRouter, createWebHistory } from "vue-router";

import SingleProjectView from './views/SingleProjectView.vue'
import homeView from './views/HomeView.vue'
import NotFoundView from './views/NotFoundView.vue'
import ProjectsView from './views/ProjectsView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name: 'home',
            component: homeView
        },
        {
            path: '/home',
            name: 'home',
            component: homeView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
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