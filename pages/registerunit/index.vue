<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col mt-5 mb-3">
          <h1 class="alarm-title">Criação/edição de novas unidades operacionais</h1>
      </div>
    </div>
    <div class="row">
      <div class="col card">
      <div class="row">
        <div class="col-6">
            <label class="mt-4">NOME DA UNIDADE</label>
            <input class="form-control" placeholder="Escreva aqui..." v-model="unitName">
        </div>
        <div class="col-4">
            <label class="mt-4">TIPO DE CONEXÃO PRINCIPAL</label>
            <select class="form-control" v-model="connectionType">
                <option>OPC AE/DA</option>
                <option>OPC DA</option>
            </select>
        </div>
      </div>
      
      <div class="row">
          <div class="col-2">
            <label class="mt-4">TIPO DE EVENTO</label>
            <input class="form-control" v-model="eventUnit">
          </div>
          <div class="col-1">
            <label class="mt-4">CONTADOR</label>
            <input v-mask="'##:##'" class="form-control" v-model="contUnit">
          </div>
          <div class="col-3">
              <b-button class="btn btn-green btn-add rounded-circle" @click="pushEvent()">+</b-button>
          </div>
          <div class="col-3">
            <label class="mt-4">SISTEMAS MONITORADOS</label>
            <input class="form-control" v-model="systemUnit">
          </div>
          <div class="col-3">
              <b-button class="btn btn-green btn-add rounded-circle" @click="pushSystem()">+</b-button>
          </div>
      </div>

      <div class="row">
        <div class="col-6 scroll" v-if="eventType != []">
          <table class="table mt-4">
            <thead>
            <tr>
                <th scope="col">TIPOS DE EVENTO</th>
                <th scope="col">CONTADOR</th> 
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in eventType" :key="item.id">
                <td>{{item.tipo}}</td>
                <td>{{item.contador}}</td>
                <td>
                  <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" @click="cleanType(index)"/>
                </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="col-6 scroll" v-if="systems != []">
          <table class="table mt-4">
            <thead>
            <tr>
                <th scope="col">SISTEMAS</th>  
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in systems" :key="item.id">
                <td>{{item}}</td>
                <td>
                  <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" @click="cleanSystem(index)"/>
                </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="row">
        <div class="col-3">
          <label class="mt-3 mb-0">SUBAREA:</label>
        </div>
      </div>
      
      <div class="row">
        <div class="col-3">
          <label class="mt-4">NOME</label>
          <input class="form-control" v-model="subUnit">
        </div>
        <div class="col-3">
          <label class="mt-4">MODELO</label>
          <input class="form-control" v-model="subModel">
        </div>
        <div class="col-3">
            <b-button class="btn btn-green btn-add rounded-circle" @click="pushSub('b-toaster-bottom-right')">+</b-button>
        </div>
      </div>

      <div class="row">
           <div class="col-6 scroll" >
          <table class="table mt-4">
            <thead>
            <tr>
                <th scope="col">NOME</th>
                <th scope="col">MODELO</th> 
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in sub" :key="item.id">
                <td>{{item.nome}}</td>
                <td>{{item.modelo}}</td>
                <td>
                  <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" @click="cleanSub(index)"/>
                </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="row">
          <div class="col">
              <b-button class="btn btn-green btn-save" @click="saveUnit('b-toaster-bottom-right')">
                <img class="cross-img" src="../../static/img/plus.svg" alt="cross"/>
                <span>Salvar</span>
                </b-button>
              <nuxt-link to="/units" class="btn btn-cancel" >Cancelar</nuxt-link>
          </div>
          
      </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions} from 'vuex'

export const HOST_API = process.env.baseURL;

export default {

  data() {
    return {
      unitName: "",
      connectionType: "",
      eventUnit: "",
      systemUnit: "",
      contUnit: "",
      subUnit: "",
      subModel: "",
      eventType: [],
      systems: [],
      sub: [],
      unitData: []
    }
  },

  methods: {
    ...mapActions(['registerUnit']),

    cleanType(index) {
      this.eventType.splice(index, 1)
    },

    cleanSystem(index) {
      this.systems.splice(index, 1)
    },

    cleanSub(index) {
      this.sub.splice(index, 1)
    },

    pushEvent() {
      this.eventType.push({tipo: this.eventUnit, contador: this.contUnit})
    },

    pushSystem() {
      this.systems.push(this.systemUnit)
    },

    pushSub(toaster) {
      if (this.subUnit != "" && this.subModel != "") {
        this.sub.push({nome: this.subUnit, modelo: this.subModel})
      } else {
        this.$bvToast.toast('Preencha o campo de nome e o de modelo.', {
          title: `Erro`,
          toaster: toaster,
          solid: true,
        })
      }
      
    },

    async saveUnit(toaster) {
      this.unitData.splice(0)

      this.unitData.push({
        unidade: this.unitName,
        tipo_conexao: this.connectionType,
        tipo_evento: this.eventType,
        sistemas: this.systems,
        sub_area: this.sub
      })
      await this.registerUnit(this.unitData[0])
      this.$bvToast.toast('Unidade cadastrada com sucesso', {
          title: `Cadastro`,
          toaster: toaster,
          solid: true,
        })
    }

  },

  async created() {
    
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.btn-add {
    position: relative;
    top: 55px;
    right: 10px;
}

.btn-cancel {
  color: #ffffff;
  background-color: $dark-purple;
  width: 105px;
  position: relative;
  right: 30px;
  top: 70px;
  float: right;
  border-radius: 22px;  

  &:hover{
    color: $white;
    background-color: $dark-purple;
  } 
}

.cross-img {
    position: absolute;
    right: 68%;
    bottom: 2px;
}

.btn-save {
    position: relative;
    top: 70px;
    width: 105px;
    float: right;
    background: linear-gradient(180deg, #008D46 0%, #00B75B 100%);
    border-radius: 22px;

    span {
        position: relative;
        left: 5px;       
        
    }
}

</style>