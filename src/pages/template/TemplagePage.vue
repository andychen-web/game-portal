<template>
  <div></div>
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
