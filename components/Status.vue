<template>
  <div class="card">
    <div class="card-header bg-dark-purple">
      <h6 class="mb-0 text-uppercase">Status de equipamento</h6>
    </div>
    <!-- /.card-header -->
    <div class="card-content bg-purple">
      <div class="row">
        <div v-for="equip in alarm" :key="equip.id" class="col-12 col-sm-6">
          <div class="card-equip">
            <h6
              class="mb-3 text-uppercase p-2 bg-green"
              :class="{ bg: equip.bg }"
            >
              {{ equip.kks }}
            </h6>
            <div
              class="card-equip-cause bg-light-purple p-2"
              :class="{ dNone: equip.isHidden }"
            >
              <small class="text-uppercase">causa</small>
              <p>{{ equip.cause }}</p>
              <hr />
              <a href>{{ equip.text }}</a>
            </div>
            <!-- /.card-cause -->
          </div>
          <!-- /.card-equip -->
        </div>
        <!-- /.col-6 col-sm-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.card-content -->
  </div>
  <!-- /.card -->
</template>

<script>
export default {
  props: ['alarm'],

  data() {
    return {
      equips: [
        {
          name: '28LAC50AP001',
          text: 'Temperatura alta do enrolamento',
          number: '28LAC50CT021 ',
          isActive: true
        },
        {
          name: '28LAC50AP001',
          text: 'Temperatura alta do enrolamento',
          number: '28LAC50CT021 ',
          isActive: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.dNone {
  display: none;
}

.card-equip {
  text-align: center;
  color: white;

  h6 {
    border-radius: 5px;
    font-weight: 700;
  }

  &-cause {
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;

    hr {
      background-color: lightgray;
    }

    a {
      color: white;

      &:hover {
        color: transparentize(white, 0.2);
      }
    }
  }
}
</style>
