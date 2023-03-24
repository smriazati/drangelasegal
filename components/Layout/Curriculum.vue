<template>
    <div class="wrapper">
        <div class="text-wrapper">
            <h2 class="heading-style text-center">Curriculum</h2>
            <div v-if="description" class="rte">
                <SanityContent :blocks="description.rte"></SanityContent>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        description: {
            type: Object,
        }
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 100px 0;
    background: $taupe;

    h2 {
        margin-bottom: 60px;
    }

    .text-wrapper {
        max-width: 918px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 22px;
    }

    .rte p:first-child {
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.02em;
    }
}
</style>