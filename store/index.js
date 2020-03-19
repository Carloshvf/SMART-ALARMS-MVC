// import axios from 'moment'

//PEGANDO A VARIAVEL DE AMBIENTE OU PEGAR A STRING MOCADA
export const HOST_API = process.env.baseURL; 

export const state = () => ({
  all: [],
  graph: [],
  validating: "",
  cardAlarm: [],
  deleteAlarm: [],
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
    state.deleteAlarm = deleteAlarm
  }

}


export const actions = {

  

  async loadData(context) {
    let {
      data: { all }
    } = await this.$axios.get(
      //CONCATENANDO O HOST COM A RODA
      HOST_API + '/alarmes-ativos'
    )

    context.commit('setAll', all)
  
  },

  async loadGraph(context, idGraph) {
    return this.$axios.get(
      //CONCATENANDO O HOST COM A RODA
      HOST_API + '/grafico/' +
        idGraph
    )
  },

  async sendAlarms ( context, { info }) {
    await this.$axios
      .post(
        //CONCATENANDO O HOST COM A RODA
        HOST_API + '/alarme/cadastro', 
        info
      )
      
  },

  async sendLogic ( context, { valid }) {
    await this.$axios
      .post(
        //CONCATENANDO O HOST COM A RODA
        HOST_API + '/regra/' + valid
      )
      .then(response => {this.validating = response.data.ok})
      
      context.commit('setLogic', this.validating)
      
  },

  async loadRegistered(context, alarm) {
    await this.$axios
      .get(
        //CONCATENANDO O HOST COM A RODA
        HOST_API + '/alarme/cadastrado/' + alarm.local + '/' + alarm.name
      )
      .then(response => {this.cardAlarm = response})

      context.commit('setCard', this.cardAlarm.data.all)
    
  },

  async deleteRegistered(context, del) {
    await this.$axios
      .delete(
        //CONCATENANDO O HOST COM A RODA
        HOST_API + '/alarme/excluir/' + del.causa + '/' + del.local
      )
      .then(response => {this.deleteAlarm = response})
      console.log(this.deleteAlarm)

      context.commit('deleteCard', this.deleteAlarm.data.message)
    
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
