<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "Contribute",
    title: "Make a Difference with Every Contribution",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, quasi sint reiciendis quidem iure.",
    image: "roboto.png",
  },
  {
    badgeTitle: "Discover",
    title: "Create an Impact with Every Choice",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, sint reiciendis quidem iure veritatis optio facere tenetur.",
    image: "runner.png",
  },
  // {
  //   badgeTitle: "Innovate",
  //   title: "Make Every Action Count",
  //   description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, odit similique quasi sint.",
  //   image: "pacheco.png",
  // },
  // {
  //   badgeTitle: "Collaborate",
  //   title: "Tackle this challenge together",
  //   description:
  //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, quasi sint reiciendis quidem iure.",
  //   image: "gamestation.png",
  // },
];
</script>

<template>
  <section id="features" class="container py-24 sm:py-32">
    <!-- 標題區 -->
    <div class="text-center mb-12">
      <h2 class="text-lg text-primary tracking-wider mb-2">
        How It Works
      </h2>
      <h3 class="text-3xl md:text-4xl font-bold">
        Step-by-Step Process
      </h3>
    </div>

    <!-- 卡片區 -->
    <div class="lg:w-4/5 mx-auto relative space-y-16">
      <div
        v-for="({ badgeTitle, title, description, image }, index) in HowItWorksList"
        :key="title"
        :class="[
          'flex flex-col lg:flex-row items-center gap-8',
          index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
        ]"
      >
        <!-- 左側卡片 -->
        <Card class="bg-transparent border-0 shadow-none w-full lg:w-1/2">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>
            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>

        <!-- 右側圖片 -->
        <div class="w-full lg:w-1/2 flex justify-center">
          <img
            :src="image"
            :alt="`Image describing ${title}`"
            class="w-[180px] md:w-[250px] lg:w-[300px] transition-transform duration-300 hover:-translate-y-4"
          />
        </div>
      </div>
    </div>
  </section>
</template>
