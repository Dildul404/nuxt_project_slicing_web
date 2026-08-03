<script setup>
import careers from '~/data/careers.json'
</script>
<template>
    <section class="career py-120 d-flex justify-content-center">
        <div class="container-fluid m-0 p-0">
            <h2 class="fw-medium serif text-center">Careers at</h2>
            <h2 class="fw-bold text-center">Aetherfield</h2>

            <div class="d-flex flex-column gap-3 p-4">
                <CardsCareerItem v-for="item in careers"
                    :key="item.id" 
                    :role="item.role" 
                    :residence="item.residence"
                    :desc="item.desc"
                    :doted_card="item.doted_card"
                    :obj="item" />
            </div>
        </div>
    </section>
</template>
<style scoped>
.career {
    background: linear-gradient(to bottom, var(--bg-blue), var(--bg-cream));
}

.container-fluid {
    max-width: 820px;
}
</style>