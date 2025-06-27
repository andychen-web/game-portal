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
        @click="onNavItemClick(item)"
      >
        <component
          :is="iconMap[item.icon]"
          class="w-8 h-8"
          :stroke="item.isActive ? 'white' : 'grey'"
        />
        <!-- 等同於 <Icon stroke="white" class="w-8 h-8" /> -->
        <span
          class="mt-0.5 text-xs leading-tight truncate"
          >{{ item.label }}</span
        >
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import router from "@/router";
import { DownloadCloud, Home, Tag, User, UserPlus } from "lucide-vue-next";
import { onMounted, reactive } from "vue";

const iconMap = {
  home: Home,
  tag: Tag,
  userplus: UserPlus,
  downloadcloud: DownloadCloud,
  user: User,
};
interface NavItem {
  label: string;
  icon: keyof typeof iconMap;
  isActive: boolean;
  route?: string;
}
const navItems: NavItem[] = reactive([
  { label: "Início", icon: "home", isActive: false, route: "/" },
  { label: "Promoções", icon: "tag", isActive: false, route: "/promotions" },
  { label: "Registrar", icon: "userplus", isActive: false, route: "/register" },
  {
    label: "Baixar",
    icon: "downloadcloud",
    isActive: false,
    route: "/download",
  },
  { label: "Minha Conta", icon: "user", isActive: false, route: "/account" },
]);

const onNavItemClick = (item) => {
  if (item.route) {
    router.push(item.route);
  }
  // item.isActive = !item.isActive;
  navItems.forEach((navItem) => {
    // navItem.isActive = navItem.route === item.route;
    if (navItem.label === item.label) {
      navItem.isActive = !navItem.isActive;
    } else {
      navItem.isActive = false;
    }
  });
};

onMounted(() => {
  navItems.forEach((navItem) => {
    if (navItem.route === window.location.pathname) {
      navItem.isActive = true;
    }
  });
});
</script>
