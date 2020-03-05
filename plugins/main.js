import Vue from 'vue'
import 'vue-material-design-icons/styles.css';

Vue.use(require('vue-moment'))


Vue.prototype.$resetGraph = function(refChart) {
    this.$refs[refChart]._data._chart.resetZoom();
  };
// export const moment = () => ({
//   moment.locale('pt-BR');
// })
