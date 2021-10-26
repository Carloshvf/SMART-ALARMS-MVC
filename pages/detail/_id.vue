<template>
  <div>
    <section class="detail-page" v-for="value in cardDetail" :key="value.id">
      <aside class="detail-page-sidebar">
        <!-- Eventos -->
        <ul>
          <li class="mb-3" v-for="link in lists" :key="link.id">
            <nuxt-link
              class="detail-page-sidebar-link d-flex flex-column align-items-center justify-content-center"
              :to="{ name: 'detail-id', params: { id: link.id } }"
              v-if="link.active == 1"
              @click="clickFalse()"
            >
              <h1 class="detail-counter">{{ link.id }}</h1>
              <counter :alarm="foo(link.id)" :cont="link.kks[0].contador" :kks="incEnde" :arr="arrVa" :key="componentKey" @send="check"  />
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <div class="wrapper-content container-fluid">
        <div class="row fluid-card pt-5 mt-5 mb-3">
          <div class="col-12" >
            <header
              class="detail-page-header d-flex align-items-center"
            >
              <h1 v-if="value.active == 1" class="detail-page-name">{{ value.id }}</h1>
              <div class="detail-page-count d-flex align-items-center">

                <counter v-if="value.active == 1" :alarm="foo(value.id)" :cont="value.kks[0].contador" :kks="incEnde" :arr="arrVa" :key="componentKey" @send="check" />

                <!-- Count Time -->
              </div>
              <!-- /.count -->
            </header>
          </div>
          <!-- /.col-12 -->
        </div>
        <!-- /.row -->
        <!-- AQUI -->

        <div class="row fluid-card">
          <div class="col-6" v-for="content in value.kks" :key="content.value">
            <div class="card">
              <top-detail :alarm="content" @loops="onClickChild" @kks="teste"/>
              <status :alarm="content.status_two" @loops="onClickChild"/>
            </div>
          </div>
        </div>
      </div>
      <!-- /.container -->
    </section>
    <!-- /.detail -->
  </div>
</template>

<script>
import TopDetail from '~/components/TopDetail.vue';
import Status from '~/components/Status.vue';
import Counter from '~/components/Counter.vue';
import global_mixin from '@/mixins/mixins.js';

import { mapActions } from 'vuex';

export default {
  mixins: [global_mixin],
  props: ['alarm', 'unity'],

  components: {
    TopDetail,
    Status,
    Counter
  },
  data() {
    return {
      id: this.$route.params.id,
      arrSize: [],
      arrVa: [],
      arrAleat: [],
      incEnde: "",
      stop: true,
      stopInterval: "",
      stopPush: "",
      cease: true,
      receive: "",
      componentKey: 0,
      // cond: [],
    }
  },

  methods: {
    ...mapActions(['loadData', 'idCheck', 'logOff']),

    teste (value) {
      this.incEnde = value;
    },

    check (value) {
      this.receive = value;
    },

    onClickChild (value) {
      this.stop = value;
    },

    clickFalse() {
      this.cease = false;
    },

    foo(id) {
      var result = { countTimeDiff: 0 }

      if (this.id && this.lists && this.lists.length > 0) {
        var arrays = [];
        for (const key in this.lists) {
          arrays.push(Object.assign({}, this.lists[key]));
        }

        result = arrays.filter(i => i.id === id);
        result = result[0].kks;
        const result2 = result.slice();
        result = result2.sort((a, b) => a.countTimeDiff - b.countTimeDiff);
        result = result.filter(
          (item, index, array) => item.countTimeDiff === array[0].countTimeDiff
        );
        result = result[0];
      }

      return result;
    },
    receiveInclude(value) {
      if (this.receive.includes(value)) {
        return;
      }
      if (this.arrAleat.length === this.receive.length) {
          return;
      }
      this.arrAleat.push('5');
      this.componentKey += 1;
    },

    handleAlarm(alarm){
      if (alarm.active === 1) {
        if (this.cardDetail[0].active === 0) {
            this.$router.push({ name: 'detail-id', params: { id: alarm.id } });
            clearInterval(this.stopInterval);
        }
        alarm.kks.forEach(k => {
            this.receiveInclude(k.value);
        });
      }else if (this.currentRouteName === 'detail-id') {
          this.arrSize.push("5");
      }
    }
  },

  computed: {
    cardDetail() {
      return this.lists.filter(i => i.id === this.id);
    },

    lists() {
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
        this.createToast('b-toaster-bottom-right', `Logoff`, this.session.logoff);
      }

    this.stopInterval = setInterval(() => {
        if (!this.$cookies.get('unit') || this.currentRouteName !== 'detail-id') {
            clearInterval(this.stopInterval);
        }
        if (!this.stop) {
            clearInterval(this.stopInterval);
            return;
        }
        this.loadData(this.unitId || '');
        this.arrSize.splice(0);

        try {
            this.lists.forEach(alarm => {
                handleAlarm(alarm);
            });
            if (this.currentRouteName !== 'detail-id') {
                this.stop = false ;
            }else if(this.arrSize.length === this.lists.length) {
                this.$router.push('/activealarm');
            }
        }catch (e) {
            this.$bvToast.toast(this.lists, {
            title: `Erro`,
            toaster: 'b-toaster-bottom-right',
            solid: true,
            message: e
            });
        }
      }, 5000);
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.detail-counter {
  font-weight: bold;
}

.fluid-card {
  width: 70%;
  margin: 0 auto;
}

.detail-page {
  &-sidebar {
    position: fixed;
    left: 0;
    padding: 10px 25px;
    height: 100%;
    background-color: #E4E4E4;
    padding-top: 30px;

    li {
      list-style: none;
    }

    &-link {
      padding: $padding;
      background-color: #E4E4E4;
      color: #666666;
      border-radius: $border-radius;
      transition: $transition;

      // &:hover {
      //   background-color: $red;
      // }
    }
  }

  &-name {
    color: #02592E;
    font-weight: 700;
  }

  &-count {
    padding: 10px 470px;
    // border-radius: $border-radius;

    h1 {
      font-size: 4rem;
      margin-bottom: 0;
    }

    p {
      margin-bottom: 0;
    }
  }
}
</style>
