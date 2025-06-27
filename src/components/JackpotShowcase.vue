<template>
  <div
    class="bg-[#F3F4F6] p-2.5 flex items-center space-x-3 shadow-sm rounded-md max-w-full sm:max-w-lg mx-auto my-4"
  >
    <div class="flex-shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-6 h-6 text-[#4B5563]"
        fill="currentColor"
      >
        <path
          d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM9 21H15V23H9V21Z"
        ></path>
      </svg>
    </div>
    <div class="flex-grow overflow-hidden h-6">
      <div class="animate-[vertical-scroll-3-items_20s_ease-in-out_infinite]">
        <div
          class="h-6 flex items-center text-sm text-gray-700 overflow-hidden whitespace-nowrap"
        >
          <div
            class="inline-block animate-[horizontal-scroll-item1_12s_linear_infinite]"
          >
            <span class="pr-8"
              >Bem-vindo à
              <a
                target="_blank"
                rel="nofollow"
                class="text-[#4B5563] font-semibold hover:text-[#374151] hover:underline"
                >j1.com</a
              >! 💎</span
            >
            <span class="pr-8"
              >Bem-vindo à
              <a
                target="_blank"
                rel="nofollow"
                class="text-[#4B5563] font-semibold hover:text-[#374151] hover:underline"
                >j1.com</a
              >! 💎</span
            >
          </div>
        </div>
        <div
          class="h-6 flex items-center text-sm text-gray-700 overflow-hidden whitespace-nowrap"
        >
          <div
            class="inline-block animate-[horizontal-scroll-item2_18s_linear_infinite]"
          >
            <span class="pr-8"
              >Promoção:
              <strong class="text-[#4B5563]">Bônus de 100%</strong> no depósito!
              <a
                href=""
                target="_blank"
                rel="nofollow"
                class="text-[#4B5563] font-semibold hover:text-[#374151] hover:underline"
                >Aproveite Já</a
              >
              🔥</span
            >
            <span class="pr-8"
              >Promoção:
              <strong class="text-[#4B5563]">Bônus de 100%</strong> no depósito!
              <a
                href=""
                target="_blank"
                rel="nofollow"
                class="text-[#4B5563] font-semibold hover:text-[#374151] hover:underline"
                >Aproveite Já</a
              >
              🔥</span
            >
          </div>
        </div>
        <div
          class="h-6 flex items-center text-sm text-gray-700 overflow-hidden whitespace-nowrap"
        >
          <div
            class="inline-block animate-[horizontal-scroll-item3_28s_linear_infinite]"
          >
            <span class="pr-8"
              >Novos jogos de Slots adicionados! Explore e descubra seus
              favoritos para grandes ganhos! 🎰
              <a
                href=""
                target="_blank"
                rel="nofollow"
                class="text-[#4B5563] font-semibold hover:text-[#374151] hover:underline"
                >Ver Todos</a
              ></span
            >
            <span class="pr-8"
              >Novos jogos de Slots adicionados! Explore e descubra seus
              favoritos para grandes ganhos! 🎰
              <a
                href=""
                target="_blank"
                rel="nofollow"
                class="text-[#4B5563] font-semibold hover:text-[#374151] hover:underline"
                >Ver Todos</a
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <a
      href=""
      target="_blank"
      rel="nofollow"
      class="flex-shrink-0 relative"
      aria-label="Mensagens não lidas"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-6 h-6 text-[#4B5563]"
        fill="currentColor"
      >
        <path
          d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"
        ></path>
      </svg>
      <span
        class="absolute -top-1.5 -right-1.5 flex items-center justify-center h-4 min-w-[1rem] px-1 bg-[#EF4444] text-white text-[0.625rem] font-bold rounded-full"
        >3</span
      >
    </a>
  </div>

  <section
    aria-labelledby="jackpot-showcase-title"
    class="w-[98%] mx-auto my-4 flex justify-center"
  >
    <div
      class="aspect-[13/3] rounded-lg shadow-md bg-cover   h-[150px] bg-center relative overflow-hidden group" 
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <!-- Gradient overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t  from-black/60 via-black/30 to-black/10"
      ></div>

      <!-- Content -->
      <div
        class="relative z-10 flex flex-col items-center text-white px-2"
      >
        <div class="w-full text-center" style="padding-top: 11%">
          <h2
            id="jackpot-showcase-title"
            class="text-[0.6rem] sm:text-xs font-semibold uppercase tracking-wider text-gray-300 mb-0"
          >
            {{ title }}
          </h2>
          <div
            class="font-mono font-bold animate-pulse leading-tight -mt-0.5 sm:mt-0"
          >
            <span class="text-base sm:text-xl md:text-2xl align-middle"
              >$
            </span>
            <span
              class="text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter align-middle"
            >
              {{ formattedAmount }}
            </span>
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

const formattedAmount = computed(() => props.amount);
</script>
