// import axios from 'moment'

//PEGANDO A VARIAVEL DE AMBIENTE OU PEGAR A STRING MOCADA
export const HOST_API = process.env.baseURL; 
export const strict = false;

export const state = () => ({
  all: [],
  suggest: [],
  suggestChoice: [],
  suggestRegister: [],
  getSuggest: [],
  getUnit: [],
  getEdit: [],
  graph: [],
  authorizationId:"",
  userName: "",
  salvarAlarm: '',
  validating: '',
  cardAlarm: [],
  deleteAlarm: [],
  todos: [],
  edit: {},
  unit: {},
  update: [],
  valid: '',
  // 
  
})

export const mutations = {
  setAll(state, all) {
    state.all = all
  },
  setSuggest(state, suggest) {
    state.suggest = suggest
  },
  setChoice(state, suggestChoice) {
    state.suggestChoice = suggestChoice
  },
  setRegister(state, suggestRegister) {
    state.suggestRegister = suggestRegister
  },
  setEdit(state, getSuggest) {
    state.getSuggest = getSuggest
  },
  setUnit(state, getUnit) {
    state.getUnit = getUnit
  },
  setEditing(state, getEdit) {
    state.getEdit = getEdit
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
  deleteCard(state, deleteAlarm) {
    state.deleteAlarm = deleteAlarm
  },
  setUser(state, valid) {
    state.valid = valid
  },

  // POPULANDO A PAGINA DE EDITAR UNIDADES
  setUnitName(state, unitName) {
    state.getEdit.unidade = unitName;
  },
  setConnectionType(state, connectionType) {
    state.getEdit.tipo_conexao = connectionType;
  },
  setEventUnit(state, eventUnit) {
    state.getEdit.tipo_evento = eventUnit;
  },
  setSystemUnit(state, systemUnit) {
    state.getEdit.sistemas = systemUnit;
  },

  // POPULANDO A PAGINA DE EDITAR ALARMES CADASTRADOS
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
  // Mutations para alterar os arrays na página de editar alarmes
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

  //GET DA PÁGINA DE SUGESTÕES
  async loadSuggestions(context) {
    await this.$axios.get(
      HOST_API + '/sugestoes'
    )
    .then(response => {
      this.suggest = response.data.sugestoes
    })

    context.commit('setSuggest', this.suggest)
  },

  // POST DE CONSULTA DE SUGESTÃO 
  async postSuggestions(context, dados) {
    await this.$axios.post(
        HOST_API + '/sugestoes/' + dados.id,
      dados.info
      )
    .then(response => {
      this.suggestChoice = response
    })

    context.commit('setChoice', this.suggestChoice)
  },

  // GET DE CADASTRAR SUGESTÃO
  async getRegister(context) {
    await this.$axios.get(
      HOST_API + '/sugestoes/cadastro'
    )
    .then(response => {
      this.suggestRegister = response.data.filtro
    })

    context.commit('setRegister', this.suggestRegister)
  },

  // POST DE CADASTRAR SUGESTÃO
  async registerSuggestions(context, dados) {
    await this.$axios.post(
        HOST_API + '/sugestoes/cadastro',
      dados.info
      )
    
  },

  // GET DE EDITAR SUGESTÕES
  async editingSuggestions(context, dados) {
    await this.$axios.get(
      HOST_API + '/sugestoes/cadastro/' + dados
    )
    .then(response => {
      this.getSuggest = response.data
    })
    // console.log(dados)
    context.commit('setEdit', this.getSuggest)
  },

  // PUT DE EDITAR SUGESTÃO
  async editSuggestions(context, dados) {
    await this.$axios.put(
        HOST_API + '/sugestoes/cadastro/' + dados.id,
      dados.info
      )

  },

  // GET DA PÁGINA DE SELEÇÃO DE UNIDADES
  async gettingUnits(context) {
    await this.$axios.get(
      HOST_API + '/unidades'
    )
    .then(response => {
      this.getUnit = response.data.unidades
    })
   
    context.commit('setUnit', this.getUnit)
  },

  // GET DA PÁGINA DE EDIÇÃO DE UNIDADES
  async gettingEdits(context, id) {
    await this.$axios.get(
      HOST_API + '/unidades/' + id
    )
    .then(response => {
      this.getEdit = response.data
    })
    
    context.commit('setEditing', this.getEdit)
  },
  
  // PUT DA PÁGINA DE EDIÇÃO DE UNIDADES
  async updateUnit(context, dados) {
    await this.$axios
      .put(
        (HOST_API + '/unidades/' +
          dados.id), dados.data
      )

  },

  //POST DA PÁGINA DE CADASTRAR UNIDADES 
  async registerUnit(context, dados) {
    await this.$axios.post(
        HOST_API + '/unidades',
      dados
      )
    
  },

  // POST DA PÁGINA DE LOGIN
  async loginUser(context, dados) {
    this.valid = ''
    await this.$axios.post(
        HOST_API + '/login',
      dados.info
      )
      .then(response => {
      this.authorizationId = response.headers.authorization
      this.userName = response.data.nome
      if (response.status == 200) {
        localStorage.setItem('token', JSON.stringify(this.authorizationId));
        localStorage.setItem('name', JSON.stringify(this.userName));
      }
    })
    .catch(error => {
      this.valid = error.response.data.erro
    })
  
    context.commit('setUser', this.valid)
  },

  // POST DE LOGOUT
  async logOff(context, dados) {
    await this.$axios.post(
        HOST_API + '/logout',
      dados.Authorization
      )
  
  },
  // 
  
  async sendAlarms(context, { info }) {
    await this.$axios.post(
      //CONCATENANDO O HOST COM A RODA
        HOST_API + '/alarme',
      info
    )
    // .then(response => {
    //   this.salvarAlarm = response.data.erro
    // })

    // context.commit('setAlarm', this.salvarAlarm)
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
