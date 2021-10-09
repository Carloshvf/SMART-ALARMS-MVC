<template>
        <div class="card mt-4">
            <div class="card-white card-min-heigh">
                <h1 class="card-font-size">{{ alarm.name }}</h1>
                <span>Causa</span>
                <p class="card-font-size">{{ alarm.causa }}</p>
                <hr>
                <div class="align options">
                    <button class="btn mr-5" @click="deletion(ind)">Excluir <delete class="options"></delete></button>
                    <nuxt-link @click.native="editing()" to="/register" class="btn options ml-5">Editar</nuxt-link>
                </div>
            </div>
        </div>
</template>

<script>
import Delete from 'vue-material-design-icons/Delete.vue';
import { mapActions } from 'vuex';

export default {
    props: ['alarm', 'unit', 'ind'],

    data() {
        return {
        deletionAlarms: [],
        persistAlarms: [],
        delMessage: "",
        }
    },

    components: {
        Delete,
    },

    methods: {
        ...mapActions(['deleteRegistered', 'persist']),

        makeToast(msg) {
            this.$bvToast.toast(msg, {
                title: 'Delete Card',
                autoHideDelay: 3000,
                solid: true
            })
        },

        async deletion(ind) {
            this.deletionAlarms.splice(0);
            this.deletionAlarms.push({local: this.unit, causa: this.alarm.causa});
            this.alarm.splice(ind, 1);
            if (this.delMessage === "deletado com sucesso") {
                makeToast("Deletado com sucesso");
            } else {
                makeToast("Não foi possivel deletar");
            }
        },

        editing() {
            this.persistAlarms.splice(0);
            this.persistAlarms.push({local: this.unit, causa: this.alarm.causa});
            this.persist(this.persistAlarms[0]);
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
