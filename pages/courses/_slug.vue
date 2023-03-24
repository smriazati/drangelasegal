<template>
    <div class="page-container page-container-no-padding no-page-padding">
        <div v-if="data" class="course-page">
            {{ data }}
            <div v-for="(item, index) in data.sections" :key="item._key" :class="sectionClasses[index]">
                <div v-if="item._type === 'intro'" class="section-intro">
                    <LayoutBanner :title="data.course?.titleShort" :text="data.course?.descShort"></LayoutBanner>
                </div>
                <div v-if="item._type === 'overview'" class="section-overview">
                    <LayoutOverview :image="item.img" :title="data.course?.titleFull" :price="data.course?.price"
                        :date="data.course?.date" :location="data.course?.location"></LayoutOverview>
                </div>
                <div v-if="item._type === 'highlights'" class="section-highlights">
                    <LayoutHighlights :highlights="data.course?.highlights" :image="item.img">
                    </LayoutHighlights>
                </div>
                <div v-if="item._type === 'deliverables'">
                    <LayoutDeliverables :deliverables="data.course?.deliverables">
                    </LayoutDeliverables>
                </div>
                <div v-if="item._type === 'callout'">
                    <LayoutCallout :title="item.title" :text="item.text" :image="item.img" :link="data.course?.link">
                    </LayoutCallout>
                </div>
                <div v-if="item._type === 'cta'">
                    <LayoutCTA :title="item.heading" :linkText="item.linkText" :link="data.course?.link">
                    </LayoutCTA>
                </div>
                <div v-if="item._type === 'testimonials'">
                    <LayoutTestimonials :testimonials="data.course?.testimonials">
                    </LayoutTestimonials>
                </div>
                <div v-if="item._type === 'bio'">
                    <LayoutBio :image="item.img" :title="item.headline" :text="item.text"></LayoutBio>
                </div>
                <div v-if="item._type === 'faqs'">
                    <LayoutFaqs :faqs="data.course?.faqs"></LayoutFaqs>
                </div>
                <div v-if="item._type === 'curriculum'">
                    <LayoutCurriculum :description="data.course?.descFull"></LayoutCurriculum>
                </div>
                <div v-if="item._type === 'newsletter'">
                    <LayoutNewsletter :newsletter="item"></LayoutNewsletter>
                </div>
            </div>
        </div>

    </div>
</template>


<script>

import { groq } from "@nuxtjs/sanity";

export default {
    async asyncData({ params, $sanity }) {
        const query = groq`
        *[_type == "salesPages" && slug.current=='${params.slug}'][0]{
            "course": course->,
            "sections": sections[],
            slug
        }
    `;
        const data = await $sanity.fetch(query).then((res) => res);
        return { data };
    },
    head() {
        return {
            title: this.data.course?.titleShort
        };
    },
    computed: {
        sectionClasses() {
            let newArr;

            const checkElementType = (itemType) => {
                if (itemType === 'overview' || itemType === 'highlights') {
                    return true
                }
            }
            if (this.data.sections) {
                const refArr = this.data.sections.map((item, index) => {
                    if (checkElementType(item._type)) {
                        return true
                    }
                })
                newArr = this.data.sections.map((item, index) => {
                    if (checkElementType(item._type)) {
                        const prevItem = this.data.sections[index - 1]
                        const prevType = prevItem?._type;
                        if (checkElementType(prevType)) {
                            if (refArr[index - 1]) {
                                let indexOfUndefined = undefined;
                                for (var i = 0; i < this.data.sections.length; i++) {
                                    if (refArr[index - i] == undefined) {
                                        indexOfUndefined = i
                                        break
                                    }
                                }
                                if (indexOfUndefined % 2 === 0) {
                                    return 'reverse'
                                }
                            }
                        }
                    }
                })
            }

            return newArr;
        }
    }
};
</script>

<style lang="scss">
.reverse {
    .layout-image-text>* {
        grid-row: 1 / 2;
    }

    .layout-image-text>*:first-child {
        grid-column: 2 / 3;

        @media (max-width: $collapse-bp) {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
        }
    }

    .layout-image-text>*:last-child {
        grid-column: 1 / 2;

        @media (max-width: $collapse-bp) {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
        }
    }
}

.section-overview,
.section-highlights {
    .layout-image-text {
        grid-template-rows: 50vw;
    }
}
</style>