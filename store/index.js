import moment from 'moment'
export const state = () => ({
  all: []
})

export const mutations = {
  setAll(state, all) {
    state.all = all
  }
}

export const actions = {
  async loadData(context) {
    let {
      data: { all }
    } = await this.$axios.get(
      'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarmes-ativos'
    )
    context.commit('setAll', all)
  },

  async counter(alarm) {
    const dateApi = alarm['alarm'].date
    const typeData = alarm['alarm'].type
    const dateNew = new Date()
    const moDataApi = moment(dateApi)

    let dateCurrent = moment(dateNew)
    let ms = moDataApi.diff(dateCurrent)
    let d = moment.duration(ms)

    if (ms > 0) {
      moment.locale('pt-BR')

      if (typeData == 'PLS') {
        moDataApi.add(7, 'minutes')
      } else {
        moDataApi.add(5, 'minutes')
      }

      setInterval(() => {
        let dateCurrent = moment(new Date())
        let ms = moDataApi.diff(dateCurrent)
        let d = moment.duration(ms)

        alarm['alarm'].countTime =
          d
            .get('minutes')
            .toString()
            .padStart(2, '0') +
          ':' +
          d
            .get('seconds')
            .toString()
            .padStart(2, '0')
      }, 1000)
    } else {
      alarm['alarm'].countTime = 'Expirou'
    }
  }
}
