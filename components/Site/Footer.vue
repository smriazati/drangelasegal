<template>
  <footer>
    <SiteMark :width="500" />
    <FooterNewsletter />
    <FooterNav />
    <FooterDisclaimer />
    <button @click="backToTop()">Back to Top</button>
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