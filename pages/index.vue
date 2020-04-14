<template>
  <div>
    <!-- <header-smart></header-smart> -->
    <div class="wrapper-content container pt-5 mt-5">
      <div class="row">
        <div class="col-6 col-sm-4 mb-4" v-for="alarm in alarms" :key="alarm.id"> 
          <nuxt-link
            :class="{ alarmActive: alarm.active == 1 }"
            class="box-alarm d-flex align-items-center justify-content-center"
            
            to="alarm"
          >
            <span class="box-alarm-number">{{ alarm.id }}</span>
            <!-- :event="disabled ? '' : 'click'" -->
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

  data() {
    return {
      disabled: true,
      stop: true,
    }
  },

  methods: {
    ...mapActions(['loadData']),
    
  },

  computed: {
    alarms() {
      return this.$store.state.all
    },
  },

  async created() {
    setInterval(() => {
      if (this.stop == true) {
      this.loadData()
        for (let index = 0; index < this.alarms.length; index++) {
          if (this.alarms[index].active == 1) {
              this.$router.push('/alarm')
              this.stop = false
              break
            }
          }
        }
      }, 5000);
    
    this.loadData()
   
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';

.box-alarm {
  background-color: $purple;
  border-radius: $border-radius;
  transition: $transition;
  padding: 15px;
  height: 190px;

  &-number {
    font-size: 100px;
    font-weight: 700;
    color: white;
  }

  &:hover {
    background-color: transparentize($purple, 0.06);
  }
}

.alarmActive {
  background-color: $dark-red;
}
</style>
