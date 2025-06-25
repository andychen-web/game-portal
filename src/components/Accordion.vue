<template>
  <div class="w-full max-w-md mx-auto">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-b border-gray-200"
    >
      <button
        @click="toggle(index)"
        class="w-full flex justify-between items-center py-3 text-left font-medium text-primary"
      >
        {{ item.title }}
        <span>
          {{ activeIndex === index ? '-' : '+' }}
        </span>
      </button>

      <div v-if="activeIndex === index" class="py-2 text-sm text-gray-700">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeIndex = ref<number | null>(null);

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const items = [
  { title: 'Beginner Guide', content: 'Step-by-step instructions for new users.' },
  { title: 'How to Withdraw', content: 'Click on Wallet, then Withdraw...' },
  { title: 'Security Tips', content: 'Always enable 2FA.' }
];
</script>
