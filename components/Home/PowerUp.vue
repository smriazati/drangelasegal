<template>
  <div class="power-up" ref="gradientBgAnimation">
    <div class="text-wrapper">
      <h2 class="display-heading-style">Power Up</h2>
      <p class="display-text-style">{{ data }}</p>
    </div>
  </div>
</template>
  <script>
export default {
  props: {
    data: {
      type: String,
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
  min-height: 100vh;
  background: linear-gradient(
    194.53deg,
    rgba(243, 238, 231, 0.8) -4.22%,
    rgba(253, 249, 223, 0.8) 11%,
    rgba(218, 196, 162, 0.8) 57.17%,
    rgba(172, 139, 85, 0.8) 96.52%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    background: linear-gradient(
      194.53deg,
      rgba(243, 238, 231, 0.8) -4.22%,
      rgba(253, 249, 223, 0.8) 11%,
      rgba(218, 196, 162, 0.8) 57.17%,
      rgba(172, 139, 85, 0.8) 96.52%
    );
    animation: 10s linear infinite RotateBg;
    position: absolute;
    top: -50vw;
    left: -50vw;
    width: 200vw;
    height: 200vw;

    @media (orientation: portrait) {
      top: -50vh;
      left: -50vh;
      width: 200vh;
      height: 200vh;
    }
  }

  .text-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 95%;
    @media (max-width: $collapse-bp) {
      flex-direction: column;
    }
  }

  h2 {
    @media (max-width: $collapse-bp) {
      text-align: right;
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
      max-width: 80%;
      margin-right: auto;
    }
  }
}
</style>