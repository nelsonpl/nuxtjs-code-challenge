// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/global.css"],
  devtools: { enabled: true },
  compatibilityDate: "2024-07-03",
  build: {
    transpile: ["trpc-nuxt"],
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
});