<template>
  <div>
    {{ data }}
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
  *[_type in ["about"]][0]{
    "about": {
    "img": {
      "url": about.about_img.image.asset->url,
      "alt": about.about_img.image.asset->altText
    },
    "text": about.text
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
      title: "Home",
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
};
</script>

