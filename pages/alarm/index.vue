<template>
  <div>
    <div class="wrapper-content container-fluid" v-for="list in lists" :key="list.name">
      <div class="row" v-for="card in list.kks" :key="card.id">
        <div class="col-12 col-sm-3 mb-4">
          <card-detail :alarm="card" />
        </div>
        <!-- /.col-12 col-sm-3 -->
        <div class="col-12 col-sm-4">
          <!-- <detail /> -->
          <!-- <top-detail /> -->
          <status :alarm="card.status" />
          <!-- <status /> -->
        </div>
        <!-- /.col-12 col-sm-4 -->
        <div class="col-12 col-sm-5">
          <recommendation :alarm="card.recom" />
        </div>
        <!-- /.col-12 col-sm-5 -->
      </div>
      <!-- /.row -->
      <hr class="mt-5 mb-0" />
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import TopDetail from '~/components/TopDetail.vue'
import CardDetail from '~/components/CardDetail.vue'
import Status from '~/components/Status.vue'
import Recommendation from '~/components/Recommendation.vue'

export default {
  components: {
    TopDetail,
    CardDetail,
    Status,
    Recommendation
  },

  data() {
    return {
      lists: this.$store.state.all
    }
  }
}
</script>

<style lang="scss" scoped></style>
