<template>
  <div class="top-detail">
    <h1 class="header-top">{{ alarm.type }} {{ alarm.name }} {{ alarm.complemento }}</h1>
    <hr />
    <div class="top-detail-header ">
      <h6>Causa básica:</h6>
      <h3 class="mb-0">{{ alarm.cause }}</h3>
    </div>
    <!-- .top-detail-header -->
    <div class="top-detail-kks">
      <h6 class="text-uppercase mt-3 mb-1">kks</h6>
      <div class="d-flex">
        <h5 class="mb-0">{{ alarm.value }}</h5>
        <b-button class="card-button ml-3" v-b-modal="alarm.value" @click="getGraph(alarm.value)" :disabled="disable">{{ alarm.valor_medida }}</b-button>
      </div>
      <b-modal size="xl" :id="alarm.value" title="BootstrapVue" @hidden="onHidden" @show="onShow">
        <!-- Essas são as caracteristicas do modal (o prompt do grafico) -->
        <p class="my-4">Endereço: {{ ende }}</p>
        <!-- Não faz diferença de onde no codigo da pagina ele fica desde que ele esteja presente para passar os detalhes -->
        <graph ref="chartCurve" :chart-data="fillData" :height="210" :options="chartOptions" />
        <b-button @click="reset">Reset zoom</b-button>
      </b-modal>
      <!--b-modal  -->
    </div>
    <!-- /.top-detail-kks -->
    <div class="detail-channel">
      <h6 class="mt-2">Canal:</h6>
      <ul class="detail-channel-input">
        <li class="detail-channel-input-item" v-for="value in alarm.channels" :key="value.item">
          <input class type="checkbox" v-if="value.active == 1" checked :id="value.item" />
          <input class type="checkbox" v-if="value.active == 0" :id="value.item" />
          <label :for="value.item">{{ value.item }}</label>
          <b-button class="card-button" v-b-modal="alarm.value" @click="getGraph(value.medida)" v-if="value.valor_medida != ''" :disabled="disable">{{ value.valor_medida }}</b-button>
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
      ende: "",
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
          if (this.currentRouteName != 'detail-id') {
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
          for (let index = 0; index < this.alarm.channels.length; index++) {
              if (this.alarm.channels[index].medida != id) {
                  continue
                  
              } else {
                let response = await this.loadGraph(id)
                this.fillData = await this.treatGraph(response)
              }
          }

           if (this.ceaseLoop == false) {
            this.stop = false 
          }
        } else {
          clearInterval(this.stopInterval)
         
        }
      }, 3000);
      this.ende = id

      this.chartOptions.scales.yAxes[0].scaleLabel.labelString = this.fillData.value
    }
  },

}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.card-button {
  background-color: #004165;
}

.header-top {
  background: #008542;
  border-radius: 20px;
  color: $white;
  font-weight: bold;
  width: 150px;
}

.top-detail {
  border-top-right-radius: $border-radius;
  border-top-left-radius: $border-radius;
  background-color: white;
  padding: $padding;

  h1{
    font-size: 22px;
    background: #008542;
    border-radius: 20px;
    text-align: center;
    color: $white;
    font-weight: bold;
  }
  
  h3,
  h5 {
    font-weight: 700;
  }

  &-kks {
    h6 {
      color: $light-purple;
      font-weight: bold;
    }

    h5 {
      color: $blue-pb;
    }

  }

  &-header {
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
    color: $light-purple;

    h6 {
      font-weight: bold;
    }

    h3 {
      color: $blue-pb;
    }
  }
}

.detail-channel {
  background-color: white;
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;

  h6 {
    color: $light-purple;
    font-weight: bold;
  }

  &-input-item {
    font-size: 1.37rem;
    list-style: none;
    font-weight: 700;

    label {
      color: $blue-pb;
    }

    input {
      margin-right: 10px;
      margin-top: 5px;
    }
  }
}
</style>
