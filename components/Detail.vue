<template>
  <section class="detail">
    <div class="card">
      <div class="detail-top">
        <div class="card-header bg-dark-purple d-flex align-items-center">
          <p class="text-uppercase mb-0">causa:</p>
          <h3 class="mb-0 ml-3">Nível baixo no tambor de HP</h3>
        </div>
        <!-- /.card-header -->
        <div class="detail-kks bg-purple d-flex align-items-center">
          <p class="text-uppercase mb-0">kks:</p>
          <h5 class="mb-0 ml-3">22HAD50FL901XJ60P</h5>
          <a class="ml-auto" href="">gráfico</a>
        </div>
        <!-- /.detail-kks -->
        <div class="detail-channel d-flex justify-content-between mb-3">
          <p class="text-uppercase">canais:</p>
          <ul class="detail-channel-input">
            <li
              class="detail-channel-input-item d-flex align-items-center"
              v-for="channel in channels"
              :key="channel.id"
            >
              <input class="" type="checkbox" :id="channel.value" />
              <label class="mb-0" :for="channel.value">{{
                channel.value
              }}</label>
              <a class="ml-4" href="">gráfico</a>
            </li>
          </ul>
          <!-- /.detail-channel-input -->
        </div>
        <!-- /.detail-channel -->
      </div>
      <!-- /.detail-top -->
      <div class="card-header bg-dark-purple">
        <h6 class="mb-0 text-uppercase">Status de equipamento</h6>
      </div>
      <!-- /.card-header -->
      <div class="card-content bg-purple">
        <div class="row">
          <div
            class="col-12 col-sm-6"
            v-for="equip in equips"
            :key="equip.name"
          >
            <div class="detail-equip">
              <h6 class="mb-0 text-uppercase p-2 bg-green">
                {{ equip.name }}
              </h6>
              <div
                class="detail-equip-cause bg-light-purple p-2"
                :class="{ dNone: equip.isActive }"
              >
                <small class="text-uppercase">causa</small>
                <p>{{ equip.text }}</p>
                <hr />
                <a href="">{{ equip.number }}</a>
              </div>
              <!-- /.card-cause -->
            </div>
            <!-- /.detail-equip -->
          </div>
          <!-- /.col-6 col-sm-12 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.card-content -->
    </div>
    <!-- /.card -->
  </section>
  <!-- /.detail -->
</template>

<script>
export default {
  data() {
    return {
      equips: [
        {
          name: '28LAC50AP001',
          text: 'Temperatura alta do enrolamento',
          number: '28LAC50CT021 ',
          isActive: false
        },
        {
          name: '28LAC50AP001',
          text: 'Temperatura alta do enrolamento',
          number: '28LAC50CT021 ',
          isActive: true
        }
      ],
      channels: [
        { value: '22HAD50FL001' },
        { value: '22HAD50FL002' },
        { value: '22HAD50FL003' }
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

.detail {
  &-kks,
  &-channel {
    padding: $padding;
  }

  &-top {
    h3,
    h5 {
      font-weight: 700;
    }
  }

  &-kks {
    color: white;
  }

  &-channel {
    padding: $padding;
    background-color: lightgray;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;

    &-input-item {
      font-size: 1.37rem;
      list-style: none;
      font-weight: 700;
      color: $dark-purple;

      input {
        margin-right: 10px;
        margin-top: 5px;
      }
    }
  }

  &-equip {
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
}
</style>
