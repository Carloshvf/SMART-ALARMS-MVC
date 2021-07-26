<template>
  <div class="error-container">
    <div class="error-content" >
      <div>
        <h1>Sorry, the page you were looking for doesn't exist.</h1>
        <p>You can return to our <nuxt-link to="/">home page</nuxt-link></p>
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
  max-width: 800px;
  margin: auto;
  display: grid;
  grid-template: auto / auto 200px;
  grid-column-gap: 10px;
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