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
          <nuxt-link to="/" class="btn mt-2 mr-4">
            <img class="icons" v-b-tooltip.hover title="Pagina principal" src="../static/img/home.svg" alt="Homealt" /> 
          </nuxt-link>
<<<<<<< HEAD
=======
          <nuxt-link to="/alarm" class="btn mt-2 mr-4"> 
            <img class="icons" v-b-tooltip.hover title="Alarmes ativos" src="../static/img/avalanche.svg" alt="Aval" /> 
          </nuxt-link>
>>>>>>> develop
          <nuxt-link to="/registered" class="btn mt-2 mr-4"> 
            <img class="icons" v-b-tooltip.hover title="Alarmes cadastrados" src="../static/img/edit.svg" alt="Editalt" /> 
          </nuxt-link>
          <nuxt-link to="/register" class="btn btn-links mt-2 mb-2 ml-3">
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
  background-color: #00B2A9;
}

.btn-links:hover {
  color: #ffffff;
  transition: $transition;
}

.icons {
  height: 2em;
  position: absolute;
}

.position {
  display: flex;
  position: relative;
  justify-content: flex-end;
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
