<template>
  <div class="page-container testimonials-page">
    <div class="page-title">
      <h1>Testimonials</h1>
      <h2>Kind Words</h2>
    </div>
    <div v-if="data" class="card-list">
      <figure v-for="item in data" :key="item._id" class="card-list-item">
        <blockquote v-if="item.quote">
          &ldquo;{{ item.quote }}&rdquo;
        </blockquote>
        <figcaption v-if="item.name">&mdash;{{ item.name }}</figcaption>
      </figure>
    </div>
  </div>
</template>
    
    <script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
*[_type == "testimonials"][0...15]|order(orderRank){
  _id, quote, name
}
`;

export default {
  head() {
    return {
      title: "Testimonials",
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
};
</script>
    
    
<style lang="scss">
.testimonials-page .card-list {
  margin-top: 150px;
}

.testimonials-page figure {
  @include quoteStyle;
}
.card-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 30px;
  text-align: center;
  > * {
    padding: 0 30px;
    margin-bottom: 24px;

    @media (max-width: $collapse-bp) {
      flex: 0 0 100%;
    }
    @media (min-width: $collapse-bp) and (max-width: $lg-bp) {
      flex: 0 0 33%;
    }
    @media (min-width: $lg-bp) {
      flex: 0 0 25%;
    }
  }
}
</style>