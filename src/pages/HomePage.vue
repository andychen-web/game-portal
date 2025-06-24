<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import GameCategory from "../components/GameCategory.vue";
import GameList from "../components/GameList.vue";
import JackpotShowcase from "../components/JackpotShowcase.vue";
</script>

<template>
  <Navbar />
  <Hero />
  <JackpotShowcase :amount="1000" />
  <GameCategory />
  <GameList :title="'Popular'" />
  <GameList :title="'Slots'" />
</template>
