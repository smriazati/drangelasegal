<template>
  <span v-if="content">
    <a :href="`https://www.facebook.com/${content.facebook}`">Facebook</a>
  </span>
</template>
  
  
<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`*[_type == "contactInfo"]{
   facebook
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
