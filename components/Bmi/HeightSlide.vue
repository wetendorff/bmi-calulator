<script setup lang="ts">
const emit = defineEmits<{
  (e: 'valueChange', value: number): void
}>()

const height = ref<number | null>(null)

function handleSubmit() {
  emit('valueChange', height.value ?? 0)
}
</script>

<template>
  <div class="flex flex-wrap justify-center gap-10">
    <div class="shrink-0 grow-0 basis-[182px]">
      <nuxt-img
        src="/height.png"
        alt="Illustration af dreng der måler sin højde"
        class="mx-auto h-64 w-[182px] object-contain"
      />
    </div>
    <div class="shrink-0 grow-0 basis-[320px] pt-5">
      <form @submit.prevent="handleSubmit" class="text-center">
        <label class="inline-block text-2xl mb-7" for="HeightInput"
          >Hvor høj er du?</label
        >
        <BaseInputNumber
          id="HeightInput"
          min="50"
          max="500"
          suffix="cm"
          v-model="height"
          required
        />
        <BaseButton class="mt-12">Videre</BaseButton>
      </form>
    </div>
  </div>
</template>
