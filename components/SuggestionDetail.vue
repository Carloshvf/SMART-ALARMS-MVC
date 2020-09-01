<template>
    <div class="row card-suggest">
        <div class="col suggest-options">
            <div class="row mt-2">
                <div class="col-1">
                    <img src="../static/img/pencil-box.svg" alt="Edit" />   
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
                    <b-button class="btn btn-consulta" v-b-modal="modal_id">CONSULTA</b-button>
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
        <!-- MODAL -->
        <b-modal size="xl" :id="modal_id">
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
                    <div class="col border-line"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Nome: {{tab.gestao_unidade[0].nome}}</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Chave de acesso: {{tab.gestao_unidade[0].chave}}</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Data e hora: {{tab.gestao_unidade[0].data}}</span>
                    </div>
                    <div class="col-3 mb-3" style="text-align: right;">
                        <span class="consulta-suggest">Gestão Unidade:</span>
                        <span style="color: #226E48">{{tab.gestao_unidade[0].status}}</span>
                    </div>
                </div>
                <div class="row"> 
                    <span class="col-12 consulta-suggest">Observação:</span>
                </div>
                 <div class="row">
                     <div class="col-10">
                        <!-- <p>Digite aqui sua observação</p> -->
                        <input class="form-control observ mt-2" placeholder="Digite aqui sua observação" v-model="answer1">
                     </div>
                     <div class="col-2" style="text-align: center;">
                         <b-button class="btn-enviar" @click="sendChoice(tipo1, accept, answer1)" v-if="tab.gestao_unidade[0].status == 'Em análise'">
                            <img src="../static/img/aceitar.svg" alt="accept"/>
                            Aceitar
                        </b-button>
                         <b-button class="btn-cancel" @click="sendChoice(tipo1, refuse, answer1)" v-if="tab.gestao_unidade[0].status == 'Em análise'">
                            <img src="../static/img/cancelar.svg" alt="cancel"/>
                            Recusar
                        </b-button>
                     </div>
                </div>
                <!-- 2 -->
                <div class="row mt-3">
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Nome: {{tab.gestao_sede[0].nome}}</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Chave de acesso: {{tab.gestao_sede[0].chave}}</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Data e hora: {{tab.gestao_sede[0].data}}</span>
                    </div>
                    <div class="col-3 mb-3" style="text-align: right;">
                        <span class="consulta-suggest">Gestão Sede:</span>
                        <span style="color: #226E48">{{tab.gestao_sede[0].status}}</span>
                    </div>
                </div>
                <div class="row"> 
                    <span class="col-12 consulta-suggest">Observação:</span>
                </div>
                 <div class="row">
                     <div class="col-10">
                        <input class="form-control observ mt-2" placeholder="Digite aqui sua observação" v-model="answer2">
                     </div>
                     <div class="col-2" style="text-align: center;">
                         <b-button class="btn-enviar" @click="sendChoice(tipo2, accept, answer2)" v-if="tab.gestao_sede[0].status == 'Em análise'">
                            <img src="../static/img/aceitar.svg" alt="accept"/>
                            Aceitar
                        </b-button>
                         <b-button class="btn-cancel" @click="sendChoice(tipo2, refuse, answer2)" v-if="tab.gestao_sede[0].status == 'Em análise'">
                            <img src="../static/img/cancelar.svg" alt="cancel"/>
                            Recusar
                        </b-button>
                     </div>
                </div>
                <!-- 3 -->
                <div class="row mt-3">
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Nome: {{tab.executor[0].nome}}</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Chave de acesso: {{tab.executor[0].chave}}</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Data e hora: {{tab.executor[0].data}}</span>
                    </div>
                    <div class="col-3 mb-3" style="text-align: right;">
                        <span class="consulta-suggest">Executor:</span>
                        <span style="color: #226E48">{{tab.executor[0].status}}</span>
                    </div>
                </div>
                <div class="row"> 
                    <span class="col-12 consulta-suggest">Observação:</span>
                </div>
                 <div class="row">
                     <div class="col-10">
                        <input class="form-control observ mt-2" placeholder="Digite aqui sua observação" v-model="answer3">
                     </div>
                     <div class="col-2" style="text-align: center;">
                         <b-button class="btn-enviar" @click="sendChoice(tipo3, implement, answer3)" v-if="tab.executor[0].status == 'Em análise'">
                            <img src="../static/img/aceitar.svg" alt="Implement"/>
                            Implementar
                        </b-button>
                         <b-button class="btn-cancel" @click="cancelConsulta()" v-if="tab.executor[0].status == 'Em análise'">
                            <img src="../static/img/cancelar.svg" @click="cancelConsulta()" alt="cancel"/>
                            Cancelar
                        </b-button>
                     </div>
                </div>
            </template>
            <template v-slot:modal-footer>
                <span>&nbsp;</span>
            </template>           
        </b-modal> 
        <!--  -->
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: ['tab', 'tab_modal'],

    data() {
        return {
            accept: "Aceitar",
            refuse: "Recusar",
            implement: "Implementar",
            tipo1: "GESTÃO UNIDADE",
            tipo2: "GESTÃO SEDE",
            tipo3: "EXECUTOR",
            answer1: this.tab.gestao_unidade[0].observacao,
            answer2: this.tab.gestao_sede[0].observacao,
            answer3: this.tab.executor[0].observacao,
            sugResponse: "",
            allData: [],
        }
    },

    methods: {
        ...mapActions(['postSuggestions']),

        cancelConsulta() {
            this.$bvModal.hide(this.modal_id)
        },

        async sendChoice(tipos, choice, obs) {
            this.allData.push({
                tipo_usuario: tipos,
                status: this.tab.status,
                comando: choice,
                observacao: obs,
                nome:"Diego",
                chave:"QRST"
            })
            await this.postSuggestions({id: this.tab_modal, info: this.allData[0]})
            // this.sugResponse = this.$store.state.suggestChoice
        }
    },

    computed: {
        modal_id() {
            return this.tab_modal.toString()
        }
    },

    created() {
        // console.log(this.tab_modal)
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