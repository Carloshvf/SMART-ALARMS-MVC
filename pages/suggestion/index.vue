<template>
    <div class="container-fluid">
        <div class="row card-size mt-5">
            <div class="col-6 mt-4">
                <h1>Sugestões</h1>
            </div>
            <div class="col-6 mt-4">
                <b-button class="btn-cadastrar" v-b-modal="'modal-cadastrar'">
                    <img class="cross-img" src="../../static/img/plus.svg" alt="cross"/>
                    <span>CADASTRAR</span> 
                </b-button>
            </div>
        </div>
        <div class="row card-size">
            <div class="col card mt-4">
                <div class="row">
                    <div class="col-2 card-suggest">
                        <label class="labels">FILTRO UG</label>
                        <select class="form-control" v-model="select1">
                            <!-- <option v-for="item in sugDetail" :key="item.id">
                                {{item.ug}}                
                            </option> -->
                            <option>UG 11</option>
                            <option>UG 12</option>
                            <option>UG 21</option>
                            <option>UG 22</option>
                            <option>UG 31</option>
                            <option>UG 32</option>
                        </select>
                    </div>
                    <div class="col-2 card-suggest">
                        <label class="labels">FILTRO DE TIPO</label>
                        <select class="form-control" v-model="select2">
                            <!-- <option v-for="item in sugDetail" :key="item.id">
                                {{item.tipo}}
                            </option> -->
                            <option>PLS</option>
                            <option>PLST</option>
                            <option>TRIP</option>
                        </select>
                    </div>
                    <div class="col-3 card-suggest">
                        <label class="labels">CAUSA BÁSICA</label>
                        <select class="form-control" v-model="select3">
                            <!-- <option v-for="item in sugDetail" :key="item.id">
                                {{item.causa}}
                            </option> -->
                            <option>PROTEÇÃO INTERFACE CICLO ÁGUA VAPOR</option>
                            <option>TEMPERATURA EGATROL 8 GABINETES</option>
                            <option>Alto Diferencial (max 2) de Pressão do Filtro</option>
                            <option>Nível Baixo (min 2) do Tanque de Surto</option>
                            <option>DETECTOR DE FOGO NO MANCAL DE EXAUSTÃO</option>
                        </select>
                    </div>
                    <div class="col-2 card-suggest">
                        <label class="labels">STATUS</label>
                        <b-form-checkbox class="checkboxes" value="Implementada" v-model="checkbox1">Implementada</b-form-checkbox>
                        <b-form-checkbox class="checkboxes" value="Aguardando Aprovação" v-model="checkbox2">Aguardando aprovação</b-form-checkbox>
                    </div>
                    <div class="col-3 card-suggest mt-2">
                        <br>
                        <b-form-checkbox class="checkboxes" value="Aguardando Implementação" v-model="checkbox3">Aguardando implementação</b-form-checkbox>
                        <b-form-checkbox class="checkboxes" value="Recusada" v-model="checkbox4">Recusada</b-form-checkbox>
                    </div>
                </div>
                <div class="row card-suggest">
                    <div class="col card-border">
                        <div class="row mt-3 mb-3" style="font-size:14px">
                            <div class="col-1">Editar</div>
                            <div class="col-1">UG</div>
                            <div class="col-1">TIPO</div>
                            <div class="col-3">CAUSA BÁSICA</div>
                            <div class="col-4 status-align">STATUS</div>
                        </div>
                    </div>
                </div>
                <ul class="remove-bullet">
                    <li v-for="sug in computed_items" :key="sug.id">
                        <suggestion-detail :tab_modal="sug.id" :tab="sug"/>
                    </li>
                </ul>
            </div>
        </div>
        <!-- MODAL -->
        <b-modal size="xl" id="modal-cadastrar">
            <template v-slot:modal-title>
                <div class="row">
                    <div class="col-2 ">
                        <label class="labels">SELECIONAR UG</label>
                        <select class="form-control" v-model="regModal1">
                            <!-- <option v-for="item in sugRegister" :key="item.id">
                                {{item.ug}}                
                            </option> -->
                            <option>UG 11</option>
                            <option>UG 12</option>
                            <option>UG 21</option>
                            <option>UG 22</option>
                            <option>UG 31</option>
                            <option>UG 32</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <label class="labels">SELECIONAR TIPO</label>
                        <select class="form-control" v-model="regModal2">
                            <!-- <option v-for="item in sugRegister" :key="item.id">
                                {{item.tipo}}                
                            </option> -->
                            <option>PLS</option>
                            <option>PLST</option>
                            <option>TRIP</option>
                        </select>
                    </div>
                    <div class="col-4 ">
                        <label class="labels">CAUSA</label>
                        <select class="form-control" v-model="regModal3">
                            <!-- <option v-for="item in sugRegister" :key="item.id">
                                {{item.causa}}                
                            </option> -->
                            <option>PROTEÇÃO INTERFACE CICLO ÁGUA VAPOR</option>
                            <option>TEMPERATURA EGATROL 8 GABINETES</option>
                            <option>Alto Diferencial (max 2) de Pressão do Filtro</option>
                            <option>Nível Baixo (min 2) do Tanque de Surto</option>
                            <option>DETECTOR DE FOGO NO MANCAL DE EXAUSTÃO</option>
                        </select>
                    </div>
                    <div>
                        <button class="btn btn-modal btn-green rounded-circle" @click="sendOptions()">+</button>
                    </div>
                </div>
            </template>
            <template>
                
                <div class="row">
                    <div class="col scroll"> 
                        <table class="table" v-if="selects != ''">
                            <thead>
                            <tr class="">
                            <th scope="col">UG</th>
                            <th scope="col">Causa</th>
                            
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in selects" :key="item.id">
                                <td class="border-line">{{item.ug}}</td>
                                <td class="border-line">{{item.causa}}</td>
                            </tr>
                            <!-- <tr v-for="item in editSug.lista_ugs" :key="item.id">
                                <td>{{item.ug}}</td>
                                <td>{{item.causa}}</td>
                            </tr> -->
                            </tbody>
                        </table>    
                    </div>
                </div>

                <div class="row">
                    <span class="col-12 cadastro-suggest">Sugestão:</span>
                </div>
                    <div class="row">
                        <div class="col mt-3 mb-3">
                            <input class="form-control" placeholder="Digite aqui sua observação" v-model="observacao">
                        </div>
                    </div>
            </template>
            <template v-slot:modal-footer>
                <b-button class="btn-cancel" @click="cancelCadastro()">
                    <img src="../../static/img/cancelar.svg" alt="cancel"/>
                    Cancelar
                </b-button>
                <b-button class="btn-enviar" @click="sendRegister()">
                    <img src="../../static/img/aceitar.svg" alt="send"/>
                    Enviar
                </b-button>
            </template>
        </b-modal> 
    </div>
