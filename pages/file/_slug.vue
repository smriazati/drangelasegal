<template>
    <div>
        <div v-if="item" class="flex-col text-center file-container">
            <p class="large-text-style">If the file does not open in your browser automatically, <a
                    :href="`${item.file.url}?dl=${item.slug.current}.${item.file.extension}`">click here to start the
                    download</a>.</p>
            <div class="flex-row align-center">
                <a :href="`${item.file.url}?dl=${item.slug.current}.${item.file.extension}`" class="btn-underline">
                    <span>Download file</span>
                </a>
                <a :href="`${item.file.url}`" class="btn-underline">
                    <span>Open file in browser</span>
                </a>
            </div>

        </div>
    </div>
</template>



<script>

import { groq } from "@nuxtjs/sanity";

export default {
    async asyncData({ params, error, $sanity }) {
        const query = groq`
        *[_type == "files" && slug.current=='${params.slug}']{
            _id,
            "file": file.asset->,
            slug,
            title
        }[0]
    `;
        const item = await $sanity.fetch(query).then((res) => res);

        if (item) {
            const link = `${item.file.url}`;
            if (process.browser) {
                window.open(link, '_blank')
            }
            return {
                item: item
            }
        } else {
            error({ statusCode: 404 })
        }

    },
    head() {
        return {
            title: this.$route.params.slug
        };
    },
    layout: 'file'
};
</script>

<style lang="scss">
.file-container {
    max-width: 400px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p a {
        font-size: inherit;
        font-family: inherit;
        color: inherit;
    }

    .flex-row {
        align-items: center;

        a {
            margin: 12px;
        }
    }
}
</style>