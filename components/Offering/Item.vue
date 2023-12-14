<template>
  <div class="offering-item">
    <div class="offering-item-wrapper">
      <div class="offering-content">
        <div class="image-wrapper">
        <figure v-if="data.img.url">
          <img
            :src="
              $urlFor(data.img.url)
                .width(417 * 2)
                .height(396 * 2)
                .auto('format')
                .fit('clip')
            "
            :alt="data.img.alt"
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
        <div class="text-wrapper text-center page-title">
          <h2 v-if="data.title" class="heading-style">{{ data.title }}</h2>
          <div class="text-wrapper-offering">
            <p v-if="data.desc">
              {{ data.desc }}
            </p>
          </div>
        </div>
        <div v-if="data.link" class="link-wrapper text-center">
          <SystemLinkObject :data="data.link" />
        </div>
        <div v-if="data.events" class="events-wrapper text-center">
          <h3 class="title-style">Upcoming Events</h3>
          <div class="event-list">
            <div
              v-for="item in data.events"
              :key="item._id"
              class="event-list-item"
            >
              <h4 v-if="item.name" class="post-preview-title-style">
                {{ item.name }}
              </h4>
              <p v-if="item.when" class="title-style-lower">{{ item.when }}</p>
              <p v-if="item.where" class="title-style-lower">
                {{ item.where }}
              </p>
              <div v-if="item.button" class="button-wrapper">
                <SystemLinkObject :data="item.button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.offering-item {
  // display: inline-block;
}

.offering-item-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin-top: 10px;
  margin-bottom: 20px;
  .offering-content {
    // @include glowBox;
    
    @media (min-width: 684px) {
      max-width: 684px;
    }
    margin-left: auto;
    margin-right: auto;

    h2 {
      @media (max-width: 400px) {
        font-size: 24px;
        line-height: 36px;
      }
    }

    .link-wrapper {
      margin-top: 24px;
      a {
        @include linkUnderline;
        @include inputStyle;
      }

    .text-wrapper-offering {
      padding-left: 20px;
      padding-right: 20px;
    }
    }
    .events-wrapper {
      margin-top: 60px;
      .event-list {
        margin-top: 40px;
        .event-list-item {
          margin-bottom: 50px;
          p,
          .button-wrapper {
            margin-top: 12px;
          }
          a {
            @include linkUnderline;
          }
        }
      }
    }
  }
}
</style>