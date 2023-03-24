<template>
    <div>
        <div class="layout-image-text" :class="data.left ? '' : 'flex-row-reverse'">
            <div v-if="data.img" class="image-wrapper">
                <figure v-if="data.img.url">
                    <img :src="$urlFor(data.img.url).auto('format')" :alt="data.img.alt" />
                </figure>
            </div>
            <div class="text-wrapper">
                <div class="text-wrapper-inner">
                    <h2 v-if="data.headline" class="heading-style">{{ data.headline }}</h2>
                    <div v-if="data.text" class="rte">
                        <SanityContent :blocks="data.text.rte" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style lang="scss">
.flex-row-reverse {
    flex-direction: row-reverse;
}
</style>