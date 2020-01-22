import axios from 'axios'

export const state = () => ({
  all: []
  // all: [
  //   {
  //     id: 11,
  //     kks: [
  //       {
  //         value: '21HAD50FL901XJ60P',
  //         name: 'PLS TG 21',
  //         cause: 'Nível PLS 21',
  //         status: [
  //           {
  //             isHidden: false,
  //             kks: 'kks equipamento',
  //             cause: 'causa do equipamento',
  //             text: 'numero equipamento'
  //           },
  //           {
  //             isHidden: true,
  //             kks: 'kks equipamento 2'
  //           }
  //         ],
  //         recom: [{ item: 'Recomendação 1' }, { item: 'Recomendação 2' }]
  //       },
  //       {
  //         value: '11HAD50FL901XJ60P',
  //         name: 'PLS TG 11',
  //         cause: 'Nível PLS 11',
  //         status: [
  //           {
  //             isHidden: false,
  //             kks: 'kks equipamento',
  //             cause: 'causa do equipamento',
  //             text: 'numero equipamento'
  //           },
  //           {
  //             isHidden: true,
  //             kks: 'kks equipamento 2'
  //           }
  //         ],
  //         recom: [{ item: 'Recomendação 3' }, { item: 'Recomendação 4' }]
  //       }
  //     ]
  //   },
  //   {
  //     id: 22,
  //     kks: [
  //       {
  //         value: '22HAD50FL901XJ60P',
  //         name: 'PLS TG 22',
  //         cause: 'Nível PLS 22',
  //         status: [
  //           {
  //             isHidden: false,
  //             kks: 'kks equipamento',
  //             cause: 'causa do equipamento',
  //             text: 'numero equipamento'
  //           },
  //           {
  //             isHidden: true,
  //             kks: 'kks equipamento 2'
  //           }
  //         ],
  //         recom: [{ item: 'Recomendação 5' }, { item: 'Recomendação 6' }]
  //       },
  //       {
  //         value: '22HAD50FL901XJ60P',
  //         name: 'PLS TG 23',
  //         cause: 'Nível PLS 23',
  //         status: [
  //           {
  //             isHidden: false,
  //             kks: 'kks equipamento',
  //             cause: 'causa do equipamento',
  //             text: 'numero equipamento'
  //           },
  //           {
  //             isHidden: true,
  //             kks: 'kks equipamento 2'
  //           }
  //         ],
  //         recom: [{ item: 'Recomendação 7' }, { item: 'Recomendação 8' }]
  //       }
  //     ]
  //   }
  // ]
})

export const mutations = {
  setAll(state, all) {
    state.all = all
  }
}

export const actions = {
  async loadAlarms(context) {
    let {
      data: { all }
    } = await this.$axios.get(
      'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000/alarmes-ativos'
    )
    context.commit('setAll', all)
  }
}
