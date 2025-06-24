<template>
  <section :id='props.title' aria-labelledby="popular-title" class="mb-4">
    <!-- Title row -->
    <div class="flex items-center mb-4">
      <h2 id="popular-title" class="text-xl font-semibold text-white">
        {{props.title}}
      </h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-4">
      <a
        v-for="{ title, imgUrl } in games"
        :key="title"
        href="#"
        class="block group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg"
      >
        <div
          class="aspect-square rounded-md overflow-hidden bg-gray-200 hover:scale-105"
        >
          <img
            :src="`https://img.9dgame7.com/myimgweb/uploads/images/20250425/${imgUrl}`"
            :alt="title"
            class="w-full h-full object-cover transition-transform duration-300"
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
import { ref } from "vue";
const props = defineProps<{
  title: string;
}>();
interface Game {
  imgUrl: string;
  title: string;
}
const games: Game[] = [
  { imgUrl: "680b3253b2743.jpg", title: "Lorem ipsum 1" },
  { imgUrl: "680b31f5c114e.jpg", title: "Lorem ipsum 2" },
  { imgUrl: "680b2fb02d30e.jpg", title: "Lorem ipsum 3" },
  { imgUrl: "680b2fb030437.jpg", title: "Lorem ipsum 4" },
  { imgUrl: "680b327830d1e.jpg", title: "Lorem ipsum 5" },
  { imgUrl: "680b33035a4f9.jpg", title: "Lorem ipsum 6" },
  { imgUrl: "680b302449155.jpg", title: "Lorem ipsum 7" },
  { imgUrl: "680b3045e4c96.jpg", title: "Lorem ipsum 8" },
  { imgUrl: "680b308746dd9.jpg", title: "Lorem ipsum 9" },
  { imgUrl: "680b309dee5b6.jpg", title: "Lorem ipsum 10" },
];
</script>
