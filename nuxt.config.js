export default {
  mode: 'universal',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Cala Makeup Store',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Cala Makeup Store',
        name: 'Cala Makeup Store',
        content: 'Tienda virtual de maquillaje y cuidado para la piel.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          '//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.css'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/vuetify'],

  //loading page
  loading: {
    color: 'blue',
    height: '5px',
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
}