</template>

<script>
import SuggestionDetail from '~/components/SuggestionDetail.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        SuggestionDetail
    },

    data() {
        return {
            checked1: true,
            checked2: true,
            select1: "",
            select2: "",
            select3: "",
            regModal1: "",
            regModal2: "",
            regModal3: "",
            observacao: "",
            checkbox1:"",
            checkbox2:"",
            checkbox3:"",
            checkbox4:"",
            allRegister: [],
            selects: []
        }
    },

    methods: {
        ...mapActions(['loadSuggestions', 'getRegister', 'registerSuggestions']),

        cancelCadastro() {
            this.regModal1 = ""
            this.regModal2 = ""
            this.regModal3 = ""
            this.observacao = ""
            this.selects.splice(0)
            this.$bvModal.hide('modal-cadastrar')
        },

        sendOptions() {
            this.selects.push({ug: this.regModal1, tipo: this.regModal2, causa: this.regModal3})
            // console.log(this.selects)
        },

        async sendRegister() {
            this.allRegister.splice(0)
            
            this.allRegister.push({
                sugestao: this.observacao,
                nome:"Rodolfo Cavalcante",
                chave:"QRST",
                lista_ugs: this.selects,
            })
            await this.registerSuggestions({info: this.allRegister[0]})
            this.loadSuggestions()
        }
    },

    computed: {
        sugDetail() {
            return this.$store.state.suggest
        },

        sugRegister() {
            return this.$store.state.suggestRegister
        },

        filteredOptions() {
            // for (let index = 0; index < this.sugDetail.length; index++) {
            //     const element = this.sugDetail[index];
            //     return [...new Set(element.ug)]
            // }
            
        },
        computed_items: function () {
        let filterUg= this.select1,
            filterType = this.select2,
            filterCause = this.select3,
            filterCheck1 = this.checkbox1,
            filterCheck2 = this.checkbox2,
            filterCheck3 = this.checkbox3,
            filterCheck4 = this.checkbox4
        return this.sugDetail.filter(function(item){
            let filtered = true
                if(filterUg && filterUg.length > 0){
                filtered = item.ug == filterUg
                }
            if(filtered){
                if(filterType && filterType.length > 0){
                    filtered = item.tipo == filterType
                }
            }
            if(filtered){
                if(filterCause && filterCause.length > 0){
                    filtered = item.causa == filterCause
                }
            }
            if(filtered){
                if(filterCheck1 && filterCheck1.length > 0){
                    filtered = item.status == filterCheck1
                }
            }
            if(filtered){
                if(filterCheck2 && filterCheck2.length > 0){
                    filtered = item.status == filterCheck2
                }
            }
            if(filtered){
                if(filterCheck3 && filterCheck3.length > 0){
                    filtered = item.status == filterCheck3
                }
            }
            if(filtered){
                if(filterCheck4 && filterCheck4.length > 0){
                    filtered = item.status == filterCheck4
                }
            }
                return filtered
            })
        }
    },

    created() {
        this.loadSuggestions()
        this.getRegister()
        // console.log(this.sugRegister)
    }
}
</script>   

