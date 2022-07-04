export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'filmes-legais',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],
  bootstrapVue: {
    icons: true
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyDQdYf8APZn7-ugHJUW0y7KtaaYhvVG-QU',
      authDomain: 'authvuefilmes.firebaseapp.com',
      projectId: 'authvuefilmes',
      storageBucket: 'authvuefilmes.appspot.com',
      messagingSenderId: '106727432943',
      appId: '1:106727432943:web:06d7f66e30bc5fdf3cb11a'
    },
    services: {
      auth: true,
      firestore: true
    }
  },

  firestore: {
    memoryOnly: false,
    enablePersistence: true,
    emulatorPort: 8080,
    emulatorHost: 'localhost',
    settings: {
      // Firestore Settings - currently only works in SPA mode
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.themoviedb.org/3'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    defaultParams: {
      api_key: "7a6c316575389afeedb5d6c5dd145032",
      language: "pt-BR",
      adult: false
    },
  },
}
