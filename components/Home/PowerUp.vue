<template>
  <div class="power-up" ref="gradientBgAnimation">
    <div v-if="data">
      <div class="text-wrapper" v-if="data.text">
        <h2 class="display-heading-style">Power Up</h2>
        <p class="display-text-style">{{ data.text }}</p>
      </div>
      <div v-if="data.hasNewsletter" class="newsletter-wrapper">
        <SystemNewsletter :data="data.newsletter" />
      </div>
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
@keyframes RotateBg {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.power-up {
  background: linear-gradient(194.53deg,
      rgba(243, 238, 231, 0.8) -4.22%,
      rgba(253, 249, 223, 0.8) 11%,
      rgba(218, 196, 162, 0.8) 57.17%,
      rgba(172, 139, 85, 0.8) 96.52%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    background: linear-gradient(194.53deg,
        rgba(243, 238, 231, 0.8) -4.22%,
        rgba(253, 249, 223, 0.8) 11%,
        rgba(218, 196, 162, 0.8) 57.17%,
        rgba(172, 139, 85, 0.8) 96.52%);
    animation: 10s linear infinite RotateBg;
    position: absolute;
    top: -50vw;
    left: -50vw;
    width: 200vw;
    height: 250vw;

    @media (orientation: portrait) {
      top: -50vh;
      left: -50vh;
      width: 200vh;
      height: 200vh;
    }
  }

  .text-wrapper {
    min-height: 80vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 95%;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: $collapse-bp) {
      max-width: 90vw;
      flex-direction: column;
      padding: 12px;
      text-align: center;
    }

    h2 {
      @media (max-width: $collapse-bp) {
        text-align: center;
        font-size: 86px;
        line-height: 79px;
        letter-spacing: 0.02em;
        margin-bottom: 64px;
        width: 100%;
      }
    }

    p {
      @media (min-width: $collapse-bp) {
        flex: 0 0 476px;
        margin-left: 200px;
      }

      @media (max-width: $collapse-bp) {
        // max-width: 80%;
        // margin-right: auto;
      }
    }
  }



  .newsletter-wrapper {
    text-align: center;
    position: relative;
    @include stackedDivs;
    grid-template-rows: 420px;

    @media (max-width: 880px) {
      grid-template-rows: 560px;
    }

    // @media (max-width: 680px) {
    //   grid-template-rows: 600px;
    // }

    @media (max-width: 450px) {
      grid-template-rows: 660px;
    }

    &:before {
      grid-column: 1 / 1;
      grid-row: 1 / 1;
      position: relative;
      content: '';
      background: $sunlight;
      @include glowBox;
      padding: 0; // reset glowbox
      width: 100%;
      height: 100%;

      width: 880px;
      height: 880px;
      margin-left: auto;
      margin-right: auto;

      @media (max-width: 880px) {
        height: 150vw;
        width: 130vw;
      }

      @media (max-width: 350px) {
        height: 800px;
        width: 600px;
      }

      left: 0;
      top: 0;
      border-radius: 50% 50% 0 0;
    }

    .newsletter-form {
      place-self: center;
      position: relative;
      max-width: 496px;
      margin-left: auto;
      margin-right: auto;

      @media (max-width: 880px) {
        max-width: 70vw;
      }


      h2 {
        @include headingStyle;
        max-width: 100%;
        text-align: center;
      }

      p {
        @include textStyle;
      }

    }

  }
}
</style>