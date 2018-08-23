<template>
    <div>
        <p>{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: 'test2',
    props: {
        title: {
            type: String
        }
    }
}
</script>