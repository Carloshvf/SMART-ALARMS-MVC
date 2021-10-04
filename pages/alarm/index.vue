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

export default {
  components: {
    Counter,
    TopDetail,
    CardDetail,
    Status,
    Recommendation
  },

  data() {
    return {
      // lists: this.$store.state.all
      arrSize: [],
      arrVa: [],
      arrAleat: [],
      countTime: '',
      stop: true,
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
      var result = { countTimeDiff: 0 }

      if (id && this.lists && this.lists.length > 0) {
        var arrays = this.lists;

        result = arrays.filter(i => i.id === id);
        result = result[0].kks;
        let result2 = result.slice();
        // console.log(result2)
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

        let filterAlarmeAtivos = alarmesAtivos.forEach(alarme => {
          return Boolean(alarme.kks.filter( o => o.type === 'TRIP').length > 0 );
        });
        if (filterAlarmeAtivos) {
          houveUmaTrip = true;
          result.date =  dateTrip;

          this.lists.forEach(alarme => {
            if (Boolean(alarme.active === 1 && alarme.id === result.name)) {
              alarme.kks.forEach(kks => {
                kks.date = dateTrip;
              })
            }
          });
          
          if(!this.tripped) {
            this.tripped=true;
            this.$store.state.all = this.lists;
          }
        }
        // Código antigo
        // for (var alarme in alarmesAtivos) {
        //   if(alarmesAtivos[alarme].kks.filter( o => o.type === 'TRIP').length > 0 ) {
        //       houveUmaTrip = true;
        //       result.date =  dateTrip;
        //       for (var alarme in this.lists) {
        //           var element = this.lists[alarme];
        //           if(element.active === 1 && element.id === result.name) {
        //             for (var k in element.kks) {
        //                 var kk = element.kks[k];
        //                 if(kk.type !== 'TRIP') {
        //                   kk.date = dateTrip;
        //                 }
        //             }
        //           }
        //       }
        //       if(!this.tripped) {
        //         //this.$forceUpdate();
        //         this.tripped=true;
        //         this.$store.state.all = this.lists;
        //       }
        //       break;
        //   }
        // }

          if(!houveUmaTrip) {
            alarmesAtivos.forEacc(alarmeAtivo => {
              const kks = alarmeAtivo.kks.filter(o => o.type === result.type && !result.marcado);
              kks.forEach(k => {
                const element = k;
                element["marcado"] = true;
                arraysTodosOsKKsAtivos.push(element);
              });
            });

            // for (const key in alarmesAtivos) {
            //     const kks = alarmesAtivos[key].kks.filter( o => o.type === result.type && !result.marcado);
            //     for (const k in kks) {
            //       const element = kks[k];
            //       element["marcado"] = true;
            //       arraysTodosOsKKsAtivos.push(element);
            //     }
            // }
            function verificKksAtivos(arraysTodosOsKKsAtivos, arraysTodosOsKKsAtivos) {
              return Boolean(arraysTodosOsKKsAtivos && arraysTodosOsKKsAtivos.length > 1)
            }
            if(verificKksAtivos(arraysTodosOsKKsAtivos, arraysTodosOsKKsAtivos)) {
              var todasAsDatesdosKKs = arraysTodosOsKKsAtivos.map(o => this.$moment(o.date).toDate());
              var menorData = Math.min(...todasAsDatesdosKKs);
              result.date = this.$moment(menorData).format("MM/DD/YYYY HH:mm:ss");
              this.$store.state.all = this.lists;
            }
          }
        }
      }
      // console.log('result.date:');
      // console.log(result.date);
      return result;
    },
  },

  computed: {
    lists() {
      //const state = [{"id": "UG 11", "active": 0, "kks": [{"value": "11teste20logica", "valor_medida": "", "date": "12/29/2020 18:40:00", "name": "UG 11", "type": "PLS", "complemento": "", "contador": "08:00", "cause": "teste obrigatoriedade medida", "status_one": [], "status_two": [], "recom": [], "channels": []}]},  {"id": "UG 21", "active": 1, "kks": [{"value": "11teste20logica2", "valor_medida": "", "date": "12/29/2020 19:11:00", "name": "UG 21", "type": "PLS", "complemento": "", "contador": "08:00", "cause": "teste obrigatoriedade medida 2", "status_one": [], "status_two": [], "recom": [], "channels": []}]}, {"id": "UG 21", "active": 1, "kks": [{"value": "11teste20logica3", "valor_medida": "", "date": "12/29/2020 19:11:01", "name": "UG 21", "type": "PLS", "complemento": "", "contador": "05:00", "cause": "teste obrigatoriedade medida 2", "status_one": [], "status_two": [], "recom": [], "channels": []}]}, {"id": "UG 31", "active": 0, "kks": []}, {"id": "UG 12", "active": 0, "kks": []}, {"id": "UG 22", "active": 0, "kks": []}, {"id": "UG 32", "active": 0, "kks": []}, {"id": "UG 18", "active": 0, "kks": []}, {"id": "UG 28", "active": 0, "kks": []}, {"id": "UG 38", "active": 0, "kks": []}, {"id": "CAV1", "active": 0, "kks": []}, {"id": "CAV2", "active": 0, "kks": []}, {"id": "CAV3", "active": 0, "kks": []}]

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
        // console.log(this.session)
        this.$bvToast.toast(this.session.logoff, {
          title: `Logoff`,
          toaster: 'b-toaster-bottom-right',
          solid: true
        })
        // this.logOff({logout: "tes"})
        // this.$cookies.removeAll();
        // this.$router.push('/')
      }
      this.stopInterval = setInterval(() => {
        if (this.$cookies.get('unit') === '' || this.$cookies.get('unit') === undefined || this.currentRouteName !== 'alarm') {
          clearInterval(this.stopInterval);
        }
        if (this.stop === true) {
          this.loadData(this.$cookies.get('unit') || '');
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
              this.$router.push('/activealarm');
            }

            if (this.currentRouteName !== 'alarm') {
              this.stop = false;
            }
          } else {
              this.$bvToast.toast(this.lists, {
                title: `Erro`,
                toaster: 'b-toaster-bottom-right',
                solid: true
              })
              // clearInterval(this.stopInterval)
          }
        }  else {
          clearInterval(this.stopInterval);
        }
      }, 3000);
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
