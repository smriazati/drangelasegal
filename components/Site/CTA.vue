<template>
  <div class="cta-banner-wrapper">
    <div class="text-wrapper">
      <h3 v-if="data.heading">{{ data.heading }}</h3>
    </div>
    <div class="button-wrapper" v-if="data.link">
      <SystemLinkObject :data="data.link" />
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
.cta-banner-wrapper {
  background: $taupe;
  padding: 120px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: $collapse-bp) {
    flex-direction: column;
    align-items: flex-start;
  }
  h3 {
    @include ctaStyle;
  }
  .button-wrapper {
    @media (min-width: $collapse-bp) {
      padding-left: 24px;
    }
    @media (max-width: $collapse-bp) {
      padding-top: 24px;
    }
    a {
      @include inputStyle;
      @include btnUnderline;
    }
  }
}
</style>