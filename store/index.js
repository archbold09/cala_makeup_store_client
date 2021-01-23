export const state = () => ({
  sidebar: {
    baseSidebar: false,
  },
  categories: [],
})

export const mutations = {
  changeStateSidebar(state, payload) {
    state.sidebar.baseSidebar = payload
  },
  getCategories(state,payload){
    state.categories = actions.getCategories
  }
}

export const getters = {
  sidebar(state) {
    return state.sidebar.baseSidebar
  },
  categories(state) {
    return state.categories 
  }
}

export const actions = {
  async getCategories({commit}){
    try {
      const categories = await this.$axios.$get('/categories')
      commit('getCategories', categories)
    } catch (error) {
      console.error(error);
    }
  }
}