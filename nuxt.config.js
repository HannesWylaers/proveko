const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Proveko – Uw partner voor een kwalitatieve begeleiding van uw dossier zowel bouwkundig als bij huur. Bel gratis voor eerste advies.' },
      { name: 'keywords', content: 'plaatsbeschrijving bouwcoördinatie expertise koen verzelen proveko huur deinze zulte gent partner energie milieu zekerheid kwaliteit confederatie vastgoed expertisebureau aannemer architect kantoor vastgoed immo consultant bouw bouwadviseur' },
      { name: 'author', content: 'Hannes Wylaers' },
      { name: 'og:title', content: "Proveko – Plaatsbeschrijvingen – Bouwcoördinatie – Energie-Milieu – Vastgoedexpertise" },
      { name: 'og:type', content: "website" },
      { name: 'og:url', content: "http://www.proveko.be" },
      { name: 'og:image', content: "/logo_proveko.svg" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Sans:400,500,700' },
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#1e9ec0' },

  /*
    ** Style resources
  */
  styleResources: {
    scss: './assets/scss/main.scss'
  },

  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    ['nuxt-gmaps', {
      key: 'AIzaSyCojjQQoihPaSqfSMvPJEH12GK6fmDOYjo',
      libraries: ['places']
    }]
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  transpile: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
