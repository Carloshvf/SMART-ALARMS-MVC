<template>
  <div>
    <h1 class="counter-color">{{ countTime }}</h1>
  </div>
</template>

<script>
import main from '~/plugins/main.server'
import { mapActions, mapState } from 'vuex'

export default {
  props: ['alarm', 'kks', 'arr'],

  data() {
    return {
      countTime: '',
      stopInterval: "",
      
    }
  },
  methods: {
    ...mapActions(['loadData']),

    loadCount() {
      if (!this.arr.includes(this.kks)) {
        this.arr.push(this.kks)
        this.$emit('send', this.arr)
      }
      const dateApi = this.alarm.date
      var typeData = this.alarm.type
      const dateNew = new Date()
      const moDataApi = this.$moment(dateApi)

      let dateCurrent = this.$moment(dateNew)
      var ms = moDataApi
      this.alarm['countTimeDiff'] = ms
      let d = this.$moment.duration(ms)
      if (ms > 0) {
        this.$moment.locale('pt-BR')

        if (typeData == 'PLS') {
          moDataApi.add(7, 'minutes')
        } else if(typeData == 'PLST'){
          moDataApi.add(5, 'minutes')
        }

        this.stopInterval = setInterval(() => {
          
          var moDataApi2 = this.$moment(this.alarm.date);
          if (typeData == 'PLS') {
            moDataApi2.add(7, 'minutes')
          } else if(typeData == 'PLST'){
            moDataApi2.add(5, 'minutes')
          }

          
          let dateCurrent = this.$moment(new Date());
          ms = moDataApi2.diff(dateCurrent);
          this.alarm['countTimeDiff'] = ms;

          if (ms > 0) {
            let d = this.$moment.duration(ms)

            this.countTime =
              d
                .get('minutes')
                .toString()
                .padStart(2, '0') +
              ':' +
              d
                .get('seconds')
                .toString()
                .padStart(2, '0')
          } else {
            this.countTime = '00:00'
          }
        }, 1000)
      } else {
        this.countTime = '00:00'
      }
    }
  },

  created() {
    this.countTime = ''
    this.loadCount() 
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.counter-color {
  color: $dark-red;
}

</style>
