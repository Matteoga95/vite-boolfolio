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

    <div class="card border-0 shadow-sm rounded-0">
        <img class="card-image" src="image" alt="">
        <div class="card-body">
            <h4>{{ project_title }}</h4>
            <p>
                {{ body }}
            </p>
        </div>
    </div>


</template>


<style lang="scss">
.serieCard {
    color: white;
}
</style>