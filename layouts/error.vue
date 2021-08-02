<template>
  <div class="error-container">
    <div class="error-content">
      <div>
        <h1>A página não pode ser carregada porque ocorreu um erro.</h1>
        <span>Retorne para a tela principal aqui:<nuxt-link to="/units"> Retornar para tela de unidades</nuxt-link></span>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      title: 'Lost?'
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.error-content {
  width: 90%;
  margin-top: 250px;
  max-width: 800px;
  text-align: center;
}

.error-content > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-content > div > h1 {
  font-size: 30px;
  margin: 0;
}

.error-content > img {
  width: 200px;
}

a {
  text-decoration: unset;
  color: var(--color-tpBlue);
}
</style>