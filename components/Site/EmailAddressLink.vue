<template>
  <span v-if="content">
    <a :href="`mailto:${content.siteEmail}`">{{ content.siteEmail }}</a>
  </span>
</template>
  
  
<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`*[_type == "contactInfo"]{
   siteEmail
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
