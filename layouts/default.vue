<template>
  <div class="layout-container layout-default" :class="thisRouteClass">
    <SiteHeader />
    <main class="site-main" ref="main">
      <nuxt />
    </main>
    <SiteFooter />
  </div>
</template>
  
  <script>
export default {
  computed: {
    thisRouteClass() {
      const path = this.$route.fullPath;
      let thisRouteClass;
      if (path === "/") {
        thisRouteClass = "home";
      } else {
        // thisRouteClass = path.replaceAll("/", "-");
      }
      return thisRouteClass;
    },
  },
};
</script>
  