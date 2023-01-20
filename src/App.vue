<script>

import axios from 'axios';
import projectCard from "./components/ProjectCard.vue"

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

    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="{{url('/')}}">Navbar</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
            aria-controls="collapsiblemainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-collapse-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="{{url('/')}}" aria-current="page">Home <span
                            class="visually-hidden">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>

            </ul>

        </div>
    </nav>


    <section class="vue-home">
        <div class="container">
            <h1>Projects</h1>

            <div class="row row-cols-1 row-cols-sm-3  g-4">
                <div class="col" v-for="project in projects">

                    <projectCard v-for="projectCard in projects.data " :image="getImagePath(null)"
                        :project_title="projectCard.project_title" :body="trimBody(projectCard.body)"></projectCard>

                    <!-- <div class="card border-0 shadow-sm rounded-0">
                        <img class="card-image" :src="" alt="">
                        <div class="card-body">
                            <h4>{{ project.project_title }}</h4>
                            <p>
                                {{ trimBody(project.body) }}
                            </p>
                        </div>
                    </div> -->
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
@use './styles/general.scss';
</style>
