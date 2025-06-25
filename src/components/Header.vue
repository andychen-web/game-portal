<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <header
    class="w-[540px] bg-black lg:max-w-screen-xl mx-auto sticky z-40 flex justify-between items-center p-2 shadow-md"
  >
    <!-- Left: Logo -->
    <a href="/" class="font-bold text-lg flex items-center text-white">Logo</a>

    <!-- Right: Buttons -->
    <div class="flex gap-2 items-center">
      <Button variant="outline" class="text-sm font-medium">Enter</Button>
      <Button variant="default" class="text-sm font-medium">Register</Button>
    </div>
  </header>
</template>
<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}
.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
