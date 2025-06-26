<template>
  <section class="page-wrap">
    <h2 class="heading-2">Promotions and Special Offers</h2>

    <div class="grid sm:grid-cols-1 gap-6">
      <Card
        v-for="({ imgUrl, title, desc, link, tag }, index) in list"
        :key="index"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-150"
      >
        <a
          :href="link"
          target="_blank"
          rel="nofollow"
          class="block focus:outline-none"
          :aria-label="title"
        >
          <!-- Image with max width 500px and auto height -->
          <div class="relative mx-auto max-w-[500px] w-full">
            <img
              :src="imgUrl"
              :alt="`Promotion Image: ${title}`"
              class="w-full h-auto object-cover rounded-t-lg"
            />
            <span
              v-if="tag"
              class="absolute top-3 right-3 bg-primary-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm"
            >
              {{ tag }}
            </span>
          </div>

          <div class="p-2 text-left">
            {{ title }}
          </div>
          <div
            class="px-2 text-sm text-gray-600 leading-relaxed text-left"
          >
            {{ desc }}
          </div>
        </a>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from "@/components/ui/card/Card.vue";
import { reactive } from "vue";

interface ListItem {
  imgUrl: string;
  title: string;
  desc: string;
  link: string;
  tag?: string;
}

const list = reactive<ListItem[]>([
  {
    imgUrl:
      "https://img.9dgame7.com/myimgweb/uploads/images/20250425/680b5034de0b5.webp",
    title: "VIP Welcome Bonus",
    desc: "Sign up today and receive an exclusive 150% bonus on your first deposit, plus 50 free spins on our most popular slots.",
    link: "https://c3.maxcloudlink.com?ch=FNG0B",
    tag: "NEW",
  },
  {
    imgUrl:
      "https://img.9dgame7.com/myimgweb/uploads/images/20250425/680b3dd906583.webp",
    title: "VIP Welcome Bonus",
    desc: "Sign up today and receive an exclusive 150% bonus on your first deposit, plus 50 free spins on our most popular slots.",
    link: "https://c3.maxcloudlink.com?ch=FNG0B",
    tag: "NEW",
  },
  // Add more promotions here if needed
]);
</script>
