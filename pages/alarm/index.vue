<template>
  <div class="py-5 mt-5">
    <div
      class="container-fluid"
      v-for="list in lists"
      :key="list.name"
    >
      <div class="card card-avalanche mb-4" v-for="card in list.kks" :key="card.id">
        <div class="card-kks" v-if="list.active == 1">
            <div class="row">
              <div class="col-2 mt-3">
                <h2 class="mb-0 ml-2 text-uppercase"> {{ card.name }} {{ card.complemento }}</h2>
              </div>
              <div class="col-2">
                <h3 class="mb-0 mt-3 type-background text-uppercase">{{ card.type }} {{ card.name }} </h3>
              </div>
              <div class="col-4 d-flex justify-content-center">
                <h1>{{ countTime }}</h1>
                <counter :alarm="foo(list.id)" :cont="card.contador" :kks="card.value" :arr="arrVa" :key="componentKey" @send="check" />
              </div>
              <div class="mt-2 col-4 d-flex justify-content-end">
                <nuxt-link
                  :to="{ name: 'detail-id', params: { id: list.id } }"
                  class="btn btn-primary pt-2"
                  >Mais detalhes
                </nuxt-link>
              </div>
            </div>
            <hr />
        <!-- /.col-12 -->
          <div class="row">
            <div class="col-sm-5">
              <card-detail :unity="list" :alarm="card" @loops="transform"/>
              <status :alarm="card.status_one" />
            </div>
            <!-- /.col-sm-6 -->
            <div class="col-sm-7">
              <recommendation :alarm="card.recom" />
            </div>
            <!-- /.col-sm-6 -->
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import Counter from '~/components/Counter.vue';
import TopDetail from '~/components/TopDetail.vue';
import CardDetail from '~/components/CardDetail.vue';
import Status from '~/components/Status.vue';
import Recommendation from '~/components/Recommendation.vue';
import { mapActions } from 'vuex';
import global_mixin from '@/mixins/mixins.js';

export default {
  mixins: [global_mixin],
  components: {
    Counter,
    TopDetail,
    CardDetail,
    Status,
    Recommendation
  },

  data() {
    return {
      arrSize: [],
      arrVa: [],
      arrAleat: [],
      countTime: '',
      stop: true,
      contador: 0,
      stopInterval: "",
      receive: "",
      componentKey: 0,
      tripped: false
    }
  },

   methods: {
    ...mapActions(['loadData', 'idCheck', 'logOff']),

    check (value) {
      this.receive = value;
    },

    transform (value) {
      this.stop = value;
    },
    foo(id) {
      this.$moment.locale('pt-BR');
      var result = { countTimeDiff: 0 };

      if (!id || !this.lists?.length) {
        return result;
      }

      var arrays = this.lists;

      result = arrays.filter(i => i.id === id);
      result = result[0].kks;
      let result2 = result.slice();
      result = result2.sort((a, b) => a.countTimeDiff - b.countTimeDiff);
      result = result.filter(
        (item, index, array) => item.countTimeDiff === array[0].countTimeDiff
      );
      result = result[0];

      var alarmesAtivos =  arrays.filter(o => o.active === 1);
      if(alarmesAtivos && alarmesAtivos.length > 0) {
        var arraysTodosOsKKsAtivos = new Array();

      var houveUmaTrip = false;
      var dateTrip =  new Date();
      dateTrip.setDate(dateTrip.getDate() - 1);
      dateTrip = this.$moment(dateTrip).format("MM/DD/YYYY HH:mm:ss");     

      for (var alarme in alarmesAtivos) {
        if(alarmesAtivos[alarme].kks.filter( o => o.type === 'TRIP').length > 0 ) {
            houveUmaTrip = true;
            result.date =  dateTrip;
            for (var alarme in this.lists) {
                var element = this.lists[alarme];
                if(element.active === 1 && element.id === result.name) {
                  for (var k in element.kks) {
                      var kk = element.kks[k];
                      if(kk.type !== 'TRIP') {
                        kk.date = dateTrip;
                      }
                  }
                }
            }
            if(!this.tripped) {
              this.tripped=true;
              this.$store.state.all = this.lists;
            }
            break;
        }
      }

        if(!houveUmaTrip) {
          for (const key in alarmesAtivos) {
              const kks = alarmesAtivos[key].kks.filter( o => o.type === result.type && !result.marcado);
              for (const k in kks) {
                const element = kks[k];
                element["marcado"] = true;
                arraysTodosOsKKsAtivos.push(element);
              }
          }

          if(arraysTodosOsKKsAtivos && arraysTodosOsKKsAtivos.length > 1) {
            var todasAsDatesdosKKs = arraysTodosOsKKsAtivos.map(o => this.$moment(o.date).toDate());
            var menorData = Math.min(...todasAsDatesdosKKs);
            result.date = this.$moment(menorData).format("MM/DD/YYYY HH:mm:ss");
            this.$store.state.all = this.lists;
          }
        }
      }
      return result;
    },
  },

  computed: {
    lists() {
      return this.$store.state.all;
    },

    session() {
      return this.$store.state.checkingSession;
    },

    unitId() {
      return this.$cookies.get('unit') || '';
    },

    currentRouteName() {
        return this.$route.name;
    }
  },

  async created() {
      // Logoff automatico
      await this.idCheck();
      if (this.session.value === false) {
        this.createToast('b-toaster-bottom-right', `Logoff`, this.session.logoff, 'danger');
      }

      this.stopInterval = setInterval(async () => {
        if (this.$cookies.get('unit') === '' || this.$cookies.get('unit') === undefined || this.currentRouteName !== 'alarm') {
          clearInterval(this.stopInterval);
        }
        if (this.stop === true) {
          this.contador = this.contador + 1;
          // console.log(this.contador);
          await this.loadData({unit: this.unitId, cont: this.contador});
          this.arrSize.splice(0);

          if (this.lists instanceof Array) {
            for (let index = 0; index < this.lists.length; index++) {
              for (let ind = 0; ind < this.lists[index].kks.length; index++) {
                if (this.lists[index].active == 1 && !this.receive.includes(this.lists[index].kks[ind].value) && this.arrAleat.length != this.receive.length) {
                  this.arrAleat.push('5');
                  this.componentKey += 1;
                }
            }
            if (this.lists[index].active == 0 && this.currentRouteName == 'alarm') {
                this.arrSize.push("5");
              }
            }
            if (this.arrSize.length === this.lists.length && this.currentRouteName === 'alarm') {
              this.contador = 0;
              this.$router.push('/activealarm');
            }
            if (this.currentRouteName !== 'alarm') {
              this.contador = 0;
              this.stop = false;
            }
          } else {
              this.createToast('b-toaster-bottom-right', `Erro`, this.lists, 'danger');
          }
        }  else {
          this.contador = 0;
          clearInterval(this.stopInterval);
        }
      }, 5000);
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.card-avalanche {
  width: 90%;
  margin: 0 auto;
}

.shadow {
  box-shadow: none;
}
</style>
