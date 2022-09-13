<template>
  <footer class="site-footer">
    <nuxt-link to="/">
      <SiteMark :width="70" />
    </nuxt-link>
    <FooterNewsletter />
    <FooterNav />
    <FooterDisclaimer />
    <button class="btn-underline" @click="backToTop()">Back to Top</button>
  </footer>
</template>

<script>
export default {
  methods: {
    backToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
};
</script>

<style lang="scss">
footer.site-footer {
  text-align: center;
  background: $sand;
  padding-top: 68px;
  padding-bottom: 30px;
  position: relative;
  > button {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
}
</style>