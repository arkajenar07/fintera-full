// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    // Menyertakan font 'Roboto' dengan ukuran weight 300, 400, dan 700
    families: {
      'Plus Jakarta Sans': [400, 500, 600, 700],
      Roboto: [300, 400, 700],
      Inter: {
        wght: [400, 700],
        ital: [400]
      }
    },
    download: true,      // Mengunduh font secara lokal agar performa lebih cepat
    inject: true,        // Menyuntikkan tag link/style font secara otomatis
    display: 'swap',     // Menggunakan font-display: swap untuk optimasi loading
    prefetch: true,
    preconnect: true,
  }
})