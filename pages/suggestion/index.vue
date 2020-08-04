<template>
    <div class="container-fluid">
        <div class="row card-size mt-5">
            <div class="col-6 mt-4">
                <h1>Sugestões</h1>
            </div>
            <div class="col-6 mt-4">
                <b-button class="btn-cadastrar"><img class="cross-img" src="../../static/img/plus.svg" alt="cross"/>
                    <span>CADASTRAR</span> 
                </b-button>
            </div>
        </div>
        <div class="row card-size">
            <div class="col card mt-4">
                <suggestion-card/>
                <div class="row card-suggest">
                    <div class="col card-border">
                        <div class="row mt-3 mb-3" style="font-size:14px">
                            <div class="col-1">Editar</div>
                            <div class="col-1">UG</div>
                            <div class="col-1">TIPO</div>
                            <div class="col-3">CAUSA BÁSICA</div>
                            <div class="col-4 status-align">STATUS</div>
                        </div>
                    </div>
                </div>
                <suggestion-detail/>
            </div>
        </div>
    </div>
</template>

<script>
import SuggestionCard from '~/components/SuggestionCard.vue';
import SuggestionDetail from '~/components/SuggestionDetail.vue';

export default {
    components: {
        SuggestionCard,
        SuggestionDetail
    },

    methods: {
        
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';

.btn-cadastrar {
    position: absolute;
    width: 151px;
    height: 44px;
    left: 510px;
    top: 5px;
    color: $white;
    background: linear-gradient(180deg, #008D46 0%, #00B75B 100%);
    border-radius: 22px;

    span {
        position: absolute;
        bottom: 13px;
        right: 35px;
        font-size: 12px;
    }
} 

.card-size {
    width: 70%;
    margin: 0 auto;

    h1 {
        position: relative;
        right: 18px;
    }
}
.status-align {
    position: absolute;
    left: 850px;
}

.card-border {
    background: #F5F6F9;
    border: 2px solid #979797;
    border-radius: 4px;
}

.cross-img {
    position: absolute;
    right: 73.38%;
    bottom: 5px;
}

.green {
    background: #6DD400;
}

</style>