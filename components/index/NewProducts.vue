<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="font-weight-light diplay-3">Productos nuevos</h1>
      </v-col>


      <v-col class="text-center my-8" cols="12">
        <v-slide-group multiple show-arrows>
          <v-slide-item v-for="(item, index) in newProducts.data" :key="index">
            <nuxt-link
              :to="{
                name: 'product-id',
                path: '/product/:id',
                params: { id: item.id },
              }"
            >
              <div class="text-center mx-2">
                <v-img max-width="200" min-width="200" min-height="100" max-height="100" :src="item.image"></v-img>
                <p>{{item.name}}</p>
              </div>
            </nuxt-link>
          </v-slide-item>
        </v-slide-group>
        <v-btn rounded color="primary" outlined
          >Ver todos los productos
          <v-icon right>mdi-chevron-right</v-icon></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  props: {
    newProducts: {
      type: Object,
      required: true,
    },
  },
}
</script>
