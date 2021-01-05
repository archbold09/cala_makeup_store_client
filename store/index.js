export const state = () => ({
  sidebar: {
    baseSidebar: true,
  },
})

export const mutations = {
  changeStateSidebar(state) {
    state.sidebar.baseSidebar = !state.sidebar.baseSidebar
  }
}

export const getters = {
  sidebar(state) {
    return state.sidebar.baseSidebar
  }
}