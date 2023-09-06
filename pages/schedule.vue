<template>
  <div class="page-container schedule-page">
    <h1 class="heading-style text-center mb-24">Schedule</h1>
    <div v-if="data">
      <SanityContent :blocks="data?.text.rte" :serializers="serializers"></SanityContent>
    </div>
    <div v-else>
      <p>Thank you for your interest in scheduling a session!  Please email me directly at <a
          href="mailto:angela@angelasegalphd.com">angela@angelasegalphd.com</a>.</p>
    </div>
  </div>
</template>
    
<script>
import { groq } from "@nuxtjs/sanity";
import SerializerLink from '../components/Serializer/Link.vue'

const query = groq`
     *[_type in ["schedule"]][0]
   `;


export default {
  head() {
    return {
      title: "Schedule",
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
  data: () => ({
    serializers: {
      marks: {
        externalLink: SerializerLink,
      }
    }
  })
};
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  max-width: 864px;
  margin-left: auto;
  margin-right: auto;
}

a {
  text-decoration: underline;
}
</style>