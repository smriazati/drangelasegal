<template>
    <div>
        <div v-if="testimonials" class="text-wrapper text-center">
            <h2 class="title-style">Testimonials</h2>
            <ul>
                <li v-for="item in testimonials" :key="item._key">
                    <figure>
                        <blockquote v-if="item.quote" class="quote-style">&ldquo;{{ item.quote }}&rdquo;</blockquote>
                        <figcaption v-if="item.attribution" class="quote-style">&mdash;{{ item.attribution }}</figcaption>
                    </figure>
                </li>
            </ul>

        </div>
    </div>
</template>
<script>
export default {
    props: {
        testimonials: {
            type: Array,
        }
    },
};
</script>

<style lang="scss" scoped>
.text-wrapper {
    padding: 100px 0;
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
        flex: 0 0 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: $collapse-bp) {
            &:not(:last-child) {
                margin-bottom: 30px;
            }
        }
    }
}
</style>