<template>
  <div class="container">
      <div class="row mt-5">
        <div class="col mt-5">
            <h1 class="alarm-title">Criação/edição de novas unidades operacionais</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
            <label class="mt-4">NOME DA UNIDADE</label>
            <input class="form-control" placeholder="Escreva aqui..." v-model="unitName">
        </div>
        <div class="col-4">
            <label class="mt-4">TIPO DE CONEXÃO PRINCIPAL</label>
            <select class="form-control" v-model="connectionType">
                <option>OPC AE</option>
                <option>OPC DA</option>
            </select>
        </div>
      </div>
      
      <div class="row">
          <div class="col-3">
            <label class="mt-4">TIPO DE EVENTO</label>
            <input class="form-control" v-model="eventType">
          </div>
          <div class="col-3">
              <b-button class="btn btn-green btn-add" @click="pushEvent()">Adicionar</b-button>
          </div>
          <div class="col-3">
            <label class="mt-4">SISTEMAS MONITORADOS</label>
            <input class="form-control" v-model="systems">
          </div>
          <div class="col-3">
              <b-button class="btn btn-green btn-add" @click="pushSystem()">Adicionar</b-button>
          </div>
      </div>

      <div class="row">
        <div class="col-6 scroll">
          <table class="table mt-4">
            <thead>
            <tr>
                <th scope="col">TIPOS DE EVENTO</th> 
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in eventUnit" :key="item.id">
                <td>{{item}}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="col-6 scroll">
          <table class="table mt-4">
            <thead>
            <tr>
                <th scope="col">SISTEMAS</th>  
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in systemUnit" :key="item.id">
                <td>{{item}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row">
        <div class="col-3">
          <label class="mt-4">SUBAREA</label>
          <input class="form-control" v-model="eventUnit">
        </div>
        <div class="col-3">
            <b-button class="btn btn-green btn-add" @click="pushEvent()">Adicionar</b-button>
        </div>
      </div>
      
      <div class="row">
          <div class="col">
              <b-button class="btn btn-green btn-save" @click="editUnit()">Salvar</b-button>
              <nuxt-link to="/units" class="btn btn-cancel" >Cancelar</nuxt-link>
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
        eventType: [],
        systems: [],
        unitData: [],
        unitEditing: [],
        id: this.$route.params.id
    }
  },

  computed: {
    unitName: {
      get () {
        return this.$store.state.getEdit.unidade
      },
      set (value) {
        this.$store.commit('setUnitName', value)
      }
    },
    connectionType: {
      get () {
        return this.$store.state.getEdit.tipo_conexao
      },
      set (value) {
        this.$store.commit('setConnectionType', value)
      }
    },
    eventUnit: {
      get () {
        return this.$store.state.getEdit.tipo_evento
      },
      set (value) {
        this.$store.commit('setEventUnit', value)
      }
    },
    systemUnit: {
      get () {
        return this.$store.state.getEdit.sistemas
      },
      set (value) {
        this.$store.commit('setSystemUnit', value)
      }
    },

  },

  methods: {
    ...mapActions(['gettingEdits', 'updateUnit']),

    pushEvent() {
      this.eventUnit.push(this.eventType)
    },

    pushSystem() {
      this.systemUnit.push(this.systems)
    },

    async editUnit() {
      this.unitEditing.splice(0)

      this.unitEditing.push({
        unidade: this.unitName,
        tipo_conexao: this.connectionType,
        tipo_evento: this.eventUnit,
        sistemas: this.systemUnit
      })

      await this.updateUnit({ id:this.id, data:this.unitEditing[0]})
    }

  },

  async created() {
    this.gettingEdits(this.id)
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.scroll {
    max-height: 180px;
    overflow: auto;
}

.btn-add {
    position: relative;
    top: 55px;
    width: 255px;
}

.btn-cancel {
  color: #ffffff;
  background-color: $dark-purple;
  width: 105px;
  position: relative;
  right: 30px;
  top: 70px;
  float: right;
}

.btn-save {
    position: relative;
    top: 70px;
    width: 105px;
    float: right;
}

</style>