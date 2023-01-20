<script>
import { RouterLink } from 'vue-router';

export default {
    name: "ProjectCard",
    props: {
        project_title: String,
        body: String,
        image: String,
        slug: String
    },
    components: { RouterLink }
}
</script>

<template>

    <div class="card border-0 shadow-sm rounded-0">
        <img class="card-image" src="image" alt="">
        <div class="card-body">
            <h4>{{ project_title }}</h4>
            <p>
                {{ body }}
            </p>
            <RouterLink class="link" :to="{ name: 'singleProject', params: { slug: slug } }" aria-current="page">
                Read More
            </RouterLink>
        </div>
    </div>


</template>


<style lang="scss">
.serieCard {
    color: white;
}
</style>