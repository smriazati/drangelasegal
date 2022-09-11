<template>
  <div class="newsletter-form">
    <h2>Unlock your highest self</h2>
    <form>
      <div class="flex-row">
        <input type="text" placeholder="Your email address" id="email" />
        <label for="email" class="visually-hidden"></label>
        <input type="submit" class="btn-underline" />
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.newsletter-form {
  margin-top: 36px;
  h2 {
    @include newsletterTitle();
    margin-top: 22px;
  }
  form {
    max-width: 360px;
    margin: 24px auto 0 auto;
    input {
      flex: 2;
    }
    input[type="submit"] {
      flex: 0;
      text-align: right;
    }
  }
}
</style>