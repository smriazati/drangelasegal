<template>
  <div class="callout-item-content">
    <div class="text-wrapper">
      <h3 v-if="data.title">{{ data.title }}</h3>
    </div>
    <div v-if="data.button" class="button-wrapper">
      <SystemLinkObject :data="data.button" />
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
.callout-item-content {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  place-items: center;
  .text-wrapper {
    grid-row: 2 / 3;
  }
  .button-wrapper {
    grid-row: 3 / 4;
  }
  h3 {
    @include calloutStyle;
    color: $white;
  }
  .button-wrapper a {
    @include footerNav;
    color: $white;
    @include linkUnderline($white);
  }
}
</style>