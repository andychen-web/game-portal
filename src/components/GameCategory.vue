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
    label: "Popular",
    href: "#Popular",
    img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1bff47.avif",
    alt: "Popular",
    active: true,
  },
  {
    id: "slots",
    label: "Slots",
    href: "#Slots",
    img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1c1749.avif",
    alt: "Slots",
    active: false,
  },
  {
    id: "aovivo",
    label: "Ao Vivo",
    href: "#AoVivo",
    img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1b5467.avif",
    alt: "Ao Vivo",
    active: false,
  },
  {
    id: "esporte",
    label: "Esporte",
    href: "#Esporte",
    img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1be824.avif",
    alt: "Esporte",
    active: false,
  },
  {
    id: "popular",
    label: "Popular",
    href: "#Popular",
    img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1bff47.avif",
    alt: "Popular",
    active: true,
  },
  {
    id: "slots",
    label: "Slots",
    href: "#Slots",
    img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1c1749.avif",
    alt: "Slots",
    active: false,
  },
  {
    id: "popular",
    label: "Popular",
    href: "#Popular",
    img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1bff47.avif",
    alt: "Popular",
    active: true,
  },
  {
    id: "slots",
    label: "Slots",
    href: "#Slots",
    img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1c1749.avif",
    alt: "Slots",
    active: false,
  },
  {
    id: "popular",
    label: "Popular",
    href: "#Popular",
    img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1bff47.avif",
    alt: "Popular",
    active: true,
  },
  {
    id: "slots",
    label: "Slots",
    href: "#Slots",
    img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1c1749.avif",
    alt: "Slots",
    active: false,
  },
  {
    id: "popular",
    label: "Popular",
    href: "#Popular",
    img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1bff47.avif",
    alt: "Popular",
    active: true,
  },
  {
    id: "slots",
    label: "Slots",
    href: "#Slots",
    img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1c1749.avif",
    alt: "Slots",
    active: false,
  },
  {
    id: "popular",
    label: "Popular",
    href: "#Popular",
    img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1bff47.avif",
    alt: "Popular",
    active: true,
  },

  // {
  //   id: "aovivo",
  //   label: "Ao Vivo",
  //   href: "#AoVivo",
  //   img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1b5467.avif",
  //   alt: "Ao Vivo",
  //   active: false,
  // },
  // {
  //   id: "esporte",
  //   label: "Esporte",
  //   href: "#Esporte",
  //   img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1be824.avif",
  //   alt: "Esporte",
  //   active: false,
  // },
  // {
  //   id: "cartas",
  //   label: "Cartas",
  //   href: "#Cartas",
  //   img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1bd8bd.avif",
  //   alt: "Cartas",
  //   active: false,
  // },
  // {
  //   id: "blockchain",
  //   label: "Blockchain",
  //   href: "#Blockchain",
  //   img: "https://img.9dgame7.com/myimgweb/uploads/images/20250516/6826fdf1b760b.avif",
  //   alt: "Blockchain",
  //   active: false,
  // },
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
