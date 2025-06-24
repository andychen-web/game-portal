<template>
  <div class="w-full rounded-lg overflow-hidden aspect-[2/0.7] relative">
    <Swiper
      :modules="[Pagination, EffectFade, Autoplay]"
      effect="fade"
      :pagination="{ clickable: true }"
      autoplay
      loop
      class="w-full h-full"
    >
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
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import { fetchUnsplashImages } from "@/modules/global";

const banners = ref([]);

fetchUnsplashImages("casino").then((urls) => {
  banners.value = urls.map((url) => ({ imgUrl: url }));
});

</script>
