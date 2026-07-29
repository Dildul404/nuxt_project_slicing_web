<script setup>
const { h2, btn_content } = defineProps({
    h2 : String,
    btn_content : String,
})
</script>
<template>
    <section>
        <div class="py-120 px-4 text-center d-flex flex-column align-items-center gap-5">
            <h2>{{ h2 }}</h2>
            <ButtonBlack class="justify-content-center">{{ btn_content }}</ButtonBlack>
        </div>
    </section>
</template>