<script setup>
import articles from '~/data/articles.json';

const row_1 = articles.slice(0, 2)
const row_2 = articles.slice(2, 4)
const row_3 = articles.slice(4, 6)
</script>
<template>
    <div class="container-fluid p-3 m-0">

        <!-- Header -->
        <h2 class="pt-3 pb-5 text-center fw-bold">Latest Article</h2>

        <!-- List -->

        <div class="gap-7 w-100">
            <div class="row">
                <article class="col-12 col-xl-6" v-for="item in row_1">
                    <CardsArticleItem 
                        :key="item.id"
                        :url="item.url" 
                        :title="item.title"
                        :production="item.production"
                        :quote="item.quote"
                    />
                </article>
            </div>
            <div class="row">
                <article class="col-12 col-xl-6" v-for="item in row_2">
                    <CardsArticleItem 
                        :key="item.id"
                        :url="item.url" 
                        :title="item.title"
                        :production="item.production"
                        :quote="item.quote"
                    />
                </article>
            </div>
            <div class="row">
                <article class="col-12 col-xl-6" v-for="item in row_3">
                    <CardsArticleItem 
                        :key="item.id"
                        :url="item.url" 
                        :title="item.title"
                        :production="item.production"
                        :quote="item.quote"
                    />
                </article>
            </div>
        </div>
    </div>
</template>