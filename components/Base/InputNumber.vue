<script>
export default {
  inheritAttrs: false,
  props: ['modelValue', 'suffix'],
  emits: ['update:modelValue'],
}
</script>

<template>
  <div
    class="box-border flex px-3 py-2 mx-auto text-2xl border-2 border-black rounded-lg w-44 focus-within:ring-4"
  >
    <input
      v-focus
      v-bind="$attrs"
      type="number"
      class="flex-1 inline-block w-full text-right shrink focus:ring-0 focus:outline-none"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="shrink-0">&thinsp;{{ suffix }}</span>
  </div>
</template>
