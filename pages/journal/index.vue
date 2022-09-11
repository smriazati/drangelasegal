<template>
  <div class="page-container journal-page" ref="scrollTo">
    <div>
      <PageTitle />
    </div>
    <PostGrid :data="data" />
    <div class="pagination">
      <div v-if="showPrevLink" class="prev-btn">
        <button @click="getPrevPosts">
          <span class="title-style link-underline">prev</span>
        </button>
      </div>
      <div v-if="showNextLink" class="next-btn">
        <button @click="getNextPosts">
          <span class="title-style link-underline">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
  
<script>
import PageTitle from "../../components/Journal/PageTitle.vue";
import PostGrid from "../../components/Journal/PostGrid.vue";
import { groq } from "@nuxtjs/sanity";
const query = groq`
*[_type in ["posts"]]{
 "slug": slug.current,
    date,
    title,
    "img": {
      "url": img.image.asset->url,
      "alt": img.image.asset->altText
    },
    _id
}|order(date desc)[0...6]
`;

export default {
  head() {
    return {
      title: "Journal",
    };
  },
  computed: {
    lastId() {
      let lastId;
      if (this.data.length > 0) {
        const lastPost = this.data[this.data.length - 1];
        lastId = lastPost._id;
      } else {
        lastId = null; // Reached the end
      }
      return lastId;
    },
    lastDate() {
      let lastDate;
      if (this.data.length > 0) {
        const lastPost = this.data[this.data.length - 1];
        lastDate = lastPost.date;
      }
      return lastDate;
    },
    endOfResults() {
      if (this.data.length < 6) {
        return true;
      } else {
        return false;
      }
    },
    showNextLink() {
      if (!this.endOfResults) {
        return true;
      } else {
        return false;
      }
    },
    showPrevLink() {
      if (this.pagination > 1) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    scrollToTop() {
      const element = this.$refs.scrollTo;
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    async getPrevPosts() {
      const lastId = this.lastId;
      const lastDate = this.lastDate;
      this.pagination = this.pagination - 1;
      const testQuery = groq`*[_type == "posts" && (
      date > $lastDate
      || (date == $lastDate && _id > $lastId)
    )] | order(date desc) [0...6] {
       "slug": slug.current,
        date,
        title,
        "img": {
          "url": img.image.asset->url,
          "alt": img.image.asset->altText
        },
        _id
    }`;
      // console.log(testQuery, { lastDate, lastId });
      const data = await this.$sanity
        .fetch(testQuery, { lastDate, lastId })
        .then((res) => res);
      this.data = data;
      this.scrollToTop();
    },
    async getNextPosts() {
      const lastId = this.lastId;
      const lastDate = this.lastDate;
      this.pagination = this.pagination + 1;
      const testQuery = groq`*[_type == "posts" && (
      date < $lastDate
      || (date == $lastDate && _id < $lastId)
    )] | order(date desc) [0...6] {
       "slug": slug.current,
        date,
        title,
        "img": {
          "url": img.image.asset->url,
          "alt": img.image.asset->altText
        },
        _id
    }`;
      // console.log(testQuery, { lastDate, lastId });
      const data = await this.$sanity
        .fetch(testQuery, { lastDate, lastId })
        .then((res) => res);
      this.data = data;
      this.scrollToTop();
    },
  },
  data() {
    return {
      pagination: 1,
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
  components: { PageTitle, PostGrid },
};
</script>
  