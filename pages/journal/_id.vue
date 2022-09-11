<template>
  <div class="page-container post-page">
    <div v-if="post">
      <div class="page-title">
        <h1 v-if="post.title">{{ post.title }}</h1>
        <h2 v-if="date">{{ date }}</h2>
      </div>
      <div class="post-content">
        <div class="image-wrapper">
          <figure v-if="post.img">
            <img
              :src="$urlFor(post.img.url).height(1400).auto('format')"
              :alt="post.img.alt"
            />
          </figure>
        </div>
        <div class="text-wrapper">
          <div class="rte">
            <SanityContent :blocks="post.content" :serializers="serializers" />
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <nuxt-link :to="`/journal`"
        ><span class="title-style link-underline">Prev</span></nuxt-link
      >
      <nuxt-link :to="`/journal`"
        ><span class="title-style link-underline">Next</span></nuxt-link
      >
    </div>
  </div>
</template>


<script>
import { groq } from "@nuxtjs/sanity";
const serializers = {
  marks: {
    // You can also just pass a string for a custom serializer if it's an HTML element
    externalLink: "a",
  },
};
export default {
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "posts"  && slug.current == "${params.id}"]{
        "slug": slug.current,
        date,
        content,
        title,
        "img": {
            "url": img.image.asset->url,
            "alt": img.image.asset->altText
        },
        _id
    }[0]`;
    const post = await $sanity.fetch(query).then((res) => res);
    return { post };
  },
  data() {
    return {
      serializers: serializers,
    };
  },
  computed: {
    date() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      var date = new Date(this.post.date);
      return date.toLocaleDateString("en-US", options);
    },
  },
};
</script>

<style lang="scss">
.post-page {
  .page-title {
    display: flex;
    flex-direction: column-reverse;
    h1 {
      @include headingStyle;
    }
    h2 {
      @include titleStyle;
      margin-bottom: 4px;
    }
  }

  .post-content {
    margin-top: 93px;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    border-top: 1px solid #cacaca;
    border-bottom: 1px solid #cacaca;
    .image-wrapper {
      figure {
        display: flex;
        min-height: 100%;
        img {
          object-fit: cover;
        }
      }
    }
    .text-wrapper {
      place-self: center;
      width: 100%;
      padding: 124px 98px 124px 107px;
    }
  }
}
</style>