<script setup lang="ts">
const tabIndex = ref(0)
const weight = ref(0)
const height = ref(0)

function handleWeightChange(value: number) {
  weight.value = value
  tabIndex.value = 1
}

function handleHeightChange(value: number) {
  height.value = value
  tabIndex.value = 2
}

function handleReset() {
  weight.value = 0
  height.value = 0
  tabIndex.value = 0
}

function calculateBmi() {
  return weight.value / Math.pow(height.value / 100, 2)
}
</script>

<template>
  <div class="relative">
    <Transition name="fade" mode="out-in">
      <section v-if="tabIndex === 0">
        <BmiWeightSlide :weight="weight" @valueChange="handleWeightChange" />
      </section>
      <section v-else-if="tabIndex === 1">
        <BmiHeightSlide :height="height" @valueChange="handleHeightChange" />
      </section>
      <section v-else-if="tabIndex === 2">
        <BmiResultSlide :bmi="calculateBmi()" @reset="handleReset" />
      </section>
    </Transition>
  </div>
</template>
