<template>
  <div>
    <!-- <header-smart></header-smart> -->
    <div class="container-fluid pt-5 mt-5">
      <div class="row adjust">
        <div class="col-4 mb-4" v-for="alarm in alarms" :key="alarm.id"> 
          <nuxt-link
            :class="{ alarmActive: alarm.active == 1 }"
            class="box-alarm d-flex align-items-center justify-content-center"
            :event="disabled ? '' : 'click'"
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
      stopInterval: '',
    }
  },

  methods: {
    ...mapActions(['loadData', 'idCheck', 'logOff']),
    
  },

  computed: {
    alarms() {
      return this.$store.state.all
    },
    session() {
      return this.$store.state.checkingSession
    },
     currentRouteName() {
        return this.$route.name;
    },
    unitId() {
      return this.$cookies.get('unit') || '';
    },
  },

  async created() {
    // Logoff automatico
      await this.idCheck()
      if (this.session == false) {
        this.logOff({logout: "tes"})
        this.$cookies.removeAll();
        this.$router.push('/')
      }
    //

    this.stopInterval = setInterval(() => {
      if (this.$cookies.get('unit') == '' || this.$cookies.get('unit') == undefined || this.currentRouteName != 'activealarm') {
          clearInterval(this.stopInterval)
        }
      if (this.stop == true) {
      this.loadData(this.unitId || '')
        for (let index = 0; index < this.alarms.length; index++) {
          // console.log(this.currentRouteName)
          if (this.alarms[index].active == 1 && this.currentRouteName == 'activealarm') {
              this.$router.push('/alarm')
              this.stop = false
              break
            }
          }
        }
      }, 3000);
    
    this.loadData(this.unitId || '')
   
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';

.adjust {
  width: 70%;
  margin: 0 auto;
}

.box-alarm {
  background-color: #666666;
  border-radius: $border-radius;
  transition: $transition;
  height: 190px;

  &-number {
    font-size: 70px;
    line-height: 80px;
    width: 400px;
    text-align: center;
    font-weight: 700;
    color: white;
  }

}

.alarmActive {
  background-color: #ED1313 !important;
}
</style>
