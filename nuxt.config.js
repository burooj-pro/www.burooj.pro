export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Burooj Efficiency | كفاءة البروج ',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Custom-designed, state-of-the-art drone technology to clean building exteriors' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: 'Burooj Efficiency' },
      { name: 'author', type: 'text/plain', href: '/humans.txt' },
      { name: 'keywords', content: 'Custom, design, state of art, drone, technology, clean, building, exteriors, high, rise, khobar, east, eastern, saudi, arabia, efficiency, center' },

      { name: 'og:type', content: 'Burooj Efficiency' },
      { name: 'og:title', content: 'Burooj Efficiency | كفاءة البروج' },
      { name: 'og:description', content: 'Custom-designed, state-of-the-art drone technology to clean building exteriors' },
      { name: 'og:image', content: 'https://www.burooj.pro/social_icon.png' },
      { name: 'og:url', content: 'https://www.burooj.pro' },
      { name: 'og:site_name', content: 'Burooj Efficiency' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Burooj Efficiency | كفاءة البروج' },
      { name: 'twitter:description', content: 'Custom-designed, state-of-the-art drone technology to clean building exteriors' },
      { name: 'twitter:image', content: 'https://www.burooj.pro/social_icon.png' },
      { name: 'twitter:url', content: 'https://www.burooj.pro' },
      { name: 'twitter:site', content: '@buroojsa' },
      { name: 'twitter:creator', content: '@buroojsa' },
    ],
    link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
    ],
    script: [
      {
        src: "https://webforms.pipedrive.com/f/loader",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '@/assets/css/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/bootstrap.client.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
      host: 'localhost',
      port: '15152',
  }
}
