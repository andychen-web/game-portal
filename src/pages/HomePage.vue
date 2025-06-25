<script setup lang="ts">
import Hero from "../components/Hero.vue";
import GameCategory from "../components/GameCategory.vue";
import GameList from "../components/GameList.vue";
import JackpotShowcase from "../components/JackpotShowcase.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="bg-black p-4">
    <Hero />
    <JackpotShowcase :amount="1000" />
    <GameCategory />
    <GameList :title="'Popular'" />
    <GameList :title="'Slots'" />
    <Footer />
  </div>
</template>
