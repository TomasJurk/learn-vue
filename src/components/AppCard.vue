<template>
    <div class="card">
        <img :src="imgSrc" alt="">
        <h2>{{title}}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, illo!</p>
        <AppButton class="btn">Button test</AppButton>
    </div>
</template>


<script>
import AppButton from './AppButton';

export default {
    name: 'AppCard',
    props: {
        imgSrc: String,
        title: String
    },
    components: {
        AppButton
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
