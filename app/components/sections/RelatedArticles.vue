<script setup>
import { useArticle } from '~/stores/article';
import { useDinamicFormat } from '~/composable/dinamicFormat'
import articles from '~/data/articles.json'

const articleStore = useArticle()

function addToArticle(article) {
    articleStore.addItem(article)
}

const filtered_articles = articles.slice(0, 3)
</script>
<template>
    <section>
        <div class="p-4">
            <div class="row justify-content-sm-between">
                <h2 class="fw-bolder col-12 col-sm-6 text-center text-md-start">Recent articles</h2>
                <NuxtLink class="text-black fw-medium text-center text-md-end serif col-12 col-sm-6" to="/journal">View all articles</NuxtLink>
            </div>
            <div class="row p-0 m-0 g-0 g-xl-3 pb-5">
                <article class="col-12 col-xl-4 flex-shrink-1" v-for="item in filtered_articles" :key="item.id">
                    <NuxtLink class="text-decoration-none text-black" @click="addToArticle(item)" :to="`/article/${useDinamicFormat(item.title)}`">
                        <CardsArticleItem 
                            :key="item.id" 
                            :url="item.url" 
                            :title="item.title"
                            :production="item.production" />
                    </NuxtLink>
                </article>
            </div>
        </div>
    </section>
</template>
<style scoped>
section {
    background-color: #F6F8FB;
}
</style>