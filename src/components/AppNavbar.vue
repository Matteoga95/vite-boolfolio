
<script>

export default {
    name: "AppNavbar"

}
</script>

<template>





    <nav class="navbar navbar-expand-lg bg-light ">
        <div class="container-fluid  d-flex">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">

                        <RouterLink class="nav-link" :to="{ name: 'home' }">
                            Home
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'home' }">
                            About
                        </RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'projects' }">
                            Projects
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'home' }">
                            Contacts
                        </RouterLink>
                    </li>

                </ul>

            </div>
        </div>
    </nav>



</template>


<style lang="scss">
.nav-item {
    text-decoration: none;
    margin: 0 10px;
}
</style>