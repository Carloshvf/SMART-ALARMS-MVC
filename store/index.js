export const state = () => ({
  all: [
    {
      id: 11,
      kks: [
        {
          value: '21HAD50FL901XJ60P',
          name: 'PLS TG 21',
          cause: 'Nível PLS 21',
          status: [
            {
              isHidden: false,
              kks: 'kks equipamento',
              cause: 'causa do equipamento',
              text: 'numero equipamento'
            },
            {
              isHidden: true,
              kks: 'kks equipamento 2'
              // cause: 'causa do equipamento',
              // text: 'numero equipamento'
            }
          ],
          recom: [{ item: 'Recomendação 1' }, { item: 'Recomendação 2' }]
        },
        {
          value: '11HAD50FL901XJ60P',
          name: 'PLS TG 11',
          cause: 'Nível PLS 11',
          recom: [{ item: 'Recomendação 3' }, { item: 'Recomendação 4' }]
        }
      ]
    },
    {
      id: 22,
      kks: [
        {
          value: '22HAD50FL901XJ60P',
          name: 'PLS TG 22',
          cause: 'Nível PLS 22'
        },
        {
          value: '22HAD50FL901XJ60P',
          name: 'PLS TG 23',
          cause: 'Nível PLS 23'
        }
      ]
    }
  ]
})
