<template>
  <div class="card">
    <div class="card-header bg-dark-red">
      <h6 class="mb-0 text-uppercase">Recomendações</h6>
    </div>
    <!-- /.card-header -->
    <div class="card-content bg-red">
      <ul class="card-recom-list">
        <li class="card-recom-item" v-for="value in alarm" :key="value.id">{{ value.item }}</li>
      </ul>
    </div>
    <!-- /.card-content -->
  </div>
  <!-- /.card -->
</template>

<script>
export default {
  props: ['alarm']
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

.card-recom-list {
  padding-left: 20px;
}

.card-recom-item {
  font-weight: 700;
  font-size: 1.25rem;
  color: white;
}
</style>
