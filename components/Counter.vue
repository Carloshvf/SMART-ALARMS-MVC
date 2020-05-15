<template>
  <div>
    <h1>{{ countTime }}</h1>
  </div>
</template>

<script>
import main from '~/plugins/main'
import { mapActions, mapState } from 'vuex'

export default {
  props: ['alarm'],

  data() {
    return {
      countTime: ''
    }
  },
  methods: {
    ...mapActions(['loadData']),

    loadCount() {
      const dateApi = this.alarm.date
      const typeData = this.alarm.type
      const dateNew = new Date()
      const moDataApi = this.$moment(dateApi)

      let dateCurrent = this.$moment(dateNew)
      let ms = moDataApi
      this.alarm['countTimeDiff'] = ms
      let d = this.$moment.duration(ms)
      if (ms > 0) {
        this.$moment.locale('pt-BR')

        if (typeData == 'PLS') {
          moDataApi.add(7, 'minutes')
        } else if(typeData == 'PLST'){
          moDataApi.add(5, 'minutes')
        }

        setInterval(() => {
          let dateCurrent = this.$moment(new Date())
          let ms = moDataApi.diff(dateCurrent)
          this.alarm['countTimeDiff'] = ms

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
            this.countTime = 'Expirou'
          }
        }, 1000)
      } else {
        this.countTime = 'Expirou'
      }
    }
  },

  created() {
    this.countTime = ''
    this.loadCount()
    // console.log(this.countTime)
  }
}
</script>

<style lang="scss" scoped></style>
