<script setup>
import { useArticle } from '~/stores/article';

const article = useArticle()
const item = article.items
</script>
<template>
    <div class="gap-3 px-4">
        <div>
            <img class="img-fluid" :src="item.url_head" alt="">
        </div>
        <article class="d-flex flex-column flex-lg-row justify-content-lg-between pt-4 gap-4">
            <div class="dev-container row m-0 p-0 justify-content-between gap-lg-5 px-lg-5 flex-shrink-0">
                <div class="p-0 flex-shrink-1 col-5 col-lg-12">
                    <p class="text-secondary serif">Published</p>
                    <h6 class="fw-bold">{{ item.published }}</h6>
                </div>
                <div class="p-0 flex-shrink-1 col-5 col-lg-12">
                    <p class="text-secondary serif">Author</p>
                    <h6 class="fw-bold">{{ item.author }}</h6>
                </div>
            </div>
            <div class="pb-4 border-bottom border-secondary">
                <p class="serif fw-medium">{{ item.brief_description }}</p>
            </div>
        </article>
    </div>
</template>
<style scoped>
.dev-container {
    max-width: 317px;
}
</style>