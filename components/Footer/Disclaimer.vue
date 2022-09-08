<template></template>

<template>
  <div>
    <div v-if="content">
      <p>{{ content.disclaimer }}</p>
    </div>
    <div>
      2022 Angela Segal, PHD.
      <a href="https://otherlove.co" target="_blank">Made with Otherlove</a>
    </div>
    <nav>
      <ul display="flex">
        <li><nuxt-link to="/terms">Terms of Use</nuxt-link></li>
        <li><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>
    
    
  <script>
import { groq } from "@nuxtjs/sanity";
const query = groq`*[_type == "footer"]{
    disclaimer
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
    