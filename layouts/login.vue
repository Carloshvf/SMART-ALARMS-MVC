<template>
  <div class="body-login">
    <header-smart></header-smart>
    <nuxt />
  </div>
</template>

<script>
import HeaderSmart from '~/components/HeaderSmart.vue'

export default {
  components: {
    HeaderSmart
  }

};
</script>

<style lang="scss" scoped>
.body-login {
  background-color: #008542;
  height: 100vh;
}
</style>
