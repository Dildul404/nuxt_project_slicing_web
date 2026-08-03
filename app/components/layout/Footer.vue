<template>
    <footer class="footer">
        <div class="container-fluid m-0 py-4">
            <div class="containert-fluid d-flex flex-column flex-sm-row justify-content-sm-between text-center">
                <!-- Links -->
                <div>
                    <div class="d-inline-block pr-3">
                        <router-link to="/" class=" link-dark link-opacity-75 text-decoration-none fw-bold">Product</router-link>
                    </div>
                    <div class="d-inline-block pr-3">
                        <router-link to="/journal" class=" link-dark link-opacity-75 text-decoration-none fw-bold">Journal</router-link>
                    </div>
                    <div class="d-inline-block pr-3">
                        <router-link to="/about" class=" link-dark link-opacity-75 text-decoration-none fw-bold">About</router-link>
                    </div>
                    <div class="d-inline-block pr-3">
                        <router-link to="/careers" class=" link-dark link-opacity-75 text-decoration-none fw-bold">Careers</router-link>
                    </div>
                </div>

                <!-- Copy -->
                <div class="opacity-75">
                    <p class="serif">&copy; 2025 • All rights reserved</p>
                </div>
            </div>

            <div class="mw-100">
                <img class="opacity-50 ratio ratio-21x9 mb-4" src="/images/png-jpg/footer.png" alt="">
                <img class="opacity-50 w-100" src="/images/svg/logo.svg" alt="">
            </div>
        </div>
    </footer>
</template>
<style scoped>
.footer {
    background-color: #FFF546;
}

.pr-3 {
    padding-right: 1rem;
}

.brightness-70 {
    filter: brightness(70%);
}
</style>