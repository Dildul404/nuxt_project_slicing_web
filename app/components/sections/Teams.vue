<script setup>
import employee from '~/data/employee.json'
</script>
<template>
    <section class="teams">
        <div class="p-3 d-flex flex-column gap-3">
            <h2 class="text-center pb-3">Meet the team</h2>
            <div class="border-top border-secondary">
                <CardsEmployeeItem v-for="item in employee"
                    :id="item.id"
                    :name="item.name"
                    :role="item.role"
                    :mail="item.mail" 
                />
            </div>
        </div>
    </section>
</template>
<style scoped>
.teams {
    background-color: #F6F8FB;
}
</style>