<template>
  <div>
    <div class="video-list">
      <VideoThumbnail
        v-for="(item, index) in data"
        :key="`${item.id}${index}`"
        :item="item"
        @open-lightbox="setActiveModal(item)"
      >{{ item }}</VideoThumbnail>
    </div>
    <div v-if="activeModal">
      <VideoLightbox :data="activeModal" @close-lightbox="unsetActiveModal()" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeModal: undefined,
    };
  },
  methods: {
    setActiveModal(payload) {
      this.activeModal = payload;
    },
    unsetActiveModal() {
      this.activeModal = undefined;
    },
  },
};
</script>