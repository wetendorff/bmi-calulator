// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'BMI Udregner',
      meta: [
        { name: 'description', content: 'Beregn dit Body Mass Index (MBI).' },
      ],
    },
  },
})
