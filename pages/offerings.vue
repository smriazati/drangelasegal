<template>
  <div class="offerings-page no-page-padding" ref="top">
    <div class="offerings-bg-imgs stacked-divs">
      <div
        v-if="data.offering1"
        :class="activeOffering === 1 ? 'show' : 'hide'"
        :lazy-background="
          $urlFor(data.offering1.img.url).width(2000).auto('format')
        "
        class="bg-full-width bg-fixed"
      ></div>
      <div
        v-if="data.offering2"
        :class="activeOffering === 2 ? 'show' : 'hide'"
        :lazy-background="
          $urlFor(data.offering2.img.url).width(2000).auto('format')
        "
        class="bg-full-width bg-fixed"
      ></div>
      <div
        v-if="data.offering3"
        :class="activeOffering === 3 ? 'show' : 'hide'"
        :lazy-background="
          $urlFor(data.offering3.img.url).width(2000).auto('format')
        "
        class="bg-full-width bg-fixed"
      ></div>
      <div
        v-if="data.offering4"
        :class="activeOffering === 4 ? 'show' : 'hide'"
        :lazy-background="
          $urlFor(data.offering4.img.url).width(2000).auto('format')
        "
        class="bg-full-width bg-fixed"
      ></div>
    </div>

    <div class="offerings-page-wrapper">
      <button @click="setActiveOffering(1)"><span>Workshops</span></button>
      <button @click="setActiveOffering(2)"><span>Individuals</span></button>
      <button @click="setActiveOffering(3)"><span>Corporate</span></button>
      <button @click="setActiveOffering(4)"><span>Events</span></button>

      <div class="offerings-wrapper stacked-divs">
        <div
          v-if="data.offering1"
          :class="activeOffering === 1 ? 'show' : 'hide'"
        >
          <OfferingItem :data="data.offering1" />
        </div>
        <div
          v-if="data.offering2"
          :class="activeOffering === 2 ? 'show' : 'hide'"
        >
          <OfferingItem :data="data.offering2" />
        </div>
        <div
          v-if="data.offering3"
          :class="activeOffering === 3 ? 'show' : 'hide'"
        >
          <OfferingItem :data="data.offering3" />
        </div>
        <div
          v-if="data.offering4"
          :class="activeOffering === 4 ? 'show' : 'hide'"
        >
          <OfferingItem :data="data.offering4" />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
*[_type in ["offerings"]][0]{
  "offering1": {
    "title": offering_1.title,
    "desc": offering_1.desc,
    "img": {
        "url": offering_1.img.image.asset->url,
        "alt": offering_1.img.image.asset->altText
      }
  },
  "offering2": {
    "title": offering_2.title,
    "desc": offering_2.desc,
    "img": {
        "url": offering_2.img.image.asset->url,
        "alt": offering_2.img.image.asset->altText
      }
  },
  "offering3": {
    "title": offering_3.title,
    "desc": offering_3.desc,
    "img": {
        "url": offering_3.img.image.asset->url,
        "alt": offering_3.img.image.asset->altText
      }
  },
  "offering4": {
    "title": offering_4.title,
    "desc": offering_4.desc,
    "img": {
        "url": offering_4.img.image.asset->url,
        "alt": offering_4.img.image.asset->altText
      },
    "events": *[_type=='events'][0...10]{_id, name, when, where, button}
  }
}
  `;

export default {
  head() {
    return {
      title: "Offerings",
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
  data() {
    return {
      activeOffering: 1,
    };
  },
  computed: {
    activeOfferingImg() {
      if (this.activeOffering == 1) {
        return this.data.offering1.img.url;
      }
      if (this.activeOffering == 2) {
        return this.data.offering2.img.url;
      }
      if (this.activeOffering == 3) {
        return this.data.offering3.img.url;
      }
      if (this.activeOffering == 4) {
        return this.data.offering4.img.url;
      }
      return null;
    },
  },
  methods: {
    setActiveOffering(index) {
      this.activeOffering = index;
      this.scrollTop();
    },
    scrollTop() {
      const element = this.$refs.top;
      console.log("hi,", element);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
};
</script>
  
  <style lang="scss">
.offerings-page {
  position: relative;
  .offerings-bg-imgs {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    > div {
      transition: 2s ease opacity;
      &.show.lazyLoad.isLoaded {
        opacity: 1;
      }
      &.hide.lazyLoad.isLoaded {
        opacity: 0;
      }
    }
  }
}
.offerings-page-wrapper {
  padding: 65px 16px;
  display: grid;
  grid-template-columns: 1fr minmax(720px, 1fr) 1fr;
  grid-template-rows: 1fr auto 1fr;
  overflow: hidden;
  button {
    position: relative;
  }
  button:nth-child(1) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
  button:nth-child(2) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
  button:nth-child(3) {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
  }
  button:nth-child(4) {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
  }
  .offerings-wrapper {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }

  button {
    display: flex;
    span {
      @include inputStyle;
      color: $white;
    }
    &:before {
      content: "";
      background: url("/chevron-up.svg") center center no-repeat;
      width: 20px;
      height: 20px;
    }
    $animationDistance: 1rem;
    &:nth-child(1) {
      align-items: center;
      span {
        margin-left: 12px;
      }
      &:before {
        transform: rotate(-90deg) translateY(0);
        transition: 0.3s ease all;
      }
      &:hover:before {
        transform: rotate(-90deg) translateY(-($animationDistance));
      }
    }
    &:nth-child(2) {
      flex-direction: column;
      align-items: center;
      span {
        margin-top: 12px;
      }
      &:before {
        transform: rotate(0deg) translateY(0);
        transition: 0.3s ease all;
      }
      &:hover:before {
        transform: rotate(0deg) translateY(-($animationDistance));
      }
    }
    &:nth-child(3) {
      flex-direction: row-reverse;
      align-items: center;
      span {
        margin-right: 12px;
      }
      &:before {
        transform: rotate(90deg) translateY(0);
        transition: 0.3s ease all;
      }
      &:hover:before {
        transform: rotate(90deg) translateY(-($animationDistance));
      }
    }
    &:nth-child(4) {
      flex-direction: column-reverse;
      align-items: center;
      span {
        margin-bottom: 12px;
      }
      &:before {
        transform: rotate(180deg) translateY(0);
        transition: 0.3s ease all;
      }
      &:hover:before {
        transform: rotate(180deg) translateY(-($animationDistance));
      }
    }
  }
}
.offerings-wrapper {
  > div {
    display: flex;
    transition: 1s ease transform;
    justify-content: center;
    margin: 52px;
    &.show {
      transform: translateX(0) translateY(0);
      height: auto;
    }
  }
  > * {
    &.hide {
      height: 0;
    }
  }
  > *:nth-child(1) {
    &.hide {
      transform: translateX(-100vw) translateY(0);
    }
  }
  > *:nth-child(2) {
    &.hide {
      transform: translateX(0) translateY(calc(-100vh - $headerHeight));
    }
  }
  > *:nth-child(3) {
    &.hide {
      transform: translateX(100vw) translateY(0);
    }
  }
  > *:nth-child(4) {
    &.hide {
      transform: translateX(0) translateY(calc(100vh + $headerHeight));
    }
  }
  // 1 workshops, 2 individuals, 3 corporate, 4 events
}
</style>