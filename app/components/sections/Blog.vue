<script setup>
import articles from '~/data/articles.json';

const threeFirst = articles.slice(0, 3)

</script>
<template>
    <section>
        <div class="container-fluid d-flex flex-column gap-5 m-0 py-120 px-3 overflow-hidden">

            <h2 class="text-center">From the journal</h2>

            <!-- Articles -->
            <router-link to="/article" class=" text-decoration-none text-black">
                <article class="d-flex flex-column align-items-center position-relative mx-auto article-container">
                    <!-- Sticker -->
                    <img class="position-absolute sticker d-none d-lg-block" src="/images/png-jpg/sticker.png" alt="">

                    <div class="border-top border-bottom pt-3 mw-620 w-100" v-for="item in threeFirst">
                        <CardsArticleItem
                            :key="item.id"
                            :flex_row="true"
                            :url="item.url"
                            :title="item.title"
                            :production="item.production"
                        />
                    </div>
                    
                    <div class="pt-4 border-top">
                        <ButtonsButtonBlack class="flex-grow-1">
                            View all article
                        </ButtonsButtonBlack>
                    </div>
                </article>
            </router-link>
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