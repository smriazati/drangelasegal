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
      this.pagination = this.pagination - 1;
      const lastPostId = this.data[0]._id;
      const lastPostDate = this.data[0].date;

      const testQuery = groq`*[_type == "posts" && (
      date > $lastPostDate
      || (date == $lastPostDate && _id > $lastPostId)
    )] | order(date asc) [0...6] {
       "slug": slug.current,
        date,
        title,
        "img": {
          "url": img.image.asset->url,
          "alt": img.image.asset->altText
        },
        _id
    }`;

      const data = await this.$sanity
        .fetch(testQuery, { lastPostDate, lastPostId })
        .then((res) => res.reverse());
      this.data = data;
      this.scrollToTop();
    },
    savePaginationIds() {
      let lastPostId;
      if (this.data.length > 0) {
        const lastPost = this.data[this.data.length - 1];
        lastPostId = lastPost._id;
      } else {
        lastPostId = null; // Reached the end
      }
      this.lastPostId = lastPostId;

      let lastPostDate;
      if (this.data.length > 0) {
        const lastPost = this.data[this.data.length - 1];
        lastPostDate = lastPost.date;
      }

      this.lastPostDate = lastPostDate;
    },
    async getNextPosts() {
      this.savePaginationIds();
      this.pagination = this.pagination + 1;

      const testQuery = groq`*[_type == "posts" && (
      date < $lastPostDate
      || (date == $lastPostDate && _id < $lastPostId)
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
      const lastPostId = this.lastPostId;
      const lastPostDate = this.lastPostDate;
      const data = await this.$sanity
        .fetch(testQuery, { lastPostDate, lastPostId })
        .then((res) => res);
      this.data = data;
      this.scrollToTop();
    },
  },
  data() {
    return {
      pagination: 1,
      lastPostId: undefined,
      lastPostDate: undefined,
    };
  },
  async asyncData({ $sanity }) {
    const data = await $sanity.fetch(query).then((res) => res);
    return { data };
  },
  components: { PageTitle, PostGrid },
};
</script>
  