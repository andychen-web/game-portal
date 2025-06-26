<script setup lang="ts">
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Header />
  <!-- 主要迎合手機用戶 排版-->
  <div class="w-full mx-auto mb-16 ">
    <router-view />
  </div>
  <Navbar />
</template>
