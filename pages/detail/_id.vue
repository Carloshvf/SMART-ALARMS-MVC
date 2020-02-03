<template>
  <div>
    <section class="detail-page" v-for="value in cardDetail" :key="value.id">
      <aside class="detail-page-sidebar">
        <nuxt-link to="/alarm">Eventos</nuxt-link>
        <ul>
          <li class="mb-3" v-for="link in lists" :key="link.id">
            <nuxt-link
              class="detail-page-sidebar-link d-flex flex-column align-items-center justify-content-center"
              :to="{ name: 'detail-id', params: { id: link.id } }"
            >
              <h1>{{ link.id }}</h1>
              <p class="mb-0">3:27</p>
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <div class="wrapper-content container">
        <div class="row pt-5 my-5">
          <div class="col-12">
            <header
              class="detail-page-header d-flex justify-content-between align-items-center mb-3"
            >
              <h1 class="detail-page-name">{{ value.kks.name }}</h1>
              <div class="detail-page-count d-flex align-items-center">
                <p class="mr-4">
                  Contagem
                  <br />regressiva
                  <br />Flame Off
                </p>
                <h1>3:27</h1>
              </div>
              <!-- /.count -->
            </header>
          </div>
          <!-- /.col-12 -->
        </div>
        <!-- /.row -->
        <div class="row">
          <div class="col-12 col-sm-6 mb-5" v-for="content in value.kks" :key="content.value">
            <top-detail :alarm="content" />
            <status :alarm="content.status_two" />
          </div>
        </div>
      </div>
      <!-- /.container -->
    </section>
    <!-- /.detail -->
  </div>
</template>

<script>
import TopDetail from '~/components/TopDetail.vue'
import Status from '~/components/Status.vue'

export default {
  props: ['alarm'],

  components: {
    TopDetail,
    Status
  },
  data() {
    return {
      id: this.$route.params.id,
      lists: this.$store.state.all
    }
  },

  computed: {
    cardDetail() {
      return this.lists.filter(i => i.id === this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.detail-page {
  &-sidebar {
    position: fixed;
    left: 0;
    padding: 10px 25px;
    height: 100%;
    background-color: lightgray;
    padding-top: 30px;

    li {
      list-style: none;
    }

    &-link {
      padding: $padding;
      background-color: $dark-red;
      color: white;
      border-radius: $border-radius;
      transition: $transition;

      &:hover {
        background-color: $red;
      }
    }
  }

  &-name {
    color: $purple;
    font-weight: 700;
  }

  &-count {
    background-color: $purple;
    color: white;
    padding: 10px 25px;
    border-radius: $border-radius;

    h1 {
      font-size: 4rem;
      margin-bottom: 0;
    }

    p {
      margin-bottom: 0;
    }
  }
}
</style>
