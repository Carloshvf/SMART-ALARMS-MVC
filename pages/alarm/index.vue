<template>
  <div class="py-5 mt-5">
    <div
      class="wrapper-content container"
      v-for="list in lists"
      :key="list.name"
    >
      <div class="row card card-avalanche mb-4" v-for="card in list.kks" :key="card.id">
        <div class="col-12 card-kks" v-if="list.active == 1">
            <div class="row">
              <div class="col-2 mt-3">
                <h2 class="mb-0 ml-2 text-uppercase"> {{ card.name }} {{ card.complemento }}</h2>
              </div>
              <div class="col-2">
                <h3 class="mb-0 mt-3 type-background text-uppercase">{{ card.type }} {{ card.name }} </h3>
              </div>
              <div class="col-4 d-flex justify-content-center">
                <h1>{{ countTime }}</h1>
                <counter :alarm="foo(list.id)" />
              </div>
              <div class="mt-2 col-4 d-flex justify-content-end">
                <nuxt-link
                  :to="{ name: 'detail-id', params: { id: list.id } }"
                  class="btn btn-primary pt-2"
                  >Mais detalhes
                </nuxt-link>
              </div>
            </div>
            <hr />
        
        <!-- /.col-12 -->
          <div class="row">
            <div class="col-sm-6">
              <card-detail :unity="list" :alarm="card" @loops="transform"/>
              <status :alarm="card.status_one" />
            </div>
            <!-- /.col-sm-6 -->
            <div class="col-sm-6">
              <recommendation :alarm="card.recom" />
            </div>
            <!-- /.col-sm-6 -->
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.row -->
      
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import Counter from '~/components/Counter.vue'
import TopDetail from '~/components/TopDetail.vue'
import CardDetail from '~/components/CardDetail.vue'
import Status from '~/components/Status.vue'
import Recommendation from '~/components/Recommendation.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Counter,
    TopDetail,
    CardDetail,
    Status,
    Recommendation
  },

  data() {
    return {
      // lists: this.$store.state.all
      arrSize: [],
      countTime: '',
      stop: true,
      stopInterval: ""
    }
  },

   methods: {
    ...mapActions(['loadData']),

    transform (value) {
      this.stop = value
    },

    foo(id) {
      var result = { countTimeDiff: 0 }

      if (id && this.lists && this.lists.length > 0) {
        var arrays = new Array()
        for (const key in this.lists) {
          arrays.push(Object.assign({}, this.lists[key]))
        }

        result = arrays.filter(i => i.id === id)
        result = result[0].kks
        let result2 = result.slice()
        result = result2.sort((a, b) => a.countTimeDiff - b.countTimeDiff)
        result = result.filter(
          (item, index, array) => item.countTimeDiff === array[0].countTimeDiff
        )
        result = result[0]
      }

      return result
    },
    
  },

  computed: {
    lists() {
      return this.$store.state.all
    },

    currentRouteName() {
        return this.$route.name;
    }
  },

  created() {
      this.stopInterval = setInterval(() => {
        if (this.stop == true) {
          this.loadData()
          this.arrSize.splice(0)

          for (let index = 0; index < this.lists.length; index++) {
          if (this.lists[index].active == 0 && this.currentRouteName == 'alarm') {
              this.arrSize.push("5") 
            }
          }
          if (this.arrSize.length == this.lists.length && this.currentRouteName == 'alarm') {
            this.$router.push('/')
          }

          if (this.currentRouteName != 'alarm') {
            this.stop = false 
          }
        }  else {
          clearInterval(this.stopInterval)
        }
      }, 5000);
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.card-avalanche {
  width: 80%;
  margin: 0 auto;
}

.shadow {
  box-shadow: none;
}
</style>
