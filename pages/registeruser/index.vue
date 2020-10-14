<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-6 mt-5">
                <h1>Cadastro de usuários</h1>
            </div>
            <div class="col-2 d-flex justify-content-center mt-5">
                <label class="label-search">BUSCAR</label>
            </div>
            <div class="col-4 mt-5">
                <input class="form-control search-input">
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-3">
                <label class="labels mt-4">NOME</label>
                <input class="form-control" placeholder="Nome do usuário">
            </div>
            <div class="col-2">
                <label class="labels mt-4">CHAVE</label>
                <input class="form-control" placeholder="ABCD">
            </div>
            <div class="col-2">
                <label class="labels mt-4">PERFIL</label>
                <select class="form-control">
                    <option>
                    </option>
                </select>
            </div>
            <div class="col-2">
                <label class="labels mt-4">UNIDADE</label>
                <select class="form-control">
                    <option>
                    </option>
                </select>
            </div>
            <div class="col-3">
                <b-button class="btn btn-green btn-save">Salvar</b-button>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col card card-user">
                <table class="table mt-4">
                    <thead>
                    <tr class="table-title">
                        <th scope="col">NOME</th>
                        <th scope="col">CHAVE</th> 
                        <th scope="col">PERFIL</th> 
                        <th scope="col">UNIDADE</th> 
                        <th></th><th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Carlos Humberto</td>
                        <td>ABCD</td>
                        <td>Administrador</td>
                        <td>SEDE</td>
                        <td>
                            <img class="editing" src="../../static/img/editSelect.svg" alt="edit" />
                        </td>
                        <td><img class="deleting" src="../../static/img/deleteSelect.svg" alt="del"/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {

    data() {
        return {
    
        }
    },

    methods: {
        
    },

    computed: {

    },

    created() {
        
    }
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.table-title {
    color: #226E48;
}

.card-user {
    border-top-right-radius: $border-radius;
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    background: rgb(248, 245, 245);

}

.label-search {
    position: relative;
    top: 15px;
    left: 55px;
    font-size: 15px;
    color: #1F2041;
}

.labels {
    color: #226E48;
    font-size: 15px;
}

.search-input {
    position: relative;
    top: 10px;
}

.btn-save {
    position: relative;
    top: 55px;
    width: 255px;
}

</style>