<template>
    <div class="row card-suggest">
        <div class="col suggest-options">
            <div class="row mt-2">
                <div class="col-1">
                    <img src="../static/img/pencil-box.svg" alt="Edit" @click="showModal(false)"/>
                </div>
                <div class="col-1" style="color:#02592E;">{{tab.ug}}</div>
                <div class="col-1" style="color:#02592E;">{{tab.tipo}}</div>
                <div class="col-5">{{tab.causa}}</div>
                <div class="col-4 status-align">
                    <span class="badge green mr-1" :class="{ red: tab.status == 'Recusada', green: tab.status == 'Implementada', 
                    yellow: tab.status == 'Aguardando Aprovação', orange: tab.status == 'Aguardando Implementação' }">
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    {{tab.status}}
                </div>
            </div>
                <div class="row card-suggest">
                    <div class="col-11">
                        <span>
                            {{tab.sugestao}}
                        </span>
                    </div>
                    <b-button class="btn btn-consulta" @click="showModal(true)">CONSULTA</b-button>
                </div>

                <div class="row card-suggest">
                    <div class="col-3">
                        <span style="color: #B5B5B5;">Nome: {{tab.nome_usuario}}</span>
                    </div>
                    <div class="col-4">
                        <span style="color: #B5B5B5;">Chave de acesso: {{tab.chave}}</span>
                    </div>
                    <div class="col-5">
                        <span style="color: #B5B5B5;">Data e hora: {{tab.data}}</span>
                    </div>
                </div>
            </div>
        <!-- MODAL CONSULTA -->
        <b-modal size="xl" :id="modal_id" v-if="modalEdit == true">
            <template v-slot:modal-title>
                <div class="card-consulta">
                    <h1>{{tab.tipo}} {{tab.ug}}</h1>
                    <span class="reason">Causa</span>
                    <div class="row">
                        <div class="col-7">
                            <p class="mb-1 titles">{{tab.causa}}</p>
                        </div>
                        <div class="col-5" style="text-align: right;">
                            <span class="titles">STATUS: </span>
                            <span>&nbsp;</span>
                            <span class="badge refuse mr-1" :class="{ red: tab.status == 'Recusada', green: tab.status == 'Implementada', 
                            yellow: tab.status == 'Aguardando Aprovação', orange: tab.status == 'Aguardando Implementação' }">
                                &nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span class="refused">{{tab.status}}</span>
                        </div>
                    </div>  
                </div>
            </template>
            <template>
                <div class="row"> 
                    <span class="col-12 consulta-suggest">Sugestão:</span>
                </div>
                <div class="row">
                    <span class="col-12 card-suggest">
                       {{tab.sugestao}}
                    </span>
                </div>
                <div class="row ">
                    <div class="col-3">
                        <span style="color: #B5B5B5;">Nome: {{tab.nome_usuario}}</span>
                    </div>
                    <div class="col-3">
                        <span style="color: #B5B5B5;">Chave de acesso: {{tab.chave}}</span>
                    </div>
                    <div class="col-3">
                        <span style="color: #B5B5B5;">Data e hora: {{tab.data}}</span>
                    </div>
                </div>
                <div class="row mt-3 border-edit"></div>
               
                <div class="row mt-3"> 
                    <span class="col-8 consulta-suggest">Observação:</span>
                    <div class="col-4" style="text-align: right;">
                        <span class="consulta-suggest">Gestão Unidade:</span>
                        <span style="color: #226E48">{{tab.gestao_unidade[0].status}}</span>
                    </div>
                </div>
                <div class="row">
                    <!-- div.col-10+div.col-2|c -->
                </div>
                 <div class="row">
                     <div class="col-10">
                        <textarea class="form-control observ mt-2" placeholder="Digite aqui sua observação" rows="4" v-model="answer1">
                        </textarea>
                     </div>
                     <div class="col-2" style="text-align: center;">
                         <b-button class="btn-enviar" @click="sendChoice(tipo1, accept, answer1)" v-if="tab.gestao_unidade[0].status == 'Em análise' && tab.gestao_unidade[0].botao == true">
                            <img src="../static/img/aceitar.svg" alt="accept"/>
                            Aceitar
                        </b-button>
                         <b-button class="btn-cancel" @click="sendChoice(tipo1, refuse, answer1)" v-if="tab.gestao_unidade[0].status == 'Em análise' && tab.gestao_unidade[0].botao == true">
                            <img src="../static/img/cancelar.svg" alt="cancel"/>
                            Recusar
                        </b-button>
                     </div>
                </div>
                <div class="row ">
                    <div class="col-3">
                        <span style="color: #B5B5B5;">Nome: {{tab.gestao_unidade[0].nome}}</span>
                    </div>
                    <div class="col-3">
                        <span style="color: #B5B5B5;">Chave de acesso: {{tab.gestao_unidade[0].chave}}</span>
                    </div>
                    <div class="col-3">
                        <span style="color: #B5B5B5;">Data e hora: {{tab.gestao_unidade[0].data}}</span>
                    </div>
                </div>
                <div class="row mt-3 border-edit"></div>
                <!-- 2 -->
                <div class="row mt-3"> 
                    <span class="col-8 consulta-suggest">Observação:</span>
                    <div class="col-4" style="text-align: right;">
                        <span class="consulta-suggest">Gestão Sede:</span>
                        <span style="color: #226E48">{{tab.gestao_sede[0].status}}</span>
                    </div>
                </div>
                 <div class="row">
                     <div class="col-10">
                        <textarea class="form-control observ mt-2" placeholder="Digite aqui sua observação" rows="4" v-model="answer2">
                        </textarea>
                     </div>
                     <div class="col-2" style="text-align: center;">
                         <b-button class="btn-enviar" @click="sendChoice(tipo2, accept, answer2)" v-if="tab.gestao_sede[0].status == 'Em análise' && tab.gestao_sede[0].botao == true">
                            <img src="../static/img/aceitar.svg" alt="accept"/>
                            Aceitar
                        </b-button>
                         <b-button class="btn-cancel" @click="sendChoice(tipo2, refuse, answer2)" v-if="tab.gestao_sede[0].status == 'Em análise' && tab.gestao_sede[0].botao == true">
                            <img src="../static/img/cancelar.svg" alt="cancel"/>
                            Recusar
                        </b-button>
                     </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <span style="color: #B5B5B5;">Nome: {{tab.gestao_sede[0].nome}}</span>
                    </div>
                    <div class="col-3">
                        <span style="color: #B5B5B5;">Chave de acesso: {{tab.gestao_sede[0].chave}}</span>
                    </div>
                    <div class="col-3">
                        <span style="color: #B5B5B5;">Data e hora: {{tab.gestao_sede[0].data}}</span>
                    </div>
                </div>
                <div class="row mt-3 border-edit"></div>
                <!-- 3 -->
                <div class="row mt-3"> 
                    <span class="col-8 consulta-suggest">Observação:</span>
                    <div class="col-4" style="text-align: right;">
                        <span class="consulta-suggest">Executor:</span>
                        <span style="color: #226E48">{{tab.executor[0].status}}</span>
                    </div>
                </div>
                 <div class="row">
                     <div class="col-10">
                        <textarea class="form-control observ mt-2" placeholder="Digite aqui sua observação" rows="4" v-model="answer3">
                        </textarea>
                     </div>
                     <div class="col-2" style="text-align: center;">
                         <b-button class="btn-enviar" @click="sendChoice(tipo3, implement, answer3)" v-if="tab.executor[0].status == 'Em análise' && tab.executor[0].botao == true">
                            <img src="../static/img/aceitar.svg" alt="Implement"/>
                            Implementar
                        </b-button>
                         <b-button class="btn-cancel" @click="cancelConsulta()" v-if="tab.executor[0].status == 'Em análise' && tab.executor[0].botao == true">
                            <img src="../static/img/cancelar.svg" @click="cancelConsulta()" alt="cancel"/>
                            Cancelar
                        </b-button>
                     </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <span style="color: #B5B5B5;">Nome: {{tab.executor[0].nome}}</span>
                    </div>
                    <div class="col-3">
                        <span style="color: #B5B5B5;">Chave de acesso: {{tab.executor[0].chave}}</span>
                    </div>
                    <div class="col-3">
                        <span style="color: #B5B5B5;">Data e hora: {{tab.executor[0].data}}</span>
                    </div>
                </div>
            </template>
            <template v-slot:modal-footer>
                <span>&nbsp;</span>
            </template>           
        </b-modal> 
        <!--  -->
        <!-- MODAL EDITAR -->
        <b-modal size="xl" :id="modal_id" v-if="modalEdit == false">
            <template v-slot:modal-title>
                <div class="row">
                    <div class="col-2 ">
                        <label class="labels">SELECIONAR UG</label>
                        <select class="form-control" v-model="editModal1">
                            <option v-for="item in filterUg" :key="item.id">
                                {{item}}                
                            </option>
                            
                        </select>
                    </div>
                    <div class="col-2">
                        <label class="labels">SELECIONAR TIPO</label>
                        <select class="form-control" v-model="editModal2">
                            <option v-for="item in filterType" :key="item.id">
                                {{item}}                
                            </option>
                           
                        </select>
                    </div>
                    <div class="col-4 ">
                        <label class="labels">CAUSA</label>
                        <select class="form-control" v-model="editModal3">
                            <option v-for="item in filterCause" :key="item.id">
                                {{item}}                
                            </option>
                         
                        </select>
                    </div>
                    <div>
                        <button class="btn btn-modal btn-green rounded-circle" @click="editOptions()">+</button>
                    </div>
                </div>
            </template>
            <template>
                <div class="row">
                    <div class="col scroll">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">UG</th>
                                <th scope="col">Causa</th>  
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in filterList" :key="item.id">
                                <td>{{item.ug}}</td>
                                <td>{{item.causa}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- <div class="row border-edit"></div> -->
    
                <div class="row">
                    <span class="col-12 cadastro-suggest mt-3">Sugestão:</span>
                </div>
                <div class="row">
                    <div class="col mt-3 mb-3">
                        <textarea class="form-control" placeholder="Digite aqui sua observação" rows="4" v-model="observac">
                        </textarea>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3 mb-3">
                    <span style="color: #B5B5B5;">Nome: {{filterNome}}</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Chave de acesso: {{filterChave}}</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Data e hora: {{tab.data}}</span>
                    </div>
                </div>
            </template>
            <template v-slot:modal-footer>
                <b-button class="btn-cancel" @click="cancelEdit()">
                    <img src="../static/img/cancelar.svg" alt="cancel"/>
                    Cancelar
                </b-button>
                <b-button class="btn-enviar" @click="editRegister()">
                    <img src="../static/img/aceitar.svg" alt="send"/>
                    Enviar
                </b-button>
            </template>
        </b-modal>
        <!--  -->
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: ['tab', 'tab_modal', 'unit'],

    data() {
        return {
            modalEdit: null,
            accept: "Aceitar",
            refuse: "Recusar",
            implement: "Implementar",
            tipo1: "GESTÃO UNIDADE",
            tipo2: "GESTÃO SEDE",
            tipo3: "EXECUTOR",
            editModal1: "",
            editModal2: "",
            editModal3: "",
            observac: this.tab.sugestao,
            answer1: this.tab.gestao_unidade[0].observacao,
            answer2: this.tab.gestao_sede[0].observacao,
            answer3: this.tab.executor[0].observacao,
            sugResponse: "",
            allData: [],
            allEdit: [],
            lists: [],
            allEdit: [],
            filterUg: [],
            filterType: [],
            filterCause: []
        }
    },

    methods: {
        ...mapActions(['loadSuggestions','postSuggestions', 'editingSuggestions', 'editSuggestions']),

        filteredOptions() {
            for (let index = 0; index < this.sugEdit.filtro.length; index++) {
                this.filterUg.push(this.sugEdit.filtro[index].ug)
                this.filterType.push(this.sugEdit.filtro[index].tipo)
                this.filterCause.push(this.sugEdit.filtro[index].causa)
            }
            this.filterUg = [...new Set(this.filterUg)]
            this.filterType = [...new Set(this.filterType)]
            this.filterCause = [...new Set(this.filterCause)]
        },

        editOptions() {
            this.lists = this.editSug.lista_ugs
            this.lists.push({ug: this.editModal1, tipo: this.editModal2, causa: this.editModal3})

        },

        cancelConsulta() {
            this.$bvModal.hide(this.modal_id)
        },

        cancelEdit() {
            this.editModal1 = ""
            this.editModal2 = ""
            this.editModal3 = ""
            this.observac = ""
            this.$bvModal.hide(this.modal_id)
        },

        showModal(value) {
            this.modalEdit = value
            this.editingSuggestions({unit: this.unit, id:this.modal_id})
            setTimeout(() => {
                this.filteredOptions()    
            }, 500);
            
            setTimeout(() => {
                this.$bvModal.show(this.modal_id)
                // console.log(this.editSug.nome)
            }, 100);
            
        },

        async sendChoice(tipos, choice, obs) {
            this.allData.splice(0)

            this.allData.push({
                tipo_usuario: tipos,
                status: this.tab.status,
                comando: choice,
                observacao: obs,
                nome:"Diego",
                chave:"QRST"
            })
            await this.postSuggestions({unit: this.unit, id: this.tab_modal, info: this.allData[0]})
            this.loadSuggestions(this.unit)
            // this.sugResponse = this.$store.state.suggestChoice
        },

        async editRegister() {
        this.allEdit.splice(0)
        
        this.allEdit.push({
            sugestao: this.observac,
            nome:"Rodolfo Cavalcante",
            chave:"QRST",
            lista_ugs: this.lists,
        })
        // console.log(this.editSug.lista_ugs)
        await this.editSuggestions({unit: this.unit, id: this.tab_modal, info: this.allEdit[0]})
        this.loadSuggestions(this.unit)
    }
    },

    computed: {
        modal_id() {
            return this.tab_modal.toString()
        },

        sugEdit() {
            return this.$store.state.getSuggest
        },

        editSug() {
            return this.$store.state.getSuggest.sugestoes
        },

        filterList() {
            return this.editSug != undefined ? this.editSug.lista_ugs : []
        },

        filterNome() {
            return this.editSug != undefined ? this.editSug.nome : []
        },

        filterChave() {
            return this.editSug != undefined ? this.editSug.chave : []
        }

    },

    created() {
        
        // console.log(this.sugEdit)
        // console.log(this.modal_id)
    }
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.suggest-options {
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 4px;
}
textarea {
  resize: none;
}

// .table thead tr th{
//     border: none;
// }

.border-edit {
    border-bottom: 1px solid #dee2e6;
    margin-right: 15px;
    margin-left: 15px;
}

.list {
    position: relative;
    left: 15px;
}

.scroll {
    max-height: 180px;
    overflow: auto;
}

.titles {
    font-size: 16px;
    color: #02592E;
}

.card-consulta {
    
    h1 {
        font-weight: 300;
        color: #02592E;
    }
}

.border-line {
    position: absolute;
    width: 1100px;
    height: 0px;
    left: 20px;
    top: 145px;
    border-bottom: 1px solid #dee2e6;
}

.reason {
    font-weight: bold;
    font-size: 16px;
    color: #CCCCCC;
}

.observ {
    background: #F7F7F7;
    border: none;
}

// .form-control {
//     box-shadow: none;
// }

.consulta-suggest {
    font-weight: bold;
    font-size: 16px;
    color: #226E48;
}

.refuse {
    border-radius: 3px;
}

.refused {
    font-weight: 500;
    font-size: 16px;
    color: #222222;
}

.btn-consulta {
    text-align: center;
    position: absolute;
    right: 25px;
    color: $white;
    background: #6979F8;
    border-radius: 5px;

    &:hover{
        color: $white;
        background-color: #6979F8;
    } 
}

</style>