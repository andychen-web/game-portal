<template>
  <div class="w-full overflow-hidden aspect-[2/0.7] relative">
    <Swiper v-bind="swiperOptions" class="w-full h-full">
      <SwiperSlide v-for="(banner, idx) in banners" :key="idx">
        <a target="_blank" rel="nofollow" class="block w-full h-full">
          <img
            :src="banner.imgUrl"
            :alt="banner.alt"
            class="w-full h-full object-cover"
          />
        </a>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import type { SwiperOptions } from "swiper/types";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { ref } from "vue";
import { fetchUnsplashImages } from "@/utils/global";
const swiperOptions: SwiperOptions = {
  effect: "fade",
  loop: true,
  pagination: { clickable: true },
  autoplay: { delay: 3000, disableOnInteraction: false },
  modules: [EffectFade, Pagination, Autoplay],
};

const banners = ref([]);

fetchUnsplashImages("casino").then((urls) => {
  banners.value = urls.map((url) => ({ imgUrl: url }));
});
</script>
