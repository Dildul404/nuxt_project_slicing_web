<script setup>
import { useCareer } from '~/stores/career';

const career = useCareer()
const item = career.items
const main = item.main
</script>
<template>
    <section class="career py-120 d-flex justify-content-center overflow-hidden">
        <div class="container-fluid m-0 p-0 pt-5">
            <router-link to="/careers" class="text-decoration-none text-black">
                <h6 class="fw-medium serif text-center"><img src="" alt="">← Back to careers</h6>
            </router-link>

            <article class="p-4 d-flex">
                <div class="bg-light rounded-4 p-4 position-relative">

                    <!-- Sticker -->
                    <img class="position-absolute sticker d-none d-md-block" src="/images/png-jpg/sticker-2.png" alt="">

                    <article class="d-flex flex-column flex-md-row gap-2 border-bottom border-secondary pb-4">
                        <div class="d-flex flex-column gap-2 flex-shrink-1">
                            <div>
                                <h2 class="fw-bold">{{ item.role }}</h2>
                                <p class="jetbrains text-secondary"><small>{{ item.residence }}</small></p>
                            </div>
                            <div>
                                <p class="serif">{{ item.brief_description }}</p>
                            </div>
                        </div>
                        <div class="flex-shrink-0 px-3">
                            <ButtonsButtonBlack class="flex-shrink-0">Apply now</ButtonsButtonBlack>
                        </div>
                    </article>
                    <article class="py-4 d-flex flex-column gap-2 border-bottom border-secondary pb-4">
                        <div v-for="(article, index) in main" :key="index">
                            <h6 class="fw-bold">{{ article.title }}</h6>
                            <p class="serif" v-if="!Array.isArray(article.content)">{{ article.content }}</p>
                            <ul style="list-style-type: disc;" class="serif" v-else>
                                <li v-for="(li, index) in article.content" :key="index">{{ li.li }}</li>
                            </ul>
                        </div>
                        <!-- 
                        <h6 class="fw-bold">About the role</h6> -->
                        <!-- 
                            < -->
                    </article>
                    <div class="p-4 text-center d-flex flex-column align-items-center gap-3">
                        <h2 class="fw-bolder">Ready to help build the <br> future of climate intelligence?</h2>
                        <ButtonsButtonBlack class="justify-content-center"> Apply now</ButtonsButtonBlack>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>
<style scoped>
.career {
    background: linear-gradient(to bottom, var(--bg-blue), var(--bg-cream));
}

.container-fluid {
    max-width: 820px;
}

.sticker {
    width: 220px;
    height: auto;
    top: 60%;
    right: -10%;
}
</style>