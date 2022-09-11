<template>
  <span v-if="content">
    <a :href="`mailto:${content.siteEmail}`">
      <span v-if="text">{{ text }}</span>
      <span v-else>{{ content.siteEmail }}</span>
    </a>
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
  props: {
    text: {
      type: String,
      required: false,
    },
  },
};
</script>
