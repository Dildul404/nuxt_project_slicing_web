<template>
    <section class="career py-120 d-flex justify-content-center">
        <div class="container-fluid m-0 p-0">
            <h2 class="fw-medium playfair text-center">Careers at</h2>
            <h2 class="fw-bold text-center">Aetherfield</h2>

            <div class="d-flex flex-column gap-3 p-4">
                <CardsCareerItem role="UX Designer" residence="Contract • San Francisco, CA"
                    desc="Shape the tools that drive climate intelligence. You’ll lead
                cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations." />
                <CardsCareerItem role="Data Scientist" residence="Full-time • Denver, CO"
                    desc="Help build the intelligence layer for climate action. You’ll turn complex sustainability data into clear, actionable insights for enterprise teams." />
                <CardsCareerItem role="Product Manager" residence="Part-time • Seattled, WA"
                    desc="Shape the tools that drive climate intelligence. You’ll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations." />
                <CardsCareerItem :doted_card="true" role="Open application" residence="Full-time • Denver, CO"
                    desc="Don’t see your role available? Apply for an open application!" />
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