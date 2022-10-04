<template>
  <div
    :lazy-background="$urlFor(data.img.url).auto('format')"
    class="testimonial bg-full-width"
  >
    <figure v-if="data.quote && data.name">
      <div class="text-wrapper glow-box">
        <blockquote>&ldquo;{{ data.quote }}&rdquo;</blockquote>
        <figcaption>&mdash;{{ data.name }}</figcaption>
      </div>
    </figure>
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
  
<style lang="scss" scoped>
.testimonial {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @include fixedBgAttachment;

  figure {
    max-width: 844px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: $collapse-bp) {
      max-width: 95%;
    }
    text-align: center;
    blockquote {
      @include quoteStyle;
    }
    figcaption {
      margin-top: 16px;
      @include titleStyle;
    }
  }
}
</style>