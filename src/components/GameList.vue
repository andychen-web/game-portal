<template>
  <section :id="props.title" aria-labelledby="popular-title" class="mb-6 px-2 sm:px-4">
    <!-- Title row -->
    <div class="flex items-center mb-4">
      <h2 id="popular-title" class="text-xl font-semibold text-white">
        {{ props.title }}
      </h2>
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-3 gap-y-4 justify-items-center"
    >
      <a
        v-for="{ title, imgUrl } in games"
        :key="title"
        href="#"
        class="block group w-full max-w-[180px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg"
      >
        <div class="aspect-square rounded-md overflow-hidden bg-gray-200">
          <img
            :src="`https://img.9dgame7.com/myimgweb/uploads/images/20250425/${imgUrl}`"
            :alt="title"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <p
          class="mt-1.5 text-xs text-center text-white truncate px-1"
          :title="title"
        >
          {{ title }}
        </p>
      </a>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps<{
  title: string;
}>();
interface Game {
  imgUrl: string;
  title: string;
}

// Different game orders for Popular and Slots sections
const popularGames: Game[] = [
  { imgUrl: "680b33035a4f9.jpg", title: "Dragão da Fortuna" },
  { imgUrl: "680b3045e4c96.jpg", title: "Tigre Dourado" },
  { imgUrl: "680b3253b2743.jpg", title: "Fênix da Sorte" },
  { imgUrl: "680b308746dd9.jpg", title: "Royal Flush" },
  { imgUrl: "680b2fb02d30e.jpg", title: "Rainha Diamante" },
  { imgUrl: "680b327830d1e.jpg", title: "Lobo Selvagem" },
  { imgUrl: "680b31f5c114e.jpg", title: "Lua Mística" },
  { imgUrl: "680b302449155.jpg", title: "Caça ao Tesouro" },
  { imgUrl: "680b2fb030437.jpg", title: "Portões Dourados" },
  { imgUrl: "680b309dee5b6.jpg", title: "Estrelas da Sorte" },
];

const slotsGames: Game[] = [
  { imgUrl: "680b3253b2743.jpg", title: "Fênix da Sorte" },
  { imgUrl: "680b308746dd9.jpg", title: "Royal Flush" },
  { imgUrl: "680b33035a4f9.jpg", title: "Dragão da Fortuna" },
  { imgUrl: "680b2fb030437.jpg", title: "Portões Dourados" },
  { imgUrl: "680b3045e4c96.jpg", title: "Tigre Dourado" },
  { imgUrl: "680b31f5c114e.jpg", title: "Lua Mística" },
  { imgUrl: "680b302449155.jpg", title: "Caça ao Tesouro" },
  { imgUrl: "680b2fb02d30e.jpg", title: "Rainha Diamante" },
  { imgUrl: "680b327830d1e.jpg", title: "Lobo Selvagem" },
  { imgUrl: "680b309dee5b6.jpg", title: "Estrelas da Sorte" },
];

// Use different game arrays based on the title prop
const games = computed(() => {
  if (props.title === 'Popular' || props.title === 'Populares') {
    return popularGames;
  } else if (props.title === 'Slots') {
    return slotsGames;
  }
  return popularGames; // default fallback
});
</script>
