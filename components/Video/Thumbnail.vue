<template>
  <div class="video-thumbnail">
    <div class="image-wrapper link-hover" @click="setActiveModal(item.id)">
      <figure v-if="item.img.url">
        <img :src="$urlFor(item.img.url).width(imgWidth).height(imgHeight)" :alt="item.img.alt" />
      </figure>
      <figure v-else>
        <img :src="`https://via.placeholder.com/${imgWidth}x${imgHeight}/C4C4C4/C4C4C4?Text=`"
          alt="gray placeholder image" />
      </figure>
      <figcaption v-if="item.description">
        <p>{{ item.description }}</p>
      </figcaption>
    </div>

    <div class="text-wrapper text-center">
      <h3 v-if="item.title">{{ item.title }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imgWidth: 338 * 3,
      imgHeight: 218 * 3,
    };
  },
  methods: {
    setActiveModal(payload) {
      // console.log(payload);
      this.$emit("open-lightbox", payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  position: relative;
  // @include stackedDivs;
  place-items: center;
  margin-bottom: 12px;
  overflow: hidden;

  figure {
    display: flex;
  }

  figure,
  img {
    min-width: 100%;
    min-height: 100%;
  }

  &:after {
    content: "";
    grid-column: 1/1;
    grid-row: 1/1;
    position: relative;
    width: 44px;
    height: 44px;
    background-size: contain;
    background-image: url("/play.svg");
    background-repeat: no-repeat;
  }

  &:hover {
    figcaption {
      opacity: 1;
    }
  }

  figcaption {
    opacity: 0;
    transition: .5s ease all;
    background: rgb(172 139 85 / 90%);
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    padding: 15px;
    top: 0;
    width: 100%;
    height: 100%;

    * {
      @include inputStyle;
    }
  }
}
</style>