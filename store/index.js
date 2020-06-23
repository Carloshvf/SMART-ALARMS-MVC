// import axios from 'moment'

//PEGANDO A VARIAVEL DE AMBIENTE OU PEGAR A STRING MOCADA
export const HOST_API = process.env.baseURL; 

export const state = () => ({
  all: [],
  graph: [],
  salvarAlarm: '',
  validating: '',
  cardAlarm: [],
  deleteAlarm: [],
  todos: [],
  edit: {},
  update: [],
  // 
  
})

export const mutations = {
  setAll(state, all) {
    state.all = all
  },
  setGraph(state, graph) {
    state.graph = graph
  },
  setAlarm(state, salvarAlarm) {
    state.salvarAlarm = salvarAlarm
  },
  setLogic(state, validating) {
    state.validating = validating
  },
  setCard(state, cardAlarm) {
    state.cardAlarm = cardAlarm
  },
  loadInfo(state, edit) {
    state.edit = edit
  },
  updateCard(state, update) {
    state.update = update
  },
  // DELETE_CARD(state, id){
  //   index = state.todos.findIndex(i => i.id == id)
  //   state.todos.splice(index, 1)
  //  },
  deleteCard(state, deleteAlarm) {
    state.deleteAlarm = deleteAlarm
  },

  // POPULANDO A PAGINA DE EDITAR
  setLocal(state, local) {
    state.edit.local = local;
  },
  setComplemento(state, complemento) {
    state.edit.complemento = complemento;
  },
  setOffType(state, offType) {
    state.edit.tipo_desligamento = offType;
  },
  setCausa(state, causa) {
    state.edit.causa = causa;
  },
  setTextMedida(state, textMedida) {
    state.edit.endereco_medida = textMedida;
  },
  setUnit1(state, unit1) {
    state.edit.unidade = unit1;
  },
  setTextAlarme(state, textAlarme) {
    state.edit.ends_alarme[0].end_alarme = textAlarme;
  },
  setActivation1(state, activation1) {
    state.edit.ends_alarme[0].ativacao = activation1;
  },
  setLogica(state, logic) {
    state.edit.logica = logic;
  },
  setCanais(state, canais) {
    state.edit.canais = canais;
  },
  setStatus(state, status) {
    state.edit.status_medidas = status;
  },
  setRecom(state, recomendacao) {
    state.edit.recomendacoes = recomendacao;
  },
  // Mutations para alterar os arrays na página de editar
  setNewRecom(state, recomendacao) {
    state.edit.recomendacoes.push({item: recomendacao})
  },
  setNewCanal(state, canal) {
    state.edit.canais.push(canal)
  },
  setNewMeasure(state, status) {
    state.edit.status_medidas.push(status)
  },
  setCleanCanal(state, index) {
    state.edit.canais.splice(index, 1)
  },
  setCleanStatus(state, index) {
    state.edit.status_medidas.splice(index, 1)
  },
  setCleanRecom(state, index) {
    state.edit.recomendacoes.splice(index, 1)
  },
  // 
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
  
  async sendAlarms(context, { info }) {
    await this.$axios.post(
      //CONCATENANDO O HOST COM A RODA
        HOST_API + '/alarme',
      info
    )
    .then(response => {
      this.salvarAlarm = response.data.erro
    })

    context.commit('setAlarm', this.salvarAlarm)
  },

  async sendLogic(context, { valid }) {
    await this.$axios
      .post(
        HOST_API + '/regra',
        {'logica':"'" + valid + " '"}
      )
      .then(response => {
        this.validating = response.data.ok
      })

    context.commit('setLogic', this.validating)
  },

  async loadRegistered(context, { local, tipo_desligamento }) {
    await this.$axios
      .get(
        HOST_API + '/alarme/' +
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
      //CONCATENANDO O HOST COM A RODA
      HOST_API + '/grafico/' +
        idGraph
    )
  },

  async loadCard(context, id) {
    return this.$axios
      .get(
        HOST_API + '/cadastrado/' + id
      )
      .then(response => {
        context.commit('loadInfo', response.data.todos[0])

        return response
      })
  },

  async updateData(context, dados) {
    await this.$axios
      .put(
        (HOST_API + '/alarme/' +
          dados.id), dados.data
      )
    //   .then(response => {
    //     this.update = response
    //   })
      
    // context.commit('updateCard', this.update)
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
      value: responseData.medida,
      datasets: arrayDatasets
    }
  }

}
