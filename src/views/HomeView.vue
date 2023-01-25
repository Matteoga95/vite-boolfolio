<script>

export default {
    name: "HomeView",
}
</script>

<template>

    <main>
        <section class="home-area">
            <div class="container-new d-flex ">
                <div class="home-info ">
                    <h3 class="sub-heading">Full-Stack Developer</h3>
                    <h1 class="heading">Matteo Gallo</h1>
                    <p class="text">
                        Hi! have a nice look on my site!
                    </p>
                    <div class="cta d-flex align-items-center">
                        <a href="" class="btn-f">Contact me</a>
                        <a href="" class="btn-s">Download CV</a>
                    </div>
                </div>

                <img src="../assets/img/man-avatar.png.jpeg" class="  person" alt="" />
                <!-- <div class="home-image">

                </div> -->
            </div>
        </section>
    </main>
    <!-- <section class="container d-flex    justify-content-center">
        <h1 class="hero-heading">hi, i'm a<br>Web Developer </h1>
        <img src="img/home.png" class="home-img" alt="">
    </section> -->


</template>

<style lang="scss" scoped>
@import "../styles/general.scss";

.home-area {
    padding: 120px 0;
    width: 100%;
    overflow: hidden;



    .sub-heading {
        margin-bottom: 0.7rem;
    }

    .heading {
        font-size: 3.5rem;
    }

    .text {
        margin: 0.8rem 0;
    }
}

.container-new {

    position: relative;
    height: calc(100vh - 120px);
    max-height: 600px;
    align-items: center;
}

.cta {
    margin-top: 3.5rem;

    .btn-f {
        margin-right: 1.5rem;


    }

}

.btn-f {
    display: inline-block;
    padding: .9rem 1.75rem;
    border-radius: 17px;
    background-color: $main-color-1;
    color: #fff;
    font-size: 0.85rem;
    letter-spacing: 0.4px;
    text-transform: capitalize;
    transition: 0.3s;
}

.btn-f:hover {
    background-color: $main-color-dark-1;
    color: #fff;
}

.btn-s {
    position: relative;
    background-color: transparent;
    color: $main-color-1;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0px;
    border-bottom: 2.5px solid $main-color-2;
    border-radius: 0px;
    padding: 0.15rem 0;
}

.btn-s::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 2.5px;
    bottom: -2.5px;
    left: 0;
    background-color: $main-color-1;
    transition: 0.3s ease-in-out;
}

.btn-s:hover::before {
    width: 100%;
}

// .home-image {
//     position: relative;
//     width: 50%;
//     min-height: calc(100% + 120px);
//     background-image: linear-gradient(124deg,
//             $main-color-1 50%,
//             $main-color-2 50%);
//     margin-top: -120px;
//     border-radius: 0 0 80px 80px;


// }

.person {
    position: absolute;
    width: 35%;

    right: 0;
    top: 0;
    background-image: linear-gradient(124deg,
            $main-color-1 50%,
            $main-color-2 50%);
    margin-top: -120px;
    padding: 100px;
    padding-top: 30px;
    border-radius: 0 0 80px 80px;
    transform: translate(-50%);
}
</style>
