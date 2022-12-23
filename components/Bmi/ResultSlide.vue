<script setup lang="ts">
const props = defineProps<{
  bmi: number;
}>();
const emit = defineEmits<{
  (e: "reset"): void;
}>();

let status: string, color: string, information: string;

const formattedBMI = props.bmi.toLocaleString("da-DK", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

if (props.bmi < 18.5) {
  status = "Undervægtig";
  color = "text-blue-700";
  information =
    props.bmi < 16
      ? "Dit BMI betegnes ifølge Verdenssundhedsorganisationen som alvorlig undervægt."
      : "";
} else if (props.bmi < 25) {
  status = "Normalvægtig";
  color = "text-green-700";
} else if (props.bmi < 30) {
  status = "Overvægtig";
  color = "text-yellow-700";
  information =
    props.bmi >= 27
      ? "Hvis du har en øget risiko for at udvikle åreforkalkningssygdom, er medicinsk supplerende behandling af vægttab tilrådet."
      : "";
} else {
  status = "Svært overvægtig";
  (color = "text-red-700"),
    (information =
      "Vi anbefales en livsstilsbehandlingen suppleres med medicin.");
}

function handleSubmit() {
  emit("reset");
}
</script>

<template>
  <div class="flex flex-wrap justify-center gap-10">
    <div class="shrink-0 grow-0 basis-[182px]">
      <img src="/weight.png" alt="Illustration af dreng på en badevægt" />
    </div>
    <div class="shrink-0 grow-0 basis-[320px] pt-5">
      <form @submit.prevent="handleSubmit" class="text-center">
        <label class="inline-block text-2xl mb-7">Dit BMI er</label>
        <p class="text-5xl mb-1" :class="color">{{ formattedBMI }}</p>

        <p class="text-lg font-medium uppercase" :class="color">
          {{ status }}
        </p>

        <p v-if="information" class="text-base text-slate-700 mt-5">
          {{ information }}
        </p>

        <BaseButton class="mt-12">Start forfra</BaseButton>
      </form>
    </div>
  </div>
</template>
