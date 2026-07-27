<template>
    <nav class="navbar position-fixed w-100 navbar-expand-sm p-3 py-2 bg-transparent justify-content-between navbar-light bg-light">
        <div class="container-fluid m-0 p-0">

            <!-- Logo -->
            <div class="nav-logo">
                <img src="/images/svg/logo.svg" alt="">
            </div>

            <!-- Dropdown button (sm) -->
            <button
                class="navbar-toggler border-0 d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <img src="/images/svg/menu.svg" alt="">
            </button>

            <!-- Links -->
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                <ul class="navbar-nav fw-bold align-bottom mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Product</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="journal">Journal</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Careers</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


</template>