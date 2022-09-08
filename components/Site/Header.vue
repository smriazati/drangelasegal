<template>
  <header>
    <h1 class="visually-hidden">
      {{ content?.siteTitle || "Dr. Angela Segal" }}
    </h1>
    <SiteLogo :width="500" />
    <SiteNavPrimary />
    <SiteNavSecondary />
  </header>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`*[_type == "siteMetadata"]{
        siteTitle
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
      