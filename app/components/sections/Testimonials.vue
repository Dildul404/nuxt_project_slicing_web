<script setup>
const { quote, name, position, flex_reverse, sticker } = defineProps({
    quote: String,
    name: String,
    position: String,
    flex_reverse: Boolean,
    sticker: Boolean
})
</script>

<template>
    <div class="container-fluid m-0 py-120 px-4">
        <div class="d-flex flex-column gap-3 flex-md-row gap-md-5">
            <div class="position-relative">

                <!-- Sticker -->
                <img class="position-absolute sticker d-none"
                    :class="sticker ? 'd-md-block' : '' "
                src="/images/png-jpg/sticker-2.png" alt="">

                <!-- Img -->
                <img class="img-fluid" v-bind="$attrs" alt="">
            </div>
            <div class="d-flex justify-content-center col-md-5"
                :class="flex_reverse ? 'flex-column-reverse' : 'flex-column'">
                <div class="py-4">
                    <div>
                        <img class="opacity-75" src="/images/svg/quote.svg" alt="">
                    </div>
                    <h4>{{ quote }}</h4>
                </div>
                <h4>{{ name }}</h4>
                <p class="text-secondary serif">{{ position }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.sticker {
    width: 380px;
    transform: rotate(-20deg);
    height: auto;
    top: -150px;
    left: -120px;
}
</style>