<template>
    <div class="container-fluid">
        <div class="row card-size mt-5">
            <div class="col-6 mt-4">
                <h1>Sugestões</h1>
            </div>
            <div class="col-6 mt-4">
                <b-button class="btn-cadastrar"><img class="cross-img" src="../../static/img/plus.svg" alt="cross"/>
                    <span class="">CADASTRAR</span> 
                </b-button>
            </div>
        </div>
        <div class="row card-size">
            <div class="col card mt-4">
                <suggestion-card/>
                <div class="row card-suggest">
                    <div class="col card-border">
                        <div class="row mt-3 mb-3" style="font-size:14px">
                            <div class="col-1">Editar</div>
                            <div class="col-1">UG</div>
                            <div class="col-1">TIPO</div>
                            <div class="col-3">CAUSA BÁSICA</div>
                            <div class="col-6 status-align">STATUS</div>
                        </div>
                    </div>
                </div>
                <div class="row card-suggest">
                    <div class="col suggest-options">
                        <div class="row mt-2">
                            <div class="col-1">
                                <img src="../../static/img/pencil-box.svg" alt="Edit" />   
                            </div>
                            <div class="col-1" style="color:#02592E;">31</div>
                            <div class="col-1" style="color:#02592E;">PLST</div>
                            <div class="col-3">Elevação de temperatura da turbina axial</div>
                            <div class="col-6 status-align">
                                <span class="badge green mr-1">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                Implementada
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-11 mt-3 mb-2">
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </span>
                            </div>
                            <div class="col-1">
                                <b-button class="btn btn-consulta" v-b-modal="'my-modal'">CONSULTA</b-button>
                            </div>
                            <div class="col-3 mt-2 mb-3">
                                <span style="color: #B5B5B5;">Nome: Diego Machado</span>
                            </div>
                             <div class="col-4 mt-2 mb-3">
                                <span style="color: #B5B5B5;">Chave de acesso: 123456789</span>
                            </div>
                             <div class="col-4 mt-2 mb-3">
                                <span style="color: #B5B5B5;">Data e hora: 16/06/2020 às 12:00</span>
                            </div>
                        </div>
                        <!-- MODAL -->
                        <b-modal size="xl" id="my-modal">Hello From My Modal!</b-modal> 
                        <!--  -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SuggestionCard from '~/components/SuggestionCard.vue'

export default {
    components: {
        SuggestionCard
    },

    methods: {
        
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';

.btn-cadastrar {
    position: absolute;
    width: 151px;
    height: 44px;
    left: 400px;
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

.card-size {
    width: 70%;
    margin: 0 auto;
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

.suggest-options {
    background: #FFFFFF;
    border: 1px solid #999999;
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

.btn-consulta {
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