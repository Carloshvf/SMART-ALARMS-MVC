<template>
  <div class="container">
    <div class="form-row align-items-end mt-4">
      <div class="col">
        <h1 class="mt-5 titles">Cadastro de alarme</h1>
      </div>
    </div>
    <!-- Mexer nos hover -->
    <div class="form-row mt-4">
      <div class="col">
        <label class="mt-4 sizing">TIPO DE DESLIGAMENTO</label>
        <select class="form-control">
          <option>PLS</option>
          <option>PLST</option>
        </select>
      </div>
      <div class="col-10">
        <label class="mt-4 sizing">CAUSA</label>
        <input type="text" class="form-control" placeholder="Escreva aqui..." >
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-6">
        <div class="form-row align-items-end">
          <div class="col-4">
            <label class="sizing">ENDEREÇO DE MEDIDA</label>
            <input type="text" class="form-control" placeholder="22LYA00EZ101_XG01" >
          </div>
          <div class="col-2">
            <label class="sizing">UNIDADE</label>
            <input type="text" class="form-control" placeholder="ºC" >
          </div>
          
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-row align-items-end">
          <div class="col-2">
            <label class="sizing">OPERADORES</label>
            <select class="form-control" v-model="operators">
              <option>E</option>
              <option>OU</option>
              <option>(</option>
              <option>)</option>
            </select>
          </div>  
          <div class="ml-2 mr-2">
            <button class="btn btn-green rounded-circle" @click="sendArea()">+</button>
          </div>
          <div class="col-4">
            <label class="sizing">ENDEREÇO DE ALARME</label>
            <input type="text" class="form-control" placeholder="22LYA00EZ101_XG01" >
          </div>
          <div class="col-2">
            <label class="sizing">ATIVAÇÃO</label>
            <select class="form-control" v-model="activation">
              <option>1</option>
              <option>0</option>
            </select>
          </div>
          <div class="ml-3">
            <button class="btn btn-green rounded-circle" @click="sendArea()">+</button> 
          </div>
        </div>
      </div>
    </div>
    <!-- CADASTRO DE ALARMES -->
    <div class="row">
      <div class="col-sm">
        <div class="form-row mt-4">
          <div class="col">
            <label class="mini-title">LISTA DE ALARMES</label>
            <textarea class="form-control push-area" rows="3"></textarea>
            <button class="btn btn-green btn-validar mt-4">Validar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- LISTA DE ALARMES -->
    <div class="row">
      <div class="col-sm-6">
        <div class="form-row mt-5">
          <div class="col-3">
            <h4 class="titles">Canais</h4>
          </div>
        </div>
      
        <div class="form-row align-items-end mt-3">
          <div class="col-4">
            <label class="sizing">ENDEREÇO DO ALARME</label>
            <input type="text" class="form-control" placeholder="22LYA00EZ101_XG01" >
          </div>
          <div class="col-2">
            <label class="sizing">ATIVAÇÃO</label>
            <select class="form-control">
              <option>1</option>
              <option>0</option>
            </select>
          </div>
          <div class="col-4">
            <label class="sizing">ENDEREÇO DE MEDIDA</label>
            <input type="text" class="form-control" placeholder="22LYA00EZ101_XG01" >
          </div>

          <div class="col-1">
            <label class="sizing">UNIDADE</label>
            <input type="text" class="form-control" placeholder="ºC" >
          </div>  
          <div class="ml-2">
            <button class="btn btn-green rounded-circle">+</button>
          </div>

          <div class="col-5 mt-4">
            <h5 class="address">ENDEREÇO DO ALARME</h5>
            <ul class="bullet">
              <li class="alignment mt-3">22LYA00EZ101_XG01</li>
              <hr>
              <li class="alignment mt-3">22LYA00EZ101_XG01</li>
            </ul> 
           
          </div>
          <div class="col-5 mt-4">
            <h5 class="address">ENDEREÇO DE MEDIDA</h5>
            <ul class="bullet">
              <li class="alignment mt-3">22LYA00EZ101_XG01</li>
              <hr>
              <li class="alignment mt-3">22LYA00EZ101_XG01</li>
            </ul> 
          </div>
          
        </div>
      </div>
      <!-- CANAIS -->
      <div class="col-sm-6">
        <div class="form-row  mt-5">
          <div class="col-10 mb-3">
            <h4 class="titles">Status e Medidas</h4>
          </div>

          <div class="col-3">
            <label class="sizing">TIPO</label>
            <select class="form-control" v-model="tipo">
              <option>Medida</option>
              <option>Status</option>
            </select>
            <!-- Tentar usar um toggle pra mexer no tipo (Quando for medida vira UNIDADE, e quando for status ATIVAÇÃO) -->
          </div>
          <div class="col-9">
            <label class="sizing">NOME</label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-row align-items-end mt-4">
          <div class="col-4">
            <label class="sizing">ENDEREÇO NO SUPERVISÓRIO</label>
            <input type="text" class="form-control">
          </div>
          <div class="col-2">
            <label class="sizing">PRIORIDADE</label>
            <select class="form-control">
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div class="col-2">
            <div v-if="tipo == 'Medida'">
              <label class="sizing">UNIDADE</label>
              <input type="text" class="form-control" placeholder="ºC" >
            </div>
            <div v-else-if="tipo == 'Status'">
              <label class="sizing">ATIVAÇÃO</label>
              <select class="form-control">
                <option>1</option>
                <option>0</option>
              </select>
            </div>
          </div>
          <div class="ml-4">
            <button class="btn btn-green rounded-circle ">+</button>
          </div>
        </div>
      </div>
    </div>

  <!-- STATUS E MEDIDAS -->
  <div class="row">
    <div class="col-sm-6">
      <div class="form-row mt-5">
        <div class="col-3">
          <h4 class="titles">Recomendações</h4>
        </div>
      </div>
      <div class="form-row mt-3 justify">
        <div class="col-12">
          <textarea class="form-control area" placeholder="Escreva aqui..." rows="3"></textarea>
        </div>
        <div class="mt-4">
          <button class="btn btn-green rounded-circle">+</button>
        </div>
      </div>
    </div>

    <div class="col-sm-6 ">
        <div class="col-12 mt-5">
          <h5 class="titles">Lista de recomendações</h5>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
          </ul>
        </div>
      <div class="mt-5">
        <button class="btn btn-green btn-salvar">Salvar</button>
      </div>
    </div>
    <!-- RECOMENDAÇÕES -->
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tipo: 'Medida',
      operators: "E",
      activation: "1",
      pushed: [],
    } 
  },

  methods: {
    sendArea() {
      this.pushed.push({})
    }
  }
  
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.titles {
  font-weight: bold;
  h1 {
    font-size: 34px;
  }

}

.justify {
  justify-content: right;
}

.btn-validar {
  width: 156px;
  height: 52px;
}

.area {
  height: 154.24px;
}

.mini-title {
  font-size: 12px;
  font-weight: bold;
}

.btn-salvar {
  width: 105px;
  float: right;
}

.push-area {
  height: 163px;
  resize: none;
  background-color: #F7F7F7;
}

.sizing {
  font-size: 12px;
}

.address {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}

.alignment {
  text-align: center;
  font-size: 14px;
}

.bullet {
  list-style-type: none;
}

@media (min-width: 1200px) {
    .container{
        max-width: 1300px;
    }
}

</style>