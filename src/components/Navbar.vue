<script lang="ts" setup>
import { ref } from "vue";

// TODO
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
mode.value = "dark";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

import { ChevronsDown } from "lucide-vue-next";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#culture",
    label: "Culture",
  },
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "See All Games",
    description: "Lorem.",
    path: "/products",
  },
];

const isOpen = ref<boolean>(false);
</script>

<template>
  <header
    :class="{
      'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto sticky z-40 rounded-2xl flex justify-between items-center p-2 shadow-md': true,
    }"
  >
    <!-- 最左 LOGO -->
    <a href="/" class="font-bold text-lg flex items-center">Logo</a>

    <!-- 最右邊登入註冊 -->
    <div class="flex gap-2 items-center">
      <Button variant="outline" class="text-sm font-medium">Enter</Button>
      <Button variant="default" class="text-sm font-medium">Register</Button>
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
