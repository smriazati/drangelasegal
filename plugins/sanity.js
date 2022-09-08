import PicoSanity from 'picosanity'

// Config data for Sanity Client in Nuxt Config
const sanity = PicoSanity({
  projectId: '20mwbnbg',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2021-05-28',
  withCredentials: true
})
export { sanity }

