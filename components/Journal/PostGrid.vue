<template>
  <div v-if="data" class="post-list">
    <PostGridItem v-for="item in data" :key="item._id" :item="item" />
  </div>
</template>

<script>
import PostGridItem from "../../components/Journal/PostGridItem.vue";

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: { PostGridItem },
};
</script>

<style lang="scss">
.post-list {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .post-list-item {
    text-align: center;
    margin-bottom: 60px;

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