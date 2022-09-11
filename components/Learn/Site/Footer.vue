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
      console.log("go to top");
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