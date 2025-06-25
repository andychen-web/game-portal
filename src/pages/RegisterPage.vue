<template>
  <section class="container">
    <h2 class="text-xl sm:text-2xl font-semibold text-white mb-6">
      Guides and Tutorials
    </h2>
    <Accordion />
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Accordion from "@/components/Accordion.vue";
interface ListItem {}
const list = reactive<ListItem[]>([
  {
    name: "",
  },
]);
</script>

<style scoped></style>
