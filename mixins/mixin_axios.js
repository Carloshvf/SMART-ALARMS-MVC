import Vue from 'vue';
import { BVToastPlugin } from 'bootstrap-vue';

Vue.use(BVToastPlugin);

export const mixin_axios = {
    methods: {
        /**
         * 
         * @param {*Toaster} toaster
         * @param {*Titulo} title
         * @param {*Mensagem} message 
         */
        createToast(title, message, variant) {
            const toaster = 'b-toaster-bottom-right';
            const toast = new Vue()
            console.log(message);
            toast.$bvToast.toast(message, {
                title: title,
                toaster: toaster,
                variant: variant,
                solid: true,
            });
        }
    }
}