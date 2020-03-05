<script>
import { Line, mixins } from 'vue-chartjs' // Tudo na documentção do vue-chart.js
import zoom from 'chartjs-plugin-zoom';

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartdata', 'options'],
  mounted() {
    this.addPlugin(zoom);
    this.renderChart(this.chartData, this.options)
  }
}
</script>
