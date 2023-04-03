<template>
    <div :lazy-background="$urlFor(image?.asset._ref).auto('format').url()" class="callout bg-full-width">
        <div>
            <div class="text-wrapper glow-box text-center">
                <p v-if="title" class="heading-style"> {{ title }}</p>
                <p v-if="text">{{ text }}</p>
                <a v-if="link" :href="link" class="link-underline" target="_blank">Let’s Do This</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
        },
        title: {
            type: String,
        },
        text: {
            type: String,
        },
        link: {
            type: String
        }
    },
};
</script>


<style lang="scss" scoped>
.callout {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    @include fixedBgAttachment;

    .text-wrapper {
        max-width: 844px;
        margin-left: auto;
        margin-right: auto;

        @media (max-width: $collapse-bp) {
            max-width: 95%;
        }
    }

}

.text-wrapper>*:not(:last-child) {
    margin-bottom: 22px;

    a {}
}
</style>