<template>
  <section class="page-wrap">
    <h2 class="heading-2">Guias e Tutoriais</h2>
    <Accordion :isExpandable="false" />
    <h2 class="heading-2 mt-8">Perguntas Frequentes (FAQ)</h2>
    <FAQ :faqs="faqList" :showInput="true" :showCategories="true" />
    <!-- Card -->
    <div
      class="container mx-auto px-4 py-8 sm:py-12 max-w-screen-md text-center"
    >
      <div class="space-y-6">
        <Card
          v-for="({ icon, title, description }, index) in cardList"
          :key="title"
          class="bg-white rounded-lg shadow-md px-6 py-5 text-left flex flex-col items-start"
        >
          <CardHeader class="mb-3 w-full text-left">
            <CardTitle class="text-3xl font-semibold text-gray-900 mt-2">
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent
            class="text-gray-600 text-base leading-relaxed w-full text-left"
          >
            {{ description }}
          </CardContent>

          <button
            class="mt-4 bg-primary font-semibold py-2 px-4 text-white rounded-md text-left"
          >
            Saiba Mais
          </button>
        </Card>
      </div>
    </div>
    <!-- Card List -->
    <h2 class="heading-2 text-center">Canais de Atendimento ao Cliente</h2>
    <div class="container mx-auto px-4 py-4 max-w-screen-md text-center">
      <div class="space-y-6">
        <Card
          v-for="(
            { icon, title, description }, index
          ) in customerServiceCardList"
          :key="title"
          class="bg-white rounded-lg shadow-md px-6 py-5"
        >
          <div class="flex items-start gap-4">
            <!-- Icon: Fixed width (e.g. col-span-3 equivalent) -->
            <div class="w-12 flex-shrink-0">
              <component class="size-8 text-primary" :is="iconMap[icon]" />
            </div>

            <!-- Content: Takes remaining space -->
            <div class="flex-1 flex flex-col text-left">
              <CardHeader class="mb-3">
                <CardTitle class="text-xl font-semibold text-gray-900 mt-1">
                  {{ title }}
                </CardTitle>
              </CardHeader>

              <CardContent class="text-gray-600 text-base leading-relaxed">
                {{ description }}
              </CardContent>

              <button
                class="mt-4 self-start bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary-700 transition"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from "@/components/ui/card/Card.vue";
import Accordion from "../components/ui/accordion/Accordion.vue";
import FAQ from "@/components/ui/faq/FAQ.vue";
import { Sparkle } from "lucide-vue-next";
import { reactive } from "vue";

const faqList = reactive([
  {
    question: "Como faço para me cadastrar?",
    answer: "Clique em registrar...",
    category: "Conta",
  },
  {
    question: "Como depositar?",
    answer: "Use Pix ou transferência bancária...",
    category: "Depósitos",
  },
  {
    question: "Regras do jogo?",
    answer: "Cada jogo possui suas próprias regras...",
    category: "Jogos",
  },
]);

const cardList = [
  {
    icon: "blocks",
    title: "Build Brand Trust",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
];
const customerServiceCardList = [
  {
    icon: "sparkle",
    title: "Build Brand Trust",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
];
const iconMap = {
  sparkle: Sparkle,
};
</script>
