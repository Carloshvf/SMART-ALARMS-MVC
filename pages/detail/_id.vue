<template>
  <div>
    <section class="detail-page" v-for="value in lists" :key="value.id">
      <aside class="detail-page-sidebar">
        <nuxt-link to="/">Eventos</nuxt-link>
        <ul>
          <li class="mb-3">
            <nuxt-link
              class="detail-page-sidebar-link d-flex flex-column align-items-center justify-content-center"
              to="/"
            >
              <h1>{{ value.id }}</h1>
              <p class="mb-0">3:27</p>
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <div class="wrapper-content container" v-for="item in value.kks" :key="item.kks">
        <div class="row">
          <div class="col-12">
            <header
              class="detail-page-header d-flex justify-content-between align-items-center mb-5"
            >
              <h1 class="detail-page-name">{{ item.name }}</h1>
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
          <div class="col-12 col-sm-6">
            <top-detail :alarm="item" />
            <status />
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
  components: {
    TopDetail,
    Status
  },
  data() {
    return {
      lists: this.$store.state.all
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
    padding-top: 60px;

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
