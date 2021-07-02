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
  getProfile: [],
  getProfileEdit: [],
  graph: [],
  authorizationId:"",
  userName: "",
  keyName: "",
  caName: "",
  salvarAlarm: '',
  validating: '',
  cardAlarm: [],
  deleteAlarm: [],
  todos: [],
  edit: {},
  unit: {},
  update: [],
  valid: '',
  errSede: '',
  errEditSede: '',
  getAlarm: [],
  getHeader: [],
  checkingSession: [],
  clear: null
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
  setProfile(state, getProfile) {
    state.getProfile = getProfile
  },
  setProfileEdit(state, getProfileEdit) {
    state.getProfileEdit = getProfileEdit
  },
  setErrSede(state, errSede) {
    state.errSede = errSede
  },
  setErrEditSede(state, errEditSede) {
    state.errEditSede = errEditSede
  },
  setGetAlarm(state, getAlarm) {
    state.getAlarm = getAlarm
  },
  setHeaderGet(state, getHeader) {
    state.getHeader = getHeader
  },
  setIdCheck(state, checkingSession) {
    state.checkingSession = checkingSession
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
  setSub(state, SubUnit) {
    state.getEdit.sub_area = SubUnit;
  },
  setCleanType(state, index) {
    state.getEdit.tipo_evento.splice(index, 1)
  },
  setCleanSystem(state, index) {
    state.getEdit.sistemas.splice(index, 1)
  },
  setCleanSub(state, index) {
    state.getEdit.sub_area.splice(index, 1)
  },
  // POPULANDO MODAL DE EDITAR PERFIS
  setModal1(state, modal1) {
    state.getProfileEdit.nome = modal1;
  },
  setModal2(state, modal2) {
    state.getProfileEdit.chave = modal2;
  },
  setModal3(state, modal3) {
    state.getProfileEdit.perfil = modal3;
  },
  setModal4(state, modal4) {
    state.getProfileEdit.unidade = modal4;
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
  setSubArea1(state, subArea1) {
    state.edit.sub_area = subArea1;
  },
  setSubArea2(state, subArea2) {
    state.edit.ends_alarme[0].sub_area = subArea2;
  },
  setSubArea3(state, subArea3) {
    state.edit.canais[0].sub_area = subArea3;
  },
  setSubArea4(state, subArea4) {
    state.edit.status_medidas[0].sub_area = subArea4;
  },
  setOperaLogic(state, OperaLogic) {
    state.edit.ends_alarme[0].operador = OperaLogic;
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

  async loadData(context, dados) {
    let {
      data: { all }
    } = await this.$axios.get(
      //CONCATENANDO O HOST COM A RODA
      HOST_API + '/alarmes-ativos/' + dados,  {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
    )

    context.commit('setAll', all)
  },

// GET PARA CHECAR O TOKEN DA SESSÃO
  async idCheck(context, dados) {
    await this.$axios.get(
      HOST_API + '/validacao_id_sessao/' + this.$cookies.get('key') || '', {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
    )
    .then(response => {
      this.checkingSession = response.data.value
      // console.log(this.$cookies.get('key') || '')
      
    })

    .catch(error => {
      this.checkingSession = false
      
    })

    context.commit('setIdCheck', this.checkingSession)

    // if (this.clear == null) {
    //   this.clear = setInterval(() => {
    //     if (this.checkingSession == false) {
    //       this._vm.$bvToast.toast('O tempo da sessão expirou', {
    //         title: `Logoff`,
    //         toaster: 'b-toaster-bottom-right',
    //         solid: true
    //       })
    //       this.logOff({logout: "tes"})
    //       this.$cookies.removeAll();
    //       this.$router.push('/')
    //     }
    //   }, 86400);
    // }
    
  },

  // GET DO HEADER DAS PAGINAS
  async headerGet(context, dados) {
    await this.$axios.get(
      HOST_API + '/header/' + dados, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
    )
    .then(response => {
      this.getHeader = response.data
    })

    context.commit('setHeaderGet', this.getHeader)
  },

  //GET DA PÁGINA DE SUGESTÕES
  async loadSuggestions(context, dados) {
    await this.$axios.get(
      HOST_API + '/sugestoes/' + dados, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }} 
    )
    .then(response => {
      this.suggest = response.data.sugestoes
      // console.log(response.data)
    })

    context.commit('setSuggest', this.suggest)
  },

  // POST DE CONSULTA DE SUGESTÃO 
  async postSuggestions(context, dados) {
    await this.$axios.post(
        HOST_API + '/sugestoes/' + 
        dados.unit + '/' + dados.id, dados.info, {
          headers: {
            'Authorization': this.$cookies.get('token') || '',
          }}
      )
    .then(response => {
      this.suggestChoice = response
    })

    context.commit('setChoice', this.suggestChoice)
  },

  // GET DE CADASTRAR SUGESTÃO
  async getRegister(context, dados) {
    await this.$axios.get(
      HOST_API + '/sugestoes/cadastro/' + dados, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
    )
    .then(response => {
      this.suggestRegister = response.data
    })

    context.commit('setRegister', this.suggestRegister)
  },

  // POST DE CADASTRAR SUGESTÃO
  async registerSuggestions(context, dados) {
    await this.$axios.post(
        HOST_API + '/sugestoes/cadastro/' + dados.unit,
      dados.info, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
      )
    
  },

  // GET DE EDITAR SUGESTÕES
  async editingSuggestions(context, dados) {
    await this.$axios.get(
      HOST_API + '/sugestoes/cadastro/' + 
      dados.unit + '/' + dados.id, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
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
        HOST_API + '/sugestoes/cadastro/' + 
        dados.unit + '/' + dados.id, dados.info, {
          headers: {
            'Authorization': this.$cookies.get('token') || '',
          }}
      )

  },

  // GET DA PÁGINA DE SELEÇÃO DE UNIDADES
  async gettingUnits(context) {
    await this.$axios.get(
      HOST_API + '/unidades', {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
    )
    .then(response => {
      this.getUnit = response.data
    })
   
    context.commit('setUnit', this.getUnit)
  },

  // GET DA PÁGINA DE EDIÇÃO DE UNIDADES
  async gettingEdits(context, id) {
    await this.$axios.get(
      HOST_API + '/unidades/' + id, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
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
          dados.id), dados.data, {
            headers: {
              'Authorization': this.$cookies.get('token') || '',
            }}
      )

  },

  //POST DA PÁGINA DE CADASTRAR UNIDADES 
  async registerUnit(context, dados) {
    await this.$axios.post(
        HOST_API + '/unidades',
      dados, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
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
      this.keyName = response.data.chave
      // this.caName = response.headers.ca
      // console.log(response.headers.authorization)
      if (response.status == 200) {
        this.$cookies.set('token', JSON.stringify(this.authorizationId))
        this.$cookies.set('name', JSON.stringify(this.userName))
        this.$cookies.set('key', JSON.stringify(this.keyName))
        // this.$cookies.set('CA', JSON.stringify(this.caName))
      }
      // console.log(response.headers)
    })
    .catch(error => {
      this.valid = error.response.data.erro
    })
  
    context.commit('setUser', this.valid)
  },

  // POST DE LOGOUT
  async logOff(context, dados) {
    await this.$axios.post(
        HOST_API + '/logout', dados.logout, {
          headers: {
            'Authorization': this.$cookies.get('token') || '',
          }}
      )
  
  },

  //GET DA PÁGINA DE CADASTRAR PERFIS
  async gettingProfile(context, id) {
    await this.$axios.get(
      HOST_API + '/perfis', {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
    )
    .then(response => {
      this.getProfile = response.data
    })
    
    context.commit('setProfile', this.getProfile)
  },

  // POST DA PÁGINA DE PERFIS
  async postProfile(context, dados) {
    this.errSede = ""
    await this.$axios.post(
      HOST_API + '/perfis', dados.info, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
    )
    .catch(error => {
      
      this.errSede = error.response.data.erro
    })

    context.commit('setErrSede', this.errSede)
    
  },

  // GET DO MODAL DA PÁGINA DE PERFIS
  async gettingProfileEdit(context, id) {
    await this.$axios.get(
      HOST_API + '/perfis/' + id, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
    )
    .then(response => {
      this.getProfileEdit = response.data
    })
    
    context.commit('setProfileEdit', this.getProfileEdit)
  },

  // PUT DA PÁGINA DE PERFIS
  async editProfile(context, dados) {
    this.errEditSede = ""
    await this.$axios.put(
      HOST_API + '/perfis/' + dados.id,
      dados.info, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
    )
    .catch(error => {
      this.errEditSede = error.response.data.erro
    })

    context.commit('setErrEditSede', this.errEditSede)

  },

  // 
  // 
  // 

  async loadRegister(context, dados) {
    await this.$axios.get(
      //CONCATENANDO O HOST COM A RODA
      HOST_API + '/alarme/' +
        dados, {
          headers: {
            'Authorization': this.$cookies.get('token') || '',
          }}
    )
    .then(response => {
      this.getAlarm = response.data.filtro_alarmes
    })

    context.commit('setGetAlarm', this.getAlarm)
  },
  
  async sendAlarms(context, dados ) {
    await this.$axios.post(
      //CONCATENANDO O HOST COM A RODA
        HOST_API + '/alarme/' + dados.unit,
      dados.info, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
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

  async loadRegistered(context, {unit}) {
    await this.$axios
      .get(
        HOST_API + '/cadastrado/' + unit, {
          headers: {
            'Authorization': this.$cookies.get('token') || '',
          }}
        
      )
      .then(response => {
        this.cardAlarm = response.data
        // console.log(response.data)
      })

    context.commit('setCard', this.cardAlarm)
  },

  async loadGraph(context, idGraph) {
    return this.$axios.get(
      //CONCATENANDO O HOST COM A RODA
      HOST_API + '/grafico/' + idGraph, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
    )
  },

  async loadCard(context, dados) {
    return this.$axios
      .get(
        HOST_API + '/cadastrado/' + 
        dados.unit + '/' + dados.route, {
          headers: {
            'Authorization': this.$cookies.get('token') || '',
          }}
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
        dados.unit + '/' + dados.id), dados.data, {
          headers: {
            'Authorization': this.$cookies.get('token') || '',
          }}
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
