<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col mt-5">
        <h1 class="alarm-title">Alarmes Cadastrados</h1>
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
          <div class="card-white">
            <h1>{{ item.infos[0].tipo }} {{ item.infos[0].local }} {{ item.infos[0].complemento }}</h1>
            <span>Causa</span>
            <p>{{ item.infos[0].causa }}</p>
            <hr />
            <div class="align options">
              <button class="btn mr-5" @click="deletion(item.id,'b-toaster-bottom-right')">
                Excluir
                <delete class="options"></delete>
              </button>

              <!-- <a href="javascript:void(0);" @click.native="editing" class="btn options ml-5">Editar</a> -->

              <nuxt-link
                :to="{ name: 'register-id', params: { id: item.id } }"
                class="btn options ml-5"
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

    cardInfo() {
      return this.$store.state.cardAlarm.todos
    },
    
    unitId() {
      return JSON.parse(localStorage.getItem('unit')) || '';
    },

    computed_filter: function () {
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
    
  },

  methods: {
    ...mapActions(['loadRegistered', 'deleteRegistered']),

    async deletion(id, toaster) {
      await this.$axios
      .delete(
        HOST_API + '/alarme/' + 
        this.unitId + '/' + id
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
    this.loadRegistered({unit: JSON.parse(localStorage.getItem('unit')) || ''})
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
</style>