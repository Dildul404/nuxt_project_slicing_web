<script setup>
import { useArticle } from '~/stores/article';

const article = useArticle()
const main = article.items.main
</script>
<template>
    <div class="gap-3 px-4">
        <article class="d-flex flex-column flex-lg-row justify-content-lg-between py-4 gap-4">
            <div class="flex-shrink-0 px-lg-5">
                <div class="space"></div>
                <!-- <div class="p-0 flex-shrink-1 col-5 col-lg-12">
                    <p class="text-secondary serif">Published</p>
                    <h6 class="fw-bold">May 7, 2028</h6>
                </div>
                <div class="p-0 flex-shrink-1 col-5 col-lg-12">
                    <p class="text-secondary serif">Author</p>
                    <h6 class="fw-bold">Lana Terra</h6>
                </div> -->
            </div>

            <!-- <h6 class="fw-bolder">Built for Another Era</h6><br>
                <p class="fw-medium serif">Most data infrastructures were built to optimize for sales, user growth, or cost—not carbon. This creates friction when sustainability teams try to source emissions data from systems that weren’t designed to capture it. Without foundational visibility, even basic reporting becomes a manual, error-prone task. The result? Delays, duplications, and disconnects.</p><br><br> -->

            <div class="pb-4">
                <div v-for="section in main">
                    <h6 class="fw-bolder">{{ section.header }}</h6><br>
                    <p class="fw-medium serif">{{ section.content }}</p><br><br>
                </div>
            </div>
        </article>
    </div>
</template>
<style scoped>
.space {
    width: 221px;
}
</style>