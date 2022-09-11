<template>
  <div class="page-container journal-page">
    <div v-if="data.journal" class="page-title">
      <h1>Journal</h1>
      <h2>{{ data.journal.title }}</h2>
      <p>{{ data.journal.desc }}</p>
    </div>
    <div v-if="data.posts" class="post-list">
      <div v-for="item in data.posts" :key="item._id" class="post-list-item">
        <nuxt-link :to="`/journal/${item.slug}`">
          <div class="image-wrapper">
            <figure v-if="item.img">
              <img
                :src="
                  $urlFor(item.img.url).width(417).height(396).auto('format')
                "
                :alt="item.img.alt"
              />
            </figure>
          </div>
          <div class="text-wrapper">
            <h3 v-if="item.title">
              {{ item.title }}
            </h3>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="pagination">
      <nuxt-link to=""
        ><span class="title-style link-underline">Prev</span></nuxt-link
      >
      <nuxt-link to=""
        ><span class="title-style link-underline">Next</span></nuxt-link
      >
    </div>
  </div>
</template>
  
<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
*[_type in ["journal", "posts"]]{
  'journal': *[_type=='journal']{
    title,
    desc,
  }[0],
  'posts': *[_type=='posts']{
    "slug": slug.current,
    date,
    title,
    "img": {
      "url": img.image.asset->url,
      "alt": img.image.asset->altText
    },
    _id
  }[0...6]|order(date desc),
}[0]
  `;

export default {
  head() {
    return {
      title: "Journal",
    };
  },
  data() {
    return {
      postLoads: 1,
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
};
</script>
   
<style lang="scss">
.post-list {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  .post-list-item {
    text-align: center;
    @media (min-width: $collapse-bp) {
      flex: 0 0 30%;
    }
    @media (max-width: $collapse-bp) {
      flex: 0 0 45%;
    }
    h3 {
      margin-top: 24px;
      @include postPreviewTitle;
    }
  }
}
</style>
  