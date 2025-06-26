<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <header
    class="w-full bg-black mx-auto sticky z-40 flex justify-between items-center px-4 py-2 shadow-md max-w-screen-xl"
  >
    <!-- Left: Logo -->
    <a
      href="/"
      class="flex items-center text-white font-bold text-base sm:text-lg"
    >
      <img src="../assets/logo.png" alt="logo" class="h-8 w-auto sm:h-10" />
    </a>

    <!-- Right: Buttons -->
    <div class="flex gap-2 items-center">
      <Button variant="outline" class="text-xs sm:text-sm font-medium"
        >Enter</Button
      >
      <Button variant="default" class="text-xs sm:text-sm font-medium"
        >Register</Button
      >
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
