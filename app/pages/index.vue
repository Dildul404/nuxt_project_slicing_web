<template>
    <SectionsHero />
    <SectionsFeatures />
    <SectionsValuesSection 
        :bg_section="true"
    />
    <SectionsCaseStudy />
    <SectionsBlog />
    <SectionsTestimonials 
        src="/images/png-jpg/elliot-williams.png"
        quote="We finally moved past spreadsheets and guesswork. Now we have real data to guide real decisions."
        name="Olliet williams"
        position="Head of Sustainability, Flux Materials"
        :sticker="false"
    />
    <SectionsCallToAction 
        h2="Ready to operationalize your sustainability goals?"
        btn_content="Request a demo"
    />
</template>