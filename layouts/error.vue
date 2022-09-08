<template>
  <div class="layout-wrapper layout-error">
    <div class="base-container flex-col flex-col-center">
      <h1 class="display-style" v-if="error.statusCode === 404">
        This page doesn't exist
      </h1>
      <h1 class="display-style" v-else>An error occurred</h1>
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
  