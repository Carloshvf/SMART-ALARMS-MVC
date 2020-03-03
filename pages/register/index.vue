<template>
  <div class="container">
    <div class="form-row align-items-end mt-4">
      <div class="col">
        <h1 class="mt-5 titles">Cadastro de alarme</h1>
      </div>
    </div>
    <!-- -->
    <div class="form-row mt-4">
      <div class="col">
        <p class="mt-4 sizing">TIPO DE DESLIGAMENTO</p>
        <select class="form-control">
          <option>PLS</option>
          <option>PLST</option>
        </select>
      </div>
      <div class="col-10">
        <p class="mt-4 sizing">CAUSA</p>
        <input type="text" class="form-control" placeholder="Escreva aqui..." />
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-sm-6">
        <div class="form-row align-items-end">
          <div class="col-4">
            <p class="sizing">ENDEREÇO DE MEDIDA</p>
            <input
              type="text"
              class="form-control"
              placeholder="22LYA00EZ101_XG01"
            />
          </div>
          <div class="col-2">
            <p class="sizing">UNIDADE</p>
            <input type="text" class="form-control" placeholder="ºC" />
          </div>
          <div class="ml-3">
            <button class="btn btn-green rounded-circle">+</button>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-row align-items-end">
          <div class="col-2">
            <p class="sizing">OPERADORES</p>
            <select class="form-control">
              <option>E</option>
              <option>OU</option>
              <option>(</option>
              <option>)</option>
            </select>
          </div>
          <div class="ml-2 mr-3">
            <button class="btn btn-green rounded-circle">+</button>
          </div>
          <div class="col-4">
            <p class="sizing">ENDEREÇO DE ALARME</p>
            <input
              type="text"
              class="form-control"
              placeholder="22LYA00EZ101_XG01"
            />
          </div>
          <div class="col-2">
            <p class="sizing">ATIVAÇÃO</p>
            <select class="form-control">
              <option>1</option>
              <option>0</option>
            </select>
          </div>
          <div class="ml-3">
            <button class="btn btn-green rounded-circle">+</button>
          </div>
        </div>
      </div>
    </div>
    <!-- CADASTRO DE ALARMES -->
    <div class="row">
      <div class="col-sm">
        <div class="form-row mt-4">
          <div class="col">
            <p class="sizing">LISTA DE ALARMES</p>
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
            <p class="sizing">ENDEREÇO DO ALARME</p>
            <input
              type="text"
              class="form-control"
              placeholder="22LYA00EZ101_XG01"
            />
          </div>
          <div class="col-2">
            <p class="sizing">ATIVAÇÃO</p>
            <select class="form-control">
              <option>1</option>
              <option>0</option>
            </select>
          </div>
          <div class="col-4">
            <p class="sizing">ENDEREÇO DE MEDIDA</p>
            <input
              type="text"
              class="form-control"
              placeholder="22LYA00EZ101_XG01"
            />
          </div>

          <div class="col-1">
            <p class="sizing">UNIDADE</p>
            <input type="text" class="form-control" placeholder="ºC" />
          </div>
          <div class="ml-2">
            <button class="btn btn-green rounded-circle">+</button>
          </div>

          <div class="col-5 mt-4">
            <h5 class="address">ENDEREÇO DO ALARME</h5>
            <p class="alignment mt-3">22LYA00EZ101_XG01</p>
            <hr />
            <p class="alignment mt-3">22LYA00EZ101_XG01</p>
          </div>
          <div class="col-5 mt-4">
            <h5 class="address">ENDEREÇO DE MEDIDA</h5>
            <p class="alignment mt-3">22LYA00EZ101_XG01</p>
            <hr />
            <p class="alignment mt-3">22LYA00EZ101_XG01</p>
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
            <p class="sizing">TIPO</p>
            <select class="form-control">
              <option>Medida</option>
              <option>Status</option>
            </select>
          </div>
          <div class="col-9">
            <p class="sizing">NOME</p>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="form-row align-items-end mt-2">
          <div class="col-4 mt-4">
            <p class="sizing">ENDEREÇO NO SUPERVISÓRIO</p>
            <input type="text" class="form-control" />
          </div>
          <div class="col-2 mt-4">
            <p class="sizing">PRIORIDADE</p>
            <select class="form-control">
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div class="col-2 mt-4">
            <p class="sizing">UNIDADE</p>
            <input type="text" class="form-control" placeholder="ºC" />
          </div>
          <div class="mt-4 ml-4">
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
            <textarea
              class="form-control area"
              placeholder="Escreva aqui..."
              rows="3"
            ></textarea>
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
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </li>
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
export default {}
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

.btn-salvar {
  width: 105px;
  float: right;
}

.push-area {
  height: 163px;
  resize: none;
  background-color: #f7f7f7;
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

@media (min-width: 1200px) {
  .container {
    max-width: 1300px;
  }
}
</style>
