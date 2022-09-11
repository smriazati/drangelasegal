<template>
  <div class="home-banner">
    <figure>
      <img src="/media/home/1.jpg" alt="" />
    </figure>
    <figure>
      <img src="/media/home/2.jpg" alt="" />
    </figure>
    <figure>
      <img src="/media/home/3.jpg" alt="" />
    </figure>
  </div>
</template>

<style lang="scss">
.home-banner {
  background: $sand;
  height: calc(100vh - $headerHeight);
  max-height: calc(100vh - $headerHeight);
  overflow: hidden;
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

