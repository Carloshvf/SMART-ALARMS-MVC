<template>
  <div>
    <!-- <header-smart></header-smart> -->
    <div class="wrapper-content container pt-5 mt-5">
      <div class="row">
        <div class="col-6 col-sm-4 mb-4" v-for="alarm in alarms" :key="alarm.id">
          <nuxt-link
            :class="{ alarmActive: alarm.isActive }"
            class="box-alarm d-flex align-items-center justify-content-center"
            to="alarm"
          >
            <!-- :to="{name: 'alarm-id', params: {id: alarm.id}}" -->
            <span class="box-alarm-number">{{ alarm.id }}</span>
          </nuxt-link>
          <!-- /.box-alarm -->
        </div>
        <!-- /.col-3 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions(['loadData'])
  },

  computed: {
    alarms() {
      return this.$store.state.all
    }
  },

  async created() {
    // this.$store.dispatch('loadData')
    this.loadData()
  }

  // async mounted() {
  //   this.loadData()
  // }
}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';

.box-alarm {
  background-color: $purple;
  border-radius: $border-radius;
  transition: $transition;
  padding: 15px;
  height: 210px;

  &-number {
    font-size: 100px;
    font-weight: 700;
    color: white;
  }

  &:hover {
    background-color: transparentize($purple, 0.06);
  }
}
</style>
