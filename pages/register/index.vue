<template>
  <div class="container">
    <div class="form-row">
      <div class="col">
        <h1 class="mt-5 titles">Cadastro de alarme</h1>
      </div>
    </div>
    <!-- CADASTRO DE ALARMES -->
    <div class="form-row">
      <div class="col">
        <p class="mt-4">TIPO DE DESLIGAMENTO</p>
        <select class="form-control">
          <option>PLS</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div class="col-9">
        <p class="mt-4">CAUSA</p>
        <input type="text" class="form-control" placeholder="Escreva aqui" >
      </div>
    </div>

    <div class="form-row">
      <div class="col-2">
        <p class="mt-4">ENDEREÇO DE MEDIDA</p>
        <input type="text" class="form-control" placeholder="22LYA00EZ101_XG01" >
      </div>
      <div class="col-1">
        <p class="mt-4">UNIDADE</p>
        <input type="text" class="form-control" placeholder="ºC" >
      </div>
      <div class="col-2">
        <p class="mt-4">OPERADORES</p>
        <select class="form-control">
          <option>E</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div class="col-1">
        <button class="btn btn-green rounded-circle mt-5">+</button>
      </div>
      <div class="col-3">
        <p class="mt-4">ENDEREÇO DE ALARME</p>
        <input type="text" class="form-control" placeholder="22LYA00EZ101_XG01" >
      </div>
      <div class="col-1">
        <p class="mt-4">ATIVAÇÃO</p>
        <select class="form-control">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div class="col-1">
        <button class="btn btn-green rounded-circle mt-5">+</button>
      </div>
    </div>
    <!-- CADASTRO DE ALARMES -->
    <div class="form-row">
      <div class="col">
        <p class="mt-4">LISTA DE ALARMES</p>
        <input class="form-control push-area" type="text" readonly>
        <button class="btn btn-green btn-validar mt-4">Validar</button>
      </div>
    </div>
    <!-- LISTA DE ALARMES -->
    <div class="form-row">
      <div class="col">
        <h4 class="mt-5 titles">Canais</h4>
      </div>
    </div>
    
    <div class="form-row">
      <div class="col-2">
        <p class="mt-3">ENDEREÇO DO ALARME</p>
        <input type="text" class="form-control" placeholder="22LYA00EZ101_XG01" >
      </div>
      <div class="col-1">
        <p class="mt-3">ATIVAÇÃO</p>
        <select class="form-control">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div class="col-2">
        <p class="mt-3">ENDEREÇO DE MEDIDA</p>
        <input type="text" class="form-control" placeholder="22LYA00EZ101_XG01" >
      </div>

      <div class="col-1">
        <p class="mt-3">UNIDADE</p>
        <input type="text" class="form-control" placeholder="ºC" >
      </div>
      <div class="col-1">
        <button class="btn btn-green rounded-circle mt-5">+</button>
      </div>
    </div>
    
    <div class="form-row">
      <div class="col-2">
        <h5 class="mt-5 ml-2 address">ENDEREÇO DE MEDIDA</h5>
      </div>
      <div class="col-4">
        <h5 class="mt-5 ml-5 address">ENDEREÇO DO ALARME</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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

.btn-validar {
  width: 156px;
  height: 52px;
}

.push-area {
  height: 163px;
}

.address {
  font-size: 14px;
  font-weight: bold;
}

</style>