<template>
  <div class="top-detail">
    <h1 class="text-center">{{ alarm.type }} {{ alarm.complemento }}</h1>
    <div class="top-detail-header bg-dark-purple d-flex align-items-center">
      <p class="text-uppercase mb-0">causa:</p>
      <h3 class="mb-0 ml-3">{{ alarm.cause }}</h3>
    </div>
    <!-- .top-detail-header -->
    <div class="top-detail-kks bg-purple d-flex align-items-center justify-content-between">
      <div class="d-flex">
        <p class="text-uppercase mb-0">kks:</p>
        <h5 class="mb-0 ml-3">{{ alarm.value }}</h5>
      </div>
      <b-button v-b-modal="alarm.value" @click="getGraph(alarm.value)">Gráfico</b-button>
      <b-modal size="xl" :id="alarm.value" title="BootstrapVue" @hidden="onHidden" @show="onShow">
        <!-- Essas são as caracteristicas do modal (o prompt do grafico) -->
        <p class="my-4">Endereço: {{ alarm.value }}</p>
        <!-- Não faz diferença de onde no codigo da pagina ele fica desde que ele esteja presente para passar os detalhes -->
        <graph ref="chartCurve" :chart-data="fillData" :height="210" :options="chartOptions" />
        <b-button @click="reset">Reset zoom</b-button>
      </b-modal>
      <!--b-modal  -->
    </div>
    <!-- /.top-detail-kks -->
    <div class="detail-channel d-flex justify-content-between mb-3">
      <p class="text-uppercase">canais:</p>
      <!-- As classes são do Bootstrap -->
      <ul class="detail-channel-input">
        <li class="detail-channel-input-item" v-for="value in alarm.channels" :key="value.item">
          <input class type="checkbox" v-if="value.active == 1" checked :id="value.item" />
          <input class type="checkbox" v-if="value.active == 0" :id="value.item" />
          <label class="mb-3" :for="value.item">{{ value.item }}</label>
          <b-button v-b-modal="alarm.value" @click="getGraph(value.medida)">Gráfico</b-button>
          <!-- Isso é só o botão, v-b-modal faz o botão ser capaz de mostrar o prompt -->
        </li>
      </ul>
      <!-- /.detail-channel-input -->
    </div>
    <!-- /.detail-channel -->
  </div>
  <!-- .top-detail -->
</template>

<script>
import Graph from '~/components/Graph.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['alarm'],
  components: {
    Graph
  },
  data() {
    return {
      stop: true,
      stopInterval: true,
      rerun: true,
      stopRerun: true,
      ceaseLoop: true,
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
      
    },

    onHidden() {
      this.ceaseLoop = false
      this.stopRerun = true
      this.rerun = setInterval(() => {
        if (this.stopRerun == true) {
          this.loadData()
          if (this.currentRouteName != 'detail-id') {
            this.stopRerun = false 
           
          }
        } else {
          clearInterval(this.rerun)
         
        }
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
      }, 5000);

      // this.chartOptions.scales.yAxes[0].scaleLabel.labelString = this.fillData.value
    }
  },

}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.top-detail {
  h3,
  h5 {
    font-weight: 700;
  }

  &-header,
  &-kks {
    padding: $padding;
    color: white;
  }

  &-header {
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }
}

.detail-channel {
  padding: $padding;
  background-color: lightgray;
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;

  &-input-item {
    font-size: 1.37rem;
    list-style: none;
    font-weight: 700;
    color: $dark-purple;

    input {
      margin-right: 10px;
      margin-top: 5px;
    }
  }
}
</style>
