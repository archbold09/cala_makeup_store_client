<template>
  <v-navigation-drawer :value="sidebar" absolute temporary>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title> CALA MAKEUP STORE </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>

      <v-list-group :value="true" prepend-icon="mdi-package-variant">
        <template v-slot:activator>
          <v-list-item-title>Productos</v-list-item-title>
        </template>

        <v-list-group
          :value="true"
          no-action
          sub-group
          v-for="(item, i) in sidebarContent.categories"
          :key="i"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(item2, i2) in item.subCategories" :key="i2" link>
            <v-list-item-title v-text="item2.name"></v-list-item-title>

            <v-list-item-icon>
              <!-- <v-icon v-text="icon"></v-icon> -->
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      sidebarContent: {
        categories: [
          {
            name: 'Primers',
            icon: '',
            subCategories: [
              { name: 'Primers' },
              { name: 'Correctores' },
              { name: 'Bases' },
              { name: 'Contornos e iluminadores' },
              { name: 'Iluminadores' },
              { name: 'Rubores' },
              { name: 'Polvos' },
            ],
          },
          {
            name: 'Correctores',
            icon: '',
            subCategories: [
              { name: 'Pestaniñas' },
              { name: 'Delineadores' },
              { name: 'Pestañas postizas' },
              { name: 'Sombras' },
              { name: 'Primers' },
            ],
          },
          {
            name: 'Bases',
            icon: '',
            subCategories: [
              { name: 'Tónicos' },
              { name: 'Desmaquillantes' },
              { name: 'Exfoliantes' },
              { name: 'Mascarillas' },
              { name: 'Otros' },
              { name: 'Cremas' },
            ],
          },
          {
            name: 'Contornos e iluminadores',
            icon: '',
            subCategories: [
              { name: 'Esponjas' },
              { name: 'Brochas' },
              { name: 'Cintillos' },
            ],
          },
          {
            name: 'Iluminadores',
            icon: '',
            subCategories: [
              { name: 'Labiales en barra' },
              { name: 'Lápices' },
              { name: 'Labiales liquidos' },
              { name: 'Brillos y humectantes' },
              { name: 'Primers' },
            ],
          },
          {
            name: 'Rubores',
            icon: '',
            subCategories: [
              { name: 'Lápices' },
              { name: 'Betunes' },
              { name: 'Kit' },
            ],
          },
        ],
      },
    }
  },
  computed: {
    ...mapGetters({
      sidebar: 'sidebar',
    })
  },
}
</script>