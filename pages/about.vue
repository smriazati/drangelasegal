<template>
  <div class="about-page no-page-padding">
    <div v-if="data.about">
      <div class="layout-image-text">
        <div class="image-wrapper">
          <figure v-if="data.about.img">
            <img
              :src="$urlFor(data.about.img.url).auto('format')"
              :alt="data.about.img.alt"
            />
          </figure>
        </div>
        <div class="text-wrapper">
          <div class="text-wrapper-inner">
            <h2 class="heading-style">Meet Angela Segal, PHD</h2>
            <div v-if="data.about.text" class="rte">
              <SanityContent :blocks="data.about.text.rte" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="data.cta">
      <SiteCTA :data="data.cta" />
    </div>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
  *[_type in ["about"]][0]{
    "about": {
    "img": {
      "url": about.about_img.image.asset->url,
      "alt": about.about_img.image.asset->altText
    },
    "text": about.text
  },
  "cta": {
    "heading": cta.heading,
    "link": cta.link
  }
}
`;

export default {
  head() {
    return {
      title: "Home",
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
};
</script>
<style lang="scss">
.about-page {
  .layout-image-text {
    .text-wrapper-inner {
      @media (min-width: $collapse-bp) {
        padding-top: 120px;
        padding-bottom: 120px;
      }
      @media (max-width: $collapse-bp) {
        padding-top: 24px;
        padding-bottom: 24px;
      }
    }
    h2 {
      margin-bottom: 36px;
    }
  }
}
</style>

