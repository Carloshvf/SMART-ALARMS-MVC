<template>
    <div class="row card-suggest">
        <div class="col suggest-options">
            <div class="row mt-2">
                <div class="col-1">
                    <img src="../static/img/pencil-box.svg" alt="Edit" />   
                </div>
                <div class="col-1" style="color:#02592E;">31</div>
                <div class="col-1" style="color:#02592E;">PLST</div>
                <div class="col-5">Elevação de temperatura da turbina axial</div>
                <div class="col-4 status-align">
                    <span class="badge green mr-1">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    Implementada
                </div>
                <div class="row card-suggest">
                    <div class="col-11 mt-1">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </div>
                    <b-button class="btn btn-consulta" v-b-modal="'modal-consulta'">CONSULTA</b-button>
                </div>
                
                <div class="col-3 mb-3">
                    <span style="color: #B5B5B5;">Nome: Diego Machado</span>
                </div>
                <div class="col-4 mb-3">
                    <span style="color: #B5B5B5;">Chave de acesso: 123456789</span>
                </div>
                <div class="col-4 mb-3">
                    <span style="color: #B5B5B5;">Data e hora: 16/06/2020 às 12:00</span>
                </div>
            </div>
        </div>
        <!-- MODAL -->
        <b-modal size="xl" id="modal-consulta">
            <template v-slot:modal-title>
                <div class="card-consulta">
                    <h1>PLST TG 31</h1>
                    <span class="reason">Causa</span>
                    <div class="row">
                        <div class="col-9">
                            <p class="mb-1 titles">TEMPERATURA ELEVADA ROLAMENTO DO ESTATOR GERADOR</p>
                        </div>
                        <div class="col-3" style="text-align: right;">
                            <span class="titles">STATUS: </span>
                            <span>&nbsp;</span>
                            <span class="badge refuse mr-1">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span class="refused">Recusada</span>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                    <div class="col border-line"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Nome: Diego Machado</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Chave de acesso: 123456789</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Data e hora: 16/06/2020 às 12:00</span>
                    </div>
                    <div class="col-3 mb-3" style="text-align: right;">
                        <span class="consulta-suggest">Gestão Unidade:</span>
                        <span style="color: #226E48">Em análise</span>
                    </div>
                </div>
                <div class="row"> 
                    <span class="col-12 consulta-suggest">Observação:</span>
                </div>
                 <div class="row card-suggest">
                     <div class="col-10 observ">
                        <p>Digite aqui sua observação</p>
                     </div>
                     <div class="col-2" style="text-align: center;">
                         <b-button class="btn-enviar">
                            <img src="../static/img/aceitar.svg" alt="accept"/>
                            Aceitar
                        </b-button>
                         <b-button class="btn-cancel">
                            <img src="../static/img/cancelar.svg" alt="cancel"/>
                            Cancelar
                        </b-button>
                     </div>
                </div>
                <!-- 2 -->
                <div class="row mt-3">
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Nome: Diego Machado</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Chave de acesso: 123456789</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Data e hora: 16/06/2020 às 12:00</span>
                    </div>
                    <div class="col-3 mb-3" style="text-align: right;">
                        <span class="consulta-suggest">Gestão Sede:</span>
                        <span style="color: #226E48">Em análise</span>
                    </div>
                </div>
                <div class="row"> 
                    <span class="col-12 consulta-suggest">Observação:</span>
                </div>
                 <div class="row card-suggest">
                     <div class="col-10 observ">
                        <p>Digite aqui sua observação</p>
                     </div>
                     <div class="col-2" style="text-align: center;">
                         <b-button class="btn-enviar">
                            <img src="../static/img/aceitar.svg" alt="accept"/>
                            Aceitar
                        </b-button>
                         <b-button class="btn-cancel">
                            <img src="../static/img/cancelar.svg" alt="cancel"/>
                            Cancelar
                        </b-button>
                     </div>
                </div>
                <!-- 3 -->
                <div class="row mt-3">
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Nome: Diego Machado</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Chave de acesso: 123456789</span>
                    </div>
                    <div class="col-3 mb-3">
                        <span style="color: #B5B5B5;">Data e hora: 16/06/2020 às 12:00</span>
                    </div>
                    <div class="col-3 mb-3" style="text-align: right;">
                        <span class="consulta-suggest">Executor:</span>
                        <span style="color: #226E48">Em análise</span>
                    </div>
                </div>
                <div class="row"> 
                    <span class="col-12 consulta-suggest">Observação:</span>
                </div>
                 <div class="row card-suggest">
                     <div class="col-10 observ">
                        <p>Digite aqui sua observação</p>
                     </div>
                     <div class="col-2" style="text-align: center;">
                         <b-button class="btn-enviar">
                            <img src="../static/img/aceitar.svg" alt="accept"/>
                            Aceitar
                        </b-button>
                         <b-button class="btn-cancel">
                            <img src="../static/img/cancelar.svg" alt="cancel"/>
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
    border-radius: 5px;

    p {
        color: #052F1A;
        opacity: 0.6;
    }
}

.consulta-suggest {
    font-weight: bold;
    font-size: 16px;
    color: #226E48;
}

.refuse {
    background: #E17000;
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