<script setup lang="ts">
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Header />
  <!-- 主要迎合手機用戶 排版-->
  <div id="main" class="w-[540px] mx-auto">
    <router-view />
  </div>
  <Navbar />
</template>
