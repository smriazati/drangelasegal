<template>
  <div class="page-container post-page">
    <div v-if="post">
      <div class="page-title">
        <h1 v-if="post.title">{{ post.title }}</h1>
        <h2 v-if="date">{{ date }}</h2>
      </div>
      <div class="post-content">
        <div class="image-wrapper">
          <figure v-if="post.img.url">
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
      <div v-if="prevSlug" class="prev-btn">
        <nuxt-link :to="`/journal/posts/${prevSlug}`"
          ><span class="title-style link-underline">Prev</span></nuxt-link
        >
      </div>
      <div v-if="nextSlug" class="next-btn">
        <nuxt-link :to="`/journal/posts/${nextSlug}`"
          ><span class="title-style link-underline">Next</span></nuxt-link
        >
      </div>
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
  mounted() {
    this.getPrevSlug();
    this.getNextSlug();
  },
  methods: {
    async getNextSlug() {
      const lastId = this.post._id;
      const lastDate = this.post.date;
      if (!lastId || !lastDate) {
        return;
      }
      const testQuery = groq`*[_type == "posts" && (
        date < $lastDate
        || (date == $lastDate && _id < $lastId)
      )] | order(date desc) [0] {
         "slug": slug.current
      }`;
      const data = await this.$sanity
        .fetch(testQuery, { lastDate, lastId })
        .then((res) => res);
      this.nextSlug = data.slug;
    },
    async getPrevSlug() {
      const lastId = this.post._id;
      const lastDate = this.post.date;
      if (!lastId || !lastDate) {
        return;
      }
      const testQuery = groq`*[_type == "posts" && (
        date > $lastDate
        || (date == $lastDate && _id > $lastId)
      )] | order(date desc) [0] {
         "slug": slug.current
      }`;
      const data = await this.$sanity
        .fetch(testQuery, { lastDate, lastId })
        .then((res) => res);
      this.prevSlug = data.slug;
    },
  },
  data() {
    return {
      serializers: serializers,
      nextSlug: undefined,
      prevSlug: undefined,
    };
  },
  watch: {
    post() {
      console.log("data changed");
    },
  },
  computed: {
    date() {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      let dateString = `${this.post.date}T00:00:00`;
      dateString = dateString.replace(/-/g, "/").replace(/T.+/, "");

      var date = new Date(dateString);
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