<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Blocks, LineChart, Paintbrush, Sparkle, Tag, Wallet } from "lucide-vue-next";

const cultureList = [
  {
    icon: "blocks",
    title: "Build Brand Trust",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
  {
    icon: "lineChart",
    title: "More Leads",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.",
  },
  {
    icon: "wallet",
    title: "Higher Conversions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur. A odio velit cum aliquam",
  },
  {
    icon: "sparkle",
    title: "Test Marketing Ideas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
];

const iconMap = {
  sparkle: Sparkle,
  tag: Tag,
  paintbrush: Paintbrush,
  blocks: Blocks,
  lineChart: LineChart,
  wallet: Wallet,
};
</script>

<template>
  <section id="culture" class="container py-24 sm:py-32">
    <div class="grid lg:grid-cols-2 items-center gap-16">
      <!-- 左側文字區塊 -->
      <div>
        <h2 class="text-lg text-primary tracking-wider mb-2">Culture</h2>
        <h3 class="text-3xl md:text-4xl font-bold mb-4">Our Culture</h3>
        <p class="text-xl text-muted-foreground mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ducimus
          reprehenderit architecto rerum similique facere odit deleniti necessitatibus quo quae.
        </p>
        <p class="text-xl text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ducimus
          reprehenderit architecto rerum similique facere odit deleniti necessitatibus quo quae.
        </p>
      </div>

      <!-- 右側卡片區塊 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card
          v-for="({ icon, title, description }) in cultureList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background/70 dark:hover:bg-background transition-colors"
        >
          <CardHeader>
            <component
              :is="iconMap[icon]"
              class="w-8 h-8 text-primary mb-4"
            />
            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
