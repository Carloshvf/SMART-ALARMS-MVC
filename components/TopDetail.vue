<template>
  <div class="top-detail mt-5">
    <div class="top-detail-header bg-dark-purple d-flex align-items-center">
      <p class="text-uppercase mb-0">causa:</p>
      <h3 class="mb-0 ml-3">{{ alarm.cause }}</h3>
    </div>
    <!-- .top-detail-header -->
    <div class="top-detail-kks bg-purple d-flex align-items-center">
      <p class="text-uppercase mb-0">kks:</p>
      <h5 class="mb-0 ml-3">{{ alarm.kks }}</h5>
      <a class="ml-auto" href>gráfico</a>
    </div>
    <!-- /.top-detail-kks -->
    <div class="top-detail-channel">
      <p class="text-uppercase">canais:</p>
    </div>
    <!-- /.top-detail-channel -->
  </div>
  <!-- .top-detail -->
</template>

<script>
export default {
  props: ['alarm']
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.top-detail {
  h3,
  h5 {
    font-weight: 700;
  }

  &-header,
  &-kks {
    padding: $padding;
    color: white;
  }

  &-header {
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }
}
</style>
