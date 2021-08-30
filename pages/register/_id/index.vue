<template>
  <div class="container">
    <div class="form-row align-items-end mt-4 mb-2">
      <div class="col">
        <h1 class="mt-5 titles">Cadastro de evento</h1>
      </div>
    </div>
    <div class="row">
      <div class="col card">
    <div class="form-row ">
      <div class="col-2">
        <label class="mt-4 sizing">LOCAL</label>
        <select class="form-control" v-model="local">
          <option v-for="item in selectFilters.local_banco" :key="item.id">
            {{item}}
          </option>
        </select>
      </div>
      <div class="col-5" v-if="local == 'CAV1' || local == 'CAV2' || local == 'CAV3'">
        <label class="mt-4 sizing">COMPLEMENTO</label>
        <input type="text" class="form-control" placeholder="Escreva aqui..." v-model="complement" >
      </div>
      <div class="col-3">
            <label class="mt-4 sizing">ENDEREÇO DE MEDIDA</label>
            <input maxlength="50" minlength="3" type="text" style="text-transform: uppercase;" class="form-control" v-model="textMedida">
          </div>
          <div class="col-1">
            <label class="mt-4 sizing">SUBAREA</label>
            <select class="form-control" v-model="subArea1">
              <option v-for="item in selectFilters.sub_area_banco" :key="item.id">
                {{item}}
              </option>
            </select>
          </div> 
          <div class="col-1">
            <label class="mt-4 sizing">UNIDADE</label>
            <input maxlength="15" minlength="1" type="text" class="form-control" v-model="unit1" >
          </div>
    </div>

    <div class="form-row mt-4">
      <div class="col">
        <label class="mt-4 sizing">TIPO DE DESLIGAMENTO</label>
        <select class="form-control" v-model="offType">
          <option v-for="item in selectFilters.tipo_desligamento_banco" :key="item.id">
            {{item}}
          </option>
        </select>
      </div>
      <div class="col-10">
        <label class="mt-4 sizing">CAUSA</label>
        <input type="text" class="form-control" placeholder="Escreva aqui..." v-model="reason" >
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm">
        <div class="form-row align-items-end">
          <!-- SUBAREA -->
          <div class="col-1">
            <label class="sizing">SUBAREA</label>
            <select class="form-control" v-model="subArea2">
              <option v-for="item in selectFilters.sub_area_banco" :key="item.id">
                {{item}}
              </option>
            </select>
          </div>  
          <!--  -->
          <div class="col-3">
            <label class="sizing">ENDEREÇO NO SUPERVISÓRIO</label>
            <input maxlength="50" minlength="3" type="text" style="text-transform: uppercase;" class="form-control" v-model="textAlarme">
          </div>
          <div class="col-1">
            <label class="sizing">LOGICO</label>
            <select class="form-control" v-model="operaLogic">
              <option v-for="item in selectFilters.operadores" :key="item.id">
                {{item}}
              </option>
            </select>
          </div> 
          <div class="col-1">
            <label class="sizing">VALOR</label>
            <input maxlength="20" minlength="1" type="float" class="form-control" v-model="activation1">
          </div>
          <div>
            <button class="mr-2 btn btn-green rounded-circle" @click="sendActivation('b-toaster-bottom-right')">+</button> 
          </div>
          <div class="col-1">
            <label class="sizing">OPERADORES</label>
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
            <label class="mini-title">LISTA DE ALARMES</label>
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
            <label class="sizing">ENDEREÇO NO SUPERVISÓRIO</label>
            <input maxlength="50" minlength="3" type="text" style="text-transform: uppercase;" class="form-control" v-model="infoAlarme">
          </div>
          <div class="col-1">
            <label class="sizing">VALOR</label>
            <select class="form-control" v-model="activation2">
              <option>1</option>
              <option>0</option>
              <option></option>
            </select>
          </div>
          <div class="col-3">
            <label class="sizing">ENDEREÇO DE MEDIDA</label>
            <input maxlength="50" minlength="3" type="text" style="text-transform: uppercase;" class="form-control" v-model="infoMedida" >
          </div>

          <div class="col-1">
            <label class="sizing">UNIDADE</label>
            <input maxlength="15" minlength="1" type="text" class="form-control" v-model="unit2">
          </div>  
          <div class="col-2">
            <label class="sizing">SUBAREA</label>
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
                    <th scope="col">ENDEREÇO</th>
                    <th scope="col">VALOR</th>
                    <th scope="col">ENDEREÇO DE MEDIDA</th>
                    <th scope="col">UNIDADE</th>
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
                    <!-- MODAL EDITAR CANAIS-->
                    <b-modal size="lg" :id="index.toString()" v-if="modalEdit == true">
                      <template v-slot:modal-title>
                        <h1 class="modal-title">Edição de Canais</h1>
                      </template>
                      <template>
                        <div class="row">
                          <div class="col-5">
                            <label class="labels">ENDEREÇO</label>
                            <input class="form-control" style="text-transform: uppercase;" v-model="editC1">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-2">
                            <label class="labels mt-4">VALOR</label>
                            <select class="form-control" v-model="editC2">
                              <option>1</option>
                              <option>0</option>
                              <option></option>
                            </select>
                          </div>
                          <div class="col-3">
                            <label class="labels mt-4">ENDEREÇO DE MEDIDA</label>
                            <input class="form-control" style="text-transform: uppercase;" v-model="editC3">
                          </div>
                          <div class="col-2">
                            <label class="labels mt-4">UNIDADE</label>
                            <input class="form-control" v-model="editC4">
                          </div>
                          <div class="col-2">
                            <label class="labels mt-4">SUBAREA</label>
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
                            Cancelar
                        </b-button>
                        <b-button class="btn-enviar" @click="editingCanais(index.toString())">
                            Salvar
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
              <label class="sizing">TIPO</label>
              <select class="form-control" v-model="types">
                <option>medida</option>
                <option>status</option>
              </select>
              
            </div>
            <div class="col-5">
              <label class="sizing">NOME</label>
              <input type="text" class="form-control" v-model="name">
            </div>
            <div class="col-3">
              <label class="sizing">ENDEREÇO NO SUPERVISÓRIO</label>
              <input maxlength="50" minlength="3" type="text" style="text-transform: uppercase;" class="form-control" v-model="infoSuper">
            </div>
          </div>
        
        <div class="form-row align-items-end mt-4">
          <div class="col-1">
            <label class="sizing">PRIORIDADE</label>
            <select class="form-control" v-model="priority">
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div class="col-1">
            <div v-if="types == 'medida'">
              <label class="sizing">UNIDADE</label>
              <input maxlength="15" minlength="1" type="text" class="form-control" v-model="unit3">
            </div>
            <div v-else-if="types == 'status'">
              <label class="sizing">VALOR</label>
              <select class="form-control" v-model="activation3">
                <option>1</option>
                <option>0</option>
              </select>
            </div>
          </div>
          <div class="col-2">
            <label class="sizing">SUBAREA</label>
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
                  <th scope="col">TIPO</th>
                  <th scope="col">NOME</th>
                  <th scope="col">ENDEREÇO</th>
                  <th scope="col">PRIORIDADE</th>
                  <th scope="col">UNIDADE/VALOR</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(value, index) in status" :key="value.id">
                  <td class="border-line">{{ value.tipo }}</td>
                  <td class="border-line">{{ value.nome }}</td>
                  <td class="border-line">{{ value.end_supervisorio }}</td>
                  <td class="border-line">{{ value.prioridade }}</td>
                  <td class="border-line" v-if="value.unidade != '' ">{{ value.unidade }}</td>
                  <td class="border-line" v-else-if="value.valor_operacao != '' ">{{ value.valor_operacao }}</td>
                  <td class="border-line">
                      <img class="editing" src="../../../static/img/editSelect.svg" alt="edit" @click="showModal(index.toString(), false)"/>
                  </td>
                  <td class="border-line">
                      <img class="deleting" src="../../../static/img/deleteSelect.svg" alt="del" @click="cleanStatus(index)"/>
                  </td>
                <!-- MODAL EDITAR STATUS-->
                  <b-modal size="lg" :id="index.toString()" v-if="modalEdit == false">
                    <template v-slot:modal-title>
                      <h1 class="modal-title">Edição de Status/Medidas</h1>
                    </template>
                    <template>
                      <div class="row">
                        <div class="col-2">
                          <label class="labels">TIPO</label>
                          <select class="form-control" v-model="editS1">
                            <option>medida</option>
                            <option>status</option>
                          </select>
                        </div>
                        <div class="col-6">
                          <label class="labels">NOME</label>
                          <input class="form-control" v-model="editS2">
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-3">
                          <label class="labels mt-4">ENDEREÇO</label>
                          <input class="form-control" style="text-transform: uppercase;" v-model="editS3">
                        </div>
                        <div class="col-2">
                          <label class="labels mt-4">PRIORIDADE</label>
                          <select class="form-control" v-model="editS4">
                            <option>1</option>
                            <option>2</option>
                          </select>
                        </div>
                        <div class="col-2" v-if="value.unidade != '' ">
                          <label class="labels mt-4">UNIDADE</label>
                          <input class="form-control" v-model="editS5">
                        </div>
                        <div class="col-2" v-else-if="value.valor_operacao != '' ">
                          <label class="labels mt-4">VALOR</label>
                          <select class="form-control" v-model="editS6">
                            <option>1</option>
                            <option>0</option>
                          </select>
                        </div>
                        <div class="col-3">
                          <label class="labels mt-4">SUBAREA</label>
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
                          Cancelar
                      </b-button>
                      <b-button class="btn-enviar" @click="editingStatus(index.toString())">
                          Salvar
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
            <li v-for="(lista,index) in recomendacao" :key="lista.id">{{ lista.item }} <img class="deleting" src="../../../static/img/delete.svg" alt="del" @click="cleanRecom(index)"/></li>
          </ul>
        </div>
      <div class="mt-5">
        <button class="btn btn-green btn-salvar" @click="validCheck('b-toaster-bottom-right')">Salvar</button>
        <nuxt-link to="/registered" class="btn btn-cadastrados mr-3">Cancelar</nuxt-link>
      </div>
    </div>
    <!-- RECOMENDAÇÕES -->
    <b-modal id="modal-update" hide-footer>
      <template v-slot:modal-title>
        Salvando o alarme
      </template>
      <div>
        <p>Escolha como quer salvar o alarme.</p>
      </div>
      <b-button class="modal-buttons bg-dark-red mt-3" @click="saveData('b-toaster-bottom-right')" :disabled="disabling">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="load == true"></span>
        Salvar como alarme novo
      </b-button>
      <b-button class="modal-buttons btn-edit btn-green mt-3 mr-2" @click="updateCard('b-toaster-bottom-right')" :disabled="disabling">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="loadEdit == true"></span>
        Salvar edição
      </b-button>
    </b-modal>
    <!-- MODAL -->
  </div>
    </div>
  </div>

  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import DeleteOutline from 'vue-material-design-icons/DeleteOutline.vue'

