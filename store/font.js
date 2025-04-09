export const state = () => ({

  fontSizePercent: 100

})

export const getters = {

  getFontSizePercent: (state) => {
    return state.fontSizePercent
  },
}

export const mutations = {

  setFontSizePercent (state, payLoad) {
    state.fontSizePercent = payLoad
  }
}

export const actions = {

  setFontSizePercent ({ commit }, payLoad) {
    commit('setFontSizePercent', payLoad)
  }
}