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
import { mapActions } from 'vuex';

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
      return this.$store.state.all;
    },
    session() {
      return this.$store.state.checkingSession;
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
      await this.idCheck();
      if (!this.session.value) {
        // console.log(this.session)
        this.$bvToast.toast(this.session.logoff, {
          title: `Logoff`,
          toaster: 'b-toaster-bottom-right',
          solid: true
        });
        // this.logOff({logout: "tes"})
        // this.$cookies.removeAll();
        // this.$router.push('/')
      }

    this.stopInterval = setInterval(() => {
      if (this.$cookies.get('unit') === '' || undefined || this.currentRouteName !== 'activealarm') {
          clearInterval(this.stopInterval);
        }

      // if (this.stop && this.alarms instanceof Array) {
      //   this.loadData(this.unitId || '');
      //   for(alarm in this.alarms) {
      //     console.log(this.alarm)
      //     if(this.alarms.active === 1 && this.currentRouteName !== 'activealarm') {
      //       this.$router.push('/alarm');
      //       this.stop = false
      //       break
      //     }
      //   }
      // } else {
      //   this.$bvToast.toast(this.alarms, {
      //     title: `Erro`,
      //     toaster: 'b-toaster-bottom-right',
      //     solid: true
      //   });
      // }

      if (this.stop === true) {
        this.loadData(this.unitId || '');
        if (this.alarms instanceof Array) {
          for (alarm in this.alarms) {
            // console.log(this.currentRouteName)
            if (this.alarm.active === 1 && this.currentRouteName === 'activealarm') {
                this.$router.push('/alarm');
                this.stop = false
                break
              }
            }
          }
          else {
            this.$bvToast.toast(this.alarms, {
              title: `Erro`,
              toaster: 'b-toaster-bottom-right',
              solid: true
            });
            // clearInterval(this.stopInterval)
          }
        }
      }, 3000);

    this.loadData(this.unitId || '');
      // console.log(this.alarms instanceof Array)
      if (this.alarms == 'unidade não encontrada no banco') {
        this.$bvToast.toast(this.alarms, {
          title: `Logoff`,
          toaster: 'b-toaster-bottom-right',
          solid: true
        });
      }
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
    font-size: 40px;
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
