import { groq } from "@nuxtjs/sanity";
import { sanity } from './plugins/sanity'
const query = groq`*[_type in ["siteMetadata"]][0]{
  siteDesc,
  "ogImg": {
    "url": ogImg.image.asset->url,
    "alt": ogImg.image.asset->altText
  }
}`;

const dynamicRouteQuery = groq`*[_type == "posts"]{'slug':slug.current}`;

export default async () => {
  const data = await sanity.fetch(query);

  return {
    target: 'static',
    head: {
      titleTemplate: "%s | Dr. Angela Segal",
      title: 'Dr. Angela Segal',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: `${data?.siteDesc}` },
        { name: 'format-detection', content: 'telephone=no' },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${data?.ogImg?.url}?h=1200&w=640`
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: `640`
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: `1200`
        },
        { hid: 'og:image:alt', property: 'og:image:alt', content: `${data?.ogImg?.alt}` }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: `/favicon.ico` },
      ],
      script: [
        { src: 'pixel.js', type: 'text/javascript' },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js", defer: true
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollTrigger.min.js", defer: true
        },
      ]
    },
    css: ['~/assets/sass/main.scss'],
    components: true,
    buildModules: [
      '@nuxtjs/sanity/module',
      '@nuxtjs/style-resources'
    ],
    styleResources: {
      scss: [
        '~/assets/sass/system/_colors.scss',
        '~/assets/sass/system/_typography.scss',
        '~/assets/sass/system/_layout.scss',
        '~/assets/sass/system/_buttons.scss'
      ],
      hoistUseStatements: true
    },
    image: {
      projectId: '0jo9hjnc',
    },
    modules: [
      ['nuxt-lazy-load', {
        // directiveOnly: true
      }]
    ],
    generate: {
      fallback: '404.html',
      // fallback: false,
      exclude: [
        /^\/new/ // path starts with /admin
      ],
      async routes() {
        const posts = (await sanity.fetch(dynamicRouteQuery)) || []
        return posts.map((post) => {
          return {
            route: `/post/${post.slug}/`,
            payload: post,
          }
        })
      }
    },
    build: {
      extractCSS: true,
      loaders: {
        limit: 0,
      },
      vendor: [
        'vue-vimeo-player'
      ],
    },
  }
}