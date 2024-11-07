export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '广州铎禾电力设备有限公司',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'keywords', name: 'keywords', content: '广州铎禾, 铎禾电力，广州铎禾电力设备, 广州铎禾电力设备有限公司'},
      {
        hid: 'description',
        name: 'description',
        content: '广州铎禾电力设备有限公司是一家开发和销售并引进国外先进电力产品为主的中型企业。公司专业从事国际领先水平的电力仪器仪表及工业监控设备的研发、设计、经营和销售, 并提供相关的技术咨询、培训、支持和服务。公司始终着眼于国际领先科技，以国内外前沿技术为起点，为国内电力、石化、冶金及钢铁制造生产企业提供高品质的产品和服务。'
      },
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'baidu-site-verification', content: 'codeva-Nsw7BasbJK'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://hm.baidu.com/hm.js?a5b88a8eea0e479f6c196b9e586c022b' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
    '@/assets/css/swiper.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@assets/script/jquery.min', ssr: false},
    {src: '@assets/script/swiper.min', ssr: false},
    {src: '~/plugins/baidu', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  generate: {
    dir: 'docs'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[name].css',
      json: ({ isDev }) => isDev ? '[name].json' : '[name].json',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[ext]'
    },
  }
}
