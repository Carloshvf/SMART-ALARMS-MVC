<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col mt-5">
                <h1 class="alarm-title">Alarmes Cadastrados</h1>
            </div>
            <div class="col-2 align-items-end mt-5">
                <label class="labels">FILTRO UG</label>
                <select class="form-control">
                    <option>31</option>
                </select>
            </div>
            <div class="col-2 mt-5">
                <label class="labels">FILTRO DE TIPO</label>
                <select class="form-control">
                    <option>PLST</option>
                </select>
            </div>
        </div>

        <div class="row" >
            <div class="col-sm-4" v-for="item in registeredAlarms" :key="item.id">
                <card-registered/>
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

export default {
    components: {
        CardRegistered,
    },

      data() {
          return {
            //   No momento só precisa duplicar os cards então n importa os valores dentro do array 
            registeredAlarms: [
                {id: 1, titulo: "vghcmh", motivo: "hjvjhv", causa:"ftth"}, 
                {id: 2, titulo: "vghcmh", motivo: "hjvjhv", causa:"ftth"},
                {id: 3, titulo: "vghcmh", motivo: "hjvjhv", causa:"ftth"}
            ]
              
        }
    },

    methods: {
        
    }
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