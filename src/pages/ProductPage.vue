<script setup lang="ts">
import Card from "@/components/ui/card/Card.vue";

interface GamesProps {
  imageUrl: string;
  title: string;
}
const games: GamesProps[] = [
  {
    imageUrl: "https://cgp-cdn.safe-iplay.com/gamesImages/2380416_icon.png",
    title: "Game ",
  },
];
</script>
<template>
  <div class="bg-black">
    <div class="section text-center bg-card text-card-foreground py-16">
      <div class="container">Hero Image</div>
    </div>
    <div class="row">
      <div class="text-primary mb-4 text-center">Featured Games</div>
      <Card
        v-for="{ imageUrl, title } in games"
        :key="title"
        class="bg-muted/50 dark:bg-card"
      >
      </Card>
    </div>
  </div>
</template>
