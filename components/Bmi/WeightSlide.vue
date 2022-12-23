<script setup lang="ts">
const emit = defineEmits<{
  (e: "valueChange", value: number): void;
}>();
const weight = ref<number | null>(null);

function handleSubmit() {
  emit("valueChange", weight.value ?? 0);
}
</script>

<template>
  <div class="flex flex-wrap justify-center gap-10">
    <div class="shrink-0 grow-0 basis-[182px]">
      <img
        src="/weight.png"
        alt="Illustration af dreng på en badevægt"
        class="mx-auto h-64 w-[182px] object-contain"
      />
    </div>
    <div class="shrink-0 grow-0 basis-[320px] pt-5">
      <form @submit.prevent="handleSubmit" class="text-center">
        <label class="inline-block text-2xl mb-7" for="WeightInput"
          >Hvad er din vægt?</label
        >
        <BaseInputNumber
          id="WeightInput"
          v-model="weight"
          suffix="kg"
          min="5"
          max="500"
          required
        />

        <BaseButton class="mt-12">Videre</BaseButton>
      </form>
    </div>
  </div>
</template>
