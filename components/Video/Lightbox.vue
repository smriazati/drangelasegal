<template>
  <div class="video-lightbox">
    <div class="stacked-divs">
      <div class="video-lightbox-wrapper">
        <div class="close-overlay" @click="closeLightbox">
          <button class="btn-underline">Close</button>
        </div>
        <div class="embed-wrapper">
          <client-only>
            <vimeo-player
              ref="player"
              :video-id="data.id"
              :options="options"
              class="video-player"
            />
          </client-only>
        </div>
        <div class="text-wrapper">
          <h3 class="text-style">{{ data.title }}</h3>
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
    };
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      //   console.log("keydown", e.keyCode);
      if (e.keyCode === 27) {
        this.closeLightbox();
      }
    });
  },
  methods: {
    closeLightbox(payload) {
      // console.log(payload);
      this.$emit("close-lightbox", payload);
    },
  },
};
</script>

<style lang="scss">
.video-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 11;
  .close-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: $grey-brown;
    opacity: 0.8;
    width: 100%;
    height: 100vh;
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
      display: flex;
      max-width: 895px;
    }
    .text-wrapper {
      position: relative;
      grid-row: 3 / 4;
      grid-column: 2 / 3;
      color: $white;
      text-align: center;
    }
  }
}

.video-player {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
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