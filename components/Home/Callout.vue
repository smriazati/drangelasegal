<template>
  <div class="callout-item">
    <div
      :style="`background-image: url(${$urlFor(data.img.url).auto('format')})`"
      class="callout-item-wrapper bg-full-width not-lazy"
    >
      <div
        v-if="data.button.type === 'internal' && data.button.destination"
        class="callout-item-link"
      >
        <nuxt-link :to="`/${data.button.destination}`">
          <HomeCalloutContent :data="data" />
        </nuxt-link>
      </div>

      <div
        v-if="data.button.type === 'external' && data.button.url"
        class="callout-item-link"
      >
        <a :href="`/${data.button.url}`" target="_blank">
          <HomeCalloutContent :data="data" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import LinkObject from "../System/LinkObject.vue";
import CalloutContent from "./CalloutContent.vue";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components: { LinkObject, CalloutContent },
};
</script>

<style lang="scss">
.callout-item {
  width: 50vw;
  height: 50vw;
  overflow: hidden;
  .callout-item-wrapper {
    width: 100%;
    height: 100%;

    text-align: center;
    .callout-item-link {
      width: 100%;
      height: 100%;
      > a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>