export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sup-interface-host',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  srcDir: './client/',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/amplify.ts',
      ssr: false,
    },
    { src: '~/plugins/vee-validate.ts', ssr: false },
    { src: '~/plugins/v-click-outside.ts', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    ENV: process.env.ENV,
    // Master
    GUEST_DOMAIN: process.env.GUEST_DOMAIN || 'https://dev-guest.lost-boys-sup.com',
    // Cognito
    AUTH_IDEMTITY_POOL_ID: process.env.AUTH_IDEMTITY_POOL_ID || 'ap-northeast-1:164076924768',
    AUTH_REGION: process.env.AUTH_REGION || 'ap-northeast-1',
    AUTH_USER_POOL_ID: process.env.AUTH_USER_POOL_ID || 'ap-northeast-1_3BprrmykQ',
    AUTH_USER_POOL_WEB_CLIENT_ID: process.env.AUTH_USER_POOL_WEB_CLIENT_ID || '5o99p1jk0jm9hev3ej8nrqec0i',
    // S3
    STORAGE_AWSS3_BUCKET: process.env.STORAGE_AWSS3_BUCKET || 'dev-sup-gamma-host-bucket',
    STORAGE_AWSS3_REGION: process.env.STORAGE_AWSS3_REGION || 'ap-northeast-1',
    STORAGE_AWSS3_BASE_URL: process.env.STORAGE_AWSS3_BASE_URL || 'https://dev-assets.lost-boys-sup.com/',
    STORAGE_AWSS3_MASTER_BASE_URL: process.env.STORAGE_AWSS3_MASTER_BASE_URL || 'https://dev-assets.lost-boys-sup.com/',
    // Master
    AWS_PROJECT_REGION: process.env.AWS_PROJECT_REGION || 'ap-northeast-1',
    // AppSync
    APPSYNC_GRAPHQL_ENDPOINT: process.env.APPSYNC_GRAPHQL_ENDPOINT || 'https://qslfetzdpvb63k7zvqu6p2szqi.appsync-api.ap-northeast-1.amazonaws.com/graphql',
    APPSYNC_REGION: process.env.APPSYNC_REGION || 'ap-northeast-1',
    APPSYNC_AUTHENTICATIONTYPE: process.env.APPSYNC_AUTHENTICATIONTYPE || 'AMAZON_COGNITO_USER_POOLS',
    APPSYNC_APIKEY: process.env.APPSYNC_APIKEY || 'da2-t252fa5n2vblvnmnpnmniyi2ny',
  },
}
