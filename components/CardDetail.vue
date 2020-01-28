<template>
  <div class="card">
    <div class="card-header bg-dark-purple">
      <h2 class="mb-0 text-uppercase">{{ alarm.type }} {{ alarm.name }}</h2>
    </div>
    <!-- /.card-header -->
    <div class="card-content card-detail bg-purple">
      <div class="card-detail-header">
        <p>Causa básica:</p>
        <!-- <h3>Nível baixo do tambor de HP</h3> -->
        <h3>{{ alarm.cause }}</h3>
      </div>
      <!-- /.card-detail-head -->
      <div
        class="card-detail-content d-flex flex-row align-items-center justify-content-between"
      >
        <div class="card-detail-content-txt">
          <p>KKS</p>
          <h6>{{ alarm.value }}</h6>
        </div>
        <!-- /.card-detail-content-txt -->
        <b-button v-b-modal="alarm.value">Gráfico</b-button>

        <b-modal :id="alarm.value" title="BootstrapVue">
          <p class="my-4">{{ alarm.name }}</p>
          <graph :chart-data="chartData" />
          <!--  -->
        </b-modal>
      </div>
      <!-- /.card-detail-content -->
      <hr />
      <div
        class="card-detail-footer d-flex flex-row justify-content-around align-items-center"
      >
        <nuxt-link
          :to="{ name: 'detail-id', params: { id: unity.id } }"
          class="btn btn-primary"
          >Detalhes</nuxt-link
        >
        <!--  -->
        <small>Contagem regressiva flame Off</small>
        <!-- <span>{{ new Date() | moment('H:mm:ss') }}</span> -->
        <!-- <h1>{{ countDown }} {{ countTime | moment('mm:ss') }}</h1> -->
        <h1>{{ countTime }}</h1>
      </div>
      <!-- /.card-detail-footer -->
    </div>
    <!-- /.card-content -->
  </div>
  <!-- /.card -->
</template>

<script>
import Graph from '~/components/Graph.vue'

import main from '~/plugins/main'

export default {
  props: ['alarm', 'unity'],

  components: {
    Graph
  },

  data() {
    return {
      id: this.$route.params.id,
      countDown: 10,
      countTime: null,
      chartData: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      }
    }
  },

  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    },

    countDownn() {
      this.$moment.locale('pt-BR')
      const dataAtual = new Date()
      var DataAPI = this.$moment(dataAtual)
        .add(7, 'minutes')
        .add(1, 'seconds')
      var mat = this.$moment(new Date())
      var ms = this.$moment(DataAPI).diff(mat)
      var d = this.$moment.duration(ms)
      this.countTime = d.get('minutes') + ':' + d.get('seconds')

      setInterval(() => {
        // var mObj = this.$moment(this.countTime).subtract(1, 'seconds')
        //this.countTime = mObj.toDate()
        var mat = this.$moment(new Date())
        var ms = this.$moment(DataAPI).diff(mat)
        var d = this.$moment.duration(ms)
        this.countTime = d.get('minutes') + ':' + d.get('seconds')

        //this.countDown -= 1
        //this.countDownTimer()
      }, 1000)
    }
  },
  created() {
    this.countDownn()

    return this.countDownTimer()
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.card-detail {
  min-height: 300px;

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
