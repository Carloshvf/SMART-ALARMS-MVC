<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col mt-5">
        <h1 class="alarm-title">Alarmes Cadastrados</h1>
      </div>
      <div class="col-2 align-items-end mt-5">
        <label class="labels">FILTRO UG</label>
        <select class="form-control" v-model="ug" v-on:change="changeCards()">
          <option>Todos</option>
          <option>UG 11</option>
          <option>UG 12</option>
          <option>UG 18</option>
          <option>UG 21</option>
          <option>UG 22</option>
          <option>UG 28</option>
          <option>UG 31</option>
          <option>UG 32</option>
          <option>UG 38</option>
          <option>CAV1</option>
          <option>CAV2</option>
          <option>CAV3</option>
        </select>
      </div>
      <div class="col-2 mt-5">
        <label class="labels">FILTRO DE TIPO</label>
        <select class="form-control" v-model="type" v-on:change="changeCards()">
          <option>Todos</option>
          <option>PLS</option>
          <option>PLST</option>
          <option>TRIP</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-4" v-for="(item, i) in alarms" :key="i">
        <div class="card mt-4">
          <div class="card-white">
            <h1>{{ item.infos[0].name }}</h1>
            <span>Causa</span>
            <p>{{ item.infos[0].causa }}</p>
            <hr />
            <div class="align options">
              <button class="btn mr-5" @click="deletion(item, i)">
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

export default {
  components: {
    CardRegistered,
    Delete,
    PencilOutline,
  },

  data() {
    return {
      ug: 'Todos',
      type: 'Todos',
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
    }
    
  },

  methods: {
    ...mapActions(['loadRegistered', 'deleteAll', 'loadCard']),

    changeCards() {
      this.ug = this.ug.replace(/\s/g, '_')
      this.loadRegistered({ local: this.ug, tipo_desligamento: this.type })
      
    },

    async deletion(todos, id) {
        this.$axios.delete('https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarme/' + todos.id)
          .then(() => {              
              this.todos.splice(id, 1)
          })
          setTimeout(() => {
            window.location.reload()
          }, 2000);
         
      }

    // deleteAll(index) {
    //     this.alarms.splice(index, 1)
    // }

    //   this.delMessage = this.$store.state.deleteAlarm
    //   if (this.delMessage == 'deletado com sucesso') {
    //     alert('Deletado com sucesso')
    //   } else {
    //     alert('Não foi possivel deletar')
    //   }
    // },

  },

  async created() {
    this.loadRegistered({ local: this.ug, tipo_desligamento: this.type })
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