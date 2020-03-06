<template>
  <div class="container">
    <div class="form-row align-items-end mt-4">
      <div class="col">
        <h1 class="mt-5 titles">Cadastro de alarme</h1>
      </div>
    </div>
    <!-- Mexer nos hover -->
    <div class="form-row mt-4">
      <div class="col">
        <label class="mt-4 sizing">TIPO DE DESLIGAMENTO</label>
        <select class="form-control" v-model="offType">
          <option>PLS</option>
          <option>PLST</option>
        </select>
      </div>
      <div class="col-10">
        <label class="mt-4 sizing">CAUSA</label>
        <input type="text" class="form-control" placeholder="Escreva aqui..." v-model="reason" >
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-6">
        <div class="form-row align-items-end">
          <div class="col-4">
            <label class="sizing">ENDEREÇO DE MEDIDA</label>
            <input type="text" class="form-control" v-model="textMedida">
          </div>
          <div class="col-2">
            <label class="sizing">UNIDADE</label>
            <input type="text" class="form-control" v-model="unit1" >
          </div>
          
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-row align-items-end">
          <div class="col-2">
            <label class="sizing">OPERADORES</label>
            <select class="form-control" v-model="operators">
              <option>E</option>
              <option>OU</option>
              <option>(</option>
              <option>)</option>
            </select>
          </div>  
          <div class="ml-2 mr-2">
            <button class="btn btn-green rounded-circle" @click="sendOperator()">+</button>
          </div>
          <div class="col-4">
            <label class="sizing">ENDEREÇO DE ALARME</label>
            <input type="text" class="form-control" v-model="textAlarme">
          </div>
          <div class="col-2">
            <label class="sizing">ATIVAÇÃO</label>
            <select class="form-control" v-model="activation1">
              <option>1</option>
              <option>0</option>
            </select>
          </div>
          <div class="ml-3">
            <button class="btn btn-green rounded-circle" @click="sendActivation()">+</button> 
          </div>
        </div>
      </div>
    </div>
    <!-- CADASTRO DE ALARMES -->
    <div class="row">
      <div class="col-sm" >
        <div class="form-row mt-4">
          <div class="col">
            <label class="mini-title">LISTA DE ALARMES</label>
            <textarea class="form-control push-area" v-model="separador" disabled></textarea>
            <button class="btn btn-green btn-validar mt-4" @click="validate()">Validar</button>
            <button class="btn btn-clean mt-4 ml-3" @click="cleanArea()">Limpar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- LISTA DE ALARMES -->
    <div class="row">
      <div class="col-sm-6">
        <div class="form-row mt-5">
          <div class="col-3">
            <h4 class="titles">Canais</h4>
          </div>
        </div>
      
        <div class="form-row align-items-end mt-3">
          <div class="col-4">
            <label class="sizing">ENDEREÇO DO ALARME</label>
            <input type="text" class="form-control" v-model="infoAlarme">
          </div>
          <div class="col-2">
            <label class="sizing">ATIVAÇÃO</label>
            <select class="form-control" v-model="activation2">
              <option>1</option>
              <option>0</option>
            </select>
          </div>
          <div class="col-4">
            <label class="sizing">ENDEREÇO DE MEDIDA</label>
            <input type="text" class="form-control" v-model="infoMedida" >
          </div>

          <div class="col-1">
            <label class="sizing">UNIDADE</label>
            <input type="text" class="form-control" v-model="unit2">
          </div>  
          <div class="ml-2">
            <button class="btn btn-green rounded-circle" @click="sendEnderecos()">+</button>
          </div>

          
            <div class="col-12 mt-4 scroll">
              <table class="table">
                <thead>
                  <tr class="address border-line">
                    <th scope="col">ENDEREÇO DO ALARME</th>
                    <th scope="col">ENDEREÇO DE MEDIDA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in end" :key="item.id">
                    <td class="border-line">{{ item.end_alarme }}</td>
                    <td class="border-line"> {{ item.end_medida }}</td>
                    <td class="border-line">
                      <delete-outline @click="cleanCanais()"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          
        </div>
      </div>
      <!-- CANAIS -->
      <div class="col-sm-6">
        <div class="form-row mt-5">
          <div class="col-10 mb-3">
            <h4 class="titles">Status e Medidas</h4>
          </div>

          <div class="col-3">
            <label class="sizing">TIPO</label>
            <select class="form-control" v-model="types">
              <option>Medida</option>
              <option>Status</option>
            </select>
            
          </div>
          <div class="col-5">
            <label class="sizing">NOME</label>
            <input type="text" class="form-control" v-model="name">
          </div>
          <div class="col-4">
            <label class="sizing">ENDEREÇO NO SUPERVISÓRIO</label>
            <input type="text" class="form-control" v-model="infoSuper">
          </div>
        </div>
        <div class="form-row align-items-end mt-4">
          <div class="col-2">
            <label class="sizing">PRIORIDADE</label>
            <select class="form-control" v-model="priority">
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div class="col-2">
            <div v-if="types == 'Medida'">
              <label class="sizing">UNIDADE</label>
              <input type="text" class="form-control" v-model="unit3">
            </div>
            <div v-else-if="types == 'Status'">
              <label class="sizing">ATIVAÇÃO</label>
              <select class="form-control" v-model="activation3">
                <option>1</option>
                <option>0</option>
              </select>
            </div>
          </div>
          <div class="ml-4">
            <button class="btn btn-green rounded-circle" @click="sendMeasures()">+</button>
          </div>
          
          <div class="col-12 mt-3 scroll">
            <table class="table">
              <thead>
                <tr class="address border-line">
                  <th scope="col">TIPO</th>
                  <th scope="col">NOME</th>
                  <th scope="col">ENDEREÇO</th>
                  <th scope="col">PRIORIDADE</th>
                  <th scope="col">UNIDADE/ATIVAÇÃO</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="value in measures" :key="value.id">
                  <td class="border-line">{{ value.tipo }}</td>
                  <td class="border-line">{{ value.nome }}</td>
                  <td class="border-line">{{ value.end_supervisorio }}</td>
                  <td class="border-line">{{ value.prioridade }}</td>
                  <td class="border-line" v-if="types == 'Medida'">{{ value.unidade }}</td>
                  <td class="border-line" v-else-if="types == 'Status'">{{ value.valor_operacao }}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>

  <!-- STATUS E MEDIDAS -->
  <div class="row">
    <div class="col-sm-6">
      <div class="form-row mt-5">
        <div class="col-3">
          <h4 class="titles">Recomendações</h4>
        </div>
      </div>
      <div class="form-row mt-3 justify">
        <div class="col-12">
          <textarea class="form-control area" placeholder="Escreva aqui..." rows="3" v-model="recommendation"></textarea>
        </div>
        <div class="mt-4">
          <button class="btn btn-green rounded-circle" @click="sendRecommendation()">+</button>
        </div>
      </div>
    </div>

    <div class="col-sm-6 ">
        <div class="col-12 mt-5">
          <h5 class="titles">Lista de recomendações</h5>
          <ul class="scroll">
            <li v-for="lista in recom" :key="lista.id">{{ lista.item }}</li>
          </ul>
        </div>
      <div class="mt-5">
        <button class="btn btn-green btn-salvar" @click="saveData()">Salvar</button>
      </div>
    </div>
    <!-- RECOMENDAÇÕES -->
  </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DeleteOutline from 'vue-material-design-icons/DeleteOutline.vue';  

