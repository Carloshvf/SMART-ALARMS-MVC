<template>
    
</template>


<script>
import Multiselect from "vue-multiselect";

export default {
    props: ['tab_filter'],
    data() {
      return {
        checked1: true,
        checked2: true,
        select1: "",
        select2: "",
        select3: "",
        uniqueDetails: [],
        selectedType: '',
        selectedSize: '',
      }
  },
    methods: { 
    },
    computed: {
        
    },
    created() {    
        console.log(this.tab_filter)
    }

}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

</style>