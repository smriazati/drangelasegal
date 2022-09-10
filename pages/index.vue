<template>
  <div>
    {{ data }}
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
  *[_type in ["home"]][0]{
  power_up,
  "left": {
    "img": {
      "url": testimonial.img.image.asset->url,
      "alt": testimonial.img.image.asset->altText
    },
    title,
    desc
  },
  "callout_right": {
    "img": {
      "url": testimonial.img.image.asset->url,
      "alt": testimonial.img.image.asset->altText
    },
    title,
    desc
  },
  "testimonial": {
    "img": {
      "url": testimonial.img.image.asset->url,
      "alt": testimonial.img.image.asset->altText
    },
     "quote": testimonial.testimonial->quote,
     "name": testimonial.testimonial->name,
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

