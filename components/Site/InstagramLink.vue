<template>
  <span v-if="content">
    <a :href="`https://www.instagram.com/${content.instagram}`" target="_blank"
      >Instagram</a
    >
  </span>
</template>
  
  
<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`*[_type == "contactInfo"]{
   instagram
  }[0]`;
export default {
  async fetch() {
    this.content = await this.$sanity.fetch(query);
  },
  fetchOnServer: false,
  data: () => ({
    content: null,
  }),
};
</script>
