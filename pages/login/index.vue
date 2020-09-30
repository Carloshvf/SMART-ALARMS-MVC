<template>
  <div class="container d-flex justify-content-center mt-5">
    <div class="row mt-4">
      <div class="col mt-5">
        <div class="card card-login">
          <h1 class="aligning mt-1">ACESSO</h1>
          <div class="col">
            <label class="labels mt-3">USUÁRIO:</label>
            <input class="passwords form-control">
          </div>
          <div class="col">
            <label class="labels mt-3">SENHA:</label>
            <input class="passwords form-control">
          </div>
          <div class="col">
            <b-button class="btn btn-green btn-login mt-4 mb-4">Acessar</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  layout: "login",
  data() {
      return {

      }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.positioning {
  background-color: #008542;
}

.card-login {
  padding: 20px;
  background-color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  font-weight: bold;
  width: 470px;
}

.labels {
  position: relative;
  left: 30px;
  line-height: 16px;
  font-size: 14px;
}

.passwords {
  position: relative;
  left: 30px;
  width: 340px;
}

.btn-login {
  position: relative;
  left: 30px;
  width: 340px;

  &:hover{
    background-color: #008542;
  }
  
}

.aligning {
  text-align: center;
  color: #1F2041;
}


</style>