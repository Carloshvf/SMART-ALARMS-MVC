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
            <input class="form-control" placeholder="Escreva aqui...">
        </div>
        <div class="col-4">
            <label class="mt-4">TIPO DE CONEXÃO PRINCIPAL</label>
            <select class="form-control">
                <option>OPC A&E</option>
            </select>
        </div>
      </div>
      
      <div class="row">
          <div class="col-3">
            <label class="mt-4">TIPO DE EVENTO</label>
            <select class="form-control">
                <option>PLS</option>
            </select>
          </div>
          <div class="col-3">
              <b-button class="btn btn-green btn-add">Adicionar</b-button>
          </div>
          <div class="col-3">
            <label class="mt-4">SISTEMAS MONITORADOS</label>
            <select class="form-control">
                <option>UG-11</option>
            </select>
          </div>
          <div class="col-3">
              <b-button class="btn btn-green btn-add">Adicionar</b-button>
          </div>
      </div>
      
      <div class="row">
          <div class="col">
              <b-button class="btn btn-green btn-save">Salvar</b-button>
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
 
    }
  },

  computed: {
    
  },

  methods: {
    

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