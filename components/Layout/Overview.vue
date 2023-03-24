<template>
    <div>
        <div class="layout-image-text">
            <div v-if="image" class="image-wrapper">
                <figure>
                    <img :src="$urlFor(image.asset._ref).auto('format').url()" />
                </figure>
            </div>
            <div class="text-wrapper text-center">
                <div class="text-wrapper-inner">

                    <h2 v-if="title" class="heading-style">{{ title }}</h2>
                    <p v-if="price" class="post-preview-title-style"> {{ price }}</p>
                    <p v-if="date" class="title-style"> {{ date }}</p>
                    <p v-if="location" class="title-style"> {{ location }}</p>
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
        date: {
            type: String,
        },
        location: {
            type: String,
        },
        price: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
.text-wrapper-inner>* {
    margin-bottom: 12px;
}

.title-style {
    text-transform: none;
}
</style>