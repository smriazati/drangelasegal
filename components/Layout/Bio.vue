<template>
    <div>
        <div class="layout-image-text">
            <div v-if="image" class="image-wrapper">
                <figure>
                    <img :src="$urlFor(image.asset._ref).auto('format').url()" />
                </figure>
            </div>
            <div class="text-wrapper">
                <div class="text-wrapper-inner">
                    <h2 v-if="title" class="heading-style">{{ title }}</h2>
                    <p v-if="text">
                        {{ text }}
                    </p>
                    <NuxtLink to="/about" class="link-underline"><span>Read more about Angela</span></NuxtLink>
                </div>
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
        }
    },
};
</script>

<style lang="scss" scoped>
.text-wrapper-inner>*:not(:last-child) {
    margin-bottom: 40px;
}
</style>