export default {

  components: {
    DeleteOutline,
  },
  
  data() {
    return {
      types: 'Medida',
      logic: "",
      offType: "PLS",
      reason: "",
      operators: "E",
      textMedida: "",
      textAlarme:"",
      activation1: "",
      activation2: "",
      activation3: "",
      unit1: "",
      unit2: "",
      unit3: "",
      recommendation: "",
      infoAlarme: "",
      infoMedida: "",
      infoSuper: "",
      name: "",
      priority: "1",
      endAtivacao: [],
      separador: [],
      pushed: [],
      recom: [],
      end: [],
      measures: [],
      allData: [],
    } 
  },

  methods: {
    ...mapActions(['sendAlarms', 'sendLogic']),

    sendOperator() {
      this.pushed.push(this.operators)
      this.separador = this.pushed.join(' ')
      this.separador = this.separador.replace(" - ", "-")
      this.logic = this.separador
      
    },
//  Teve q usar o join() pra poder botar um separador entre os elementos da string( o join() junta todos os elementos de uma array em uma string e retorna esta string.)
    sendActivation() {
      this.pushed.push(this.textAlarme, "-", this.activation1)
      this.separador = this.pushed.join(' ')
      this.separador = this.separador.replace(" - ", "-")
      this.logic = this.separador
      
    },

    sendRecommendation() {
      this.recom.push({item: this.recommendation})
      
    },

    sendEnderecos() {
      this.end.push({ end_alarme: this.infoAlarme, ativacao: this.activation2 ,end_medida: this.infoMedida, unidade: this.unit2 })
      
    },

    sendMeasures() {
      this.measures.push({ tipo: this.types, nome: this.name, end_supervisorio: this.infoSuper, prioridade:this.priority, unidade: this.unit3, valor_operacao: this.activation3 })
      
      
    },

    cleanArea() {
      this.separador = ""
      this.pushed.splice(0)
    },

// Ainda n ta apagando da fileira correta ta apagando sempre começando pela primeira
    cleanCanais(index) {
      this.end.splice(index, 1)
    },

    validate() {
     if (this.pushed[this.pushed.length - 1] == 'E' || this.pushed[this.pushed.length - 1] == 'OU') {
       alert("Por favor termine a logica de modo valido")
     } 
     else if(this.pushed.includes('(') == true && this.pushed.includes(')') == false ) {
       alert("Feche o parenteses da logica")
     }
     else {
       alert("Sem erros")
     }
     this.sendLogic({valid: this.logic})

    },

   async saveData() {
     this.allData.splice(0)
     this.endAtivacao.push({end_alarme: this.textAlarme, ativacao: this.activation1}) 
     
      this.allData.push({ 
        tipo_desligamento: this.offType,
        causa: this.reason,
        endereco_medida: this.textMedida,
        unidade: this.unit1,
        logica: this.logic,
        ends_alarme: this.endAtivacao,
        canais: this.end,
        status_medidas: this.measures,
        recomendacoes: this.recom
       })
      this.sendAlarms({info: this.allData[0]})
      
    }
  }
  
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.titles {
  font-weight: bold;
  h1 {
    font-size: 34px;
  }

}

.border-line {
  border-bottom: solid rgba(209, 216, 245, 0.6);
  padding: 15px;
  text-align: center;
}

.scroll {
  max-height: 180px;
  overflow:auto;
  overflow-x: hidden;
  padding-left: 15px;

}

.justify {
  justify-content: right;
}

.btn-validar {
  width: 156px;
  height: 52px;
}

.area {
  height: 154.24px;
}

.mini-title {
  font-size: 12px;
  font-weight: bold;
}

.btn-salvar {
  width: 105px;
  float: right;
}

.push-area {
  height: 163px;
  resize: none;
  background-color: rgb(255, 255, 255);
}

.sizing {
  font-size: 12px;
}

.address {
  font-size: 14px;
  font-weight: bold;
}

.alignment {
  text-align: center;
  font-size: 14px;
}

.bullet {
  list-style-type: none;
}

@media (min-width: 1200px) {
  .container{
      max-width: 1300px;
  }
}

</style>