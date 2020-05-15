<template>
  <div class="card">
    <div class="card-header bg-dark-purple">
      <h2 class="mb-0 text-uppercase">{{ alarm.type }} {{ alarm.name }} {{ alarm.complemento }}</h2>
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
<<<<<<< HEAD
        <b-button v-b-modal="alarm.value" @click="getGraph(alarm.value)" :disabled="disable">{{ alarm.valor_medida }}</b-button>
=======
        <b-button v-b-modal="alarm.value" @click="getGraph(alarm.value)" :disabled="disable">Gráfico</b-button>
>>>>>>> master

        <b-modal size="xl" :id="alarm.value" title="BootstrapVue" @hidden="onHidden" @show="onShow">
          <p class="my-4">Endereço: {{ alarm.value }}</p>
          <!-- <p class="ml-auto">Medida: C</p> -->
          <graph
            ref="chartCurve"
            :chart-data="fillData"
            :height="210"
            :options="chartOptions"
          />
          <b-button v-on:click="reset()">Reset zoom</b-button>
          <!--  -->
        </b-modal>
      </div>
      <!-- /.card-detail-content -->
      <hr />
      <div
        class="card-detail-footer d-flex flex-row align-items-center"
      >
        <nuxt-link
          :to="{ name: 'detail-id', params: { id: unity.id } }"
          class="btn btn-primary"
          >Detalhes</nuxt-link
        >
        <!--  -->
        <small class="ml-2" >Contagem regressiva flame Off</small>
        <!-- <h1>{{ countDown | moment('mm:ss') }}</h1> -->
        <h1>{{ countTime }}</h1>
        <counter :alarm="alarm" />
      </div>
      <!-- /.card-detail-footer -->
    </div>
    <!-- /.card-content -->
  </div>
  <!-- /.card -->
</template>

<script>
import Graph from '~/components/Graph.vue'
import Counter from '~/components/Counter.vue'

import main from '~/plugins/main'
import { mapActions, mapState } from 'vuex'

export default {
  props: ['alarm', 'unity'],

  components: {
    Graph,
    Counter
  },

  data() {
    return {
      id: this.$route.params.id,
      countTime: '',
      stop: true,
      stopInterval: true,
      rerun: true,
      stopRerun: true,
      ceaseLoop: true,
      disable: false,
      fillData: {},
      chartOptions: {
        pan: {
          enabled: true,
          mode: 'x'
        },
        zoom: {
          drag: true,
          enabled: true,
          mode: 'xy',
          speed: 0.7
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Valor'
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: true
              },
              ticks: {
                // max: 20
                // min: 0,
                stepSize: 4.5
              },
              scaleLabel: {
                display: true,
                labelString: 'Tempo'
              }
            }
          ]
        }
      }
    }
  },

   computed: {
    currentRouteName() {
        return this.$route.name;
    }
   
  },
  methods: {
    ...mapActions(['loadGraph', 'treatGraph', 'loadData']),

    getChartVisible() {
      var refChart = 'chartCurve'
      return refChart
    },

    reset() {
      this.$resetGraph(this.getChartVisible())
    },

    onShow() {
      this.$emit('loops', false)
      this.stopRerun = false
      this.ceaseLoop = true
      
    },

    onHidden() {
      this.ceaseLoop = false
      this.stopRerun = true
      this.rerun = setInterval(() => {
        if (this.stopRerun == true) {
          this.loadData()
          if (this.currentRouteName != 'alarm') {
            this.stopRerun = false 
          }
        } else {
          clearInterval(this.rerun)
         
        }
      }, 5000);

      this.disable = true
      setTimeout(() => {
       this.disable = false
     }, 5000);
    },

    async getGraph(id) {
      let response = await this.loadGraph(id)
      this.fillData = await this.treatGraph(response)
      this.stopInterval = true
      this.stop = true

      this.stopInterval = setInterval(async () => {
        if(this.stop == true) {
          let response = await this.loadGraph(id)
          this.fillData = await this.treatGraph(response)

           if (this.ceaseLoop == false) {
            this.stop = false 
          }
        } else {
          clearInterval(this.stopInterval)
         
        }
      }, 3000);
    
      this.chartOptions.scales.yAxes[0].scaleLabel.labelString = this.fillData.value
    }
  }
}

// created() {
//   this.countTime = ''
//   this.loadCount()
// }
// }
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
