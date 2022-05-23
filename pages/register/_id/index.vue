<template>
  <div class="container">
    <div class="form-row align-items-end mt-4 mb-2">
      <div class="col">
        <h1 class="mt-5 titles">{{ labelEventRegistration }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col card">
    <div class="form-row ">
      <div class="col-2">
        <label class="mt-4 sizing">{{ labelLocal }}</label>
        <select class="form-control" v-model="local">
          <option v-for="item in selectFilters.local_banco" :key="item.id">
            {{item}}
          </option>
        </select>
      </div>
      <div class="col-5" v-if="local == 'CAV1' || local == 'CAV2' || local == 'CAV3'">
        <label class="mt-4 sizing">{{ labelComplement }}</label>
        <input type="text" class="form-control" placeholder="Escreva aqui..." v-model="complement" >
      </div>
      <div class="col-3">
            <label class="mt-4 sizing">{{ labelMeasurementAddress }}</label>
            <input maxlength="50" minlength="3" type="text" style="text-transform: uppercase;" class="form-control" v-model="textMedida">
          </div>
          <div class="col-1">
            <label class="mt-4 sizing">{{ labelSubArea }}</label>
            <select class="form-control" v-model="subArea1">
              <option v-for="item in selectFilters.sub_area_banco" :key="item.id">
                {{item}}
              </option>
            </select>
          </div>
          <div class="col-1">
            <label class="mt-4 sizing">{{ labelUnit }}</label>
            <input maxlength="15" minlength="1" type="text" class="form-control" v-model="unit1" >
          </div>
    </div>

    <div class="form-row mt-4">
      <div class="col">
        <label class="mt-4 sizing">{{ labelTypeofShutdown }}</label>
        <select class="form-control" v-model="offType">
          <option v-for="item in selectFilters.tipo_desligamento_banco" :key="item.id">
            {{item}}
          </option>
        </select>
      </div>
      <div class="col-10">
        <label class="mt-4 sizing">{{ labelCause }}</label>
        <input type="text" class="form-control" placeholder="Escreva aqui..." v-model="reason" >
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm">
        <div class="form-row align-items-end">
          <!-- SUBAREA-LABEL -->
          <div class="col-1">
            <label class="sizing">{{ labelSubArea }}</label>
            <select class="form-control" v-model="subArea2">
              <option v-for="item in selectFilters.sub_area_banco" :key="item.id">
                {{item}}
              </option>
            </select>
          </div>
          <!--  -->
          <div class="col-3">
            <label class="sizing">{{ labelSupervisoryAddress }}</label>
            <input maxlength="50" minlength="3" type="text" style="text-transform: uppercase;" class="form-control" v-model="textAlarme">
          </div>
          <div class="col-1">
            <label class="sizing">{{ labelLogic }}</label>
            <select class="form-control" v-model="operaLogic">
              <option v-for="item in selectFilters.operadores" :key="item.id">
                {{item}}
              </option>
            </select>
          </div>
          <div class="col-1">
            <label class="sizing">{{ labelValue }}</label>
            <input maxlength="20" minlength="1" type="float" class="form-control" v-model="activation1">
          </div>
          <div>
            <button class="mr-2 btn btn-green rounded-circle" @click="sendActivation('b-toaster-bottom-right')">+</button>
          </div>
          <div class="col-1">
            <label class="sizing">{{ labelOperator }}</label>
            <select class="form-control" v-model="operators">
              <option>E</option>
              <option>OU</option>
              <option>(</option>
              <option>)</option>
            </select>
          </div>
          <div class="ml-2 mr-2">
            <button class="btn btn-green rounded-circle" @click="sendOperator()">+</button>
          </div>
        </div>
      </div>
    </div>
    <!-- CADASTRO DE ALARMES -->
    <div class="row">
      <div class="col-sm" >
        <div class="form-row mt-4">
          <div class="col">
            <label class="mini-title">{{ labelListAlarms }}</label>
            <textarea class="form-control push-area" v-model="pushed" disabled></textarea>
            <button class="btn btn-green btn-validar mt-4" @click="validate('b-toaster-bottom-right')">Validar</button>
            <button class="btn btn-clean mt-4 ml-3" @click="cleanArea()">Limpar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- LISTA DE ALARMES -->
    <div class="row">
      <div class="col-sm">
        <div class="form-row mt-5">
          <div class="col-3">
            <h4 class="titles">Canais</h4>
          </div>
        </div>

        <div class="form-row align-items-end mt-3">
          <div class="col-3">
            <label class="sizing">{{ labelSupervisoryAddress }}</label>
            <input maxlength="50" minlength="3" type="text" style="text-transform: uppercase;" class="form-control" v-model="infoAlarme">
          </div>
          <div class="col-1">
            <label class="sizing">{{ labelValue }}</label>
            <select class="form-control" v-model="activation2">
              <option>1</option>
              <option>0</option>
              <option></option>
            </select>
          </div>
          <div class="col-3">
            <label class="sizing">{{ labelMeasurementAddress }}</label>
            <input maxlength="50" minlength="3" type="text" style="text-transform: uppercase;" class="form-control" v-model="infoMedida" >
          </div>

          <div class="col-1">
            <label class="sizing">{{ labelUnit }}</label>
            <input maxlength="15" minlength="1" type="text" class="form-control" v-model="unit2">
          </div>
          <div class="col-2">
            <label class="sizing">{{ labelSubArea }}</label>
            <select class="form-control" v-model="subArea3">
              <option v-for="item in selectFilters.sub_area_banco" :key="item.id">
                {{item}}
              </option>
            </select>
          </div>
          <div class="ml-2">
            <button class="btn btn-green rounded-circle" @click="sendEnderecos()">+</button>
          </div>
            <div class="col-12 mt-4 scroll">
              <table class="table">
                <thead>
                  <tr class="address border-line">
                    <th scope="col">{{ labelAddress }}</th>
                    <th scope="col">{{ labelValue }}</th>
                    <th scope="col">{{ labelMeasurementAddress }}</th>
                    <th scope="col">{{ labelUnit }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in canal" :key="item.id">
                    <td class="border-line">{{ item.end_alarme }}</td>
                    <td class="border-line">{{ item.ativacao }}</td>
                    <td class="border-line"> {{ item.end_medida }}</td>
                    <td class="border-line">{{ item.unidade }}</td>
                    <td class="border-line">
                      <img class="editing" src="../../../static/img/editSelect.svg" alt="edit" @click="showModal(index.toString(), true)"/>
                    </td>
                    <td class="border-line">
                      <img class="deleting" src="../../../static/img/deleteSelect.svg" alt="del" @click="cleanCanais(index)"/>
                    </td>
                    <!-- MODAL EDITAR CANAIS -->
                    <b-modal size="lg" :id="index.toString()" v-if="modalEdit == true">
                      <template v-slot:modal-title>
                        <h1 class="modal-title">{{ labelChannelEditing }}</h1>
                      </template>
                      <template>
                        <div class="row">
                          <div class="col-5">
                            <label class="labels">{{ labelAddress }}</label>
                            <input class="form-control" style="text-transform: uppercase;" v-model="editC1">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-2">
                            <label class="labels mt-4">{{ labelValue }}</label>
                            <select class="form-control" v-model="editC2">
                              <option>1</option>
                              <option>0</option>
                              <option></option>
                            </select>
                          </div>
                          <div class="col-3">
                            <label class="labels mt-4">{{ labelMeasurementAddress }}</label>
                            <input class="form-control" style="text-transform: uppercase;" v-model="editC3">
                          </div>
                          <div class="col-2">
                            <label class="labels mt-4">{{ labelUnit }}</label>
                            <input class="form-control" v-model="editC4">
                          </div>
                          <div class="col-2">
                            <label class="labels mt-4">{{ labelSubArea }}</label>
                            <select class="form-control" v-model="editC5">
                              <option v-for="item in selectFilters.sub_area_banco" :key="item.id">
                                  {{ item }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </template>
                      <template v-slot:modal-footer>
                        <b-button class="btn-cancel" @click="cancelEdit(index.toString())">
                            {{ labelCancel }}
                        </b-button>
                        <b-button class="btn-enviar" @click="editingCanais(index.toString())">
                            {{ labelSave }}
                        </b-button>
                      </template>
                    </b-modal>
                  <!--  -->
                  </tr>
                </tbody>
              </table>
            </div>

        </div>
      </div>
    </div>
    <!-- CANAIS -->
    <div class="row">
      <div class="col-sm">
        <div class="form-row mt-5">
          <div class="col-10 mb-3">
            <h4 class="titles">Status e Medidas</h4>
          </div>
        </div>

          <div class="form-row">
            <div class="col-3">
              <label class="sizing">{{ labelType }}</label>
              <select class="form-control" v-model="types">
                <option>{{ labelMedida }}</option>
                <option>{{ labelStatus }}</option>
              </select>

            </div>
            <div class="col-5">
              <label class="sizing">{{ labelName }}</label>
              <input type="text" class="form-control" v-model="name">
            </div>
            <div class="col-3">
              <label class="sizing">{{ labelSupervisoryAddress }}</label>
              <input maxlength="50" minlength="3" type="text" style="text-transform: uppercase;" class="form-control" v-model="infoSuper">
            </div>
          </div>

        <div class="form-row align-items-end mt-4">
          <div class="col-1">
            <label class="sizing">{{ labelPriorities }}</label>
            <select class="form-control" v-model="priority">
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div class="col-1">
            <div v-if="types == 'medida'">
              <label class="sizing">{{ labelUnit }}</label>
              <input maxlength="15" minlength="1" type="text" class="form-control" v-model="unit3">
            </div>
            <div v-else-if="types == 'status'">
              <label class="sizing">{{ labelValue }}</label>
              <select class="form-control" v-model="activation3">
                <option>1</option>
                <option>0</option>
              </select>
            </div>
          </div>
          <div class="col-2">
            <label class="sizing">{{ labelSubArea }}</label>
            <select class="form-control" v-model="subArea4">
              <option v-for="item in selectFilters.sub_area_banco" :key="item.id">
                {{item}}
              </option>
            </select>
          </div>
          <div class="ml-2">
            <button class="btn btn-green rounded-circle" @click="sendMeasures()">+</button>
          </div>

          <div class="col-12 mt-3 scroll">
            <table class="table">
              <thead>
                <tr class="address border-line">
                  <th scope="col">{{ labelType }}</th>
                  <th scope="col">{{ labelName }}</th>
                  <th scope="col">{{ labelAddress }}</th>
                  <th scope="col">{{ labelPriorities }}</th>
                  <th scope="col">{{ labelUnit }}/{{ labelValue }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(value, index) in status" :key="value.id">
                  <td class="border-line">{{ value.tipo }}</td>
                  <td class="border-line">{{ value.nome }}</td>
                  <td class="border-line">{{ value.end_supervisorio }}</td>
                  <td class="border-line">{{ parseInt(value.prioridade) }}</td>
                  <td class="border-line" v-if="value.unidade != '' ">{{ value.unidade }}</td>
                  <td class="border-line" v-else-if="value.valor_operacao != '' ">{{ value.valor_operacao }}</td>
                  <td class="border-line">
                      <img class="editing" src="../../../static/img/editSelect.svg" alt="edit" @click="showModal(index.toString(), false)"/>
                  </td>
                  <td class="border-line">
                      <img class="deleting" src="../../../static/img/deleteSelect.svg" alt="del" @click="cleanStatus(index)"/>
                  </td>
                <!-- MODAL EDITAR STATUS -->
                  <b-modal size="lg" :id="index.toString()" v-if="modalEdit == false">
                    <template v-slot:modal-title>
                      <h1 class="modal-title">Edição de Status/Medidas</h1>
                    </template>
                    <template>
                      <div class="row">
                        <div class="col-2">
                          <label class="labels">{{ labelType }}</label>
                          <select class="form-control" v-model="editS1">
                            <option>{{ labelMedida }}</option>
                            <option>{{ labelStatus }}</option>
                          </select>
                        </div>
                        <div class="col-6">
                          <label class="labels">{{ labelName }}</label>
                          <input class="form-control" v-model="editS2">
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-3">
                          <label class="labels mt-4">{{ labelAddress }}</label>
                          <input class="form-control" style="text-transform: uppercase;" v-model="editS3">
                        </div>
                        <div class="col-2">
                          <label class="labels mt-4">{{ labelPriorities }}</label>
                          <select class="form-control" v-model="editS4">
                            <option>1</option>
                            <option>2</option>
                          </select>
                        </div>
                        <div class="col-2" v-if="value.unidade != '' ">
                          <label class="labels mt-4">{{ labelUnit }}</label>
                          <input class="form-control" v-model="editS5">
                        </div>
                        <div class="col-2" v-else-if="value.valor_operacao != '' ">
                          <label class="labels mt-4">{{ labelValue }}</label>
                          <select class="form-control" v-model="editS6">
                            <option>1</option>
                            <option>0</option>
                          </select>
                        </div>
                        <div class="col-3">
                          <label class="labels mt-4">{{ labelSubArea }}</label>
                          <select class="form-control" v-model="editS7">
                            <option v-for="item in selectFilters.sub_area_banco" :key="item.id">
                              {{item}}
                            </option>
                          </select>
                        </div>
                      </div>
                    </template>
                    <template v-slot:modal-footer>
                      <b-button class="btn-cancel" @click="cancelEdit(index.toString())">
                          {{ labelCancel }}
                      </b-button>
                      <b-button class="btn-enviar" @click="editingStatus(index.toString())">
                          {{ labelSave }}
                      </b-button>
                    </template>
                  </b-modal>
                <!--  -->
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>

  <!-- STATUS E MEDIDAS -->
  <div class="row">
    <div class="col-sm-6">
      <div class="form-row mt-5">
        <div class="col-5">
          <h4 class="titles">Recomendações</h4>
        </div>
      </div>
      <div class="form-row mt-3 justify">
        <div class="col-12">
          <textarea class="form-control area" placeholder="Escreva aqui..." rows="3" v-model="recommendation"></textarea>
        </div>
        <div class="mt-3 mb-3">
          <button class="btn btn-green rounded-circle" @click="sendRecommendation()">+</button>
        </div>
      </div>
    </div>

    <div class="col-sm-6 ">
        <div class="col-12 mt-5">
          <h5 class="titles">Lista de recomendações</h5>
          <ul class="scroll">
              <li v-for="(lista,index) in recomendacao" :key="lista.id">
                {{ lista.item }}
                <img class="deleting" src="../../../static/img/delete.svg" alt="del" @click="cleanRecom(index)"/>
              </li>
          </ul>
        </div>
      <div class="mt-5">
        <button class="btn btn-green btn-salvar" @click="validCheck('b-toaster-bottom-right')">{{ labelSave }}</button>
        <nuxt-link to="/registered" class="btn btn-cadastrados mr-3">{{ labelCancel }}</nuxt-link>
      </div>
    </div>
    <!-- RECOMENDAÇÕES -->
    <b-modal id="modal-update" hide-footer>
      <template v-slot:modal-title>
        {{ labelCSavingAlarm }}
      </template>
      <div>
        <p>Escolha como quer salvar o alarme.</p>
      </div>
      <b-button class="modal-buttons bg-dark-red mt-3" @click="saveData('b-toaster-bottom-right')" :disabled="disabling">
        <span class="spinner-border spinner-border-sm" role={{ labelStatus }} aria-hidden="true" v-if="load == true"></span>
        {{ labelSaveNewAlarm }}
      </b-button>
      <b-button class="modal-buttons btn-edit btn-green mt-3 mr-2" @click="updateCard('b-toaster-bottom-right')" :disabled="disabling">
        <span class="spinner-border spinner-border-sm" role={{ labelStatus }} aria-hidden="true" v-if="loadEdit == true"></span>
        {{ labelSaveEdition }}
      </b-button>
    </b-modal>
    <!-- MODAL -->
  </div>
    </div>
  </div>

  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import DeleteOutline from 'vue-material-design-icons/DeleteOutline.vue';
import global_mixin from '../../../mixins/mixins.js';
import id_mixin from './mixin_id.js';

export default {
  mixins: [global_mixin, id_mixin],

  components: {
    DeleteOutline
  },

  data () {
    return{
      logicInfo: this.$store.state.edit.logica.toString(),
      pushed: [this.$store.state.edit.logica],
      id: this.$route.params.id,
    }
  },

  methods: {
    ...mapActions(['sendAlarms', 'sendLogic', 'updateData', 'idCheck', 'logOff']),
    ...mapMutations({
      recomAdd: 'setNewRecom',
      canaisAdd: 'setNewCanal',
      statusAdd: 'setNewMeasure',
      canaisClean: 'setCleanCanal',
      statusClean: 'setCleanStatus',
      recomClean: 'setCleanRecom'
    }),

    async showModal(index, value) {
      this.modalEdit = value;
      if (value === false) {
        this.editS1 = this.status[index].tipo;
        this.editS2 = this.status[index].nome;
        this.editS3 = this.status[index].end_supervisorio;
        this.editS4 = parseInt(this.status[index].prioridade);
        this.editS5 = this.status[index].unidade;
        this.editS6 = this.status[index].valor_operacao;
        this.editS7 = this.status[index].sub_area;
      } else if(value === true) {
        this.editC1 = this.canal[index].end_alarme;
        this.editC2 = this.canal[index].ativacao;
        this.editC3 = this.canal[index].end_medida;
        this.editC4 = this.canal[index].unidade;
        this.editC5 = this.canal[index].sub_area;
      }

      setTimeout(() => {
        this.$bvModal.show(index);
      }, 100);
    },

    cancelEdit(index) {
      this.$bvModal.hide(index);
    },

    editingCanais(index) {
      this.canal.splice(index, 1);
      this.editC1 = this.replaceToUpper(this.editC1);
      this.editC3 = this.replaceToUpper(this.editC3);
      this.canal.push({
        end_alarme: this.editC1,
        ativacao: this.editC2,
        end_medida: this.editC3,
        unidade: this.editC4,
        sub_area: this.editC5
      })
      this.$bvModal.hide(index);
    },

    editingStatus(index) {
      this.status.splice(index, 1);
      this.editS3 = this.replaceToUpper(this.editS3);
      this.status.push({
        tipo: this.editS1,
        nome: this.editS2,
        end_supervisorio: this.editS3,
        prioridade:parseInt(this.editS4),
        unidade: this.editS5,
        valor_operacao: this.editS6,
        sub_area: this.editS7
      })
      this.$bvModal.hide(index);
      this.editS5 = "";
      this.editS6 = "";
    },

    sendOperator() {
      this.pushed.push(this.operators);
      this.separador = this.pushed.join(" ");
      /*
      / Adicionar a função replaceToUpper remove os espaços!
      / Esse splice ta sumindo com o espaço necessario no final da logica
      / O splice limpa o array
      */
      this.pushed.splice(0);
      this.pushed.push(this.separador);
      this.logicInfo = this.pushed.toString();
    },

    verificIsNaN(toaster) {
      if (!isNaN(parseInt(this.activation1))) {
        this.pushed.push(this.textAlarme, this.operaLogic, this.activation1);
        this.endAtivacao.push({end_alarme: this.textAlarme, ativacao: this.activation1, sub_area: this.subArea2, operador: this.operaLogic});
        this.separador = this.pushed.join(' ');
        this.pushed.splice(0);
        this.pushed.push(this.separador);
        this.logicInfo = this.pushed.toString();
      } else {
        this.createToast(toaster, `Preencher`, 'Por favor, digite uma unidade de medida do tipo inteiro no campo de valor', 'warning');
      }
    },

    verificaEnderecos(toaster) {
      if (isNaN(this.textMedida.charAt(0)) && isNaN(this.textMedida.charAt(1)) ||
        isNaN(this.textAlarme.charAt(0)) && isNaN(this.textAlarme.charAt(1))) {
        this.createToast(toaster, `Endereços`, 'Os endereços precisam possuir dois números como os primeiros caracteres.', 'warning');
      }
      else if(!this.textAlarme || !this.operaLogic || !this.activation1) {
        this.createToast(toaster, `Preencher`, 'Por favor, preencha todos os campos.', 'warning');
    }

      else  {
        this.textMedida = this.replaceToUpper(this.textMedida);
        this.textAlarme = this.replaceToUpper(this.textAlarme);
        if (this.operaLogic === '=') {
          this.operaLogic = '==';
        }
        this.verificIsNaN();
      }
    },

    sendActivation(toaster) {
      if (this.$cookies.get('unit') === 1) {
        this.verificaEnderecos();
      }
    },

    sendRecommendation() {
      this.recomAdd(this.recommendation);
    },

    sendEnderecos() {
      this.infoAlarme = this.replaceToUpper(this.infoAlarme);
      this.infoMedida = this.replaceToUpper(this.infoMedida);
      this.canaisAdd({ end_alarme: this.infoAlarme, ativacao: this.activation2 ,end_medida: this.infoMedida, unidade: this.unit2, sub_area: this.subArea3 });
    },

    sendMeasures() {
      this.infoSuper = this.replaceToUpper(this.infoSuper);
      this.statusAdd({
        tipo: this.types,
        nome: this.name,
        end_supervisorio: this.infoSuper,
        prioridade: parseInt(this.priority),
        unidade: this.unit3,
        valor_operacao: this.activation3,
        sub_area: this.subArea4
      });
      this.unit3 = "";
      this.activation3 = "";
    },

    validation(pushed, value) {
      return this.pushed.filter((v) => (v === value)).length;
    },

    cleanArea() {
      this.separador = "";
      this.logic = "";
      this.ok = false;
      this.endAtivacao.splice(0);
      this.pushed.splice(0);
    },

    cleanCanais(index) {
      this.canaisClean(index);
    },

    cleanStatus(index) {
      this.statusClean(index);
    },

    cleanRecom(index) {
      this.recomClean(index);
    },

    async validate(toaster) {
      await this.sendLogic({valid: this.logicInfo});
      this.backendCheck = this.$store.state.validating;
      const splitpushed = this.pushed[0].split(' ')
      // console.log(splitpushed[splitpushed.length - 1])
      if (splitpushed[splitpushed.length - 1] === 'E' || splitpushed[splitpushed.length - 1] === 'OU') {
        this.createToast(toaster, `Lógica inválida`, 'A lógica não está válida.', 'warning');
        this.ok = false;
      }
      else if(this.validation(this.pushed, '(') !== this.validation(this.pushed, ')')) {
        this.createToast(toaster, `Parenteses`, 'Feche o parênteses da lógica.', 'warning');
        this.ok = false;
      }
      else if(this.backendCheck === "expressão correta") {
        this.createToast(toaster, `Validação`, 'A expressão está correta.', 'success');
        this.ok = true;
      }
      else {
        this.createToast(toaster, `Validação`, 'A expressão está incorreta.', 'warning');
        this.ok = false;
      }

    },

    validCheck(toaster) {
      if (this.ok === false) {
        this.createToast(toaster, `Validar`, 'Por favor, valide a lógica antes de salvar.', 'warning');
        this.$bvModal.hide(this.modal_update);
      }
      else if (this.ok === true) {
        this.$bvModal.show(this.modal_update);
      }
    },

   saveData(toaster) {
      this.allData.splice(0);
      this.load = true;
      this.disabling = true;
      this.allData.push({
        tipo_desligamento: this.offType,
        local: this.local,
        complemento: this.complement,
        causa: this.reason,
        endereco_medida: this.textMedida,
        unidade: this.unit1,
        logica: this.logicInfo,
        ends_alarme: this.endAtivacao,
        canais: this.canal,
        status_medidas: this.status,
        recomendacoes: this.recomendacao,
        sub_area: this.subArea1,
      });

      this.sendAlarms({unit: this.unitId, info: this.allData[0]});
    
      this.disabling = false;
      this.load = false;
      // this.createToast('b-toaster-bottom-right', `Entrou aqui`, this.session.logoff, 'danger');
      setTimeout(() => {
        this.$bvModal.hide(this.modal_update);
      }, 1000);
    },

    updateCard(toaster, id) {
      this.loadEdit = true;
      this.disabling = true;

      this.allData.push({
        tipo_desligamento: this.offType,
        local: this.local,
        complemento: this.complement,
        causa: this.reason,
        endereco_medida: this.textMedida,
        unidade: this.unit1,
        logica: this.logicInfo,
        ends_alarme: this.endAtivacao,
        canais: this.canal,
        status_medidas: this.status,
        recomendacoes: this.recomendacao,
        sub_area: this.subArea1,
       });
      this.updateData({unit: this.unitId, id: this.id, data: this.allData[0]});

      this.disabling = false;
      this.loadEdit = false;
      console.log(this.modal_update);
      setTimeout(() => {
        this.$bvModal.hide(this.modal_update);
      }, 1000);
    },
  },

   async created() {
     // Logoff automatico
      await this.idCheck();
      if (this.session.value === false) {
        this.createToast('b-toaster-bottom-right', `Logoff`, this.session.logoff, 'danger');
      }
     // TODA VEZ Q TIVER CAMPO NOVO DA LOGICA ELE TEM Q ENTRAR AQUI PRA DAR CERTO NA LOGICA
      for (let index = 0; index < this.$store.state.edit.ends_alarme.length; index++) {
        this.endAtivacao.push({end_alarme: this.$store.state.edit.ends_alarme[index].end_alarme,
        ativacao: this.$store.state.edit.ends_alarme[index].ativacao, sub_area: this.$store.state.edit.ends_alarme[index].sub_area,
        operador: this.$store.state.edit.ends_alarme[index].operador})
      }
  },

  async asyncData({ store, route }) {
    const { id } = route.params;
    const unitId = document.cookie.split("; ");
    let cookieGet = null;
    for (let index = 0; index < unitId.length; index++) {
      const tes = unitId[index].split('=');
      for (let index = 0; index < tes.length; index++) {
        if (tes[0] === 'unit') {
          cookieGet = tes[1];
        }
      }
    }
    const teste = await store.dispatch('loadCard',{unit: cookieGet, route: id});

    return { detail: teste.data.todos[0] };
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.titles {
  font-weight: bold;
  h1 {
    font-size: 34px;
  }
}

input[type=number] {
  -moz-appearance: textfield;
}

.border-line {
  border-bottom: solid rgba(209, 216, 245, 0.6);
  padding: 15px;
  text-align: center;
}

.scroll {
  max-height: 180px;
  overflow: auto;
  // overflow-x: hidden;
  padding-left: 15px;
}

.modal-buttons {
  float: right;
  border-radius: 22px;
}

.justify {
  justify-content: right;
}

.btn-validar {
  width: 156px;
  height: 52px;
  background: linear-gradient(180deg, #008D46 0%, #00B75B 100%);
  border-radius: 22px;
}

.area {
  height: 154.24px;
}

.mini-title {
  font-size: 12px;
  font-weight: bold;
}

.btn-salvar {
  width: 105px;
  float: right;
  border-radius: 22px;
  background: linear-gradient(180deg, #008D46 0%, #00B75B 100%);
}

.btn-edit {
  background: linear-gradient(180deg, #008D46 0%, #00B75B 100%);
}

.btn-cadastrados {
  color: #ffffff;
  background-color: $dark-purple;
  float: right;
  border-radius: 22px;
}

.push-area {
  height: 163px;
  resize: none;
  background-color: rgb(255, 255, 255);
}

.sizing {
  font-size: 12px;
}

.address {
  font-size: 14px;
  font-weight: bold;
}

.alignment {
  text-align: center;
  font-size: 14px;
}

.bullet {
  list-style-type: none;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1300px;
    margin-bottom: 30px;
  }
}
</style>
