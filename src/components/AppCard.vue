<template>
    <div class="card">
        <img :src="imgSrc" alt="">
        <h2>{{title}}</h2>
        <p>{{ textDescr }}</p>
        <AppButton @click.native="changeText" class="btn">Button test</AppButton>
    </div>
</template>


<script>
import AppButton from './AppButton';

export default {
    name: 'AppCard',
    props: {
        imgSrc: {
            type: String,
            required: true    
        },
        title: String
    },
    components: {
        AppButton
    },
    data () {
        return {
            textDescr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, illo!'
        }
    },
    methods: {
        changeText () {
            this.textDescr = 'DAGS!!!';
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        flex-direction: column;
        margin: 50px 0;
        * {
            margin-bottom: 20px;
        }
        img {
            width: 100%;
        }
        p, h2, .btn {
            margin-right: 20px;
            margin-left: 20px; 
        }
    }

</style>
