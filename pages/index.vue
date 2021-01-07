<template>
  <div>
    <v-container>
      <v-row>
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
      </v-row>

      <v-row class="my-6">
        <v-col sm="12" md="3" lg="3" xl="3" v-for="n in 4" :key="n">
          <div class="d-flex justify-center align-center">
            <div>
              <v-avatar dark size="90">
                <v-icon size="90">mdi-package</v-icon>
              </v-avatar>
            </div>
            <div>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-row class="mt-4">
        <v-col cols="12" class="text-center">
          <h1 class="font-weight-light diplay-3">Categorías Populares</h1>
        </v-col>

        <v-col cols="12">
          <v-slide-group multiple show-arrows>
            <v-slide-item v-for="n in 4" :key="n">
              <div class="text-center mx-2">
                <v-img max-width="200" src="/illustration.jpg"></v-img>
                <p>Categoría</p>
              </div>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col sm="12" md="4" lg="4" xl="3" v-for="n in 4" :key="n">
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>

              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
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
      products: [
        {
          img:
            'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        },
        {
          img:
            'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        },
        {
          img:
            'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
        },
      ],
    }
  },
}
</script>

<style scoped>
.on-hover {
  opacity: 0.8;
  transition: opacity 0.4s ease-in-out;
}
</style>
