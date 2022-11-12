<script setup lang="ts">
const props = defineProps<{
  bmi: number
}>()
const emit = defineEmits<{
  (e: 'reset'): void
}>()

let status: string, color: string, information: string

const formattedBMI = props.bmi.toLocaleString('da-DK', {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
})

if (props.bmi < 18.5) {
  status = 'Undervægtig'
  color = 'text-blue-700'
  information =
    props.bmi < 16
      ? 'Dit BMI betegnes det ifølge Verdenssundhedsorganisationen som alvorlig undervægt.'
      : ''
} else if (props.bmi < 25) {
  status = 'Normalvægtig'
  color = 'text-green-700'
} else if (props.bmi < 30) {
  status = 'Overvægtig'
  color = 'text-yellow-700'
} else {
  status = 'Svært overvægtig'
  color = 'text-red-700'
}

function handleSubmit() {
  emit('reset')
}
</script>

<template>
  <div class="flex flex-wrap justify-center gap-10">
    <div class="shrink-0 grow-0 basis-[182px]">
      <nuxt-img
        src="/weight.png"
        alt="Illustration af dreng på en badevægt"
        loading="lazy"
      />
    </div>
    <div class="shrink-0 grow-0 basis-[320px] pt-5">
      <form @submit.prevent="handleSubmit" class="text-center">
        <label class="inline-block text-2xl mb-7">Dit BMI er</label>
        <p class="text-5xl" :class="color">{{ formattedBMI }}</p>

        <p class="mt-1 text-lg font-medium uppercase" :class="color">
          {{ status }}
        </p>

        <BaseButton class="mt-12">Start forfra</BaseButton>
      </form>
      <p
        v-if="information"
        class="flex p-3 mt-5 text-base text-left text-blue-900 bg-blue-300 border-2 rounded-lg border-blue-500/20"
      >
        <IconInfo class="mr-2 shrink-0" />
        {{ information }}
      </p>
    </div>
  </div>
</template>
