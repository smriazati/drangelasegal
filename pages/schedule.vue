<template>
  <div class="page-container schedule-page">
    <h1 class="heading-style text-center mb-24">Schedule</h1>
    <div class="embed-container">
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=16542169"
        title="Schedule Appointment"
        width="100%"
        height="800"
        frameBorder="0"
      ></iframe>
    </div>
  </div>
</template>
    
<script>
export default {
  head() {
    return {
      title: "Schedule",
      script: [
        {
          type: "text/javascript",
          src: "https://embed.acuityscheduling.com/js/embed.js",
          async: true,
        },
      ],
    };
  },
};
</script>