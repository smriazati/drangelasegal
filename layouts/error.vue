<template>
  <div class="pgae-container">
    <div class="text-wrapper text-center">
      <h1 v-if="error.statusCode === 404" class="heading-style mb-48">
        Sorry, we can’t find that page!
      </h1>
      <h1 v-else class="heading-style mb-48">An error occurred</h1>
      <NuxtLink to="/" class="btn-underline">Back to Home</NuxtLink>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>