// import axios from 'moment'

export const state = () => ({
  all: [],
  graph: []
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

  async loadGraph(context, idGraph) {
    return this.$axios.get(
      'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/grafico/' +
        idGraph
    )
  },

  async sendAlarms ( context, { info }) {
    await this.$axios
      .post('https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarme/cadastro', info)
      console.log(info)
    
  },

  treatGraph(context, response) {
    const responseData = response.data

    var cores = [
      '#f87979',
      '#0000FF',
      '#00FF00',
      '#000000',
      '#FF00FF',
      '#00FFFF',
      '#C6C6C6',
      '#FFF000'
    ]

    var diaAtual = ''
    var diaAnterior = ''
    var arrayDias = new Array()
    var arrayDatasets = new Array()

    for (const key in responseData.graph) {
      const element = responseData.graph[key]
      diaAtual = element.tempo.substring(0, 10)
      if (diaAtual != diaAnterior) {
        diaAnterior = diaAtual
        element['dia'] = diaAtual
        arrayDias.push(diaAtual)
      }
    }

    for (const key in arrayDias) {
      const dia = arrayDias[key]

      arrayDatasets.push({
        label: dia,
        pointBackgroundColor: cores[key],
        fill: false,
        borderColor: cores[key],
        // data: responseData.graph.filter(i => i.dia == dia).map(v => v.valor)
        data: responseData.graph.map(v => v.valor)
      })
    }

    return {
      labels: responseData.graph.map(i => i.tempo),
      datasets: arrayDatasets
    }
  }

}
