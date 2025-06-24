<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { NavigationMenuRoot, type NavigationMenuRootProps } from 'radix-vue'
import NavigationMenuViewport from './NavigationMenuViewport.vue'
import { cn } from '@/lib/utils'

// 定義傳入的 props：NavigationMenu 的原始 props + 額外 class 支援
const props = defineProps<NavigationMenuRootProps & {
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <NavigationMenuRoot
    v-bind="props"
    :class="cn(
      'relative z-10 flex max-w-max flex-1 items-center justify-center',
      props.class
    )"
  >
    <slot />
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
