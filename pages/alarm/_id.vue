<template>
  <div>
    <div class="wrapper-content container-fluid">
      <div class="row" v-for="list in $store.state.all" :key="list.id">
        <div class="col-12 col-sm-3">
          <card-detail />
        </div>
        <!-- /.col-12 col-sm-3 -->
        <div class="col-12 col-sm-4">
          <detail />
          <!-- <status /> -->
        </div>
        <!-- /.col-12 col-sm-4 -->
        <div class="col-12 col-sm-5">
          <!-- step-name="Escolha os poços" -->
          <recommendation />
        </div>
        <!-- /.col-12 col-sm-5 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import Detail from '~/components/Detail.vue'
import CardDetail from '~/components/CardDetail.vue'
import Status from '~/components/Status.vue'
import Recommendation from '~/components/Recommendation.vue'

export default {
  components: {
    Detail,
    CardDetail,
    Status,
    Recommendation
  },
  data() {
    return {
      id: this.$route.params.id,
      lists: []
    }
  },

  computed: {
    alarmID() {
      return this.$store.state.all.map(item => item.id === this.id)
    }
  },
  mounted() {
    console.log(this.lists)
  }
}
</script>

<style lang="scss" scoped></style>
