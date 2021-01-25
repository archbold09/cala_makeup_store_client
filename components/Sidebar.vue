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

        <v-list-group :value="true" no-action sub-group v-for="(item,i) in getCategories.data" :key="i">
          

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <!-- <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group> -->
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created(){
    this.$store.dispatch('categories/getCategories')
  },
  data() {
    return {
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-forum' },
      ],
      admins: [
        ['Cremas', 'mdi-account-multiple-outline'],
        ['Rubores', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }
  },
  computed: {
    ...mapGetters({
      sidebar:'sidebar',
      getCategories: 'categories/getCategories',
      getSubCategories: 'subCategories/getSubCategories',
    }),
  },
}
</script>
