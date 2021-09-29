<template>
  <div class="pt-0">
    <div class="card-header pt-0">
      <h6 class="mb-0">Status e medida de equipamento</h6>
    </div>
    <!-- /.card-header -->
    <div class="card-content">
      <div class="row">
        <div v-for="equip in alarm" :key="equip.id" class="col-12 col-sm-6">
          <div class="card-equip">
            <b-modal size="xl" :id="equip.kks" title="Gráfico" @hidden="onHidden" @show="onShow">
              <!-- Essas são as caracteristicas do modal (o prompt do grafico) -->
              <p class="my-4">Endereço: {{ ende }}</p>
              <!-- Não faz diferença de onde no codigo da pagina ele fica desde que ele esteja presente para passar os detalhes -->
              <graph ref="chartCurve" :chart-data="fillData" :height="210" :options="chartOptions" />
              <b-button @click="reset">Reset zoom</b-button>
            </b-modal>
            <b-button class="mb-3 p-2 medida-color" v-b-modal="equip.kks" @click="getGraph(equip.kks_grafico)" v-if="equip.tipo == 'medida'">
              <b class="spacing">{{ equip.kks }} - {{ equip.valor_medida }} </b>
            </b-button>
            <b-button class="mb-3 p-2 disabling " v-if="equip.tipo == 'status'" :disabled="unavailable" :class="{ red: equip.color == 'red', green: equip.color == 'green' }">
              <b class="spacing">{{ equip.kks }}</b>
            </b-button>
            <div class="card-equip-cause bg-light-purple p-2" :class="{ dNone: equip.isHidden }">
              <small class="text-uppercase">causa</small>
              <p>{{ equip.cause }}</p>
              <hr />
              <a href>{{ equip.text }}</a>
            </div>
            <!-- /.card-cause -->
          </div>
          <!-- /.card-equip -->
        </div>
        <!-- /.col-6 col-sm-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.card-content -->
  </div>
  <!-- /.card -->
</template>

<script>
import Graph from '~/components/Graph.vue';
import { mapActions } from 'vuex';

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
      unavailable: true,
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

    unitId() {
      return this.$cookies.get('unit') || '';
    },
  },

  methods: {
    ...mapActions(['loadGraph', 'treatGraph', 'loadData']),

    getChartVisible() {
      var refChart = 'chartCurve';
      return refChart;
    },

    reset() {
      this.$resetGraph(this.getChartVisible());
    },

    onShow() {
      this.$emit('loops', false);
      this.stopRerun = false;
      this.ceaseLoop = true;
    },

    onHidden() {
      this.ceaseLoop = false;
      this.stopRerun = true;

      if (this.currentRouteName === 'alarm') {
        this.rerun = setInterval(() => {
        if (this.stopRerun === true) {
          this.loadData(this.unitId || '');
          if (this.currentRouteName !== 'alarm') {
            this.stopRerun = false;
          }
        } else {
          clearInterval(this.rerun);
        }
      }, 5000);
      }
      else if (this.currentRouteName === 'detail-id') {
        this.rerun = setInterval(() => {
        if (this.stopRerun === true) {
          this.loadData(this.unitId || '');
          if (this.currentRouteName !== 'detail-id') {
            this.stopRerun = false;
          }
        } else {
          clearInterval(this.rerun);
        }
      }, 5000);
      }

      this.disable = true;
      setTimeout(() => {
       this.disable = false;
     }, 5000);
    },

    async getGraph(id) {
      let response = await this.loadGraph(id);
      this.fillData = await this.treatGraph(response);
      this.stopInterval = true;
      this.stop = true;

      this.stopInterval = setInterval(async () => {
        if(this.stop === true) {
          let response = await this.loadGraph(id);
          this.fillData = await this.treatGraph(response);

           if (this.ceaseLoop === false) {
            this.stop = false;
          }
        } else {
          clearInterval(this.stopInterval);
        }
      }, 3000);
      this.ende = id;

      this.chartOptions.scales.yAxes[0].scaleLabel.labelString = this.fillData.value;
    }
  },

}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.dNone {
  display: none;
}

.spacing {
  letter-spacing: 1px;
}

.medida-color {
  background-color: #666666;
  padding: 2px 13px;
  border-radius: 40px;
  font-size: 18px;
  width: 100%;
  opacity: 1.0;
}

.disabling {
  opacity: 1.0;
  padding: 2px 13px;
  border-radius: 40px;
  font-size: 18px;
  width: 100%;
}

.red {
  background-color: $dark-red;
}

.green {
  background-color: $green-pb;
}

.card-equip {
  text-align: center;
  color: white;

  h6 {
    border-radius: 5px;
    font-weight: 700;
  }

  &-cause {
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;

    hr {
      background-color: lightgray;
    }

    a {
      color: white;

      &:hover {
        color: transparentize(white, 0.2);
      }
    }
  }
}
</style>
