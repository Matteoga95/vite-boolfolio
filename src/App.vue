<script>
export default {

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

    <RouterView></RouterView>

</template>

<style lang="scss">
@use './styles/general.scss';
</style>
