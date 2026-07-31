<script setup>
const { bg_section, bg_item } = defineProps({
    bg_section : Boolean,
    bg_item : Boolean,
})
</script>
<template>
    <section :class="bg_section ? 'bg_values_section' : ''">
        <div class="container-fluid py-120 px-4 mx-0 d-flex flex-column gap-5">

            <!-- Text -->
            <article class=" text-center">
                <h1 class="display-2 lh-1 serif">Built for clarity</h1>
                <h2 class="display-2 lh-1 fw-medium">Designed for action</h2>
            </article>

            <!-- Value modules -->
            <div class="d-flex gap-3 flex-column flex-xl-row">
                <CardsValueItem :class=" bg_item ? 'bg-body-secondary' : 'bg-body' ">
                    <div class="wh-42 mb-4">
                        <img class="img-fluid" src="/images/png-jpg/clarity-icon.png" alt="">
                    </div>
                    <h5>Clarity drives action</h5>
                    <p>We believe better decisions start with better data—measured, visible, and trusted.</p>
                </CardsValueItem>
                <CardsValueItem :class=" bg_item ? 'bg-body-secondary' : 'bg-body' ">
                    <div class="wh-42 mb-4">
                        <img class="img-fluid" src="/images/png-jpg/sustainability-icon.png" alt="">
                    </div>
                    <h5>Sustainability is a systems problem</h5>
                    <p>We build tools that help teams connect the dots between operations, impact, and accountability.
                    </p>
                </CardsValueItem>
                <CardsValueItem :class=" bg_item ? 'bg-body-secondary' : 'bg-body' ">
                    <div class="wh-42 mb-4">
                        <img class="img-fluid" src="/images/png-jpg/progress-icon.png" alt="">
                    </div>
                    <h5>Progress over perfection</h5>
                    <p>We support real-world momentum—helping organizations move from ambition to measurable change.</p>
                </CardsValueItem>
            </div>
        </div>
    </section>
</template>
<style scoped>
.bg_values_section {
    background-image: url('/images/png-jpg/values.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>