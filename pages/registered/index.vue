<template>
    <div class="container">
        <div class="form-row mt-4">
            <div class="col mt-5">
                <h1 class="alarm-title">Alarmes Cadastrados</h1>
            </div>
            <div class="col-2 align-items-end mt-5">
                <label class="">FILTRO UG</label>
                <select class="form-control">
                <option>31</option>
                </select>
            </div>
            <div class="col-2 mt-5">
                <label class="">FILTRO DE TIPO</label>
                <select class="form-control">
                <option>PLST</option>
                </select>
            </div>
        </div>

        <div class="form-row card mt-4">
            <div class="col-sm-4 card-white">
                <h1>PLST TG 31</h1>
                <span>Causa</span>
                <p>TEMPERATURA ELEVADA ROLAMENTO DO ESTATOR GERADOR</p>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
import CardRegistered from '~/components/CardRegistered.vue'

export default {
    components: {
        CardRegistered,
    },

      data() {
        return

    },

    methods: {
        
    }
}

</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.alarm-title {
    font-size: 42px;
}


</style>