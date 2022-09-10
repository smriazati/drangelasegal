<template>
  <div>
    {{ data }}
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
    "events": offering_4.events[]->{name, when, where,button}
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
  
  