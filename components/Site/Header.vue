<template>
  <header class="site-header">
    <h1 class="visually-hidden">
      {{ content?.siteTitle || "Dr. Angela Segal" }}
    </h1>
    <div class="desktop-nav">
      <nuxt-link to="/" class="site-logo">
        <SiteLogo :width="378" />
      </nuxt-link>
      <SiteNavPrimary />
      <SiteNavSecondary />
    </div>
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
      
<style lang="scss">
header.site-header {
  background: $sand;

  .desktop-nav {
    display: flex;
    flex-direction: column;
    padding: 24px;
    > .nav-primary {
      order: 3;
      ul {
        @include navPrimaryStyle;
        display: flex;
        justify-content: center;
        > *:not(:last-child) {
          margin-right: 60px;
        }
      }
    }
    > .nav-secondary {
      order: 1;
      margin-bottom: 20px;
      ul {
        @include navSecondaryStyle;
        display: flex;
        justify-content: flex-start;
        > *:not(:last-child) {
          margin-right: 48px;
        }
        > *:last-child {
          flex: 2;
          text-align: right;
        }
      }
    }
    > .site-logo {
      order: 2;
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }
  }
}
</style>