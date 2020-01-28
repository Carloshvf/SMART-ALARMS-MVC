export const state = () => ({
  all: []
})

export const mutations = {
  setAll(state, all) {
    state.all = all
  }
}

export const actions = {
  async loadAlarms(context) {
    let {
      data: { all }
    } = await this.$axios.get(
      'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarmes-ativos'
    )
    context.commit('setAll', all)
  }
}
