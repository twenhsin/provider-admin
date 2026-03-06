// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-30',
  devtools: { enabled: true },
  css: ["~/app/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],
  
  // 加入這段 ↓
  tailwindcss: {
    configPath: './tailwind.config.cjs',
    exposeConfig: true,
  }
})
