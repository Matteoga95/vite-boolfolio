<script>
export default {
    name: "ProjectCard",
    props: {
        project_title: String,
        body: String,
        image: String
    }
}
</script>

<template>

    <div class="container">
        <h1>Single Project</h1>
        <img class="card-image" src="image" alt="">

        <h4>{{ project_title }}</h4>
        <p>
            {{ body }}
        </p>

    </div>


</template>


<style lang="scss">
.serieCard {
    color: white;
}
</style>