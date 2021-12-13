<template>
  <div>
    <div class="container-fluid pt-5 mt-5">
      <div class="row adjust">
        <div class="col-4 mb-4" v-for="item in unitDetail" :key="item.id">
          <nuxt-link
            class="box-alarm d-flex align-items-center justify-content-center"
            to="alarm"
          >
            <span class="box-alarm-number">{{ item.unidade }}</span>
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
import global_mixin from '@/mixins/mixins.js';

export default {
  mixins: [global_mixin],

  data() {
    return {
      disabled: true,
      stop: true,
      stopInterval: '',
    }
  },

  methods: {
    ...mapActions(['loadData', 'idCheck', 'logOff', 'gettingUnits']),
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
    unitDetail() {
      return this.$store.state.getUnit.unidades;
    }
  },

  async created() {
    // Logoff automatico
      await this.idCheck()
      if (this.session.value === false) {
        this.createToast('b-toaster-bottom-right', `Logoff`, this.session.logoff, 'danger');
      }
    await this.gettingUnits();
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
