<template>
  <div>
    <h1 class="counter-color">{{ countTime }}</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['alarm', 'kks', 'arr', 'cont'],

  data() {
    return {
      countTime: '',
      stopInterval: "",
    }
  },

  computed: {

  },

  methods: {
    ...mapActions(['loadData']),

    newCount() {
      if (!this.arr.includes(this.kks)) {
        this.arr.push(this.kks);
        this.$emit('send', this.arr);
      }
      const dateApi = this.alarm.date;
      const moDataApi = this.$moment(dateApi);

      var ms = moDataApi;
      this.alarm['countTimeDiff'] = ms;

      //  Verifica se ms é maior que zero
      function verifyCont(cont) {
      if (cont !== '00:00' && cont !== '') {
        return moDataApi2.add(parseInt(this.cont.split(':')[0]), 'minutes');
      } else {
        return '';
      }
    }
      if (ms > 0) {
        this.$moment.locale('pt-BR');

        verifyCont(this.cont);

        this.stopInterval = setInterval(() => {
          var moDataApi2 = this.$moment(this.alarm.date);
          verifyCont(this.cont);

          const dateCurrent = this.$moment(new Date());
          ms = moDataApi2.diff(dateCurrent);
          this.alarm['countTimeDiff'] = ms;

          if (ms > 0) {
            const dTime = this.$moment.duration(ms);

            this.countTime =
              dTime
                .get('minutes')
                .toString()
                .padStart(2, '0') +
              ':' +
              dTime
                .get('seconds')
                .toString()
                .padStart(2, '0')
          } else {
            this.countTime = '';
          }
        }, 1000)
      } else {
        this.countTime = '';
      }
    },

    loadCount() {
      if (!this.arr.includes(this.kks)) {
        this.arr.push(this.kks);
        this.$emit('send', this.arr);
      }
      const dateApi = this.alarm.date;
      var typeData = this.alarm.type;
      const moDataApi = this.$moment(dateApi);

      var ms = moDataApi;
      this.alarm['countTimeDiff'] = ms;
      if (ms > 0) {
        this.$moment.locale('pt-BR');

        if (typeData === 'PLS') {
          moDataApi.add(7, 'minutes');
        } else if(typeData === 'PLST'){
          moDataApi.add(5, 'minutes');
        }

        this.stopInterval = setInterval(() => {
          var moDataApi2 = this.$moment(this.alarm.date);
          if (typeData === 'PLS') {
            moDataApi2.add(7, 'minutes');
          } else if(typeData === 'PLST'){
            moDataApi2.add(5, 'minutes');
          }

          const dateCurrent = this.$moment(new Date());
          ms = moDataApi2.diff(dateCurrent);
          this.alarm['countTimeDiff'] = ms;

          if (ms > 0) {
            const dTime = this.$moment.duration(ms);

            this.countTime =
              dTime
                .get('minutes')
                .toString()
                .padStart(2, '0') +
              ':' +
              dTime
                .get('seconds')
                .toString()
                .padStart(2, '0')
          } else {
            this.countTime = '00:00';
          }
        }, 1000);
      } else {
        this.countTime = '00:00';
      }
    }
  },

  created() {
    this.countTime = '';
    this.newCount();
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.counter-color {
  color: $dark-red;
}

</style>
