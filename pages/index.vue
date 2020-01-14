<template>
  <div>
    <!-- <header-smart></header-smart> -->
    <div class="wrapper-content container">
      <div class="row">
        <div class="col-6 col-sm-4 mb-4" v-for="alarm in alarms" :key="alarm.number">
          <nuxt-link
            :class="{ alarmActive: alarm.isActive }"
            class="box-alarm d-flex align-items-center justify-content-center"
            :to="{name: 'alarm-id', params: {id: alarm.number}}"
          >
            <span class="box-alarm-number">{{ alarm.number }}</span>
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
export default {
  data() {
    return {
      alarms: [
        { number: '11', isActive: false },
        { number: '21', isActive: true },
        { number: '31', isActive: false },
        { number: '12', isActive: false },
        { number: '22', isActive: false },
        { number: '32', isActive: false },
        { number: '18', isActive: false },
        { number: '28', isActive: false },
        { number: '38', isActive: false }
      ]
      // isActive: true
    }
  }
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
