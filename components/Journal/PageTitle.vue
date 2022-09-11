<template>
  <div v-if="content" class="page-title">
    <h1>Journal</h1>
    <h2>{{ content.title }}</h2>
    <p>{{ content.desc }}</p>
  </div>
</template>
    
    
  <script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
*[_type in ["journal"]]{
    title,
      desc,
  }[0]
    `;
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
  