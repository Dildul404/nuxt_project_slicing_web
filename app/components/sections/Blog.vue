<script setup>
import { useArticle } from '~/stores/article';
import { useDinamicFormat } from '~/composable/dinamicFormat'
import articles from '~/data/articles.json'

const articleStore = useArticle()

function addToArticle(article) {
    articleStore.addItem(article)
}

const threeFirst = articles.slice(0, 3)
</script>
<template>
    <section>
        <div class="container-fluid d-flex flex-column gap-5 m-0 py-120 px-3 overflow-hidden">

            <h2 class="text-center">From the journal</h2>

            <div class="position-relative">
                <!-- Articles -->
                <article class="d-flex flex-column align-items-center position-relative mx-auto article-container">
                    <!-- Sticker -->
                    <img class="position-absolute sticker d-none d-lg-block" src="/images/png-jpg/sticker.png" alt="">

                    <div class="border-top border-bottom pt-3 mw-620 w-100" v-for="item in threeFirst" :key="item.id">
                        <NuxtLink class="text-decoration-none text-black" @click="addToArticle(item)" :to="`/article/${useDinamicFormat(item.title)}`">
                            <CardsArticleItem 
                                :key="item.id" 
                                :flex_row="true" 
                                :url="item.url" 
                                :title="item.title"
                                :production="item.production" />
                        </NuxtLink>
                    </div>

                    <div class="pt-4 border-top">
                        <NuxtLink class="text-decoration-none " to="/journal">
                            <ButtonsButtonBlack class="flex-grow-1">
                                View all article
                            </ButtonsButtonBlack>
                        </NuxtLink>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
<style scoped>
.sticker {
    width: 380px;
    height: auto;
    top: -130px;
    left: -10px;
}

.article-container {
    max-width: 1000px;
}

.mw-620 {
    max-width: 620px;
}
</style>