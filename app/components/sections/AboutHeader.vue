<template>
    <section>
        <div class="container-fuild row m-0 p-0">
            <div class="bg-header col-12 col-xl-6 px-0">
            </div>
            <div class="col-12 col-xl-6 px-0 d-flex align-items-center py-5 px-4">
                <div class="d-flex flex-column gap-3 justify-content-center align-items-center">
                    <p class="serif text-secondary">Our mission</p>
                    <h2>Climate action starts with better information. We help organizations turn complex data into
                        measurable, meaningful change.</h2>
                    <ButtonsButtonBlack class="flex-grow-1 flex-md-grow-0">Meet the team</ButtonsButtonBlack>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bg-header {
    height: 100vh;
    padding-top: 20px;
    max-height: 500px;
    background-image: url('/images/png-jpg/about.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

@media (max-width: 768px) {
    .bg-header {
        max-height: 320px;
    }
}
</style>