<template>
    <header class="hero">
        <div class="container d-flex flex-column gap-5 text-center">

            <!-- Text -->
            <article>
                <h1 class="display-2 lh-1 serif">Sustainability insights,</h1>
                <h2 class="display-2 lh-1 fw-medium">built for business</h2>
                <p class="serif">Track impact, reduce emissions, and accelerate progress—with clarity and confidence.
                </p>
                <div class="w-100 d-flex flex-column align-items-center flex-sm-row justify-content-center gap-3">
                    <ButtonsButtonBlack class="justify-content-center justify-content-sm-end">Request a demo</ButtonsButtonBlack>
                    <ButtonsButtonBlack class="justify-content-center justify-content-sm-start">Explore the platform</ButtonsButtonBlack>
                </div>
            </article>

            <!-- Img -->
            <div>
                <img class="w-100 mw-960" src="/images/png-jpg/hero-img-lg.png" alt="">
            </div>
        </div>
    </header>
</template>
<style scoped>
.hero {
    background: linear-gradient(to bottom, var(--bg-blue), var(--bg-cream));
    background-repeat: no-repeat;
    background-size: 100% 77%;
}

.hero .container {
    padding-top: 140px;
}

.mw-960 {
    max-width: 960px;
}
</style>