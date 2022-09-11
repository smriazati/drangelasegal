<template>
  <div class="cta-banner-wrapper">
    <div class="text-wrapper">
      <h3>Connect with Angela</h3>
    </div>
    <div class="button-wrapper">
      <ul class="ul-plain flex-row">
        <li><InstagramLink /></li>
        <li><FacebookLink /></li>
        <li><EmailAddressLink text="Email" /></li>
      </ul>
    </div>
  </div>
</template>
    <script>
import EmailAddressLink from "../Site/EmailAddressLink.vue";
import InstagramLink from "../Site/InstagramLink.vue";
import FacebookLink from "../Site/FacebookLink.vue";
export default {
  components: { EmailAddressLink, InstagramLink, FacebookLink },
};
</script>
  
  <style lang="scss">
.cta-banner-wrapper {
  margin-top: 120px;
  background: $taupe;
  padding: 120px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    @include ctaStyle;
  }
  .button-wrapper {
    padding-left: 24px;
    a {
      @include inputStyle;
      @include btnUnderline;
      &:hover {
        color: inherit;
      }
    }
    li:not(:last-child) {
      margin-right: 52px;
    }
  }
}
</style>