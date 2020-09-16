<template>
  <div class="container">
      <div class="row mt-5">
        <div class="col mt-5">
            <h1 class="alarm-title">Seleção de Unidades Operacionais</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="card mt-4">
            <div class="card-white">
              <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" />
              <img class="editing" src="../../static/img/editSelect.svg" alt="edit" />
                <h1 class="unit-select">UTE TERMORIO</h1>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="col-4">
          <div class="card mt-4">
            <div class="card-white">
              <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" />
              <img class="editing" src="../../static/img/editSelect.svg" alt="edit" />
                <h1 class="unit-select">UTGA</h1>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="col-4">
          <div class="card mt-4">
            <div class="card-white">
              <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" />
              <img class="editing" src="../../static/img/editSelect.svg" alt="edit" />
                <h1 class="unit-select">UTGA</h1>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="row">
        <div class="col-4">
          <div class="card mt-4">
            <div class="card-white">
              <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" />
              <img class="editing" src="../../static/img/editSelect.svg" alt="edit" />
                <h1 class="unit-select">UTE TERMORIO</h1>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="col-4">
          <div class="card mt-4">
            <div class="card-white">
              <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" />
              <img class="editing" src="../../static/img/editSelect.svg" alt="edit" />
                <h1 class="unit-select">UTGA</h1>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="col-4">
          <div class="card mt-4">
            <div class="card-white">
              <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" />
              <img class="editing" src="../../static/img/editSelect.svg" alt="edit" />
                <h1 class="unit-select">UTGA</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <nuxt-link to="/register-unit" class="btn btn-green rounded-circle add mt-4">+</nuxt-link>
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

.editing {
  position: absolute;
  left: 320px;
  bottom: 85.35%; 
}

.add {
  float: right;
}

</style>