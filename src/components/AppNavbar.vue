
<script>

export default {
    name: "AppNavbar"

}
</script>

<template>
    <header>
        <nav class="container-new d-flex justify-content-center flex-wrap">
            <a href="#" class="logo">Portf<span>olio.</span></a>
            <div class="links d-flex justify-content-between">
                <ul class="d-flex justify-content-center w-100">
                    <li>
                        <RouterLink class="nav-link" :to="{ name: 'home' }">
                            Home
                        </RouterLink>

                    </li>
                    <li>
                        <RouterLink class="nav-link" :to="{ name: 'home' }">
                            About
                        </RouterLink>
                    </li>

                    <li>
                        <RouterLink class="nav-link" :to="{ name: 'projects' }">
                            Portfolio
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-link" :to="{ name: 'home' }">
                            Contacts
                        </RouterLink>
                    </li>

                </ul>
                <font-awesome-icon icon="fa-solid fa-moon" />
            </div>
        </nav>

    </header>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss";

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
}

.links {
    flex: 1;
}

.logo {
    margin-right: 1.5rem;
    height: 120px;
    line-height: 120px;
    font-family: "Abril Fatface", cursive;
    font-size: 1.5rem;
    color: $heading-color;
    letter-spacing: 1px;
}
</style>