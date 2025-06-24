<script setup lang="ts">
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import GameCategory from "../components/GameCategory.vue";
import GameList from "../components/GameList.vue";
import JackpotShowcase from "../components/JackpotShowcase.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <Header />
  <Hero />
  <JackpotShowcase :amount="1000" />
  <GameCategory />
  <GameList :title="'Popular'" />
  <GameList :title="'Slots'" />
  <Footer />
  <Navbar />
</template>
