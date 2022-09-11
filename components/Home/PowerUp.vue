<template>
  <div class="power-up">
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
  .text-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 95%;
  }

  p {
    flex: 0 0 476px;
    @media (min-width: $collapse-bp) {
      margin-left: 200px;
    }
  }
}
</style>