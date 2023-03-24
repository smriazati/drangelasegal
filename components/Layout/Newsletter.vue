<template>
    <div class="course-layout-newsletter newsletter-wrapper">
        <SystemNewsletter :data="newsletter" />
    </div>
</template>
<script>
export default {
    props: {
        newsletter: {
            type: Object,
        }
    },
};
</script>
<style lang="scss">
.newsletter-wrapper.course-layout-newsletter {
    overflow: hidden;
    background: $taupe;
    padding-top: 22px;
    text-align: center;
    position: relative;
    @include stackedDivs;
    grid-template-rows: 420px;

    @media (max-width: 880px) {
        grid-template-rows: 560px;
    }

    // @media (max-width: 680px) {
    //   grid-template-rows: 600px;
    // }

    @media (max-width: 450px) {
        grid-template-rows: 660px;
    }

    &:before {
        grid-column: 1 / 1;
        grid-row: 1 / 1;
        position: relative;
        content: '';
        background: $sunlight;
        @include glowBox;
        padding: 0; // reset glowbox
        width: 100%;
        height: 100%;

        width: 880px;
        height: 880px;
        margin-left: auto;
        margin-right: auto;

        @media (max-width: 880px) {
            width: 150%;
            left: -25%;
        }

        @media (max-width: 350px) {
            height: 800px;
            width: 600px;
        }

        left: 0;
        top: 0;
        border-radius: 50% 50% 0 0;
    }

    .newsletter-form {
        place-self: center;
        position: relative;
        max-width: 496px;
        margin-left: auto;
        margin-right: auto;

        @media (max-width: 880px) {
            max-width: 70vw;
        }


        h2 {
            @include headingStyle;
            max-width: 100%;
            text-align: center;
        }

        p {
            @include textStyle;
        }

    }

}
</style>