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
                    <h2 class="title-style">Course Highlights</h2>
                    <ul>
                        <li v-for="(item, index) in highlights" :key="index">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        highlights: {
            type: Array,
        },
        image: {
            type: Object
        }
    },
};
</script>

<style lang="scss" scoped>
ul {
    margin-top: 30px;
    @include listStyle;
}
</style>