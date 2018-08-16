<template>
    <div>
        <button>
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'AppButton'
}
</script>

<style lang="scss" scoped>
    button {
        background-color: black;
        color: white;
    }
</style>

