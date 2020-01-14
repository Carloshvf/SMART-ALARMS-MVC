<template>
  <div class="card">
    <div class="card-header bg-dark-purple">
      <h2 class="mb-0 text-uppercase">PLS: TG 21 {{ $store.state.all.id }}</h2>
    </div>
    <!-- /.card-header -->
    <div class="card-content card-detail bg-purple">
      <div class="card-detail-header">
        <p>Causa básica:</p>
        <h3>Nível baixo do tambor de HP</h3>
      </div>
      <!-- /.card-detail-head -->
      <div class="card-detail-content d-flex flex-row align-items-center justify-content-between">
        <div class="card-detail-content-txt">
          <p>KKS</p>
          <h6>21HAD50FL901XJ60</h6>
        </div>
        <!-- /.card-detail-content-txt -->
        <a href>grafico</a>
        <!-- <img src="../static/img/alarm.svg" alt="" /> -->
      </div>
      <!-- /.card-detail-content -->
      <hr />
      <div class="card-detail-footer d-flex flex-row justify-content-around align-items-center">
        <nuxt-link to="detail" class="btn btn-primary">Detalhes</nuxt-link>
        <small>Contagem regressiva flame Off</small>
        <h1>3:27</h1>
      </div>
      <!-- /.card-detail-footer -->
    </div>
    <!-- /.card-content -->
  </div>
  <!-- /.card -->
</template>

<script>
export default {
  // mounted() {
  //   console.log(this.$store.state.load[1].kks[0].value)
  // }
  computed: {
    name() {
      return this.alarms.find(alarm => alarm.id === this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.card-detail {
  height: 280px;

  h1,
  h3,
  h6 {
    font-weight: 700;
  }
  p {
    margin-bottom: 0;
    color: $gray;
  }

  &-header {
    h3 {
      color: $yellow;
    }
  }

  &-content {
    h6 {
      color: white;
    }
  }

  hr {
    background-color: lightgray;
  }

  &-footer {
    color: white;
  }
}
</style>
