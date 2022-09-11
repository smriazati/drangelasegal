<template>
  <div class="energy-healing">
    <div v-if="data.banner">
      <SiteBannerFixed :imgUrl="data.banner.url" />
    </div>

    <div class="layout-image-text about">
      <div class="text-wrapper">
        <div class="text-wrapper-inner">
          <h1 v-if="data.about.title" class="heading-style">
            {{ data.about.title }}
          </h1>
        </div>
      </div>

      <div class="text-wrapper">
        <div class="text-wrapper-inner">
          <p v-if="data.about.textLarge" class="large-text-style mb-24">
            {{ data.about.textLarge }}
          </p>
          <div v-if="data.about.textMain" class="rte">
            <SanityContent :blocks="data.about.textMain" />
          </div>
        </div>
      </div>
    </div>

    <div class="layout-image-text">
      <div class="text-wrapper">
        <div class="text-wrapper-inner">
          <h2 v-if="data.system.title" class="title-style">
            {{ data.system.title }}
          </h2>
          <div v-if="data.system.text" class="rte">
            <SanityContent :blocks="data.system.text" />
          </div>
        </div>
      </div>

      <div class="image-wrapper">
        <figure v-if="data.system.img">
          <img
            :src="$urlFor(data.system.img.url).width(1200).auto('format')"
            :alt="data.system.img.alt"
          />
        </figure>
      </div>
    </div>

    <div class="layout-image-text techniques">
      <div class="image-wrapper">
        <figure v-if="data.techniques.img">
          <img
            :src="$urlFor(data.techniques.img.url).width(1200).auto('format')"
            :alt="data.techniques.img.alt"
          />
        </figure>
      </div>
      <div class="text-wrapper">
        <div class="text-wrapper-inner">
          <h2 v-if="data.techniques.title" class="title-style">
            {{ data.techniques.title }}
          </h2>
          <div v-if="data.techniques.text" class="rte">
            <SanityContent :blocks="data.techniques.text" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="data.cta">
      <SiteCTA :data="data.cta" />
    </div>
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
*[_type in ["energyHealing"]]{
 "about": {
    "title": about.title,
    "textLarge": about.text_large,
    "textMain": about.text.rte
  },
  "system": {
    "title": system.title,
    "text": system.text.rte,
    "img": {
      "url": system.img.image.asset->url,
      "alt": system.img.image.asset->altText
    }
  },
  "techniques": {
    "title": techniques.title,
    "text": techniques.text.rte,
    "img": {
      "url": techniques.img.image.asset->url,
      "alt": techniques.img.image.asset->altText
    }
  },
  "banner": {
      "url": banner.img.image.asset->url,
      "alt": banner.img.image.asset->altText
  },
  "cta": {
    "heading": cta.heading,
    "link": cta.link
}
}[0]
`;

export default {
  head() {
    return {
      title: "What is Energy Healing",
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
};
</script>

<style lang="scss">
.energy-healing {
  margin-top: 0px !important;
  margin-bottom: 0px !important;

  .layout-image-text {
    // grid-template-rows: 50vw;
    .text-wrapper {
      padding: 44px 16px;
    }
    h2 {
      margin-bottom: 44px;
    }
  }

  .about {
    grid-template-rows: auto;
    > *:first-child {
      align-self: start;
    }
    > *:last-child {
      padding-top: 70px;
    }
  }
  .techniques {
    ul {
      list-style: none;
      li:before {
        content: "*";
        margin-right: 1ch;
      }
    }
  }
}
</style>
