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
                            <!-- <option>UG 11</option> -->
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
                        <select class="form-control">
                        <option>UG 11</option>
                        <option>UG 12</option>
                        <option>UG 18</option>
                        <option>UG 21</option>
                        <option>UG 22</option>
                        <option>UG 28</option>
                        <option>UG 31</option>
                        <option>UG 32</option>
                        <option>UG 38</option>
                        <option>CAV1</option>
                        <option>CAV2</option>
                        <option>CAV3</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <label class="labels">SELECIONAR TIPO</label>
                        <select class="form-control">
                        <option>PLS</option>
                        <option>PLST</option>
                        <option>TRIP</option>
                        </select>
                    </div>
                    <div class="col-4 ">
                        <label class="labels">CAUSA</label>
                        <select class="form-control">
                        <option>MUDANÇA DE MOTOR</option>
                        <option>PLS</option>
                        <option>PLST</option>
                        <option>TRIP</option>
                        </select>
                    </div>
                    <div>
                        <button class="btn btn-modal btn-green rounded-circle">+</button>
                    </div>
                </div>
            </template>
            <template>
                <div class="row mb-2">
                    <div class="col-3 mb-3">
                    <span style="color: #B5B5B5;">Nome: Diego Machado</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Chave de acesso: 123456789</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Data e hora: 16/06/2020 às 12:00</span>
                    </div>
                </div>
                <div class="row">
                    <span class="col-12 cadastro-suggest">Sugestão:</span>
                </div>
                <div class="row card-suggest">
                    <div class="col card-mod">
                        <div class="row">
                            <div class="col mt-2 mb-3">
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:modal-footer>
                <b-button class="btn-cancel">
                    <img src="../../static/img/cancelar.svg" alt="cancel"/>
                    Cancelar
                </b-button>
                <b-button class="btn-enviar">
                    <img src="../../static/img/aceitar.svg" alt="accept"/>
                    Aceitar
                </b-button>
            </template>
        </b-modal> 
    </div>
</template>

<script>
import SuggestionCard from '~/components/SuggestionCard.vue';
import SuggestionDetail from '~/components/SuggestionDetail.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        SuggestionCard,
        SuggestionDetail
    },

    data() {
        return {
            checked1: true,
            checked2: true,
            select1: "",
            select2: "",
            select3: "",
            checkbox1:"",
            checkbox2:"",
            checkbox3:"",
            checkbox4:"",
            uniqueDetails: [],
        }
    },

    methods: {
        ...mapActions(['loadSuggestions']),
    },

    computed: {
        sugDetail() {
            return this.$store.state.suggest
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
        // console.log(this.filteredOptions)
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

.card-mod {
    background: #FFFFFF;
    border: 1px solid rgba(31, 32, 65, 0.1);
    box-sizing: border-box;
    border-radius: 4px;

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