<style lang="scss">
@import '@/assets/scss/base.scss';

.btn-cadastrar {
    position: absolute;
    width: 151px;
    height: 44px;
    left: 510px;
    top: 5px;
    color: $white;
    background: linear-gradient(180deg, #008D46 0%, #00B75B 100%);
    border-radius: 22px;

    span {
        position: absolute;
        bottom: 13px;
        right: 35px;
        font-size: 12px;
    }
}

.scroll {
    max-height: 180px;
    overflow: auto;
}

.input-cadastrar {
    border: none;
}

.labels {
    font-size: 12px;
    font-weight: bold;
} 

.checkboxes {
    font-size: 14px;
}

.remove-bullet {
    list-style: none;
}

.btn-cancel {
    background-color: white;
    color: #E17000;
    border: none;

    &:hover{
        background-color: white;
        color: #E17000;
    }
}

.btn-enviar {
    background-color: white;
    color: #00C48C;
    border: none;

    &:hover{
        background-color: white;
        color: #00C48C;
    }
}

.modal-title {
    width: 100%;
}

.modal-footer {
    border-top: 0px;
}

.cadastro-suggest {
    font-weight: bold;
    font-size: 15px;
    line-height: 16px;
    color: #226E48;
}

.labels {
    font-size: 12px;
    font-weight: bold;
}

.btn-modal {
    position: absolute;
    top: 50px;
}

.card-size {
    width: 70%;
    margin: 0 auto;

    h1 {
        position: relative;
        right: 18px;
    }
}
.status-align {
    position: absolute;
    left: 850px;
}

.card-border {
    background: #F5F6F9;
    border: 2px solid #979797;
    border-radius: 4px;
}

.cross-img {
    position: absolute;
    right: 73.38%;
    bottom: 5px;
}

.green {
    background: #6DD400;
}

.orange {
    background: #FF7A00;
}

.yellow {
    background: #FFE500;
}

.red {
    background: #CC0606;
}

</style>