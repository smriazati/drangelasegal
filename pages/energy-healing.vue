<template>
  <div>
    {{ data }}
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
*[_type in ["energyHealing"]][0]{
  "about": {
    "title": about.title,
    "text_large": about.text_large,
    "text_main": about.text.rte
  },
  "banner": {
      "url": banner.img.image.asset->url,
      "alt": banner.img.image.asset->altText
  },
  "cta": {
    "heading": cta.heading,
    "link": cta.link
  }
}
`;

export default {
  head() {
    return {
      title: "What is Energy Healing?",
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
};
</script>

