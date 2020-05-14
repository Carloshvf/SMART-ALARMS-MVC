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
              v-if="link.active == 1"
            >
              <h1>{{ link.id }}</h1>
              <counter :alarm="foo(link.id)" />
            </nuxt-link>
          </li>
        </ul>
      </aside>
      <div class="wrapper-content container">
        <div class="row pt-5 mt-5 mb-3">
          <div class="col-12">
            <header
              class="detail-page-header d-flex justify-content-between align-items-center mb-3"
            >
              <h1 class="detail-page-name">{{ foo(value.id).name }}</h1>
              <div class="detail-page-count d-flex align-items-center">
                <p class="mr-4">
                  Contagem
                  <br />regressiva <br />Flame Off
                </p>
                <counter :alarm="foo(value.id)" />

                <!-- <h1>{{ value.kks[0].countTime }}</h1> -->
              </div>
              <!-- /.count -->
            </header>
          </div>
          <!-- /.col-12 -->
        </div>
        <!-- /.row -->
        <div class="row">
          <div
            class="col-12 col-sm-6 mb-5"
            v-for="content in value.kks"
            :key="content.value"
          >
            <top-detail :alarm="content" @loops="onClickChild"/>
            <status :alarm="content.status_two" @loops="onClickChild"/>
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
import Counter from '~/components/Counter.vue'

import { mapActions, mapState } from 'vuex'

export default {
  props: ['alarm', 'unity'],

  components: {
    TopDetail,
    Status,
    Counter
  },
  data() {
    return {
      id: this.$route.params.id,
      // lists: this.$store.state.all
      stop: true,
      stopInterval: "",
    }
  },

  // methods: {
  //   ...mapActions(['loadData'])
  // },

  methods: {
    ...mapActions(['loadData']),

    onClickChild (value) {
      this.stop = value
    },

    foo(id) {
      var result = { countTimeDiff: 0 }

      if (this.id && this.lists && this.lists.length > 0) {
        var arrays = new Array()
        for (const key in this.lists) {
          arrays.push(Object.assign({}, this.lists[key]))
        }

        result = arrays.filter(i => i.id === id)
        result = result[0].kks
        let result2 = result.slice()
        result = result2.sort((a, b) => a.countTimeDiff - b.countTimeDiff)
        result = result.filter(
          (item, index, array) => item.countTimeDiff === array[0].countTimeDiff
        )
        result = result[0]
      }

      return result
    }
  },

  computed: {
    cardDetail() {
      return this.lists.filter(i => i.id === this.id)
    },

    lists() {
      return this.$store.state.all
    },

    currentRouteName() {
        return this.$route.name;
    }
   
  },

  created() {
    this.stopInterval = setInterval(() => {
        if (this.stop == true) {
          this.loadData()
          if (this.currentRouteName != 'detail-id') {
            this.stop = false 
          }
        } else {
          clearInterval(this.stopInterval)
         
        }
      }, 5000);
   
  },
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
