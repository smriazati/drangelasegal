<template>
  <div class="contact-page page-container">
    <ContactPageTitle />
    <div class="base-container">
      <ContactForm successRoute="/contact/contact-success" />
    </div>
    <ContactCTA />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.contact-page {
  padding-bottom: 0 !important;
  background: #fdfaf6;
}
</style>