<template>
  <div class="py-5 mt-5">
    <div
      class="wrapper-content container-fluid"
      v-for="list in lists"
      :key="list.name"
    >
      <div class="row" v-for="card in list.kks" :key="card.id">
        <div class="col-12 col-sm-3 mb-4" v-if="list.active == 1">
          <card-detail :unity="list" :alarm="card" @loops="transform"/>
        </div>
        <!-- /.col-12 col-sm-3 -->
        <div class="col-12 col-sm-4 mb-4" v-if="list.active == 1">
          <!-- <detail /> -->
          <!-- <top-detail /> -->
          <status :alarm="card.status_one" />
          <!-- <status /> -->
        </div>
        <!-- /.col-12 col-sm-4 -->
        <div class="col-12 col-sm-5 mb-4" v-if="list.active == 1">
          <recommendation :alarm="card.recom" />
        </div>
        <!-- /.col-12 col-sm-5 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import TopDetail from '~/components/TopDetail.vue'
import CardDetail from '~/components/CardDetail.vue'
import Status from '~/components/Status.vue'
import Recommendation from '~/components/Recommendation.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    TopDetail,
    CardDetail,
    Status,
    Recommendation
  },

  data() {
    return {
      // lists: this.$store.state.all
      stop: true,
      stopInterval: ""
    }
  },

   methods: {
    ...mapActions(['loadData']),

    transform (value) {
      this.stop = value
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
          if (this.currentRouteName != 'alarm') {
            this.stop = false 
          }
        }  else {
          clearInterval(this.stopInterval)
        }
      }, 15000);
  
  },
}
</script>

<style lang="scss" scoped></style>
