<template>
  <div class="link-object">
    <div v-if="data.type === 'internal' && data.destination">
      <nuxt-link :to="`/${data.destination}`">
        <span>{{ data.name }}</span>
      </nuxt-link>
    </div>
    <div v-if="data.type === 'external' && data.url">
      <a :href="`${data.url}`" target="_blank">
        <span>{{ data.name }}</span>
      </a>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>