<template>
  <span v-if="content">
    <figure v-if="content.mark">
      <img
        data-not-lazy
        :src="$urlFor(content.mark.url).size(width * 2)"
        :alt="content.mark.alt"
        :width="width"
      />
    </figure>
  </span>
</template>
  
  
<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`*[_type == "brand"]{
      "mark": {
       "url": siteSubmark.image.asset->url,
       "alt": siteSubmark.image.asset->altText
     } 
  }[0]`;
export default {
  props: {
    width: {
      type: Number,
      required: true,
    },
  },
  async fetch() {
    this.content = await this.$sanity.fetch(query);
  },
  fetchOnServer: false,
  data: () => ({
    content: null,
  }),
};
</script>
  