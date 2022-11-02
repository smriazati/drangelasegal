<template>
  <div class="courses-wrapper">
    <div class="courses-info-wrapper layout-image-text">
      <div class="image-wrapper">
        <figure v-if="data.img">
          <img
            :src="$urlFor(data.img.url).auto('format')"
            :alt="data.img.alt"
          />
        </figure>
      </div>
      <div class="text-wrapper">
        <div class="text-wrapper-inner text-center">
          <h2 v-if="data.heading" class="title-style">{{ data.heading }}</h2>
          <h3 v-if="data.subhead" class="heading-style">{{ data.subhead }}</h3>
          <p v-if="data.text">{{ data.text }}</p>
          <div class="button" v-if="data.button">
            <SystemLinkObject :data="data.button" class="btn-fill-div"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="data.bannerImg">
      <SiteBannerFixed :imgUrl="data.bannerImg.url" />
    </div>
  </div>
</template>
<script>
import LinkObject from "../System/LinkObject.vue";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components: { LinkObject },
};
</script>
  
<style lang="scss">
.courses-wrapper {
  margin-top: 200px;
}
.courses-info-wrapper {
  @media (min-width: $collapse-bp) {
    min-height: 100vh;
    height: 100vh;
  }
  .text-wrapper {
    h2 {
      margin-bottom: 4px;
    }
    h3 {
      margin-bottom: 24px;
    }
    p {
      margin-bottom: 60px;
    }
  }
}
</style>
      