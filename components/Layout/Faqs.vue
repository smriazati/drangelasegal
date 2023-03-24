<template>
    <div>
        <div v-if="faqs" class="wrapper">
            <h2 class="heading-style text-center">Frequently Asked Questions</h2>
            <ul class="accordion-wrapper">
                <li v-for="item in faqs" :key="item._key" class="accordion-item-wrapper">
                    <AccordionItem :question="item.question" :answer="item.answer"></AccordionItem>
                </li>
            </ul>
            <div class="contact-wrapper">
                <p>Still have questions? <NuxtLink to="/contact" class="link-underline">Get in touch. </NuxtLink>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        faqs: {
            type: Array,
        }
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 180px 0;
    max-width: 918px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: $collapse-bp) {
        padding: 90px 22px;
    }
}

ul {
    list-style: none;
}

.accordion-wrapper {
    margin-top: 88px;
    border-bottom: 1px solid $golden;
}

.accordion-item-wrapper {
    border-top: 1px solid $golden;
}

.contact-wrapper {
    margin-top: 44px;

    p,
    a {
        @include monoTypeface;
        font-size: 10px;
        font-weight: 400;
        line-height: 13px;
    }
}
</style>