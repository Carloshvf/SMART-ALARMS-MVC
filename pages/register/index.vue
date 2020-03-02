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
        <select class="form-control">
          <option>PLS</option>
          <option>PLST</option>
        </select>
      </div>
      <div class="col-10">
        <label class="mt-4 sizing">CAUSA</label>
        <input type="text" class="form-control" placeholder="Escreva aqui..." >
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
            <input type="text" class="form-control" >
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
            <select class="form-control">
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
            <input type="text" class="form-control" >
          </div>  
          <div class="ml-2">
            <button class="btn btn-green rounded-circle" @click="sendEnderecos()">+</button>
          </div>

          
            <div class="col-12 mt-4">
              <!-- <h5 class="address">ENDEREÇO DO ALARME</h5>
              <h5 class="address">ENDEREÇO DE MEDIDA</h5>
              <ul class="bullet">
                <li class="alignment border-line mt-3" v-for="item in endAlarme" :key="item.id">{{ item }}</li>
                <hr>
              </ul>  -->

              <table class="table">
                <thead>
                  <tr class="address border-line">
                    <th scope="col">ENDEREÇO DO ALARME</th>
                    <th scope="col">ENDEREÇO DE MEDIDA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in end" :key="item.id">
                    <td class="border-line">{{ item.alarme }}</td>
                    <td class="border-line"> {{ item.medida }}</td>
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
              <input type="text" class="form-control" v-model="unit">
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
          
          <div class="col-12 mt-3">
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
                  <td class="border-line">{{ value.endereço }}</td>
                  <td class="border-line">{{ value.prioridade }}</td>
                  <td class="border-line" v-if="types == 'Medida'">{{ value.unidade }}</td>
                  <td class="border-line" v-else-if="types == 'Status'">{{ value.ativação }}</td>
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
        <div class="col-12 scroll mt-5">
          <h5 class="titles">Lista de recomendações</h5>
          <ul>
            <li v-for="item in recom" :key="item.id">{{ item }}</li>
          </ul>
        </div>
      <div class="mt-5">
        <button class="btn btn-green btn-salvar">Salvar</button>
      </div>
    </div>
    <!-- RECOMENDAÇÕES -->
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      types: 'Medida',
      operators: "E",
      textMedida: "",
      textAlarme:"",
      activation1: "1",
      activation2: "1",
      activation3: "1",
      unit: "",
      recommendation: "",
      infoAlarme: "",
      infoMedida: "",
      infoSuper: "",
      name: "",
      priority: "1",
      separador: [],
      pushed: [],
      recom: [],
      end: [],
      measures: [],
      
    } 
  },

  methods: {
    sendOperator() {
      this.pushed.push(this.operators)
      this.separador = this.pushed.join(' ')
      console.log(this.pushed)
    },
//  Teve q usar o join() pra poder botar um separador entre os elementos da string( o join() junta todos os elementos de uma array em uma string e retorna esta string.)
    sendActivation() {
      this.pushed.push(this.textAlarme, "-", this.activation1)
      this.separador = this.pushed.join(' ')
      console.log(this.pushed)
    },

    sendRecommendation() {
      this.recom.push(this.recommendation)
      console.log(this.recom)
    },

    sendEnderecos() {
      this.end.push({ alarme: this.infoAlarme, medida: this.infoMedida })

    },

    sendMeasures() {
      this.measures.push({ tipo: this.types, nome: this.name, endereço: this.infoSuper, prioridade:this.priority, unidade: this.unit, ativação: this.activation3 }) 
      console.log(this.measures)
    },

    cleanArea() {
      this.separador = ""
      this.pushed.splice(0)
    },

    validate() {
     
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
  border-bottom: solid rgba(209, 216, 245, 0.6);;
  padding: 15px;
  text-align: center;
}

.scroll {
  overflow: auto;
  max-height: 180px;
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