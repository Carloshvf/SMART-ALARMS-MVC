<template>
  <div>
    <!-- Header -->
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
            <!-- Event disable when is empty -->
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
import { mapActions } from 'vuex'
import global_mixin from '@/mixins/mixins.js'

export default {
  mixins: [global_mixin],

  data() {
    return {
      disabled: true,
      stop: true,
      stopInterval: '',
      toasterStr: 'b-toaster-bottom-right',
      contador: 0,
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
    if (this.session.value === false) {
      this.createToast(toasterStr, `Logoff`, this.session.logoff, 'danger');
    }

    this.stopInterval = setInterval(async () => {
      if (
        this.$cookies.get('unit') === '' ||
        undefined ||
        this.currentRouteName !== 'activealarm'
      ) {
        clearInterval(this.stopInterval);
      }
      if (this.stop !== true) {
        return
      }

      this.contador = this.contador + 1;
      // console.log(this.contador);
      await this.loadData({unit: this.unitId, cont: this.contador});

      try {
        const alarmActive = this.alarms.some((alarm) => {
          return Boolean(
            alarm.active === 1 && this.currentRouteName === 'activealarm'
          );
        })
        if (alarmActive) {
          this.contador = 0;
          this.$router.push('/alarm');
          this.stop = false;
        }
      } catch (e) {
        this.createToast(toasterStr, `Erro`, this.alarms, 'danger');
      }
    }, 5000)

    this.contador = this.contador + 1
    await this.loadData({unit: this.unitId, cont: this.contador})
    if (this.alarms === 'unidade não encontrada no banco') {
      this.createToast(toasterStr, `Logoff`, this.alarms, 'danger');
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
  background-color: #ed1313 !important;
}
</style>
