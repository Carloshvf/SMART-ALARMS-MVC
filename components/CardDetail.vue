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
        <small class="ml-2">Contagem regressiva flame Off</small>
        <!-- <h1>{{ countDown | moment('mm:ss') }}</h1> -->
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

import { mapActions, mapState } from 'vuex'

export default {
  props: ['alarm', 'unity'],

  components: {
    Graph
  },

  data() {
    return {
      id: this.$route.params.id,
      countTime: '',
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
  computed: {
    ...mapState(['all'])
  },

  methods: {
    ...mapActions(['loadData']),

    loadCount() {
      const dateApi = this.alarm.date
      const typeData = this.alarm.type
      const dateNew = new Date()
      const moDataApi = this.$moment(dateApi)

      let dateCurrent = this.$moment(dateNew)
      let ms = moDataApi.diff(dateCurrent)
      let d = this.$moment.duration(ms)
      if (ms > 0) {
        this.$moment.locale('pt-BR')

        if (typeData == 'PLS') {
          moDataApi.add(7, 'minutes')
        } else {
          moDataApi.add(5, 'minutes')
        }

        setInterval(() => {
          let dateCurrent = this.$moment(new Date())
          let ms = moDataApi.diff(dateCurrent)

          if (ms > 0) {
            let d = this.$moment.duration(ms)

            this.countTime =
              d
                .get('minutes')
                .toString()
                .padStart(2, '0') +
              ':' +
              d
                .get('seconds')
                .toString()
                .padStart(2, '0')
          } else {
            this.countTime = 'Expirou'
          }
        }, 1000)
      } else {
        this.countTime = 'Expirou'
      }

      // commit('setAll', responseData)
    }
  },

  created() {
    this.countTime = ''
    this.loadCount()
    // this.alarm['countTime'] = ''
    // this.counter({ alarm: this.alarm.countTime })
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
