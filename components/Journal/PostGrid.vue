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

  @media (min-width: $collapse-bp) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-column-gap: 108px;
  }
  @media (max-width: $collapse-bp) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }


  .post-list-item {
    text-align: center;
    margin-bottom: 60px;

    // @media (min-width: $collapse-bp) {
    //   flex: 0 0 30%;
    // }

    @media (max-width: $collapse-bp) {
      flex: 0 0 45%;
    }

    @media (max-width: 400px) {
      flex: 0 0 100%;
    }

    h3 {
      margin-top: 24px;
      @include postPreviewTitle;
    }
  }
}
</style>