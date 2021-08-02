<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col mt-5">
        <h1 class="alarm-title">Eventos Cadastrados</h1>
      </div>
      <div class="col-2 align-items-end mt-5">
        <label class="labels">FILTRO UG</label>
        <select class="form-control" v-model="ug">
          <option v-for="item in alarms.filtro_local" :key="item.id">
            {{item}}
          </option>
        </select>
      </div>
      <div class="col-2 mt-5">
        <label class="labels">FILTRO DE TIPO</label>
        <select class="form-control" v-model="type">
          <option v-for="item in alarms.filtro_tipos_desligamento" :key="item.id">
            {{item}}
          </option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-4" v-for="item in computed_filter" :key="item.id">
        <div class="card mt-4">
          <div class="card-white card-min-height">
            <div class="scroll-h4">
              <h4>{{ item.infos[0].tipo }} {{ item.infos[0].local }} {{ item.infos[0].complemento }}</h4>
            </div>
            <span>Causa</span>
            <div class="scroll-causa">
              <p>{{ item.infos[0].causa }}</p>
            </div>
            
            <div class="align options mb-5">
              <button class="btn mt-3 mr-5" @click="deletion(item.id,'b-toaster-bottom-right')" v-if="permButtons == true">
                Excluir
              </button>

              <nuxt-link
                :to="{ name: 'register-id', params: { id: item.id } }"
                class="btn options mt-3 ml-5" v-if="permButtons == true"
              >Editar</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardRegistered from '~/components/CardRegistered.vue'
import Delete from 'vue-material-design-icons/Delete.vue'
import PencilOutline from 'vue-material-design-icons/PencilOutline.vue';
import { mapActions, mapMutations } from 'vuex'

export const HOST_API = process.env.baseURL;

export default {
  components: {
    CardRegistered,
    Delete,
    PencilOutline,
  },

  data() {
    return {
      ug: '',
      type: '',
      registeredAlarms: [],
      deletionAlarms: [],
      persistAlarms: [],
      delMessage: '',
      id: this.$route.params.id
    }
  },

  components: {
    Delete
  },

  computed: {
    alarms() {
      return this.$store.state.cardAlarm
    },

    session() {
      return this.$store.state.checkingSession
    },

    cardInfo() {
      return this.$store.state.cardAlarm.todos
    },

    permButtons() {
      return this.$store.state.cardAlarm.editar_eventos
    },
    
    unitId() {
      return this.$cookies.get('unit') || '';
    },

    computed_filter: function () {
      if (this.cardInfo != undefined) {
      let filterUg = this.ug,
          filterType = this.type
      
      return this.cardInfo.filter(function(item){
          let filtered = true
          
          if(filtered){
            if(filterUg && filterUg.length > 0){
                filtered = item.infos[0].local == filterUg
            }
          }
          if(filtered){
            if(filterType && filterType.length > 0){
                filtered = item.infos[0].tipo == filterType
            }
          }
            
              return filtered
          })
      }
    }
    
  },

  methods: {
    ...mapActions(['loadRegistered', 'deleteRegistered', 'idCheck', 'logOff']),

    async deletion(id, toaster) {
      await this.$axios
      .delete(
        HOST_API + '/alarme/' + 
        this.unitId + '/' + id, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
      )
      .then(() => {
        this.loadRegistered({unit: this.unitId})
      })
      this.$bvToast.toast('Deletado com sucesso.', {
          title: `Deletar`,
          toaster: toaster,
          solid: true,
        })
      
    }

  },

  async created() {
    // Logoff automatico
      await this.idCheck()
      if (this.session == false) {
        this.$bvToast.toast('O tempo da sessão expirou', {
            title: `Logoff`,
            toaster: 'b-toaster-bottom-right',
            solid: true
          })
        // this.logOff({logout: "tes"})
        // this.$cookies.removeAll();
        // this.$router.push('/')
      }
    //

    this.loadRegistered({unit: this.unitId || ''})
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.alarm-title {
  font-size: 42px;
  color: #1f2041;
}

.labels {
  font-size: 12px;
  font-weight: bold;
}

button:hover {
  color: #008542;
  transition: $transition;
}

.align {
  text-align: center;
}

.btn-cadastrados {
  color: #ffffff;
  background-color: $dark-purple;
  float: right;
}

.options {
  font-weight: bold;
  font-size: 12px;
  color: #b5b5b5;
}

.options:hover {
  color: #008542;
  transition: $transition;
}

.card-min-height {
    height: 240px;
}

.scroll-causa {
  overflow: auto;
  height: 60px;
}

.scroll-h4 {
  overflow: auto;
  height: 70px;
}
</style>