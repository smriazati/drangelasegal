<template>
    <div class="text-center page-container newsletter-page">
      <FooterNewsletter />
    </div>
  </template>
  <script>
  export default {};
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