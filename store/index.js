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

  async loadGraph ({ context, graphEnd }) {
    await this.$axios
      .get('https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/grafico/21MBD11CT001')
      .then(r => {
        console.log(r.data.graph)
        
        // console.log(graphEnd)
      })
    context.commit('setGraph', graph)
  },

  async sendAlarms ({ context }) {
    await this.$axios
      .post('https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/regra/', {})
      .then(r => {
        console.log(r.data)  
      })
      .catch(e => {
      
      })
      
  }

}
// export const getters = {
//   teste: state => {
//     return state.graph.filter(todo => todo.tempo)
//   }
// }
