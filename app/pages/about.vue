<template>
    <SectionsAboutHeader />
    <SectionsValuesSection 
        :bg_item="true"
    />
    <SectionsTestimonials src="/images/png-jpg/eunji-park.png"
        quote="Eunji founded Aetherfield with one goal: to help companies take climate action without waiting for a perfect plan. With a background in environmental systems and software design, she’s spent the past decade building tools that turn impact goals into real-world outcomes. She still insists on biking to every investor meeting."
        name="Eunji park"
        position="Founder's story"
        :flex_reverse="true"
        :sticker="true"
    />
    <SectionsTeams />
    <SectionsCallToAction
        h2="We’re hiring! Want to join the team?"
        btn_content="View open roles"
    />
</template>