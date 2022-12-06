<template>
  <div class="learn-page">
    <div v-if="data.video">
      <LearnFeaturedVids :data="data.video" />
    </div>
    <div v-if="data.courses">
      <LearnCourses :data="data.courses" />
    </div>
    <div v-if="data.cta">
      <SiteCTA :data="data.cta" />
    </div>
  </div>
</template>
  
<script>
import { groq } from "@nuxtjs/sanity";
import Thumbnail from "../components/Video/Thumbnail.vue";
const query = groq`
*[_type in ["learn"]][0]{
  "courses": {
    "heading": courses.heading,
    "subhead": courses.subhead,
    "text": courses.text,
    "button": courses.btn,
    "img": {
      "url": courses.img.image.asset->url,
      "alt": courses.img.image.asset->altText
    },
    "bannerImg": {
      "url": courses.banner_img.image.asset->url,
      "alt": courses.banner_img.image.asset->altText
    }
  },
  cta,
  "video": {
    "heading": video.heading,
    "subhead": video.subhead,
    "text": video.text,
    "videos": video.videos[]->{
      title,
      description,
      id,
       "img": {
         "url": img.image.asset->url,
         "alt": img.image.asset->altText
       },
    }
  }
}
  `;

export default {
  head() {
    return {
      title: "Learn",
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
  components: { Thumbnail },
};
</script>
  
<style lang="scss">
.learn-page {
  padding-bottom: 0 !important;
}
</style>
  