<template>
    <div>
        <p @click="changeTitle">{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: 'test1',
    props: {
        title: {
            type: String
        }
    },
    methods: {
        changeTitle () {
            this.$emit('bla', 'Title changed');
        }
    }
}
</script>
