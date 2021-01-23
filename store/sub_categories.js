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
  // getCategories:{
    setCategories(state,payload){
      state.categories = payload
    }
  // }
}

export const getters = {
  sidebar(state) {
    return state.sidebar.baseSidebar
  },
  getCategories(state) {
    return state.categories 
  }
}

export const actions = {
  async getCategories({commit}){
    const categories = await this.$axios.$get('/categories')
    commit('setCategories', categories)
    // try {
    // } catch (error) {
    //   console.error(error);
    // }
  }
}