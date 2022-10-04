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
  @media (min-width: $collapse-bp) {
    width: 50vw;
    height: 50vw;
  }
  @media (max-width: $collapse-bp) {
    width: 100vw;
    height: 100vw;
  }
  overflow: hidden;
  .callout-item-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: $grey-brown;
      mix-blend-mode: multiply;
      opacity: 0;
      transition: 0.5s ease all;
    }
    &:hover:before {
      opacity: 0.5;
    }
    .callout-item-link {
      width: 100%;
      height: 100%;
      position: relative;
      > a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>