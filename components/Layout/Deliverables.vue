<template>
    <div>
        <div v-if="deliverables" class="text-wrapper text-center">
            <h2 class="title-style">What you get</h2>
            <ul>
                <li v-for="item in deliverables" :key="item._key">
                    <p v-if="item.main" class="post-preview-title-style">{{ item.main }}</p>
                    <p v-if="item.subtext" class="subtext-style">{{ item.subtext }}</p>
                </li>
            </ul>

        </div>
    </div>
</template>
<script>
export default {
    props: {
        deliverables: {
            type: Array,
        }
    },
};
</script>

<style lang="scss" scoped>
.text-wrapper {
    padding: 100px 0;
    border-top: 1px solid #CACACA;
}

.subtext-style {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.02em;
    margin-top: 10px;
}

ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;

    @media (max-width: $collapse-bp) {
        flex-direction: column;
    }

    >* {
        flex: 0 0 25%;
        min-height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (min-width: $collapse-bp) {
            padding: 0 30px;
        }

        &:not(:last-child) {

            @media (min-width: $collapse-bp) {
                border-right: 1px solid $golden;
            }

            @media (max-width: $collapse-bp) {
                border-bottom: 1px solid $golden;
            }
        }
    }
}
</style>