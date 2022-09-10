<template>
  <div>
    {{ data }}
  </div>
</template>
  
  <script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
*[_type in ["journal"]][0]{
  desc, title
}
  `;

export default {
  head() {
    return {
      title: "Journal",
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
};
</script>
  
  