<template>
  <div class="top-detail">
    <div class="top-detail-header bg-dark-purple d-flex align-items-center">
      <p class="text-uppercase mb-0">causa:</p>
      <h3 class="mb-0 ml-3">{{ alarm.cause }}</h3>
    </div>
    <!-- .top-detail-header -->
    <div
      class="top-detail-kks bg-purple d-flex align-items-center justify-content-between"
    >
      <div class="d-flex">
        <p class="text-uppercase mb-0">kks:</p>
        <h5 class="mb-0 ml-3">{{ alarm.value }}</h5>
      </div>
      <b-button v-b-modal="alarm.value">Gráfico</b-button>
      <b-modal :id="alarm.value" title="BootstrapVue">
        <p class="my-4">{{ alarm.name }}</p>
        <graph :chart-data="chartData" />
      </b-modal>
      <!--b-modal  -->
    </div>
    <!-- /.top-detail-kks -->
    <div class="detail-channel d-flex justify-content-between mb-3">
      <p class="text-uppercase">canais:</p>
      <ul class="detail-channel-input">
        <li
          class="detail-channel-input-item d-flex align-items-center"
          v-for="value in alarm.channels"
          :key="value.item"
        >
          <input class type="checkbox" :id="value.item" />
          <label class="mb-0" :for="value.item">{{ value.item }}</label>
          <a class="ml-4" href>gráfico</a>
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

export default {
  props: ['alarm'],
  components: {
    Graph
  },
  data() {
    return {
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
  }
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
