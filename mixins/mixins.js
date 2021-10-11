export default {
    methods: {
        /**
         * 
         * @param {*Toaster} toaster 
         * @param {*Titulo} title 
         * @param {*Mensagem} message 
         */
        createToast(toaster, title, message) {
            this.$bvToast.toast(message, {
                title: title,
                toaster: toaster,
                solid: true,
            });
        },
        /**
         * 
         * @param {Mensagem} msg 
         */
        replaceToUpper(msg) {
            return msg.replace(/\s/g, '').toUpperCase()
        },
    }
}