<template>
  <div class="video-lightbox" ref="top">
    <div class="stacked-divs">
      <div class="video-lightbox-wrapper">
        <div class="close-overlay" @click="closeLightbox">
          <button class="btn-underline">Close</button>
        </div>
        <div class="embed-wrapper">
          <div v-if="isLoading">
            <p class="input-style">Loading Video...</p>
          </div>
          <client-only>
            <vimeo-player ref="player" :video-id="data.id" :options="options" @ready="playerReady()"
              class="video-player" :class="isLoading ? 'hide' : 'show'" />
          </client-only>
        </div>
        <div class="text-wrapper">
          <h3 class="display-text-style">{{ data.title }}</h3>
          <p v-if="data.description" class="display-text-style">{{ data.description }}</p>
        </div>
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
  data() {
    return {
      options: {
        byline: false,
        portrait: false,
      },
      isLoading: true,
    };
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        this.closeLightbox();
      }
    });

    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      const element = this.$refs.top;
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    closeLightbox(payload) {
      // console.log(payload);
      this.$emit("close-lightbox", payload);
    },
    playerReady() {
      // console.log("im ready", this.$refs.player);
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss">
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.8;
  }
}

.video-lightbox {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 511;

  .close-overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    animation: fadeIn 0.3s cubic-bezier(0.44, 0.66, 0.4, 0.89) forwards;
    background: $grey-brown;

    &:hover {
      cursor: pointer;
    }

    button {
      position: fixed;
      top: 24px;
      right: 24px;
      color: $white;

      &:not(:hover) {
        border-color: $white;
      }
    }
  }

  .video-lightbox-wrapper {
    display: grid;
    grid-template-columns: auto minmax(90%, 895px) auto;
    grid-template-rows: auto auto auto;
    min-height: 100vh;

    .embed-wrapper {
      position: relative;
      grid-row: 2 / 3;
      grid-column: 2 / 3;
      place-self: center;
      width: 100%;
      height: 100%;
      @include stackedDivs;
      place-items: center;
      text-align: center;
      color: $white;
      max-width: 895px;
    }

    .text-wrapper {
      position: relative;
      grid-row: 3 / 4;
      grid-column: 2 / 3;
      color: $white;
      text-align: center;
      margin-top: 24px;

      p {
        margin-top: 22px;
        font-size: 14px;
        font-style: italic;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0.02em;
        text-align: center;
      }
    }
  }
}

.video-player {
  transition: 0.3s ease-in opacity;

  &.show {
    opacity: 1;
  }

  &.hide {
    opacity: 0;
  }

  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;

  /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
</style>