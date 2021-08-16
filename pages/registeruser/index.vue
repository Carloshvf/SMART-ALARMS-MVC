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
                <input class="form-control search-input" v-model="search">
            </div>
        </div>
        <div class="card p-2 pb-4 mt-4">
        <div class="row m-0">
            <div class="col-3">
                <label class="labels mt-4">NOME</label>
                <input class="form-control" placeholder="Nome do usuário" v-model="name">
            </div>
            <div class="col-2">
                <label class="labels mt-4">CHAVE</label>
                <input class="form-control" style="text-transform: uppercase;" placeholder="ABCD" v-model="key">
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
                <b-button class="btn btn-green btn-save" @click="saveUser('b-toaster-bottom-right')">
                    <img class="cross-img" src="../../static/img/plus.svg" alt="cross"/>
                    <span>Salvar</span>
                </b-button>
                <nuxt-link to="/units" class="btn btn-return">Cancelar</nuxt-link>
            </div>
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
                    <tr v-for="item in computed_filter" :key="item.id">
                        <td>{{item.nome}}</td>
                        <td>{{item.chave}}</td>
                        <td>{{item.perfil}}</td>
                        <td>{{item.unidade}}</td>
                        <td>
                            <img class="editing" src="../../static/img/editSelect.svg" alt="edit" @click="showModal(item.id.toString())"/>
                        </td>
                        <td>
                            <img class="deleting" src="../../static/img/deleteSelect.svg" alt="del" @click="deleteUser(item.id, 'b-toaster-bottom-right')"/>
                        </td>
                         <!-- MODAL -->
                        <b-modal size="lg" :id="item.id.toString()">
                            <template v-slot:modal-title>
                                <h1 class="modal-title">Edição de usuário</h1>
                            </template>
                            <template >
                                <div class="row">
                                    <div class="col-6">
                                        <label class="labels">NOME</label>
                                        <input class="form-control" placeholder="Nome do usuário" v-model="modal1">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-2">
                                        <label class="labels mt-4">CHAVE</label>
                                        <input class="form-control" v-model="modal2" :disabled="true">
                                    </div>
                                    <div class="col-3">
                                        <label class="labels mt-4">PERFIL</label>
                                        <select class="form-control" v-model="modal3">
                                            <option v-for="item in modalOption2" :key="item.id">
                                                {{item}}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-3">
                                        <label class="labels mt-4">UNIDADE</label>
                                        <select class="form-control" v-model="modal4">
                                            <option v-for="item in modalOption3" :key="item.id">
                                                {{item}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </template>
                            <template v-slot:modal-footer>
                                <b-button class="btn-cancel" @click="cancelEdit(item.id.toString())">
                                    Cancelar
                                </b-button>
                                <b-button class="btn-enviar" @click="editing(item.id.toString(),'b-toaster-bottom-right')">
                                    Salvar
                                </b-button>
                            </template>
                        </b-modal>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
       
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import VueTypeahead from 'vue-typeahead'
export const HOST_API = process.env.baseURL;

export default {
extends: VueTypeahead,

    data() {
        return {
            search: "",
            name: "",
            key: "",
            profile: "",
            unit: "",
            allData: [],
            allEdit: [],
        }
    },

    methods: {
        ...mapActions(['gettingProfile', 'postProfile', 'gettingProfileEdit', 'editProfile', 'idCheck', 'logOff']),

        async showModal(id) {
            await this.gettingProfileEdit(id)
            setTimeout(() => {
                this.$bvModal.show(id)
            }, 400);
            
        },

        async saveUser(toaster) {
            this.allData.splice(0)
            
            this.allData.push({
                nome: this.name,
                chave: this.key.toUpperCase(),
                perfil: this.profile,
                unidade: this.unit,
            })

            await this.postProfile({info: this.allData[0]})
            this.gettingProfile()

            if (this.errPost == 'Unidade sede só é válida para perfil de administrador') {
                this.$bvToast.toast(this.errPost, {
                title: `Erro`,
                toaster: toaster,
                solid: true
                })
            }
            
        },

        async deleteUser(id, toaster) {
            await this.$axios
            .delete(
                HOST_API + '/perfis/' + id, {
                headers: {
                'Authorization': this.$cookies.get('token') || '',
                }} 
            )
            .then(() => {
                this.gettingProfile()
            })

            this.$bvToast.toast('Perfil Deletado com sucesso', {
                title: `Delete`,
                toaster: toaster,
                solid: true
            })
        },

        async editing(id, toaster) {
            this.allEdit.splice(0)

            this.allEdit.push({
                nome: this.modal1,
                chave: this.modal2,
                perfil: this.modal3,
                unidade: this.modal4
            })

            await this.editProfile({id: id, info: this.allEdit[0]})
            this.gettingProfile()

            if (this.errEdit == 'Unidade sede só é válida para perfil de administrador') {
                this.$bvToast.toast(this.errEdit, {
                title: `Erro`,
                toaster: toaster,
                solid: true
                })
            } else {
                this.$bvToast.toast('Perfil Editado com sucesso', {
                    title: `Edição`,
                    toaster: toaster,
                    solid: true
                })
                this.$bvModal.hide(id)
            }
            
        },

        cancelEdit(id) {
            this.$bvModal.hide(id)
        },

    },

    computed: {
        session() {
            return this.$store.state.checkingSession
        },
        profileOptions() {
            return this.$store.state.getProfile.opcoes_perfil
        },
        profileUnit() {
            return this.$store.state.getProfile.opcoes_unidades
        },
        profileUser() {
            return this.$store.state.getProfile.usuarios
        },
        modal1: {
            get () {
                return this.$store.state.getProfileEdit.nome
            },
            set (value) {
                this.$store.commit('setModal1', value)
            }
        },
        modal2: {
            get () {
                return this.$store.state.getProfileEdit.chave
            },
            set (value) {
                this.$store.commit('setModal2', value)
            }
        },
        modal3: {
            get () {
                return this.$store.state.getProfileEdit.perfil
            },
            set (value) {
                this.$store.commit('setModal3', value)
            }
        },
        modal4: {
            get () {
                return this.$store.state.getProfileEdit.unidade
            },
            set (value) {
                this.$store.commit('setModal4', value)
            }
        },
        modalOption2() {
            return this.$store.state.getProfileEdit.opcoes_perfil
        },
        modalOption3() {
            return this.$store.state.getProfileEdit.opcoes_unidades
        },

        errPost() {
            return this.$store.state.errSede
        },

        errEdit() {
            return this.$store.state.errEditSede
        },

        computed_filter: function () {
            if (this.profileUser != undefined) {
                let filterName = this.search.toLowerCase(),
                filterChave = this.search.toLowerCase(),
                filterPerfil = this.search.toLowerCase(),
                filterUnidade = this.search.toLowerCase()
            
            return this.profileUser.filter(function(item){
                let filtered = true
                
                if(filterName && filterName.length > 0){
                    filtered = item.nome.toLowerCase().includes(filterName)
                }
                if(filterChave && filterChave.length > 0 && filtered == false){
                    filtered = item.chave.toLowerCase().includes(filterChave)
                }
                if(filterPerfil && filterPerfil.length > 0 && filtered == false){
                    filtered = item.perfil.toLowerCase().includes(filterPerfil)
                }
                if(filterUnidade && filterUnidade.length > 0 && filtered == false){
                    filtered = item.unidade.toLowerCase().includes(filterUnidade)
                }
            
                    return filtered
                })
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

        this.gettingProfile()
        
    }
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.btn-enviar {
    background-color: #226E48;
    color: white;
    border: none;

    &:hover{
        background-color: #226E48;
        color: white;
    }
}

.btn-return {
    position: relative;
    top: 55px;
    left: 10px;
    width: 120px;
    color: #ffffff;
    background-color: $dark-purple;
    border-radius: 22px;

    &:hover{
        background-color: $dark-purple;
        color: white;
    }
}

.btn-cancel {
  color: #ffffff;
  background-color: $dark-purple;

  &:hover{
        background-color: $dark-purple;
        color: white;
    }
}

.modal-title {
    color: #1F2041;

}

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

.cross-img {
    position: absolute;
    right: 68%;
    bottom: 2px;
}

.btn-save {
    position: relative;
    top: 55px;
    width: 120px;
    background: linear-gradient(180deg, #008D46 0%, #00B75B 100%);
    border-radius: 22px;

    span {
        position: relative;
        left: 5px;       
        
    }
}

</style>