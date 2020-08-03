<template>
    <div class="row">
        <div class="col-2 card-suggest">
            <label class="labels">FILTRO UG</label>
            <select class="form-control">
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
        <div class="col-2 card-suggest">
            <label class="labels">FILTRO DE TIPO</label>
            <select class="form-control">
            <option>Todos</option>
            <option>PLS</option>
            <option>PLST</option>
            <option>TRIP</option>
            </select>
        </div>
        <div class="col-3 card-suggest">
            <label class="labels">CAUSA BÁSICA</label>
            <select class="form-control">
            <option>MUDANÇA DE MOTOR</option>
            <option>PLS</option>
            <option>PLST</option>
            <option>TRIP</option>
            </select>
        </div>
        <div class="col-2 card-suggest">
            <label class="labels">STATUS</label>
            <b-form-checkbox class="checkboxes">Implementada</b-form-checkbox>
            <b-form-checkbox class="checkboxes" v-model="checked1">Aguardando aprovação</b-form-checkbox>
        </div>
        <div class="col-3 card-suggest mt-2">
            <br>
            <b-form-checkbox class="checkboxes" v-model="checked1">Aguardando aprovação</b-form-checkbox>
            <b-form-checkbox class="checkboxes">Recusada</b-form-checkbox>
        </div>
    </div>
</template>


<script>

export default {
  data() {
      return {
        checked1: true,
      }
  }

}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
.labels {
    font-size: 12px;
    font-weight: bold;
} 

.checkboxes {
    font-size: 14px;
}

</style>