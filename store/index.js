// import axios from 'moment'

export const state = () => ({
  all: [],
  graph: [],
  validating: "",
  cardAlarm: [],
  deleteAlarm: [],
  registerData: [],
  update: [],
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
  deleteCard(state, deleteAlarm) {
    // let index = state.articles.findIndex(a => a.id === deleteAlarm.id)

    state.deleteAlarm.splice(state.deleteAlarm, deleteAlarm)
  },

  persistData(state, registerData) {
    state.registerData = registerData
  },
  updateCard(state, update) {
    state.update = update
  },

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
      
  },

  async sendLogic ( context, { valid }) {
    await this.$axios
      .post('https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/regra/' + valid)
      .then(response => {this.validating = response.data.ok})
      
      context.commit('setLogic', this.validating)
      
  },

  async loadRegistered(context, alarm) {
    await this.$axios
      .get('https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarme/cadastrado/' + alarm.local + '/' + alarm.name)
      .then(response => {this.cardAlarm = response})

      context.commit('setCard', this.cardAlarm.data.all)
    
  },

  async deleteRegistered(context, del) {
    await this.$axios
      .delete('https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarme/excluir/' + del.causa + '/' + del.local)
      .then(response => {this.deleteAlarm = response})
      console.log(this.deleteAlarm)

      context.commit('deleteCard', this.deleteAlarm.data.message)
      
  },

  async persist(context, alarmData) {
    await this.$axios
      .get('https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarme/persistir/' + alarmData.causa + '/' + alarmData.local)
      .then(response => {this.registerData = response.data})

      context.commit('persistData', this.registerData.value)
      console.log(this.registerData)
    
  },

  async updateData(context, upData) {
    await this.$axios
      .put('https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarme/editar/' + upData.causa + '/' + upData.local)
      .then(response => {this.update = response})

      context.commit('updateCard', this.update)
      console.log(this.update)
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
    var tempos = [...new Set(responseData.graph.map(i => i.tempo.split(' ')[1]))];

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
