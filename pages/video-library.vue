<template>
  <div class="page-container video-library-page">
    <div class="page-title">
      <h1>Explore</h1>
      <h2>{{ data.page.title }}</h2>
      <p>{{ data.page.desc }}</p>
    </div>
    <div v-if="data.videos">
      <VideoList :data="data.videos" />
    </div>
  </div>
</template>
  
<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
*[_type in ["videoLibrary", "videos"]]{
  'page': *[_type=='videoLibrary']{
    title,
    desc,
  }[0],
  'videos': *[_type=='videos']{
    title,
    description,
    id,
    "img": {
      "url": img.image.asset->url,
      "alt": img.image.asset->altText
    },
  }[0...24]|order(orderRank),
}[0]
  `;

export default {
  head() {
    return {
      title: "Video Library",
    };
  },
  data() {
    return {
      activeModal: undefined,
    };
  },
  methods: {
    setActiveModal(payload) {
      this.activeModal = payload;
    },
    unsetActiveModal() {
      this.activeModal = undefined;
    },
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
};
</script>
  
<style lang="scss">
.video-library-page {
  .video-list {
    margin-top: 84px;
  }
}
</style>