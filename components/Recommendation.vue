<template>
  <div class="card">
    <div class="card-header bg-dark-red">
      <h6 class="mb-0 text-uppercase">Recomendações</h6>
    </div>
    <!-- /.card-header -->
    <div class="card-content bg-red">
      <!-- {{ stepName }} -->
      <ul class="card-recom-list">
        <li class="card-recom-item" v-for="item in items" :key="item.name">
          {{ item.recom }}
        </li>
      </ul>
    </div>
    <!-- /.card-content -->
  </div>
  <!-- /.card -->
</template>

<script>
export default {
  props: ['stepName'],

  data() {
    return {
      items: [
        {
          recom: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          recom: 'Lorem ipsum dolor sit amet'
        }
      ]
    }
  }
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
