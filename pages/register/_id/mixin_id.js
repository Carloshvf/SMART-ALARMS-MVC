export default {
    data() {
        return {
          types: 'medida',
          forOnce: true,
          backendCheck: "",
          backendAlarm: "",
          ok: false,
          stop: true,
          load: false,
          loadEdit: false,
          disabling: false,
          operators: "E",
          activation2: "1",
          activation3: "",
          unit2: "",
          unit3: "",
          recommendation: "",
          infoAlarme: "",
          infoMedida: "",
          infoSuper: "",
          name: "",
          priority: "1",
          editC1: "",
          editC2: "",
          editC3: "",
          editC4: "",
          editC5: "",
          editS1: "",
          editS2: "",
          editS3: "",
          editS4: "",
          editS5: "",
          editS6: "",
          editS7: "",
          modalEdit: null,
          endAtivacao: [],
          endBack: [],
          plusAlarme: [],
          separador: [],
          recom: [],
          end: [],
          measures: [],
          allData: [],
          editData: [],
          modal_update: 'modal-update',
          labelEventRegistration: 'Cadastro de evento',
          labelLocal: 'LOCAL',
          labelComplement: 'COMPLEMENTO',
          labelMeasurementAddress: 'ENDEREÇO DE MEDIDA',
          labelSubArea: 'SUBAREA',
          labelUnit: 'UNIDADE',
          labelTypeofShutdown: 'TIPO DE DESLIGAMENTO',
          labelCause: 'CAUSA',
          labelSupervisoryAddress: 'ENDEREÇO NO SUPERVISÓRIO',
          labelLogic: 'LOGICO',
          labelValue: 'VALOR',
          labelOperator: 'OPERADORES',
          labelChannelEditing: 'Edição de Canais',
          labelListAlarms: 'LISTA DE ALARMES',
          labelCancel: 'Cancelar',
          labelSave: 'Salvar',
          labelSaveEdition: 'Salvar edição',
          labelSaveNewAlarm: 'Salvar como alarme novo',
          labelCSavingAlarm: 'Salvando o alarme',
          labelPriorities: 'PRIORIDADE',
          labelName: 'NOME',
          labelStatus: 'status',
          labelType: 'TIPO',
          labelAddress: 'ENDEREÇO'
        };
      },
      computed: {
        session() {
          return this.$store.state.checkingSession;
        },
    
        local: {
          get () {
            return this.$store.state.edit.local;
          },
          set (value) {
            this.$store.commit('setLocal', value);
          }
        },
        complement: {
          get () {
            return this.$store.state.edit.complemento;
          },
          set (value) {
            this.$store.commit('setComplemento', value);
          }
        },
        offType: {
          get () {
            return this.$store.state.edit.tipo_desligamento;
          },
          set (value) {
            this.$store.commit('setOffType', value);
          }
        },
        reason: {
          get () {
            return this.$store.state.edit.causa;
          },
          set (value) {
            this.$store.commit('setCausa', value);
          }
        },
        textMedida: {
          get () {
            return this.$store.state.edit.endereco_medida;
          },
          set (value) {
            this.$store.commit('setTextMedida', value);
          }
        },
        unit1: {
          get () {
            return this.$store.state.edit.unidade;
          },
          set (value) {
            this.$store.commit('setUnit1', value);
          }
        },
        textAlarme: {
          get () {
            if (!this.$store.state.edit.ends_alarme[0]) {
              return this.$store.state.edit.canais[0].end_alarme
            }
            return this.$store.state.edit.ends_alarme[0].end_alarme;
          },
          set (value) {
            this.$store.commit('setTextAlarme', value);
          }
        },
        activation1: {
          get () {
            if (!this.$store.state.edit.ends_alarme[0]){
              return '1';
            }
            return this.$store.state.edit.ends_alarme[0].ativacao;
          },
          set (value) {
            this.$store.commit('setActivation1', value);
          }
        },
        operaLogic: {
          get () {
            if (!this.$store.state.edit.ends_alarme[0]) {
              return "";
            }
            return this.$store.state.edit.ends_alarme[0].operador;
          },
          set (value) {
            this.$store.commit('setOperaLogic', value);
          }
        },
        logic: {
          get () {
            return this.$store.state.edit.logica;
          },
          set (value) {
            this.$store.commit('setLogica', value);
          }
        },
        canal: {
          get () {
            return this.$store.state.edit.canais;
          },
          set (value) {
            this.$store.commit('setCanais', value);
          }
        },
        status: {
          get () {
            return this.$store.state.edit.status_medidas;
          },
          set (value) {
            this.$store.commit('setStatus', value);
          }
        },
        recomendacao: {
          get () {
            return this.$store.state.edit.recomendacoes;
          },
          set (value) {
            this.$store.commit('setRecom', value);
          }
        },
        subArea1: {
          get () {
            return this.$store.state.edit.sub_area;
          },
          set (value) {
            this.$store.commit('setSubArea1', value);
          }
        },
        subArea2: {
          get () {
            if (!this.$store.state.edit.ends_alarme[0]) {
              return this.$store.state.edit.sub_area;
            }
            return this.$store.state.edit.ends_alarme[0].sub_area;
          },
          set (value) {
            this.$store.commit('setSubArea2', value);
          }
        },
        subArea3: {
          get () {
            if (!this.$store.state.edit.canais[0]?.sub_area) {
              return this.$store.state.edit.sub_area;
            }
            return this.$store.state.edit.canais[0].sub_area;
          },
          set (value) {
            this.$store.commit('setSubArea3', value);
          }
        },
        subArea4: {
          get () {
            if (this.$store.state.edit.status_medidas === '') {
              return null;
            } else if (this.$store.state.edit.sub_area === 'ELIPSE') {
              return this.$store.state.edit.sub_area;
            }
            return this.$store.state.edit.status_medidas[0].sub_area;
          },
          set (value) {
            this.$store.commit('setSubArea4', value);
          }
        },
        errUpdate() {
          return this.$store.state.update;
        },
        unitId() {
          return this.$cookies.get('unit') || '';
        },
        selectFilters() {
          return this.$store.state.edit;
        }
      },
    
}