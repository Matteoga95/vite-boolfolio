<script>

import axios from 'axios';
import projectCard from "../components/ProjectCard.vue"

export default {
    components: {
        projectCard
    },
    data() {
        return {
            projects: null,
            base_api_url: 'http://localhost:8001',
            loading: true,
            error: null,
            max: 100
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.data);
                    this.projects = response.data.data;
                    this.loading = false

                })
                .catch(error => {
                    console.error(error)
                    this.error = error.message
                    this.loading = false
                })
        },
        getImagePath(path) {
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return '/img/500 placeholder.gif'
        },
        /**
         * 
         * @param {string} text 
         */
        trimBody(text) {

            if (text != null) {
                if (text.length > this.max) {
                    return text.slice(0, this.max) + '...'
                } else {
                    return text
                }
            }

            return ""

        }
    },
    mounted() {
        this.getProjects(this.base_api_url + '/api/projects');
    }
}
</script>

<template>

    <section class="vue-home">
        <div class="container">
            <h1>Projects</h1>

            <div class="row row-cols-1 row-cols-sm-3  g-4">
                <div class="col" v-for="project in projects">

                    <projectCard v-for="projectCard in projects.data " :image="getImagePath(null)"
                        :project_title="projectCard.project_title" :body="trimBody(projectCard.body)"></projectCard>

                </div>

            </div>
            <div class="row">
                <div class="col-12 d-flex flex-column justify-content-center align-items-center vh-100">

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

</style>
