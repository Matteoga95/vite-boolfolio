
<script>

export default {
    name: "AppNavbar",
    data() {
        return {
            header: '#header'
        }
    }

}

function stickyNavbar() {


    this.header.classList.toggle("scrolled", window.pageYOffset > 0)
    console.log(this.header.classList);
}

window.addEventListener("scroll", stickyNavbar)

</script>

<template>
    <header id="header">
        <nav class="container-new d-flex justify-content-center flex-wrap">
            <a href="#" class="logo">Portf<span>olio.</span></a>
            <div class="links d-flex justify-content-between align-items-center">
                <ul class="d-flex justify-content-start align-items-center w-100">
                    <li>
                        <RouterLink class="navb-link" :to="{ name: 'home' }">
                            Home
                        </RouterLink>

                    </li>
                    <li>
                        <RouterLink class="navb-link" :to="{ name: 'home' }">
                            About
                        </RouterLink>
                    </li>

                    <li>
                        <RouterLink class="navb-link" :to="{ name: 'projects' }">
                            Portfolio
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="navb-link" :to="{ name: 'home' }">
                            Contacts
                        </RouterLink>
                    </li>

                </ul>
                <div class="toggle-button d-flex align-items-center justify-content-center">
                    <font-awesome-icon icon="fa-regular fa-moon " />
                </div>

            </div>
        </nav>

    </header>
</template>


<style lang="scss" scoped>
@import "../styles/general.scss";

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    transition: 0.3s;


    .logo {
        height: 120px;
        line-height: 120px;
    }



}

.scrolled {
    background-color: $bg-color-transparent;
    box-shadow: 0 5px 20px 0.1px rgba(0, 0, 0, 0.1);

    .logo {
        height: 80px;
        line-height: 80px;
    }
}

.links {
    flex: 1;
}

.navb-link {
    display: inline-block;
    position: relative;
    margin: 0 1rem;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    color: $text-color;
    font-weight: 500;
    opacity: 0.9;
    transition: 0.3s;
}

.navb-link:hover {
    color: $heading-color;
}

.navb-link:after {
    content: "";
    position: absolute;
    width: 0;
    height: 10px;
    background-color: $main-color-1;
    border-radius: 5px;
    bottom: 0;
    left: -5px;
    z-index: -1;
    opacity: 0.2;
    transition: 0.3s;
}

.navb-link:hover::after {
    width: 100%;
    opacity: 0.2;
}

.toggle-button {
    color: $heading-color;
    min-width: 40px;
    height: 40px;
    background-color: $bg-color-2;
    border-radius: 50%;
    font-size: 1.1rem;
    cursor: pointer;
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.05);
    transition: 0.3s;
    margin-right: 1rem;
}

.toggle-button:hover {

    filter: brightness(97%);


}
</style>