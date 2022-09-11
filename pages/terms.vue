<template>
  <div class="page-container terms-page">
    <div class="container-920">
      <h1 class="heading-style mb-24">Terms</h1>
      <div class="page-content">
        <div class="rte">
          <SanityContent :blocks="data.content" />
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
    *[_type in ["terms"]][0]{
      content
  }
  `;

export default {
  head() {
    return {
      title: "Terms",
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
};
</script>


  
  