<template>
  <div class="post-list-item">
    <nuxt-link :to="`/journal/posts/${item.slug}`">
      <div class="image-wrapper">
        <figure v-if="item.img.url">
          <img
            :src="
              $urlFor(item.img.url)
                .width(417 * 2)
                .height(396 * 2)
                .auto('format')
            "
            :alt="item.img.alt"
          />
        </figure>
        <figure v-else>
          <img
            :src="`https://via.placeholder.com/${417 * 2}x${
              396 * 2
            }/C4C4C4/C4C4C4?Text=`"
            alt="gray placeholder image"
          />
        </figure>
      </div>
      <div class="text-wrapper">
        <h3 v-if="item.title">
          {{ item.title }}
        </h3>
        {{ item.date }}
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>