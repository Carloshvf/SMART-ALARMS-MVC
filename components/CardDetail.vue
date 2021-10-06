<template>
  <div>
    <div class="card-content card-detail">
      <div class="card-detail-header">
        <h6 class="mb-2">Causa imediata:</h6>
        <!-- <h3>Nível baixo do tambor de HP</h3> -->
        <h2 class="mb-3">{{ alarm.cause }}</h2>
      </div>
      <!-- /.card-detail-head -->
      <div
        class="card-detail-content d-flex flex-row align-items-center justify-content-between"
      >
        <div class="card-detail-content">
          <h6 class="mb-1">Endereço</h6>
          <p>{{ alarm.value }}</p>
        </div>
        <!-- /.card-detail-content-txt -->
        <b-button class="card-button mt-1" v-b-modal="alarm.value" @click="getGraph(alarm.value)" >{{ alarm.valor_medida }}</b-button>

        <b-modal size="xl" :id="alarm.value" title="Gráfico" @hidden="onHidden" @show="onShow">
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

    </div>
    <!-- /.card-content -->
  </div>
  <!-- /.card -->
</template>

<script>
import Graph from '~/components/Graph.vue'
import Counter from '~/components/Counter.vue'

import main from '~/plugins/main';
import { mapActions, mapState } from 'vuex';

export default {
  props: ['alarm', 'unity'],

  components: {
    Graph,
    Counter,
  },

  data() {
    return {
      // id: this.unity.id,
      countTime: '',
      stop: true,
      stopInterval: true,
      rerun: true,
      stopRerun: true,
      ceaseLoop: true,
      disable: true,
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
    },

    cardDetail() {
      return this.lists.filter(i => i.id === this.id)
    },

    lists() {
      return this.$store.state.all
    },

    unitId() {
      return this.$cookies.get('unit') || '';
    },

  },
  methods: {
    ...mapActions(['loadGraph', 'treatGraph', 'loadData']),

    foo(id) {
      var result = { countTimeDiff: 0 }

      if (id && this.lists && this.lists.length > 0) {
        var arrays = new Array();
        for (const key in this.lists) {
          arrays.push(Object.assign({}, this.lists[key]))
        }

        result = arrays.filter(i => i.id === id)
        result = result[0].kks
        const result2 = result.slice()
        result = result2.sort((a, b) => a.countTimeDiff - b.countTimeDiff)
        result = result.filter(
          (item, index, array) => item.countTimeDiff === array[0].countTimeDiff
        )
        result = result[0]
      }

      return result
    },

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
        if (this.stopRerun === true) {
          this.loadData(this.unitId || '')
          if (this.currentRouteName !== 'alarm') {
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
      const response = await this.loadGraph(id)
      this.fillData = await this.treatGraph(response)
      this.stopInterval = true
      this.stop = true

      this.stopInterval = setInterval(async () => {
        if(this.stop === true) {
          const response = await this.loadGraph(id)
          this.fillData = await this.treatGraph(response)

           if (this.ceaseLoop === false) {
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

.card-button {
  background-color: #004165;
  opacity: 1.0;
}

.type-background {
  background: #008542;
  border-radius: 20px;
  color: $white;
  font-weight: bold;
}

.card-detail {

  h1,
  h3,
  h6 {
    font-weight: 700;
  }
  h6 {
    margin-bottom: 0;
    color: $light-purple;
    font-weight: bold;
  }

  &-header {
    h2 {
      color: $blue-pb;
    }
  }

  &-content {
    h6 {
      font-size: 15px;
      line-height: 20px;
      font-weight: bold;
    }

    p {
      color: $blue-pb;
      font-weight: bold;
      line-height: 20px;

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
