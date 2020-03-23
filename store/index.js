// import axios from 'moment'

export const state = () => ({
  all: [],
  graph: [],
  validating: '',
  cardAlarm: [],
  deleteAlarm: [],
  todos: [],
  update: []
})

export const mutations = {
  setAll(state, all) {
    state.all = all
  },
  setGraph(state, graph) {
    state.graph = graph
  },
  setLogic(state, validating) {
    state.validating = validating
  },
  setCard(state, cardAlarm) {
    state.cardAlarm = cardAlarm
  },
  loadAllCards(state, todos) {
    state.todos = todos
  },
  updateMessage (state, update) {
    state.update = update
  },

  DELETE_CARD(state, id){
    index = state.todos.findIndex(i => i.id == id)
    state.todos.splice(index, 1)
   },
  // DELETE_CARD(state, id){
  //   index = state.todos.findIndex(i => i.id == id)
  //   state.todos.splice(index, 1)
  //  },
  // deleteCard(state, deleteAlarm) {
  //   index = state.cars.findIndex(car => car.id == id)
  //   state.cars.splice(index, 1)
  // },
  // updateCard(state, update) {
  //   state.update = update
  // }
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

  async sendAlarms(context, { info }) {
    await this.$axios.post(
      'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarme',
      info
    )
  },

  async sendLogic(context, { valid }) {
    await this.$axios
      .post(
        'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/regra/' +
          valid
      )
      .then(response => {
        this.validating = response.data.ok
      })

    context.commit('setLogic', this.validating)
  },

  async loadRegistered(context, { local, tipo_desligamento }) {
    await this.$axios
      .get(
        'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarme/' +
          local +
          '/' +
          tipo_desligamento
      )
      .then(response => {
        this.cardAlarm = response.data.todos
      })

    context.commit('setCard', this.cardAlarm)
  },

  async loadGraph(context, idGraph) {
    return this.$axios.get(
      'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/grafico/' +
        idGraph
    )
  },

  async loadCard(context, id) {
    return this.$axios
      .get(
        'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/cadastrado/' + id
      )
      .then(response => {
        context.commit('loadAllCards', response)

        return response
      })
  },

  // async deletion ({commit}, id) {
  //   this.$axios.delete('https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarme/' + todos.id)
  //     .then(() => {              
  //         commit('DELETE_CARD', id)
  //     })
  // },

  async deleteAll ({commit}, id) {
    this.$axios.delete('https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarme/' + todos.id)
      .then(() => {              
          commit('DELETE_CARD', id)
      })
  },

  // async deleteRegistered(context, del) {
  //   await this.$axios
  //     .delete(
  //       'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarme/' +
  //         del
  //     )
  //     .then(response => {
  //       this.deleteAlarm = response
  //     })
  //   // console.log(this.deleteAlarm)

  //   context.commit('deleteCard', this.deleteAlarm.data.message)
  // },

  async updateData(context, upData) {
    await this.$axios
      .put(
        'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarme/' +
          upData.ident
      )
      .then(response => {
        this.update = response
      })

    context.commit('updateCard', this.update)
    // console.log(this.update)
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
    var tempos = [
      ...new Set(responseData.graph.map(i => i.tempo.split(' ')[1]))
    ]

    for (const key in responseData.graph) {
      const element = responseData.graph[key]
      diaAtual = element.tempo.substring(0, 10)
      element['dia'] = diaAtual
      if (diaAtual != diaAnterior) {
        diaAnterior = diaAtual

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
        data: responseData.graph.filter(i => i.dia == dia).map(v => v.valor)
      })
    }

    return {
      labels: tempos,
      datasets: arrayDatasets
    }
  }
}
