<template>
  <div class="container d-flex justify-content-center mt-5">
    <div class="row mt-4">
      <div class="col mt-5">
        <div class="card card-login">
          <img class="aligning" src="../static/img/login.png" alt="Logo1" />
          <div class="col">
            <label class="labels mt-3">USUÁRIO:</label>
            <input class="passwords form-control" @keyup.enter="logging()" minlength="1" v-model="name">
          </div>
          <div class="col">
            <label class="labels mt-3">SENHA:</label>
            <input class="passwords form-control" :type="passwordType" @keyup.enter="logging()" minlength="1" v-model="password">
          </div>
          <div class="col mt-4" v-if="validation == 'Login ou senha do usuário é inválido.'">
            <p class="error">{{validation}}</p>
          </div>
          <div class="col">
            <b-button class="btn btn-green btn-login mt-4 mb-4" @click="logging()" :disabled="disabling">Acessar</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import global_mixin from '@/mixins/mixins.js';

export default {
  mixins: [global_mixin],
  layout: "login",
  data() {
      return {
        name: "",
        password: "",
        userData: [],
        userCheck: "",
        passwordType: 'password'
      }
  },

  computed: {
    disabling() {
      return !this.name || !this.password;
    },

    validation() {
      return this.$store.state.valid;
    }
  },

  methods: {
    ...mapActions(['loginUser',]),

    async logging() {
      this.userData.splice(0);
      this.userData.push({
        chave: this.name,
        senha: this.password,
      });
      await this.loginUser({info: this.userData[0]});

      if (this.validation === '') {
        this.$router.push('/units');
      }
      else {
        this.createToast('b-toaster-bottom-right', `Erro`, this.validation, 'danger');
      }
    }
  },

  mounted() {
    // Tentativa de fazer ele jogar pra página de unidades no caso de já ter um token
    this.userCheck = this.$cookies.get('token') || '';
    if (this.userCheck !== '') {
      this.$router.push('/units');
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

.error {
  position: relative;
  text-align: center;
  line-height: 16px;
  font-size: 14px;
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

.btn-cadastro {
  position: relative;
  left: 30px;
  width: 340px;
  color: white;
  background-color: #666666;
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
  position: relative;
  left: 100px;
  height: 150px;
  width: 240px;
}
</style>