import axios from 'axios'

export default {
  components: {
    DeleteOutline
  },

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
      logicInfo: this.$store.state.edit.logica.toString(),
      endAtivacao: [],
      endBack: [],
      plusAlarme: [],
      separador: [],
      pushed: [this.$store.state.edit.logica],
      recom: [],
      end: [],
      measures: [],
      allData: [],
      editData: [],
      id: this.$route.params.id
    }
  },

  computed: { 
    session() {
      return this.$store.state.checkingSession
    },
    
    local: {
      get () {
        return this.$store.state.edit.local
      },
      set (value) {
        this.$store.commit('setLocal', value)
      }
    },
    complement: {
      get () {
        return this.$store.state.edit.complemento
      },
      set (value) {
        this.$store.commit('setComplemento', value)
      }
    },
    offType: {
      get () {
        return this.$store.state.edit.tipo_desligamento
      },
      set (value) {
        this.$store.commit('setOffType', value)
      }
    },
    reason: {
      get () {
        return this.$store.state.edit.causa
      },
      set (value) {
        this.$store.commit('setCausa', value)
      }
    },
    textMedida: {
      get () {
        return this.$store.state.edit.endereco_medida
      },
      set (value) {
        this.$store.commit('setTextMedida', value)
      }
    },
    unit1: {
      get () {
        return this.$store.state.edit.unidade
      },
      set (value) {
        this.$store.commit('setUnit1', value)
      }
    },
    textAlarme: {
      get () {
        return this.$store.state.edit.ends_alarme[0].end_alarme
      },
      set (value) {
        this.$store.commit('setTextAlarme', value)
      }
    },
    activation1: {
      get () {
        // console.log(this.$store.state.edit.ends_alarme[0].ativacao)
        return this.$store.state.edit.ends_alarme[0].ativacao
      },
      set (value) {
        this.$store.commit('setActivation1', value)
      }
    },
    operaLogic: {
      get () {
        return this.$store.state.edit.ends_alarme[0].operador
      },
      set (value) {
        this.$store.commit('setOperaLogic', value)
      }
    },
    logic: {
      get () {
        return this.$store.state.edit.logica
      },
      set (value) {
        this.$store.commit('setLogica', value)
      }
    },
    canal: {
      get () {
        return this.$store.state.edit.canais
      },
      set (value) {
        this.$store.commit('setCanais', value)
      }
    },
    status: {
      get () {
        return this.$store.state.edit.status_medidas
      },
      set (value) {
        this.$store.commit('setStatus', value)
      }
    },
    recomendacao: {
      get () {
        return this.$store.state.edit.recomendacoes
      },
      set (value) {
        this.$store.commit('setRecom', value)
      }
    },
    subArea1: {
      get () {
        return this.$store.state.edit.sub_area
      },
      set (value) {
        this.$store.commit('setSubArea1', value)
      }
    },
    subArea2: {
      get () {
        return this.$store.state.edit.ends_alarme[0].sub_area
      },
      set (value) {
        this.$store.commit('setSubArea2', value)
      }
    },
    subArea3: {
      get () {
        if (this.$store.state.edit.canais != '') {
          // console.log(this.$store.state.edit.canais)
          return this.$store.state.edit.canais[0].sub_area
        }
        
      },
      set (value) {
        this.$store.commit('setSubArea3', value)
      }
    },
    subArea4: {
      get () {
        if (this.$store.state.edit.status_medidas != '') {
          // console.log(this.$store.state.edit.canais)
          return this.$store.state.edit.status_medidas[0].sub_area
        }

      },
      set (value) {
        this.$store.commit('setSubArea4', value)
      }
    },

    errUpdate() {
      return this.$store.state.update
    },
    
    unitId() {
      return this.$cookies.get('unit') || '';
    },
    selectFilters() {
      return this.$store.state.edit
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
      this.modalEdit = value
      // console.log(this.canal[index])
      // console.log(this.status[index])
      if (value == false) {
        this.editS1 = this.status[index].tipo
        this.editS2 = this.status[index].nome
        this.editS3 = this.status[index].end_supervisorio
        this.editS4 = this.status[index].prioridade
        this.editS5 = this.status[index].unidade
        this.editS6 = this.status[index].valor_operacao
        this.editS7 = this.status[index].sub_area
      } else if(value == true) {
        this.editC1 = this.canal[index].end_alarme
        this.editC2 = this.canal[index].ativacao 
        this.editC3 = this.canal[index].end_medida
        this.editC4 = this.canal[index].unidade
        this.editC5 = this.canal[index].sub_area
      }
    
      setTimeout(() => {
        this.$bvModal.show(index)
      }, 100);
    },

    cancelEdit(index) {
      this.$bvModal.hide(index)
    },

    editingCanais(index) {
      this.canal.splice(index, 1)
      this.editC1 = this.editC1.replace(/\s/g, '').toUpperCase()
      this.editC3 = this.editC3.replace(/\s/g, '').toUpperCase()
      this.canal.push({ end_alarme: this.editC1, ativacao: this.editC2 ,end_medida: this.editC3, unidade: this.editC4, sub_area: this.editC5 })
      this.$bvModal.hide(index)
    },

    editingStatus(index) {
      this.status.splice(index, 1)
      this.editS3 = this.editS3.replace(/\s/g, '').toUpperCase()
      this.status.push({ tipo: this.editS1, nome: this.editS2, end_supervisorio: this.editS3, prioridade:this.editS4, unidade: this.editS5, valor_operacao: this.editS6, sub_area: this.editS7 })
      this.$bvModal.hide(index)
      this.editS5 = ""
      this.editS6 = ""
    },

    sendOperator() {
      this.pushed.push(this.operators)
      this.separador = this.pushed.join(' ')
      this.separador = this.separador.replace(/\s-\s/g, "-")
      // Esse splice ta sumindo com o espaço necessario no final da logica
      this.pushed.splice(0)
      this.pushed.push(this.separador)
      this.logicInfo = this.pushed.toString()
      
    },

    sendActivation(toaster) {
      if (this.$cookies.get('unit') == 1) {
        if (isNaN(this.textMedida.charAt(0)) == true && isNaN(this.textMedida.charAt(1)) == true ||
          isNaN(this.textAlarme.charAt(0)) == true && isNaN(this.textAlarme.charAt(1)) == true) {
            
          this.$bvToast.toast('Os endereços precisam possuir dois números como os primeiros caracteres.', {
            title: `Endereços`,
            toaster: toaster,
            solid: true
          })
        } 
          else if(this.textAlarme == "") {
          this.$bvToast.toast('Por favor, preencha o campo de alarme.', {
            title: `Preencher`,
            toaster: toaster,
            solid: true,
          })
        }
        // 
        else  {
          this.textMedida = this.textMedida.replace(/\s/g, '').toUpperCase()
          this.textAlarme = this.textAlarme.replace(/\s/g, '').toUpperCase()
          if (this.operaLogic == '=') {
            this.operaLogic = '=='
          }
          this.pushed.push(this.textAlarme, this.operaLogic, this.activation1) 
          this.endAtivacao.push({end_alarme: this.textAlarme, ativacao: this.activation1, sub_area: this.subArea2, operador: this.operaLogic})
          // console.log(this.endAtivacao)
          this.separador = this.pushed.join(' ')
          // this.separador = this.separador.replace(/\s-\s/g, "-")
          this.pushed.splice(0)
          this.pushed.push(this.separador)
          this.logicInfo = this.pushed.toString()
        }
      }
      // 
       else if(this.textAlarme == "") {
        this.$bvToast.toast('Por favor, preencha o campo de alarme.', {
          title: `Preencher`,
          toaster: toaster,
          solid: true,
        })
      }
      // 
      else  {
        this.textMedida = this.textMedida.replace(/\s/g, '').toUpperCase()
        this.textAlarme = this.textAlarme.replace(/\s/g, '').toUpperCase()
        if (this.operaLogic == '=') {
          this.operaLogic = '=='
        }
        this.pushed.push(this.textAlarme, this.operaLogic, this.activation1) 
        this.endAtivacao.push({end_alarme: this.textAlarme, ativacao: this.activation1, sub_area: this.subArea2, operador: this.operaLogic})
        // console.log(this.endAtivacao)
        this.separador = this.pushed.join(' ')
        // this.separador = this.separador.replace(/\s-\s/g, "-")
        this.pushed.splice(0)
        this.pushed.push(this.separador)
        this.logicInfo = this.pushed.toString()
       
        
      }
      
    },

    sendRecommendation() {
      this.recomAdd(this.recommendation)
    },

    sendEnderecos() {
      this.infoAlarme = this.infoAlarme.replace(/\s/g, '').toUpperCase()
      this.infoMedida = this.infoMedida.replace(/\s/g, '').toUpperCase()
      this.canaisAdd({ end_alarme: this.infoAlarme, ativacao: this.activation2 ,end_medida: this.infoMedida, unidade: this.unit2, sub_area: this.subArea3 })
      
    },

    sendMeasures() {
      this.infoSuper = this.infoSuper.replace(/\s/g, '').toUpperCase()
      this.statusAdd({ tipo: this.types, nome: this.name, end_supervisorio: this.infoSuper, prioridade:this.priority, unidade: this.unit3, valor_operacao: this.activation3, sub_area: this.subArea4 })
      this.unit3 = ""
      this.activation3 = ""
      
    },

    validation(pushed, value) {
      return this.pushed.filter((v) => (v === value)).length;
    },  

    cleanArea() {
      this.separador = ""
      this.logic = ""
      this.ok = false
      this.endAtivacao.splice(0)
      this.pushed.splice(0)
    },

    cleanCanais(index) {
      this.canaisClean(index)
    },

    cleanStatus(index) {
      this.statusClean(index)
    },
    
    cleanRecom(index) {
      this.recomClean(index)
    },

    async validate(toaster) {
     
      await this.sendLogic({valid: this.logicInfo})
      this.backendCheck = this.$store.state.validating

      if (this.pushed[this.pushed.length - 1] == 'E'|| this.pushed[0] == 'E' || this.pushed[this.pushed.length - 1] == 'OU' || this.pushed[0] == 'OU') {
        this.$bvToast.toast('A lógica não está válida.', {
          title: `Lógica inválida`,
          toaster: toaster,
          solid: true,
        })
        this.ok = false
      } 
      else if(this.validation(this.pushed, '(') != this.validation(this.pushed, ')')) {
        this.$bvToast.toast('Feche o parênteses da lógica.', {
          title: `Parenteses`,
          toaster: toaster,
          solid: true,
        })
        this.ok = false
      }
      else if(this.backendCheck == "expressão correta") {
        this.$bvToast.toast('A expressão está correta.', {
          title: `Validação`,
          toaster: toaster,
          solid: true,
        })
        this.ok = true
      }
      else {
         this.$bvToast.toast('A expressão está incorreta.', {
          title: `Validação`,
          toaster: toaster,
          solid: true,
        })
        this.ok = false
      }

    },

    validCheck(toaster) {
      if (this.ok == false) {
        this.$bvToast.toast('Por favor, valide a lógica antes de salvar.', {
          title: `Validar`,
          toaster: toaster,
          solid: true,
        })
        this.$bvModal.hide('modal-update')
      } 
      else if (this.ok == true) {
        this.$bvModal.show('modal-update')
      }
    
    },

   async saveData(toaster) {
     this.allData.splice(0)
    //  this.endAtivacao.push({end_alarme: this.textAlarme, ativacao: this.activation1}) 
     this.load = true
     this.disabling = true
    
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
       })
      
      await this.sendAlarms({unit: this.unitId, info: this.allData[0]})
      this.backendAlarm = this.$store.state.salvarAlarm

      if (this.backendAlarm == 'Preencha os endereços de alarme/medida') {
        this.$bvToast.toast('Verifique a lógica e/ou o endereço de medida.', {
          title: `Lógica`,
          toaster: toaster,
          solid: true,
        })
        this.disabling = false
        this.load = false
      } 
      else if(this.backendAlarm == "Preencha a causa") {
        this.$bvToast.toast('Preencha o campo da causa.', {
          title: `Causa`,
          toaster: toaster,
          solid: true,
        })
        this.disabling = false
        this.load = false
      }
      else if(this.backendAlarm != 200) {
        this.$bvToast.toast('Ocorreu um erro', {
          title: `Erro`,
          toaster: toaster,
          solid: true,
        })
        this.disabling = false
        this.load = false
      }
      else {
        this.$bvToast.toast('Salvo com sucesso.', {
          title: `Sucesso`,
          toaster: toaster,
          solid: true,
        })
        this.disabling = false
        this.load = false

        this.$bvModal.hide('modal-update')
     
      }
        
    },

    updateCard(toaster, id) {
      // this.endAtivacao.push({end_alarme: this.textAlarme, ativacao: this.activation1})
      this.loadEdit = true
      this.disabling = true

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
       })

      this.updateData({unit: this.unitId, id: this.id, data: this.allData[0]})


      if (this.errUpdate != 200) {
        this.$bvToast.toast('Ocorreu um erro', {
          title: `Erro`,
          toaster: toaster,
          solid: true,
        })
        this.disabling = false
        this.loadEdit = false
      } else if (this.errUpdate == 200) {
          this.$bvToast.toast('Editado com sucesso.', {
            title: `Editar`,
            toaster: toaster,
            solid: true,
          })
          setTimeout(() => {
            this.disabling = false
            this.loadEdit = false
            this.$bvModal.hide('modal-update')
          }, 1000);
      }
      
        
    }

  },

   async created() {
     // Logoff automatico
      await this.idCheck()
      if (this.session.value == false) {
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
    //

     // TODA VEZ Q TIVER CAMPO NOVO DA LOGICA ELE TEM Q ENTRAR AQUI PRA DAR CERTO NA LOGICA
      for (let index = 0; index < this.$store.state.edit.ends_alarme.length; index++) {
        this.endAtivacao.push({end_alarme: this.$store.state.edit.ends_alarme[index].end_alarme, 
        ativacao: this.$store.state.edit.ends_alarme[index].ativacao, sub_area: this.$store.state.edit.ends_alarme[index].sub_area, 
        operador: this.$store.state.edit.ends_alarme[index].operador})
        
      }
      
       
  },

  async asyncData({ store, route }) {
    const { id } = route.params
    // const unitId = this.$cookies.get('unit') || ''
    const unitId = document.cookie.split("; ")
    let cookieGet = null
    for (let index = 0; index < unitId.length; index++) {
      const tes = unitId[index].split('=')
      for (let index = 0; index < tes.length; index++) {
        if (tes[0] == 'unit') {
          cookieGet = tes[1]
        }
        
      }
    }
    const teste = await store.dispatch('loadCard',{unit: cookieGet, route: id})

    // console.log(teste)

    return { detail: teste.data.todos[0]}
    
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