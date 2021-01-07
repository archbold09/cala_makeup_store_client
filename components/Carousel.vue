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
          <!-- <v-hover v-slot="{ hover }">
            <v-card
              shaped
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                max-height="300"
                src="/illustration.jpg"
                aspect-ratio="1.7"
              >
                <v-container v-if="hover" class="fill-height ma-0">
                  <v-row
                    align="center"
                    justify="center"
                    class="text-center white--text"
                  >
                    <v-col cols="12">
                      <h1 class="display-2 font-weight-black">Combo</h1>
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
              </v-img>
            </v-card>
          </v-hover> -->
        </v-col>
        <v-col cols="4">
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

              <v-avatar class="ma-3" size="90" tile>
                <v-img src="/illustration.jpg"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-card elevation="2" class="rounded-xl">
            <v-card dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="headline">
                    Unlimited music now
                  </v-card-title>

                  <v-card-subtitle>
                    Listen to your favorite artists and albums whenever and
                    wherever, online and offline.
                  </v-card-subtitle>

                  <v-card-text> Lorem ipsum dolor sit amet. </v-card-text>

                  <v-card-actions>
                    <v-btn class="mx-4" link rounded small>
                      Comprar
                      <v-icon right>mdi-arrow-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </div>

                <v-avatar class="ma-3" size="125" tile>
                  <v-img src="/illustration.jpg"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-card>
        </v-col>
      </v-row>

      <!-- <v-row>
        <template v-for="n in 4">
          <v-col :key="n" class="mt-2" cols="12">
            <strong>Category {{ n }}</strong>
          </v-col>

          <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
            <v-sheet color="green" height="150"></v-sheet>
          </v-col>
        </template>
      </v-row> -->
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
    }
  },
}
</script>
