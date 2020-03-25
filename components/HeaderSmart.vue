<template>
  <section id="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-7 position">
          <nuxt-link class="align-items-center py-2" to="/">
            <img class="mb-3" src="../static/img/alarm.svg" alt="Logo" />
            <span class="text-uppercase mb-0 ml-2">smart alarms</span>
          </nuxt-link>
        </div>
        <div class="col-5 position">
          <nuxt-link to="/" class="btn mt-2 mr-2" v-b-tooltip.hover title="Pagina principal">
           <home-outline class="icon-color"/> 
           </nuxt-link>
          <nuxt-link to="/registered" class="btn mt-2 mr-2" v-b-tooltip.hover title="Alarmes cadastrados"> 
          <pencil-box-outline class="icon-color"/> 
          </nuxt-link>
          <nuxt-link to="/register" class="btn btn-links mt-2 mb-2">
          Cadastrar Alarmes
          </nuxt-link>
         
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /#header -->
</template>

<script>
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue';
import PencilBoxOutline from 'vue-material-design-icons/PencilBoxOutline.vue';

export default {
  components: {
    HomeOutline,
    PencilBoxOutline
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';

.btn-links {
  color: #ffffff;
  background-color: $light-purple;
}

.btn-links:hover {
  color: #ffffff;
  transition: $transition;
}

.position {
  display: flex;
  justify-content: flex-end;
}

.icon-color {
  color: #008542 !important;
}

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
