<template>
  <div>
    <div class="card-header">
      <h6 class="mb-0">Recomendações:</h6>
    </div>
    <!-- /.card-header -->
    <div class="card-content card-recom">
      <ul class="card-recom-list">
        <li class="card-recom-item mb-2" v-for="value in alarm" :key="value.id">{{ value.item }}</li>
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
  padding-left: 24px;
  color: black;
  overflow: auto;
}

.card-recom {
  background-color: $grey;
}

.card-recom-item {
  font-weight: bold;
  line-height: 30px;  
  font-size: 22px;
}
</style>
