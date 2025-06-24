<template>
  <section aria-labelledby="jackpot-showcase-title" class="w-[98%] mx-auto my-4">
    <div
      class="aspect-[13/3] rounded-lg shadow-md bg-cover bg-center relative overflow-hidden group"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10"></div>

      <!-- Content -->
      <div class="relative z-10 flex flex-col items-center h-full text-white px-2">
        <div class="w-full text-center" style="padding-top: 11%;">
          <h2
            id="jackpot-showcase-title"
            class="text-[0.6rem] sm:text-xs font-semibold uppercase tracking-wider text-gray-300 mb-0"
          >
            {{ title }}
          </h2>
          <div class="font-mono font-bold animate-pulse leading-tight -mt-0.5 sm:mt-0">
            <span class="text-base sm:text-xl md:text-2xl align-middle">$ </span>
            <span class="text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter align-middle">
              {{ formattedAmount }}
            </span>
            <span class="text-xs sm:text-lg md:text-xl align-baseline tracking-tighter">,00</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  amount: {
    type: Number,
    required: true,
  },
  backgroundImage: {
    type: String,
    default:
      "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fd9dea5a3.avif",
  },
});

// Format number with dot as thousand separator (e.g. 123456789 -> 123.456.789)
const formattedAmount = computed(() =>
  props.amount
);
</script>
