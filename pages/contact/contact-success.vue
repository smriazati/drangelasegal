<template>
  <div class="contact-page page-container">
    <ContactPageTitle />
    <div class="base-container text-center success-msg">
      <p>Thank you for your form submission! We will be in touch soon.</p>
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
  .success-msg {
    margin-top: 60px;
  }
}
</style>