<template>
  <div class="layout-wrapper layout-error">
    <div class="page-container flex-col flex-col-center">
      <h1 class="heading-style" v-if="error.statusCode === 404">
        Sorry, we can’t find that page!
      </h1>
      <h1 class="heading-style" v-else>An error occurred</h1>
      <nuxt-link class="btn-underline"><span>Back to Home</span></nuxt-link>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: ["error"],
  name: "Error",
  mounted() {
    console.log("ERROR", this.error);
  },
};
</script>
  