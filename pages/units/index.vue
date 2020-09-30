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
              <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" @click="deleteUnit(item.id)"/>
              <nuxt-link
                :to="{ name: 'registerunit-id', params: { id: item.id } }"
                class="btn ml-5">
                <img class="editing" src="../../static/img/editSelect.svg" alt="edit" />
              </nuxt-link>
              
                <h1 class="unit-select">{{item.unidade}}</h1>
            </div>
          </div>
        </div>
        <!--  -->
        
      </div>
      <div class="row">
        <div class="col">
          <nuxt-link to="/registerunit" class="btn btn-green rounded-circle add mt-4">+</nuxt-link>
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
      return this.$store.state.getUnit
    }
  },

  methods: {
    ...mapActions(['gettingUnits']),

    async deleteUnit(id) {
      await this.$axios
      .delete(
        HOST_API + '/unidades/' +
          id
      )
      .then(() => {
        this.gettingUnits()
      })
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

.editing {
  position: absolute;
  left: 320px;
  bottom: 85.35%; 
}

.add {
  float: right;
}

</style>