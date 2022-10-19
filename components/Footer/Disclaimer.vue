<template>
  <div class="footer-disclaimer">
    <div v-if="content" class="disclaimer">
      <p>{{ content.disclaimer }}</p>
    </div>
    <div class="copyright">
      <div class="flex-row no-collapse">
        <p>{{ thisYear }} &copy; Angela Segal, PhD.</p>
        <p> | </p>
        <p>
          <a href="https://otherlove.co" target="_blank">Made with Otherlove</a>
        </p>
      </div>
    </div>
    <nav class="footer-nav-secondary">
      <ul display="flex">
        <li><nuxt-link to="/terms">Terms of Use</nuxt-link></li>
        <li><nuxt-link to="/privacy">Privacy Policy</nuxt-link></li>
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
  computed: {
    thisYear() {
      const date = new Date();
      const year = date.getFullYear()
      return year;
    }
  }
};
</script>
    

<style lang="scss">
.footer-disclaimer {
  @media (min-width: $collapse-bp) {
    margin-top: 60px;
  }
  @media (max-width: $collapse-bp) {
    margin-top: 32px;
  }
  .disclaimer {
    max-width: 1040px;
    margin: 0 auto;
    p {
      @include footerText;
    }
  }
  .copyright {
    margin-top: 24px;
  }
  .copyright p,
  .copyright p a,
  .footer-nav-secondary li,
  .footer-nav-secondary li a {
    @include footerDetailText;
  }
  .copyright p,
  .footer-nav-secondary li {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
  .copyright,
  .footer-nav-secondary {
    display: flex;
    justify-content: center;
    @media (max-width: $collapse-bp) {
      justify-content: flex-start;
    }
  }
  .footer-nav-secondary li:not(:last-child):after {
    content: "|";
    margin-left: 8px;
  }
}
</style>