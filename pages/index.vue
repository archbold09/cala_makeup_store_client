<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-hover v-slot="{ hover }">
            <v-carousel
              class="rounded-lg"
              cycle
              height="400"
              :show-arrows="false"
              hide-delimiters
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <v-container v-if="hover" class="fill-height ma-0">
                  <v-row
                    align="center"
                    justify="center"
                    class="text-center white--text"
                  >
                    <v-col cols="12">
                      <h1 class="display-2 font-weight-black">Combo 1</h1>
                    </v-col>
                    <v-col cols="12">
                      <p class="headline">
                        $19.999
                        <span class="display-1">-</span>
                        <v-btn class="rounded-xl" color="primary">
                          Ver información
                          <v-icon right>mdi-chevron-right</v-icon>
                        </v-btn>
                      </p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-carousel-item>
            </v-carousel>
          </v-hover>
        </v-col>

        <v-col sm="12" md="6" lg="4" xl="5">
          <v-card dark elevation="2" class="rounded-xl">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline"> Combo 2 </v-card-title>

                <v-card-subtitle> En nuestra tienda. </v-card-subtitle>

                <v-card-text> Lorem ipsum dolor sit amet. </v-card-text>

                <v-card-actions>
                  <v-btn class="mx-4" link rounded small>
                    Comprar
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" tile>
                <v-img src="/illustration.jpg"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col sm="12" md="6" lg="8" xl="7">
          <v-card elevation="2" class="rounded-xl">
            <v-card dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="headline">
                    Unlimited music now
                  </v-card-title>

                  <v-card-subtitle>
                    Listen to your favorite artists.
                  </v-card-subtitle>

                  <v-card-text> Lorem ipsum dolor sit amet. </v-card-text>

                  <v-card-actions>
                    <v-btn class="mx-4" link rounded small>
                      Comprar
                      <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar class="ma-3" tile>
                  <v-img src="/illustration.jpg"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-card>
        </v-col>

        <v-col sm="12" md="3" lg="3" xl="3" v-for="n in 4" :key="n">
          <div class="text-center">
            <v-avatar dark size="90">
              <v-icon size="90">mdi-package</v-icon>
            </v-avatar>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </v-col>

        <v-divider></v-divider>

        <v-col cols="12" class="text-center">
          <h1 class="font-weight-light diplay-3">Categorías Populares</h1>
        </v-col>

        <v-col cols="12">
          <v-slide-group multiple show-arrows>
            <v-slide-item v-for="n in 10" :key="n">
              <div class="text-center mx-2">
                <v-img max-width="200" src="/illustration.jpg"></v-img>
                <p>Categoría</p>
              </div>
            </v-slide-item>
          </v-slide-group>
        </v-col>

        <v-col cols="12" class="text-start">
          <v-sheet color="red lighten-5" class="rounded-lg py-8" elevation="3">
            <v-col cols="12">
              <p
                class="font-weight-black pl-6 text-sm-subtitle-1 text-md-subtitle-2 text-lg-h6 text-xl-h4"
              >
                Productos populares
              </p>

              <v-slide-group multiple show-arrows>
                <v-slide-item v-for="n in 10" :key="n">
                  <div class="text-center mx-2">
                    <v-img max-width="200" src="/illustration.jpg"></v-img>
                    <p>Categoría</p>
                  </div>
                </v-slide-item>
              </v-slide-group>
            </v-col>
          </v-sheet>
        </v-col>

        <v-col cols="12" class="text-start">
          <v-parallax height="250" dark src="/img2.jpg" elavation="4">
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-normal mb-4">
                  Nuestras ofertas
                </h1>
                <v-btn rounded text dark class="font-weight-black">
                  Ver más
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-parallax>
        </v-col>

        <NewProducts :newProducts="newProducts" />
      </v-row>
    </v-container>

    <v-parallax dark height="250" src="illustration.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-black mb-4">
            Suscribete a nuestro Newsletter
          </h1>

          <v-row justify="center" align-content="center">
            <v-col cols="12" sm="12" md="2" lg="2" xl="2">
              <v-text-field
                filled
                rounded
                dense
                background-color="white"
                placeholder="Email@example.com"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="2" lg="2" xl="2">
              <v-btn color="primary">Suscribirme</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const newProducts = await $axios.$get('/products/newProducts')
    return {newProducts}
  },
  data() {
    return {
      items: [
        {
          src: '/illustration.jpg',
        },

        {
          src: '/img2.jpg',
        },
        {
          src: '/img1.jpg',
        },
      ],
    }
  },
  computed: {
    getNewProducts() {},
  },
}
</script>

<style scoped>
.on-hover {
  opacity: 0.8;
  transition: opacity 0.4s ease-in-out;
}
</style>
