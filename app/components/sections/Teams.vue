<script setup>
import employee from '~/data/employee.json'
</script>
<template>
    <section class="teams">
        <div class="p-3 d-flex flex-column">
            <h2 class="text-center pb-5">Meet the team</h2>
            <div class="row m-0 py-0">
                <p class="col-12 col-sm-3 flex-fill d-flex p-0 align-items-center m-2 jetbrains"><small>Name</small></p>
                <p class="col-12 col-sm-3 flex-fill d-flex p-0 align-items-center m-2 jetbrains"><small>Title</small></p>
                <p class="col-12 col-sm-3 flex-fill d-flex p-0 align-items-center justify-content-sm-end m-2 jetbrains"><small>Contact</small></p>
            </div>
            <div class="border-top border-secondary">
                <CardsEmployeeItem v-for="item in employee" 
                    :id="item.id" 
                    :name="item.name" 
                    :role="item.role"
                    :mail="item.mail" />
            </div>
        </div>
    </section>
</template>
<style scoped>
.teams {
    background-color: #F6F8FB;
}
</style>