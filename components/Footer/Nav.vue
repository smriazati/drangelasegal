<template>
  <nav class="footer-nav-primary">
    <ul>
      <li><nuxt-link to="/schedule">Schedule</nuxt-link></li>
      <li><nuxt-link to="/offerings">Offerings</nuxt-link></li>
      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      <li><InstagramLink /></li>
      <li><FacebookLink /></li>
    </ul>
  </nav>
</template>
  <script>
import InstagramLink from "../Site/InstagramLink.vue";
import FacebookLink from "../Site/FacebookLink.vue";
export default {
  components: { InstagramLink, FacebookLink },
};
</script>
  
<style lang="scss">
.footer-nav-primary {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  ul {
    > li {
      @include textStyle;
      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
}
</style>