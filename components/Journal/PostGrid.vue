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