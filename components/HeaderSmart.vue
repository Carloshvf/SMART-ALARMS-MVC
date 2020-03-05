<template>
  <section id="header">
    <div class="container">
      <div class="row">
        <nuxt-link class="d-flex justify-content-center align-items-center py-2" to="/">
          <img src="../static/img/alarm.svg" alt="Logo" />
          <span class="text-uppercase mb-0 ml-2">smart alarms</span>
        </nuxt-link>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /#header -->
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';

#header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  box-shadow: $shadow;
  z-index: 1000;

  img {
    width: 2.3%;
  }

  span {
    font-size: 23px;
    font-weight: 700;
    color: black;
  }
}
</style>
