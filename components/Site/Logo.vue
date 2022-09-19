<template>
  <div v-if="content" class="site-logo">
    <figure v-if="content.mark">
      <img
        data-not-lazy
        :src="$urlFor(content.mark.url).size(width * 2)"
        :alt="content.mark.alt"
        :width="width"
      />
    </figure>
  </div>
</template>
  
  
<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`*[_type == "brand"]{
      "mark": {
       "url": siteLogo.image.asset->url,
       "alt": siteLogo.image.asset->altText
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
