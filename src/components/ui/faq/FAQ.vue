<template>
  <div class="space-y-4">
    <!-- Search -->
    <div v-if="showInput" class="mb-4">
      <input
        v-model="search"
        type="text"
        class="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        placeholder="Search FAQs..."
      />
    </div>

    <!-- Categories nav -->
    <div
      v-if="showCategories"
      class="flex gap-2 mb-4 w-full overflow-x-scroll overflow-y-hidden whitespace-nowrap"
    >
      <a
        v-for="cat in derivedCategories"
        :key="cat"
        :href="'#' + cat"
        class="px-3 py-1 rounded text-sm font-medium bg-gray-100 hover:bg-primary-100 text-primary-700"
      >
        {{ cat }}
      </a>
    </div>

    <!-- Full FAQ List (Grouped by Category) -->
    <div class="space-y-6">
      <section
        v-for="cat in derivedCategories"
        :key="cat"
        :id="cat"
        class="space-y-3"
      >
        <h3 class="text-lg font-semibold text-primary-700">{{ cat }}</h3>

        <details
          v-for="(faq, index) in searchFiltered(groupedFaqs[cat])"
          :key="index"
          class="group bg-white overflow-hidden"
        >
          <summary
            :id="faq.category"
            class="flex border rounded  shadow-sm justify-between items-center w-full py-3.5 px-4 font-medium text-left text-primary-700 hover:bg-primary-100 cursor-pointer"
          >
            {{ faq.question }}
            <svg
              class="w-5 h-5 text-primary-600 transform transition-transform duration-200 group-open:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 15l-5-5h10l-5 5z" />
            </svg>
          </summary>
          <div class="p-4 text-sm text-gray-700 border-t border-gray-200">
            {{ faq.answer }}
          </div>
        </details>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const props = defineProps<{
  faqs: Array<{ question: string; answer: string; category?: string }>;
  showInput?: boolean;
  showCategories?: boolean;
}>();

const search = ref("");
const currentHash = ref("");

onMounted(() => {});

// Group by category
const groupedFaqs = computed(() => {
  const groups: Record<string, typeof props.faqs> = {};
  props.faqs.forEach((faq) => {
    const cat = faq.category ?? "Others";
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(faq);
  });
  return groups;
});

const derivedCategories = computed(() => {
  return Object.keys(groupedFaqs.value);
});

const searchFiltered = (faqs: typeof props.faqs) =>
  faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.value.toLowerCase())
  );
</script>
