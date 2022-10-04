<template>
  <div
    :lazy-background="$urlFor(imgUrl).auto('format')"
    class="banner-wrapper bg-full-width bg-fixed"
  ></div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.banner-wrapper {
  height: 512px;
  width: 100%;
  overflow: hidden;
  @include fixedBgAttachment;
}
</style>