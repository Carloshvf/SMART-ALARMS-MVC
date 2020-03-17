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
import { mapActions } from 'vuex'

export default {
    props: ['alarm', 'unit'],

    data() {
        return {
        deletionAlarms: [],
        }

    },

    components: {
        Delete,
    },

    methods: {
        ...mapActions(['deleteRegistered']),
        // Ta praticamente feito mas tem q perguntar pra Belle se mensagem de resposta deveri ser positiva
        deletion() {
            this.deletionAlarms.splice(0)
            this.deletionAlarms.push({local: this.unit, causa: this.alarm.causa})
            this.deleteRegistered(this.deletionAlarms[0])
            alert("Deletado com sucesso")
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