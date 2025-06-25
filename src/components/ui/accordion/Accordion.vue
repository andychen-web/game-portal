<template>
  <section class="">
    <ul class="space-y-4">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="bg-white rounded-lg shadow-md"
      >
        <button
          @click="toggle(index)"
          class="flex items-center justify-between w-full p-4 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-150 group"
        >
          <div class="flex items-center">
            <component
              :is="item.icon"
              class="w-6 h-6 text-primary mr-3 flex-shrink-0"
            />
            <span class="text-base text-gray-900 group-hover:text-primary-600">
              {{ item.title }}
            </span>
          </div>
          <ChevronRight
            class="w-5 h-5 text-gray-400 group-hover:text-primary transform transition-transform duration-200"
            :class="{ 'rotate-90': activeIndex === index }"
          />
        </button>

        <div
          v-if="props.isExpandable && activeIndex === index"
          class="px-4 pb-4 text-sm text-gray-700"
        >
          {{ item.content }}
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  BookOpen,
  Wallet,
  Download,
  FileText,
  ChevronRight,
} from "lucide-vue-next";
const props = defineProps<{
  isExpandable?: boolean;
}>();
const activeIndex = ref<number | null>(null);

const toggle = (index: number) => {
  if (!props.isExpandable) return;
  activeIndex.value = activeIndex.value === index ? null : index;
};

const items = [
  {
    title: "Beginner's Guide",
    content: "Step-by-step instructions for new users.",
    icon: BookOpen,
  },
  {
    title: "Recharge Tutorial",
    content: "Learn how to recharge your account securely.",
    icon: Wallet,
  },
  {
    title: "Withdrawal Tutorial",
    content: "Click on Wallet, then Withdraw to proceed.",
    icon: Download,
  },
  {
    title: "Detailed Game Rules",
    content: "Understand the full rules before playing.",
    icon: FileText,
  },
];
</script>
