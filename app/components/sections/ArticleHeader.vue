<script setup>
import { useArticle } from '~/stores/article';

const article = useArticle()
const item = article.items
</script>
<template>
    <section>
        <div class="py-120 text-center px-4 d-flex flex-column align-items-center">
            <p class="jetbrains text-secondary pt-5">{{ item.production }}</p>
            <h1 class="fw-bold article-header">{{ item.title }}</h1>
        </div>
    </section>
</template>
<style scoped>
.article-header {
    font-size: clamp(2rem, 10vw, 4.5rem);
    max-width: 90%;
}
</style>