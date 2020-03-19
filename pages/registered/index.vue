<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col mt-5">
                <h1 class="alarm-title">Alarmes Cadastrados</h1>
            </div>
            <div class="col-2 align-items-end mt-5">
                <label class="labels">FILTRO UG</label>
                <select class="form-control" v-model="ug" v-on:change="changeCards()">
                    <option>Todos</option>
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
            <div class="col-2 mt-5">
                <label class="labels">FILTRO DE TIPO</label>
                <select class="form-control" v-model="type" v-on:change="changeCards()">
                    <option>Todos</option>
                    <option>PLS</option>
                    <option>PLST</option>
                    <option>TRIP</option>
                </select>
            </div>
        </div>

        <div class="row" >
            <div class="col-sm-4" v-for="item in alarms" :key="item.id">
                <div class="card mt-4">
                    <div class="card-white">
                        <h1>{{ item.name }}</h1>
                        <span>Causa</span>
                        <p>{{ item.causa }}</p>
                        <hr>
                        <div class="align options">
                            <button class="btn mr-5" @click="deletion(index)">Excluir <delete class="options"></delete></button>
                            
                            <nuxt-link @click.native="editing()" to="/register" no-prefetch class="btn options ml-5">Editar</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import CardRegistered from '~/components/CardRegistered.vue'
import Delete from 'vue-material-design-icons/Delete.vue';
import { mapActions, mapMutations } from 'vuex'

export default {
    components: {
        CardRegistered,
    },

    data() {
        return {
        ug: "Todos",
        type: "Todos",
        registeredAlarms: [],
        deletionAlarms: [],
        persistAlarms: [],
        delMessage: "",
        }

    },

     components: {
        Delete,
    },

    computed: {
        alarms() {
            return this.$store.state.cardAlarm
        },

    },

    methods: {
        ...mapActions(['loadRegistered', 'deleteRegistered', 'persist']),
        ...mapMutations(['teste']),

        changeCards() {
            this.registeredAlarms.splice(0)
            this.registeredAlarms.push({local: this.ug, name: this.type})
            this.loadRegistered(this.registeredAlarms[0])
            
            
        },

        async deletion(index) {
            this.deletionAlarms.splice(0)
            this.deletionAlarms.push({local: this.ug, causa: this.alarms[0].causa})
            // await this.deleteRegistered(this.deletionAlarms[0])
            
            console.log(this.alarms)
            
            
            // this.delMessage = this.$store.state.deleteAlarm
            if (this.delMessage == "deletado com sucesso") {
                alert("Deletado com sucesso")
            } else {
                alert("Não foi possivel deletar")
            }
            
        },

        editing() {
            this.persistAlarms.splice(0)
            this.persistAlarms.push({local: this.ug, causa: this.alarms[0].causa})
            this.persist(this.persistAlarms[0])
        }
    },

    async created() {
        this.registeredAlarms.push({local: this.ug, name: this.type})
        await this.loadRegistered(this.registeredAlarms[0])
        
        
  },

}

</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.alarm-title {
    font-size: 42px;
    color: #1F2041;
}

.labels {
    font-size: 12px;
    font-weight: bold;
}

button:hover {
    color: #008542;
    transition: $transition;
}

.align {
    text-align: center;
}

.options {
    font-weight: bold;
    font-size: 12px;
    color: #B5B5B5;
}

.options:hover {
    color: #008542;
    transition: $transition;
}


</style>