<script setup>
const { url, title, production, quote, flex_row } = defineProps({
    url : String,
    title : String,
    production : String,
    quote : String,
    flex_row : Boolean, 

})
</script>
<template>
    <div :class="flex_row ? 'flex-lg-row' : ''" class="d-flex flex-column gap-3">
        <div :class="flex_row ? 'mb-3 col-lg-4' : ''">
            <img class="img-fluid w-100" :src="url" alt="">
        </div>
        <div>
            <h6 class="fw-bold">{{ title }}</h6>
            <p class="jetbrains text-secondary lh-1"><small>{{ production }}</small></p>
            <p class="serif">{{ quote ?? '' }}</p>
        </div>
    </div>
</template>

