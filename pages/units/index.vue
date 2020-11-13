<template>
  <div class="container">
      <div class="row mt-5">
        <div class="col mt-5">
            <h1 class="alarm-title">Seleção de Unidades Operacionais</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-4" v-for="item in unitDetail" :key="item.id">
          <div class="card mt-4">
            <div class="card-white">
              <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" @click="deleteUnit(item.id)" v-if="item.edicao == true"/>
              <nuxt-link
                :to="{ name: 'registerunit-id', params: { id: item.id } }"
                class="btn ml-5" v-if="item.edicao == true">
                <img class="editing" src="../../static/img/editSelect.svg" alt="edit" />
              </nuxt-link>
              <nuxt-link to="/activealarm" @click.native="sendId(item.id)">
                <h1 class="unit-select">{{item.unidade}}</h1>
              </nuxt-link>
            </div>
          </div>
        </div>
        <!--  -->
        
      </div>
      <div class="row">
        <div class="col">
          <nuxt-link to="/registerunit" class="btn btn-green rounded-circle add mt-4" v-if="unitPermission == true">+</nuxt-link>
          <nuxt-link to="/registeruser" class="btn btn-grey add mt-4 mr-3" v-if="profileReg == true">Cadastrar Perfis</nuxt-link>
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
 
    }
  },

  computed: {
    unitDetail() {
      return this.$store.state.getUnit.unidades
    },

    unitPermission() {
      return this.$store.state.getUnit.cadastro
    },

    profileReg() {
      return this.$store.state.getUnit.cadastrar_perfis
    }
  },

  methods: {
    ...mapActions(['gettingUnits', 'headerGet']),

    async deleteUnit(id) {
      await this.$axios
      .delete(
        HOST_API + '/unidades/' +
          id, {
        headers: {
          'Authorization': JSON.parse(localStorage.getItem('token')) || '',
        }}
      )
      .then(() => {
        this.gettingUnits()
      })
    },

    sendId(id) {
      localStorage.removeItem('unit')
      localStorage.setItem('unit', JSON.stringify(id));
      this.headerGet(JSON.parse(localStorage.getItem('unit')) || '')
    }

  },

  async created() {
    this.gettingUnits()
    
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.unit-select {
  font-size: 40px;
  font-weight: 300;
  line-height: 120px;
  text-align: center;
}

.deleting {
  position: absolute;
  left: 290px;
  bottom: 85.35%;
}

.btn-grey {
  color: white;
  background-color: $light-purple;
}

.editing {
  position: absolute;
  left: 320px;
  bottom: 85.35%; 
}

.add {
  float: right;
}

</style>