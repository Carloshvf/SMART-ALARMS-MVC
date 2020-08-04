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
                    <b-button class="btn btn-consulta" v-b-modal="'my-modal'">CONSULTA</b-button>
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
            <!-- MODAL -->
            <b-modal size="xl" id="my-modal">Hello From My Modal!</b-modal> 
            <!--  -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.suggest-options {
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 4px;
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