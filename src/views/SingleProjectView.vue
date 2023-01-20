<script>
import axios from 'axios';

export default {
    name: "ProjectCard",
    data() {
        return {
            project: null,
            laoding: true,
            base_api_url: 'http://localhost:8001'
        }
    },
    mounted() {
        const url = this.base_api_url + '/api/projects/' + this.$route.params.slug

        axios
            .get(url)
            .then(response => {
                if (response.data.success) {
                    this.projects = response.data.data;
                    this.loading = false
                } else {
                    //implementazione del 404

                }
                console.log(response.data.data);


            })
            .catch(error => {
                console.error(error)
                this.error = error.message
                this.loading = false
            })
    }
}
</script>

<template>

    <div class="container">
        <h1>Single Project</h1>
        <img class="img-fluid" src="../assets/img/500 placeholder.png" alt="">
        <h1>{{ project.project_title }}</h1>

        <div class="content">
            {{ project.body }}
        </div>
    </div>


</template>


<style lang="scss">

</style>