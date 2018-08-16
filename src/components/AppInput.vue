<template>
    <div class="field">
        <div class="control">
            <input class="input" :value="value" type="text" :placeholder="plcHolder" @input="$emit('input', $event.target.value)">
        </div>
    </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
      value: String,
      plcHolder: String
  }
}
</script>
