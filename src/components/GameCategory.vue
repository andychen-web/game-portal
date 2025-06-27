<template>
  <div class="relative mx-auto max-w-screen-xl px-2 sm:px-4">
    <!-- Left scroll button -->
    <button type="button" aria-label="Rolar para esquerda"
      class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-white/75 hover:bg-white/95 backdrop-blur-sm shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary-100 transition-colors duration-150 opacity-75 hover:opacity-100"
      @click="scrollLeft">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary-600">
        <path fill-rule="evenodd"
          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
          clip-rule="evenodd" />
      </svg>
    </button>

    <!-- Scroll container -->
    <div ref="scrollContainer" class="overflow-x-auto scroll-smooth whitespace-nowrap py-3">
      <ul class="flex items-center justify-start space-x-1 px-10 sm:px-12">
        <li v-for="tab in tabs" :key="tab.id" class="flex-shrink-0">
          <a :href="tab.href" :aria-current="tab.active ? 'page' : undefined"
            class="flex flex-col items-center justify-center text-center px-2 min-w-[72px] sm:min-w-[80px] h-[70px] rounded-t-md group transition-all duration-150 ease-in-out border-b-2"
            :class="tab.active
              ? 'border-primary text-primary focus:outline-none focus:ring-1 focus:ring-primary focus:z-10'
              : 'border-transparent text-gray-600 hover:text-primary hover:border-primary-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10'">
            <img :src="tab.img" :alt="tab.alt" class="w-6 h-6 sm:w-7 sm:h-7 mb-1 object-contain" />
            <span class="text-xs text-white font-medium group-hover:font-semibold truncate">{{ tab.label }}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Right scroll button -->
    <button type="button" aria-label="Rolar para direita"
      class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-white/75 hover:bg-white/95 backdrop-blur-sm shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary-100 transition-colors duration-150 opacity-75 hover:opacity-100"
      @click="scrollRight">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary-600">
        <path fill-rule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tabs = [
  {
    id: "popular",
    label: "Populares",
    href: "#Populares",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%23f59e42'/><text x='16' y='22' font-size='14' font-family='Arial' fill='white' text-anchor='middle' font-weight='bold'>★</text></svg>",
    alt: "Populares",
    active: true,
  },
  {
    id: "slots",
    label: "Caça-Níqueis",
    href: "#Caça-Níqueis",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect x='4' y='8' width='24' height='16' rx='4' fill='%234F46E5'/><circle cx='10' cy='16' r='2' fill='white'/><circle cx='16' cy='16' r='2' fill='white'/><circle cx='22' cy='16' r='2' fill='white'/></svg>",
    alt: "Caça-Níqueis",
    active: false,
  },
  {
    id: "aovivo",
    label: "Ao Vivo",
    href: "#AoVivo",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%23EF4444'/><polygon points='13,10 24,16 13,22' fill='white'/></svg>",
    alt: "Ao Vivo",
    active: false,
  },
  {
    id: "esporte",
    label: "Esportes",
    href: "#Esportes",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%2300B894'/><circle cx='16' cy='16' r='7' fill='white'/><circle cx='16' cy='16' r='3' fill='%2300B894'/></svg>",
    alt: "Esportes",
    active: false,
  },
  {
    id: "cartas",
    label: "Cartas",
    href: "#Cartas",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect x='7' y='7' width='18' height='24' rx='3' fill='white' stroke='%23A78BFA' stroke-width='2'/><text x='16' y='22' font-size='12' font-family='Arial' fill='%23A78BFA' text-anchor='middle' font-weight='bold'>A</text></svg>",
    alt: "Cartas",
    active: false,
  },
  {
    id: "blockchain",
    label: "Blockchain",
    href: "#Blockchain",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect x='8' y='8' width='16' height='16' rx='4' fill='%237C3AED'/><rect x='14' y='14' width='4' height='4' rx='1' fill='white'/></svg>",
    alt: "Blockchain",
    active: false,
  },
  {
    id: "poker",
    label: "Pôquer",
    href: "#Pôquer",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><ellipse cx='16' cy='16' rx='12' ry='8' fill='%23F87171'/><text x='16' y='20' font-size='10' font-family='Arial' fill='white' text-anchor='middle' font-weight='bold'>♠</text></svg>",
    alt: "Pôquer",
    active: false,
  },
  {
    id: "bingo",
    label: "Bingo",
    href: "#Bingo",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='14' fill='%23FBBF24'/><text x='16' y='22' font-size='12' font-family='Arial' fill='white' text-anchor='middle' font-weight='bold'>B</text></svg>",
    alt: "Bingo",
    active: false,
  },
  {
    id: "lottery",
    label: "Loteria",
    href: "#Loteria",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect x='8' y='8' width='16' height='16' rx='8' fill='%234ADE80'/><text x='16' y='22' font-size='12' font-family='Arial' fill='white' text-anchor='middle' font-weight='bold'>7</text></svg>",
    alt: "Loteria",
    active: false,
  },
  {
    id: "arcade",
    label: "Arcade",
    href: "#Arcade",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect x='6' y='10' width='20' height='12' rx='4' fill='%239CA3AF'/><circle cx='12' cy='16' r='2' fill='white'/><circle cx='20' cy='16' r='2' fill='white'/></svg>",
    alt: "Arcade",
    active: false,
  },
];

const scrollContainer = ref<HTMLElement | null>(null);

function scrollLeft() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      left: -150,
      behavior: "smooth",
    });
  }
}

function scrollRight() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      left: 150,
      behavior: "smooth",
    });
  }
}
</script>
