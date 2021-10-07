var BASE_URL = null;
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000';
}
else {
  console.log(process.env.NODE_ENV);
  BASE_URL = 'https://smartalarms-backend-hmg.petrobras.com.br';
}

export default {

  env: {
    //PEGANDO A VARIAVEL DE AMBIENTE OU PEGAR A STRING MOCADA
    baseURL: process.env.baseURL || BASE_URL
  },

  mode: 'spa',
  /*
   ** Headers of the page
   */

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/base.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/main.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'cookie-universal-nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
