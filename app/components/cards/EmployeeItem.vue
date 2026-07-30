<script setup>
const { name, role, mail } = defineProps({
    name : String,
    role : String,
    mail : String,
})
</script>
<template>
    <div class="row m-0 border-bottom border-secondary py-3">
        <h6 class="fw-medium col-12 col-sm-3 flex-fill d-flex p-0 align-items-center m-2">{{ name }}</h6>
        <p class="fw-medium palyfair lh-1 col-sm-3 flex-fill d-flex p-0 align-items-center m-2">{{ role }}</p>
        <p
            class="fw-medium playfair lh-1 text-decoration-underline col-sm-3 flex-fill d-flex p-0 align-items-center m-2 justify-content-sm-end">
            {{ mail }}</p>
    </div>
</template>