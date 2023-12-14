<template>
  <div class="offerings-page no-page-padding" ref="top">
    <div class="offerings-page-wrapper">
      <div class="offerings-wrapper">
        <div v-for="item in data">
          <OfferingItem :data="item" />
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
    "link": offering_1.link,
    "img": {
        "url": offering_1.img.image.asset->url,
        "alt": offering_1.img.image.asset->altText
      }
  },
  "offering2": {
    "title": offering_2.title,
    "desc": offering_2.desc,
    "link": offering_2.link,
    "img": {
        "url": offering_2.img.image.asset->url,
        "alt": offering_2.img.image.asset->altText
      }
  },
  "offering3": {
    "title": offering_3.title,
    "desc": offering_3.desc,
    "link": offering_3.link,
    "img": {
        "url": offering_3.img.image.asset->url,
        "alt": offering_3.img.image.asset->altText
      }
  },
  "offering4": {
    "title": offering_4.title,
    "desc": offering_4.desc,
    "link": offering_4.link,
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

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $grey-brown;
      mix-blend-mode: multiply;
      opacity: 0.5;
    }

    >div {
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
  // padding: 65px 16px;
  // display: grid;
  width: 100%;

  @media (min-width: $collapse-bp) {
    grid-template-columns: 1fr minmax(350px, 1fr) 1fr;
  }

  @media (max-width: $collapse-bp) {
    grid-template-columns: 0.1fr 1fr 0.1fr;
    grid-gap: 16px;
  }

  button {
    display: flex;

    span {
      @include inputStyle;
      color: $white;
      color: $sunlight;
      text-shadow: 0px 0px 8px $sunlight;

      @media (max-width: $collapse-bp) {
        display: none;
      }
    }
  }
}

.offerings-wrapper {
  // >div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    background-color: rgb(253, 249, 223);
    // padding-left: 20px;
    // padding-right: 20px;
    // padding-bottom: 30px;
    // padding-top: 10px;
    align-self: center;
    justify-items: center;

    @media (min-width: $collapse-bp) {
      margin: 12px;
      // width: 350px;
    }
  // }
}</style>