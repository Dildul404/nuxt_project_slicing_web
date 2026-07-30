<template>
    <section>
        <div class="container-fluid d-flex flex-column gap-5 m-0 py-120 px-3 overflow-hidden">

            <h2 class="text-center">From the journal</h2>

            <!-- Articles -->
            <router-link to="/article" class=" text-decoration-none text-black">
                <article class="d-flex flex-column align-items-center position-relative mx-auto article-container">
                    <!-- Sticker -->
                    <img class="position-absolute sticker d-none d-lg-block" src="/images/png-jpg/sticker.png" alt="">

                    <div class="d-flex flex-column flex-lg-row gap-3 border-top border-bottom pt-3 mw-620 w-100">
                        <div class="mb-3 col-lg-4">
                            <img class="img-fluid w-100" src="/images/png-jpg/data-stack.png" alt="">
                        </div>
                        <div>
                            <h6 class="fw-bold">How to Build a Climate-Ready Data Stack</h6>
                            <p class="jetbrains text-secondary lh-1"><small>Insight • 4 min</small></p>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-lg-row gap-3 border-top border-bottom pt-3 mw-620 w-100">
                        <div class="mb-3 col-lg-4">
                            <img class="img-fluid w-100" src="/images/png-jpg/sustainability.png" alt="">
                        </div>
                        <div>
                            <h6 class="fw-bold">Sustainability Is'n a Side Project: Making Impact Operational</h6>
                            <p class="jetbrains text-secondary lh-1"><small>Strategy • 7 min</small></p>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-lg-row gap-3 border-top border-bottom pt-3 mw-620 w-100">
                        <div class="mb-3 col-lg-4">
                            <img class="img-fluid w-100" src="/images/png-jpg/aetherfield.png" alt="">
                        </div>
                        <div>
                            <h6 class="fw-bold">Inside the Aetherfield Model: How We Turn Data Into Action</h6>
                            <p class="jetbrains text-secondary lh-1"><small>Insight • 5 min</small></p>
                        </div>
                    </div>
                    <div class="pt-4 border-top">
                        <ButtonsButtonBlack class="flex-grow-1">
                            View all article
                        </ButtonsButtonBlack>
                    </div>
                </article>
            </router-link>
        </div>
    </section>
</template>
<style scoped>
.sticker {
    width: 380px;
    height: auto;
    top: -130px;
    left: -10px;
}

.article-container {
    max-width: 1000px;
}
</style>