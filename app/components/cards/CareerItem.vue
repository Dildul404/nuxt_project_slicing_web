<script setup>
import { useDinamicFormat } from '~/composable/dinamicFormat';
import { useCareer } from '~/stores/career';

const career = useCareer()
const { obj, doted_card, role, residence, desc } = defineProps({
    obj : Object,
    doted_card : Boolean,
    role : String,
    residence : String,
    desc : String,
})

function addToCareer(item) {
    career.addItem(item)
}
</script>
<template>
    <div class="rounded-3 p-4 d-flex flex-column gap-4 flex-md-row gap-md-5 justify-content-between"
        :class=" doted_card ? 'border-dashed' : 'bg-light'">
        <div>
            <h6 class="fw-bold">{{ role }}</h6>
            <p class="jetbrains text-secondary"><small>{{ residence }}</small></p>
            <p class="serif fw-medium lh-sm">{{ desc }}</p>
        </div>
        <div class="d-flex justify-content-md-end align-items-start flex-shrink-0">
            <NuxtLink class="text-decoration-none" @click="addToCareer(obj)" :to="doted_card ? `` : `/job_listing/${useDinamicFormat(role)}`">
                <ButtonsButtonBlack>{{ doted_card ? 'Apply now' : 'View role' }}</ButtonsButtonBlack>
            </NuxtLink>
        </div>
    </div>
</template>
<style scoped>
.border-dashed {
    border: 1px dashed #6c757d;
}
</style>