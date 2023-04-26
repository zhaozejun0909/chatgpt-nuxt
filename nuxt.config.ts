// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "ChatGPT",
      meta: [
        {
          name: "description",
          content: "基于 OpenAI 的 ChatGPT 自然语言模型人工智能对话",
        },
        {
          name: 'viewport',
          content: 'initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width,viewport-fit=cover',
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon"],
  css: ["highlight.js/styles/dark.css"],
  tailwindcss: {
    config: {
      content: [],
      plugins: [require("@tailwindcss/typography")],
    },
  },
  ssr: false,
});
