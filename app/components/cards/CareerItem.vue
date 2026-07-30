<script setup>
const { doted_card, role, residence, desc } = defineProps({
    doted_card : Boolean,
    role : String,
    residence : String,
    desc : String,
})
</script>
<template>
    <div class="rounded-3 p-4 d-flex flex-column gap-4 flex-md-row gap-md-5 justify-content-between"
        :class=" doted_card ? 'border-dashed' : 'bg-light'">
        <div>
            <h6 class="fw-bold">{{ role }}</h6>
            <p class="jetbrains text-secondary"><small>{{ residence }}</small></p>
            <p class="playfair fw-medium lh-sm">{{ desc }}</p>
        </div>
        <div class="d-flex justify-content-md-end align-items-start flex-shrink-0">
            <router-link class="text-decoration-none" to="/job_listing">
                <ButtonsButtonBlack>{{ doted_card ? 'Apply now' : 'View role' }}</ButtonsButtonBlack>
            </router-link>
        </div>
    </div>
</template>
<style>
.border-dashed {
    border: 1px dashed #6c757d;
}
</style>