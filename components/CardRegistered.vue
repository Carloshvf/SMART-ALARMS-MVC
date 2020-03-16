<template>
        <div class="card mt-4">
            <div class="card-white">
                <h1>{{ alarm.name }}</h1>
                <span>Causa</span>
                <p>{{ alarm.causa }}</p>
                <hr>
                <div class="align options">
                    <button class="btn mr-5" @click="deletion()">Excluir <delete class="options"></delete></button>
                    
                    <nuxt-link to="/register" class="btn options ml-5">Editar</nuxt-link>
                </div>
            </div>
        </div>
</template>

<script>
import Delete from 'vue-material-design-icons/Delete.vue';


export default {
    props: ['alarm'],

    components: {
        Delete,
        
    },

    methods: {
        deletion() {
            
        }
    }

}

</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

button:hover {
    color: #008542;
    transition: $transition;
}

.align {
    text-align: center;
}

.options {
    font-weight: bold;
    font-size: 12px;
    color: #B5B5B5;
}

.options:hover {
    color: #008542;
    transition: $transition;
}
</style>