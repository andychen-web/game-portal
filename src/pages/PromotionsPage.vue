<template>
  <section class="container">
    <h2 class="text-xl sm:text-2xl font-semibold text-white mb-6">
      Promotions and Special Offers
    </h2>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
interface ListItem {}
const list = reactive<ListItem[]>([
  {
    name: "",
  },
]);
</script>

<style scoped></style>
