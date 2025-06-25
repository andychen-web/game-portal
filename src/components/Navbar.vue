<template>
  <nav
    class="fixed bottom-0 left-0 right-0 z-50 w-full h-16 bg-primary shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),_0_-2px_4px_-2px_rgba(0,0,0,0.1)]"
  >
    <div class="relative flex h-full">
      <button
        v-for="item in navItems"
        :key="item.label"
        type="button"
        class="flex flex-col items-center justify-center flex-1 min-w-0 px-1 text-center focus:outline-none"
        :class="
          item.isActive
            ? 'text-white'
            : 'text-accent hover:text-white focus:text-white'
        "
      >
        <component
          :is="iconMap[item.icon]"
          class="w-8 h-8"
          :stroke="item.isActive ? 'white' : 'black'"
        />
        <!-- 等同於 <Icon stroke="white" class="w-8 h-8" /> -->

        <span
          class="mt-0.5 text-xs leading-tight truncate"
          :class="item.isActive ? 'text-white' : 'text-black'"
          >{{ item.label }}</span
        >
      </button>

      <div
        class="absolute bottom-0 left-0 w-1/5 h-1 transition-all duration-300 ease-in-out bg-white"
      ></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Home, Tag, UserPlus, DownloadCloud, User } from "lucide-vue-next";

const iconMap = {
  home: Home,
  tag: Tag,
  userplus: UserPlus,
  downloadcloud: DownloadCloud,
  user: User,
};

const navItems = [
  { label: "Início", icon: "home", isActive: true },
  { label: "Promoções", icon: "tag", isActive: false },
  { label: "Registrar", icon: "userplus", isActive: false },
  { label: "Baixar", icon: "downloadcloud", isActive: false },
  { label: "Minha", icon: "user", isActive: false },
];
</script>
