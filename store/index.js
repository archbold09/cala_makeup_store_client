export const state = () => ({
  sidebar: {
    baseSidebar: true,
  },
})

export const mutations = {
  changeStateSidebar(state, payload) {
    state.sidebar.baseSidebar = payload
  }
}

export const getters = {
  sidebar(state) {
    return state.sidebar.baseSidebar
  }
}