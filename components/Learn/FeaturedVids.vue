<template>
  <div class="featured-videos">
    <div v-if="data" class="page-title">
      <h1>{{ data.heading }}</h1>
      <h2>{{ data.subhead }}</h2>
      <p>{{ data.text }}</p>
    </div>
    <div class="featured-videos-wrapper video-list">
      <VideoThumbnail
        v-for="(item, index) in data.videos"
        :key="`${item.id}${index}`"
        :item="item"
      />
    </div>
    <div class="button-wrapper text-center">
      <nuxt-link to="/videolibrary" class="btn-underline"
        >View Video Library</nuxt-link
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
  
<style lang="scss">
.featured-videos-wrapper {
  margin-top: 55px;
  margin-bottom: 55px;
}
</style>
      