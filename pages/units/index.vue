<template>
  <div class="container">
      <div class="row mt-5">
        <div class="col mt-5">
            <h1 class="alarm-title">Seleção de Unidades Operacionais</h1>
            <nuxt-link to="/registerunit" class="btn btn-green mt-4" v-if="unitPermission == true">Cadastrar Unidades</nuxt-link>
            <nuxt-link to="/registeruser" class="btn btn-grey mt-4 ml-3" v-if="profileReg == true">Cadastrar Perfis</nuxt-link>
        </div>
      </div>
      <div class="row">
        <div class="col-4" v-for="item in unitDetail" :key="item.id">
          <div class="card mt-4">
            <div class="card-white">
              <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" @click="showModal(item.id.toString())" v-if="item.edicao == true"/>
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
          <!-- MODAL DELETE -->
          <b-modal :id="item.id.toString()" hide-footer>
            <template v-slot:modal-title>
              Deletando unidade
            </template>
            <div>
              <p>Tem certeza que deseja deletar a unidade?</p>
            </div>
            <b-button class="modal-buttons bg-dark-red mt-3 mr-2" @click="deleteUnit(item.id, 'b-toaster-bottom-right')">
              Deletar unidade
            </b-button>
          </b-modal>
        </div>
        <!--  -->
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

    async showModal(id) {
      this.$bvModal.show(id)
    },

    async deleteUnit(id, toaster) {
      await this.$axios
      .delete(
        HOST_API + '/unidades/' +
          id, {
        headers: {
          'Authorization': this.$cookies.get('token') || '',
        }}
      )
      .then(() => {
        this.gettingUnits()
      })

      this.$bvToast.toast('Unidade deletada com sucesso', {
        title: `Delete`,
        toaster: toaster,
        solid: true
      })
      setTimeout(() => {
        this.$bvModal.hide(id)
      }, 1000);
    },

    sendId(id) {
      this.$cookies.remove('unit')
      this.$cookies.set('unit', JSON.stringify(id))
      this.headerGet(this.$cookies.get('unit') || '')
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

.modal-buttons {
  float: right;
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