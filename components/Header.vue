<template>
  <div>
    <v-app-bar dense flat>
      <v-btn icon>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <span>
        <v-chip outlined link>
          <v-icon left>mdi-phone</v-icon> +57 3205625795</v-chip
        >
      </span>
    </v-app-bar>
    <v-app-bar dark>
      <v-btn icon @click.stop="changeStateSidebar">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-btn>

      <v-toolbar-title class="font-weight-black">
        CALA <span class="font-weight-light">MAKEUP STORE</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          dark
          next-icon="mdi-arrow-right"
          prev-icon="mdi-arrow-left"
          show-arrows
        >
          <v-tab>INICIO</v-tab>
          <v-tab>PRODUCTOS</v-tab>
          <v-tab>NOSOTROS</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['changeStateSidebar']),
  },
}
</script>
