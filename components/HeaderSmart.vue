<template>
  <section id="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-5">
          <nuxt-link class="align-items-center py-2" to="/">
            <img class="sizing mt-1 mb-2" src="../static/img/headerIcon.png" alt="Logo" />
          </nuxt-link>
        </div>
        <div class="col-7 position" v-if="headerButtons == true">
          <nuxt-link to="/activealarm" class="btn mt-2 mr-4">
            <img class="icons" v-b-tooltip.hover title="Pagina principal" src="../static/img/home.svg" alt="Homealt" /> 
          </nuxt-link>
          <nuxt-link to="/alarm" class="btn mt-2 mr-4"> 
            <img class="icons" v-b-tooltip.hover title="Alarmes ativos" src="../static/img/avalanche.svg" alt="Aval" /> 
          </nuxt-link>
          <nuxt-link to="/registered" class="btn mt-2 mr-4" v-if="permButtons.alarmes_cadastrados == true"> 
            <img class="icons" v-b-tooltip.hover title="Alarmes cadastrados" src="../static/img/edit.svg" alt="Editalt" /> 
          </nuxt-link>
          <nuxt-link to="/suggestion" class="btn mt-2 mr-4" v-if="permButtons.sugestoes == true"> 
            <img class="icons" v-b-tooltip.hover title="Sugestões" src="../static/img/article.svg" alt="Sug" /> 
          </nuxt-link>
          <nuxt-link to="/units" class="btn mt-2 mr-4"> 
            <img class="icons" v-b-tooltip.hover title="Unidades" src="../static/img/unit.svg" alt="Unit" /> 
          </nuxt-link>
          <b-dropdown class="mt-2 mb-2" :text="user" v-if="user != ''">
            <b-dropdown-item @click="logout()">Logoff</b-dropdown-item>
          </b-dropdown>
          <nuxt-link to="/registeruser" class="btn btn-links mt-2 mb-2 ml-3" v-if="permButtons.cadastrar_perfis == true">Cadastrar Perfis</nuxt-link>

          <nuxt-link to="/register" class="btn btn-links mt-2 mb-2 ml-3" v-if="permButtons.cadastrar_alarmes == true">
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
import { mapActions } from 'vuex';

export default {
  components: {
    HomeOutline,
    PencilBoxOutline
  },

  data() {
      return {
        user: "",
        headerButtons: false,
        headerId: "",
        auth: "",
      }
  },

  computed: {
    currentRouteName() {
        return this.$route.name;
    },

    permButtons() {
      return this.$store.state.getHeader
    }
  },

  methods: {
    ...mapActions(['logOff', 'headerGet']),

    userKey() {
      this.user = this.$cookies.get('name') || '';
    },

    async logout() {
      await this.logOff({logout: "tes"})

      this.$cookies.removeAll();
      this.headerButtons = false
      this.$router.push('/')
    }
    
  },

  mounted() {
    this.userKey()
  
    setInterval(() => {
      if (this.currentRouteName != 'index' && this.currentRouteName != 'units' && this.currentRouteName != 'registerunit') {
        this.headerButtons = true
      } else if(this.currentRouteName == 'units' || this.currentRouteName == 'registerunit') {
        this.headerButtons = false
      }
    }, 3000);
    
  }

}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';

.sizing {
  width: 200px !important;
}

.btn-links {
  color: #ffffff;
  background-color: #00B2A9;
}

.btn-links:hover {
  color: #ffffff;
  transition: $transition;
}

.drop {
  color: #ffffff;
  background-color: #00B2A9;
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
