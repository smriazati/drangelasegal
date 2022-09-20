<template>
  <div class="home-banner">
    <figure v-if="data.img1.url">
      <img :alt="data.img1.alt" />
    </figure>
    <figure v-if="data.img2.url">
      <img :alt="data.img2.alt" />
    </figure>
    <figure v-if="data.img3.url">
      <img :alt="data.img3.alt" />
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
<style lang="scss">
.home-banner {
  height: 100%;
  @include stackedDivs;
  figure {
    width: 100%;
    min-width: 100%;
    max-height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

$animationDuration: 6s;
.home-banner {
  figure {
    opacity: 0;
    mix-blend-mode: multiply;
  }
  figure:nth-child(1) {
    animation: $animationDuration ease-in infinite forwards fadeInOut;
  }
  figure:nth-child(2) {
    animation: $animationDuration ease-in 2s infinite forwards fadeInOut;
  }
  figure:nth-child(3) {
    animation: $animationDuration ease-in 4s infinite forwards fadeInOut;
  }
}
</style>

