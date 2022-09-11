<template>
  <div v-if="data" class="post-list">
    <PostItem v-for="item in data" :key="item._id" :item="item" />
  </div>
</template>

<script>
import PostItem from "../../components/Journal/PostItem.vue";

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: { PostItem },
};
</script>