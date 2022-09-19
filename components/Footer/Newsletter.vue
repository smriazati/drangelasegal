<template>
  <div class="newsletter-form">
    <h2>Unlock your highest self</h2>
    <form>
      <div class="flex-row no-collapse">
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
    @media (max-width: $collapse-bp) {
      text-align: left;
      max-width: 50%;
    }
  }
  form {
    @media (min-width: $collapse-bp) {
      max-width: 360px;
    }
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