<script>

import appNavbar from "./components/AppNavbar.vue"


export default {
    components: {
        appNavbar
    },
}
</script>

<template>


    <appNavbar></appNavbar>
    <RouterView></RouterView>

</template>

<style lang="scss">
@use './styles/general.scss';
</style>
