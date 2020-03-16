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
                    <option>CAV13</option>
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
                <card-registered :alarm="item"/>
            </div>
        </div>

        <!-- <div class="row card mt-4" >
            <div class="col-sm-4 card-white" v-for="item in registeredAlarms" :key=" item.id">
                <h1>PLST TG 31</h1>
                <span>Causa</span>
                <p>TEMPERATURA ELEVADA ROLAMENTO DO ESTATOR GERADOR</p>
                <hr>
            </div>
        </div> -->
    </div>
</template>

<script>
import CardRegistered from '~/components/CardRegistered.vue'
import { mapActions } from 'vuex'

export default {
    components: {
        CardRegistered,
    },

    data() {
        return {
        ug: "UG 12",
        type: "PLS",
        registeredAlarms: []
            
        }

    },

    computed: {
        alarms() {
            return this.$store.state.cardAlarm
        },
    },

    methods: {
        ...mapActions(['loadRegistered']),

        changeCards() {
            this.registeredAlarms.splice(0)
            this.registeredAlarms.push({local: this.ug, name: this.type})
            this.loadRegistered(this.registeredAlarms[0])
        }
    },

    async created() {
        this.registeredAlarms.push({local: this.ug, name: this.type})
        this.loadRegistered(this.registeredAlarms[0])
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


</style>