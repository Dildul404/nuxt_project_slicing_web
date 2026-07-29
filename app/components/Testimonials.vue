<script setup>
const { quote, name, position, flex_reverse } = defineProps({
    quote: String,
    name: String,
    position: String,
    flex_reverse: Boolean
})
</script>

<template>
    <div class="container-fluid m-0 py-120 px-4">
        <div class="d-flex flex-column gap-3 flex-md-row gap-md-5">
            <div>
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
                <p class="text-secondary playfair">{{ position }}</p>
            </div>
        </div>
    </div>
</template>