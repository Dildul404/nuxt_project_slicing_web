<template>
    <section class="career py-120 d-flex justify-content-center overflow-hidden">
        <div class="container-fluid m-0 p-0 pt-5">
            <router-link to="/careers" class="text-decoration-none text-black"><h6 class="fw-medium playfair text-center"><img src="" alt="">← Back to careers</h6></router-link>

            <article class="p-4 d-flex">
                <div class="bg-light rounded-4 p-4 position-relative">

                    <!-- Sticker -->
                    <img class="position-absolute sticker d-none d-md-block" src="/images/png-jpg/sticker-2.png" alt="">

                    <article class="d-flex flex-column gap-2 border-bottom border-secondary pb-4">
                        <div class="">
                            <h2 class="fw-bold">Data Scientist</h2>
                            <p class="jetbrains text-secondary"><small>Full-time • Denver, CO</small></p>
                        </div>
                        <div>
                            <p class="playfair">Help build the intelligence layer for climate action. You’ll turn
                                complex sustainability
                                data
                                into clear, actionable insights for enterprise teams.</p>
                        </div>
                        <div>
                            <ButtonsButtonBlack>Apply now</ButtonsButtonBlack>
                        </div>
                    </article>
                    <article class="py-4 d-flex flex-column gap-2 border-bottom border-secondary pb-4">
                        <h6 class="fw-bold">Company Description</h6>
                        <p class="playfair">At Aetherfield, we build software that empowers companies to lead with
                            climate accountability. Our platform helps sustainability and operations teams make sense of
                            complex environmental data—transforming emissions, waste, and energy metrics into
                            measurable, meaningful action. We’re a mission-driven team of technologists, designers, and
                            scientists working to accelerate the shift toward a low-carbon future.</p>
                        <h6 class="fw-bold">About the role</h6>
                        <p class="playfair">As a Data Scientist at Aetherfield, you’ll help shape the analytical engine
                            behind our platform. You’ll collaborate with product and engineering teams to design models
                            that interpret environmental impact, forecast future trends, and uncover actionable insights
                            for our customers. Your work will directly influence how companies plan, report, and act on
                            their sustainability strategies.</p>
                        <h6 class="fw-bold">Requirements</h6>
                        <ul style="list-style-type: disc;" class="playfair">
                            <li>3+ years of experience in data science or applied analytics (Python, SQL, etc.)</li>
                            <li>Experience working with climate, sustainability, or supply chain datasets is a plus</li>
                            <li>Strong foundation in statistics and data modeling</li>
                            <li>Ability to communicate complex insights clearly to both technical and non-technical
                                teams</li>
                            <li>Curiosity, clarity, and care in how you</li>
                            <li>Passion for solving real-world problems with purpose and precision</li>
                        </ul>
                        <h6 class="fw-bold">Company benefits</h6>
                        <ul style="list-style-type: disc;" class="playfair">
                            <li>Competitive salary and equity options</li>
                            <li>Flexible, hybrid work environment</li>
                            <li>Generous PTO and paid volunteer days</li>
                            <li>Annual sustainability stipend</li>
                            <li>Team offsites and climate-focused retreats</li>
                            <li>A mission-first culture that values clarity, impact, and integrity</li>
                        </ul>
                    </article>
                    <CallToAction 
                        h2="Ready to help build the future of climate intelligence?"
                        btn_content="Apply now" />
                </div>
            </article>
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

.sticker {
    width: 220px;
    height: auto;
    top: 60%;
    right: -10%;
}
</style>