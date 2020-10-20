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
                <input class="form-control" placeholder="Nome do usuário" v-model="name">
            </div>
            <div class="col-2">
                <label class="labels mt-4">CHAVE</label>
                <input class="form-control" placeholder="ABCD" v-model="key">
            </div>
            <div class="col-2">
                <label class="labels mt-4">PERFIL</label>
                <select class="form-control" v-model="profile">
                    <option v-for="item in profileOptions" :key="item.id">
                        {{item}}
                    </option>
                </select>
            </div>
            <div class="col-2">
                <label class="labels mt-4">UNIDADE</label>
                <select class="form-control" v-model="unit">
                    <option v-for="item in profileUnit" :key="item.id">
                        {{item}}
                    </option>
                </select>
            </div>
            <div class="col-3">
                <b-button class="btn btn-green btn-save" @click="saveUser()">Salvar</b-button>
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
                    <tr v-for="item in profileUser" :key="item.id">
                        <td>{{item.nome}}</td>
                        <td>{{item.chave}}</td>
                        <td>{{item.perfil}}</td>
                        <td>{{item.unidade}}</td>
                        <td>
                            <img class="editing" src="../../static/img/editSelect.svg" alt="edit" />
                        </td>
                        <td>
                            <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" @click="deleteUser(item.id)"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- MODAL -->
        <!-- <b-modal size="xl" :id="modal_id">

        </b-modal> -->
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export const HOST_API = process.env.baseURL;

export default {

    data() {
        return {
            name: "",
            key: "",
            profile: "",
            unit: "",
            allData: [],
        }
    },

    methods: {
        ...mapActions(['gettingProfile', 'postProfile']),

        async saveUser() {
            this.allData.splice(0)
            
            this.allData.push({
                nome: this.name,
                chave: this.key,
                perfil: this.profile,
                unidade: this.unit

            })

            await this.postProfile({info: this.allData[0]})
            this.gettingProfile()
        },

        async deleteUser(id) {
            await this.$axios
            .delete(
                HOST_API + '/perfis/' +
                id
            )
            .then(() => {
                this.gettingProfile()
            })
        }

    },

    computed: {
        profileOptions() {
            return this.$store.state.getProfile.opcoes_perfil
        },
        profileUnit() {
            return this.$store.state.getProfile.opcoes_unidades
        },
        profileUser() {
            return this.$store.state.getProfile.usuarios
        },

    },

    created() {
        this.gettingProfile()
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
    background: white;

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