export const state = () => ({
  subCategories: [],
})

export const mutations = {
  setSubCategories(state, payload) {
    state.subCategories = payload
  },
}

export const getters = {
  getSubCategories(state) {
    return state.subCategories
  },
}

export const actions = {
  async getSubCategories({ commit }) {
    try {
      const subCategories = await this.$axios.$get('/subCategories')
      commit('setSubCategories', subCategories)
    } catch (error) {
      console.error(error);
    }
  },
}
