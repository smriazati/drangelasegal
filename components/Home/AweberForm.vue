<!-- AweberForm.vue -->
<template>
  <div class="aweber-form-container">
    <div class="AW-Form-143896882"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    // JavaScript code to load the Aweber form script
    var js,
      fjs = document.getElementsByTagName("script")[0];
    if (document.getElementById("aweber-wjs-fxihcyuj9")) return;
    js = document.createElement("script");
    js.id = "aweber-wjs-fxihcyuj9";
    js.src = "//forms.aweber.com/form/82/143896882.js";
    fjs.parentNode.insertBefore(js, fjs);
  },
};
</script>
