// import axios from 'moment'

export const state = () => ({
  all: [],
  graph:[]
})

export const mutations = {
  setAll(state, all) {
    state.all = all
  },
  setGraph(state, graph) {
    state.graph = graph
  }
}

export const actions = {
  async loadData(context) {
    let {
      data: { all }
    } = await this.$axios.get(
      'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarmes-ativos'
    )
    context.commit('setAll', all)
  },

  // async loadGraph(context, graphEnd) {
  //   let {
  //     data: {graph}
  //   } = await this.$axios.get(
  //     // 'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/grafico/' + this.graphEnd
  //     'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/grafico/21MBD11CT001'
  //   )
  //   context.commit('setGraph', graph)
  // },

  async loadGraph ({ commit, graphEnd }) {
    this.$axios
      .get('https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/grafico/21MBD11CT001')
      .then(r => {
        console.log(r.data)
        // console.log(graphEnd)
      })
  }
}
export const getters = {
  teste: state => {
    return state.loadGraph.filter(todo => todo.time)
  }
}
