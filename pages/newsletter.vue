<template>
  <div class="text-center page-container newsletter-page">
    <div v-if="data">
      <SystemNewsletter :data="data" />
    </div>
  </div>
</template>
<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
     *[_type in ["newsletter"]][0]
   `;

export default {
  head() {
    return {
      title: "Newsletter",
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  }
};
</script>
<style lang="scss">
@media (max-width: $collapse-bp) {
  .newsletter-page .newsletter-form {
    padding: 0 24px;
  }

  .newsletter-page .newsletter-form h2 {
    text-align: center;
    max-width: 100%;
  }
}
</style>