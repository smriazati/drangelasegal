<template>
  <footer class="site-footer">
    <nuxt-link to="/" class="mark">
      <SiteMark :width="70" />
    </nuxt-link>
    <FooterNewsletter />
    <FooterNav v-if="isDesktop" />
    <FooterDisclaimer />
    <div class="button-wrapper">
      <button class="btn-underline" @click="backToTop()">Back to Top</button>
    </div>
  </footer>
</template>

<script>
export default {
  mounted: function () {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);
  },
  unmounted: function () {
    window.removeEventListener("resize", this.onResize);
  },
  data: () => ({
    isDesktop: true,
  }),
  methods: {
    onResize() {
      if (window.innerWidth > 800) {
        this.isDesktop = true;
      } else {
        this.isDesktop = false;
      }
    },
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
  @media (min-width: $collapse-bp) {
    > .button-wrapper {
      position: absolute;
      bottom: 30px;
      right: 30px;
    }
  }

  @media (max-width: $collapse-bp) {
    text-align: left;
    > * {
      width: 80%;
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    a.mark {
      display: block;
      text-align: left;
    }
    .button-wrapper {
      display: block;
      margin-top: 26px;
      button {
        font-size: 9px;
        font-weight: 400;
        line-height: 18px;
      }
    }
  }
}
</style>