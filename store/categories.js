export const state = () => ({
  categories: [],
})

export const mutations = {
  setCategories(state, payload) {
    state.categories = payload
  },
}

export const getters = {
  getCategories(state) {
    return state.categories
  },
}

export const actions = {
  async getCategories({ commit }) {
    try {
      const categories = await this.$axios.$get('/categories')
      commit('setCategories', categories)
    } catch (error) {
      console.error(error)
    }
  },
}
