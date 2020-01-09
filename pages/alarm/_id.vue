<template>
  <div>
    <div class="wrapper-content container-fluid">
      <!-- v-for="list in lists" :key="list.id" -->
      <div class="row">
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
      lists: [{}]
    }
  }
}
</script>

<style lang="scss" scoped></style>
