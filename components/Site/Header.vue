<template>
  <header class="site-header">
    <h1 class="visually-hidden">
      {{ content?.siteTitle || "Dr. Angela Segal" }}
    </h1>
    <div v-if="isDesktop" class="desktop-nav">
      <nuxt-link to="/" class="site-logo">
        <SiteLogo :width="378" />
      </nuxt-link>
      <SiteNavPrimary />
      <SiteNavSecondary />
    </div>

    <div v-if="!isDesktop" class="mobile-nav" ref="mobileMenu">
      <button @click="toggleNav()">
        <span v-if="!isMobileNavExpanded">Menu</span>
        <span v-else>Close</span>
      </button>
      <div class="mobile-nav-wrapper">
        <nuxt-link to="/" class="site-logo">
          <SiteLogo :width="236" />
        </nuxt-link>
      </div>
      <div class="collapse-area" :class="isMobileNavExpanded ? 'show' : 'hide'">
        <SiteMobileNav @on-link-click="toggleNav()" />
        <!-- <nav class="nav-primary">
          <ul>
            <li @click="toggleNav()">
              <nuxt-link to="/offerings">Offerings</nuxt-link>
            </li>
            <li @click="toggleNav()">
              <nuxt-link to="/learn">Learn</nuxt-link>
            </li>
            <li @click="toggleNav()">
              <nuxt-link to="/journal">Journal</nuxt-link>
            </li>
            <li @click="toggleNav()">
              <nuxt-link to="/about">Meet Angela</nuxt-link>
            </li>
            <li @click="toggleNav()">
              <nuxt-link to="/energy-healing">
                What is Energy Healing?
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <nav class="nav-secondary">
          <ul>
            <li @click="toggleNav()">
              <nuxt-link to="/schedule">Schedule</nuxt-link>
            </li>
            <li @click="toggleNav()">
              <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
            <li @click="toggleNav()"><SiteInstagramLink /></li>
            <li @click="toggleNav()"><SiteFacebookLink /></li>
          </ul>
        </nav> -->
        <div class="mark">
          <nuxt-link to="/" class="site-logo" @click.native="toggleNav()">
            <SiteMark :width="60" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`*[_type == "siteMetadata"]{
        siteTitle
      }[0]`;
export default {
  async fetch() {
    this.content = await this.$sanity.fetch(query);
  },
  fetchOnServer: false,
  beforeMount: function () {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);
  },
  unmounted: function () {
    window.removeEventListener("resize", this.onResize);
  },
  data: () => ({
    content: null,
    isDesktop: true,
    isMobileNavExpanded: false,
  }),
  methods: {
    onResize() {
      this.setCurrentNav();
    },
    toggleNav() {
      this.isMobileNavExpanded = !this.isMobileNavExpanded;
    },
    setCurrentNav() {
      if (window.innerWidth > 980) {
        this.isDesktop = true;
      } else {
        this.isDesktop = false;
      }
    },
  },
};
</script>
      
<style lang="scss">
header.site-header {
  background: $sand;

  .desktop-nav {
    display: flex;
    flex-direction: column;
    padding: 24px;

    >.nav-primary {
      order: 3;

      ul {
        @include navPrimaryStyle;
        display: flex;
        justify-content: center;

        >*:not(:last-child) {
          margin-right: 60px;
        }
      }
    }

    >.nav-secondary {
      order: 1;
      margin-bottom: 20px;

      ul {
        @include navSecondaryStyle;
        display: flex;
        justify-content: flex-start;

        >*:not(:last-child) {
          margin-right: 48px;
        }

        >*:last-child {
          flex: 2;
          text-align: right;
        }
      }
    }

    >.site-logo {
      order: 2;
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }
  }

  .mobile-nav {
    >button {
      position: absolute;
      top: 8px;
      width: 100%;
      text-align: center;
      z-index: 201;

      span {
        @include navSecondaryStyle;
      }
    }

    .mobile-nav-wrapper {
      display: flex;
      justify-content: center;
      text-align: center;
      padding-top: 44px;
      padding-bottom: 22px;
    }

    $collapse-area-height: 700px;

    .collapse-area {
      transition: 0.5s ease all;
      position: absolute;
      z-index: 11;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      background: $sunlight;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      &.hide {
        transform: translateY(-100vh);

        @media (max-height: $collapse-area-height) {
          transform: translateY($collapse-area-height * -1);
        }
      }

      &.show {
        transform: translateY(0vh);

        @media (max-height: $collapse-area-height) {
          transform: translateY(0px);
        }
      }

      nav ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .nav-primary {
        @media (max-height: $collapse-area-height) {
          margin-top: 48px;
        }

        margin-bottom: 48px;

        li:not(:last-child) {
          margin-bottom: 24px;
        }

        a {
          @include serifTypeface;
          font-size: 30px;
          font-weight: 300;
          line-height: 38px;
          letter-spacing: 0.02em;
          color: #000;
        }
      }

      .nav-secondary {
        margin-bottom: 80px;

        li:not(:last-child) {
          margin-bottom: 12px;
        }

        a {
          font-size: 13px;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 0.12em;
          color: #000;
        }
      }

      .mark {
        @media (max-height: $collapse-area-height) {
          padding-bottom: 48px;
        }
      }
    }
  }
}

@media (max-width: $collapse-bp) {
  header.site-header .desktop-nav {
    display: none;
  }
}
</style>