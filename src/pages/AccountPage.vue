<template>
  <section
    class="w-full bg-gradient-to-br from-[#4B5563] to-[#9CA3AF] text-white mb-4"
  >
    <div
      class="container mx-auto px-4 py-6 sm:py-8"
      v-for="player in players"
      :key="player.name"
    >
      <div class="flex items-center space-x-3 sm:space-x-4">
        <div
          class="rounded-full w-20 h-20 flex items-center justify-center shrink-0 shadow overflow-hidden"
          style="
            background-image: linear-gradient(
              to bottom right,
              #4b5563,
              #9ca3af
            );
          "
        >
          <svg
            class="w-8 h-8 sm:w-10 sm:h-10 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5ZM7.52945 18.5866C8.06197 17.6431 9.05932 17 10.2133 17H13.7867C14.9407 17 15.938 17.6431 16.4706 18.5866C15.4437 19.4024 13.7862 20 12 20C10.2138 20 8.55633 19.4024 7.52945 18.5866Z"
            />
          </svg>
        </div>

        <div class="flex-grow">
          <p class="text-lg sm:text-xl font-semibold text-white">
            {{ player.name }}
          </p>
          <div
            class="mt-1 inline-flex items-center space-x-1.5 text-gray-900 px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-semibold shadow"
            style="background-color: gold"
          >
            <svg
              class="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M2.54604 13.1061L5.04398 5.04819C5.16169 4.64275 5.55433 4.37061 5.98845 4.37061H18.0116C18.4457 4.37061 18.8383 4.64275 18.956 5.04819L21.454 13.1061C21.5592 13.4648 21.3485 13.837 20.9973 13.9448C20.9171 13.9695 20.8345 13.983 20.7508 13.983H3.24921C2.835 13.983 2.49921 13.6472 2.49921 13.233C2.49921 13.1911 2.50227 13.1497 2.5083 13.1091L2.54604 13.1061ZM4.42439 11.983L3.49921 8.98303H20.5008L19.5756 11.983H4.42439ZM2.99921 15.983H20.9992V17.983H2.99921V15.983ZM11.9992 10.983C12.5515 10.983 12.9992 10.5352 12.9992 9.98297C12.9992 9.43073 12.5515 8.98297 11.9992 8.98297C11.447 8.98297 10.9992 9.43073 10.9992 9.98297C10.9992 10.5352 11.447 10.983 11.9992 10.983ZM6.99921 10.983C7.55145 10.983 7.99921 10.5352 7.99921 9.98297C7.99921 9.43073 7.55145 8.98297 6.99921 8.98297C6.44697 8.98297 5.99921 9.43073 5.99921 9.98297C5.99921 10.5352 6.44697 10.983 6.99921 10.983ZM16.9992 10.983C17.5515 10.983 17.9992 10.5352 17.9992 9.98297C17.9992 9.43073 17.5515 8.98297 16.9992 8.98297C16.447 8.98297 15.9992 9.43073 15.9992 9.98297C15.9992 10.5352 16.447 10.983 16.9992 10.983Z"
              />
            </svg>
            <span>{{ player.badge }}</span>
          </div>
        </div>
      </div>

      <div class="mt-6 sm:mt-8">
        <p class="text-sm text-gray-200">Account Balance</p>
        <p class="text-3xl sm:text-4xl font-bold text-white mt-0.5">
          {{ player.balance }}
        </p>
      </div>

      <div class="mt-6">
        <a
          :href="player.depositLink"
          target="_blank"
          rel="nofollow"
          class="mr-4"
        >
          <Button class="btn-primary">Deposit</Button>
        </a>
        <a :href="player.withdrawLink" target="_blank" rel="nofollow">
          <Button class="bg-gradient-to-br border">Withdraw</Button>
        </a>
      </div>
    </div>
  </section>

  <section class="bg-primary-100 py-6 sm:py-8 mb-4">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center text-center space-y-4">
        <div class="flex items-center space-x-4">
          <svg
            class="w-10 h-10 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="..." />
          </svg>
          <svg
            class="w-10 h-10 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="..." />
          </svg>
        </div>
        <p class="text-xl sm:text-2xl font-semibold text-gray-900 max-w-lg">
          Multi-layer encryption technology to protect your funds and privacy.
        </p>
      </div>
    </div>
  </section>

  <FAQ :faqs="faqList" :showInput="true" :showCategories="true" />

  <Card class="my-4 p-8 text-center">
    <h2 class="text-2xl sm:text-3xl font-semibold text-[#4B5563] mb-4">
      Unlock the 9d World: Download the App!
    </h2>
    <p class="text-base sm:text-lg text-gray-600 mb-8">
      Get full access to exclusive games, incredible bonuses and the best Slots
      performance. Install the 9d app now.
    </p>
    <a
      href="https://c3.maxcloudlink.com?ch=FNG0B"
      target="_blank"
      rel="nofollow"
      class="inline-flex items-center justify-center py-2.5 px-5 sm:py-3 sm:px-6 text-base sm:text-lg font-medium rounded-md shadow-sm bg-[#4B5563] text-white hover:bg-[#374151] focus:outline-none focus:ring-2 focus:ring-[#4B5563] focus:ring-offset-2 focus:ring-offset-white transition-colors duration-150 ease-in-out"
    >
      <svg class="w-5 h-5 mr-2 sm:mr-3" viewBox="0 0 20 20" fill="currentColor">
        <path d="..." />
      </svg>
      <span>Download App Now</span>
    </a>
  </Card>
</template>

<script setup>
import { Button } from "@/components/ui/button";
import FAQ from "@/components/ui/faq/FAQ.vue";
import Card from "@/components/ui/card/Card.vue";

const players = [
  {
    name: "Lucky Player",
    badge: "VIP GOLD",
    balance: "R$ ****,**",
    depositLink: "https://c3.maxcloudlink.com?ch=FNG0B",
    withdrawLink: "https://c3.maxcloudlink.com?ch=FNG0B",
  },
];
const faqList = [
  {
    question: "How do I sign up?",
    answer: "Click on register...",
    category: "Account",
  },
  {
    question: "How to deposit?",
    answer: "Use Pix or bank transfer...",
    category: "Deposits",
  },
  {
    question: "Game rules?",
    answer: "Each game has its own rules...",
    category: "Games Rules and FAQ",
  },
  {
    question: "Game rules?",
    answer: "Each game has its own rules...",
    category: " Detailed Category",
  },
  {
    question: "Game rules?",
    answer: "Each game has its own rules...",
    category: "Very Detailed Category",
  },
];
</script>
<style scoped>
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, #4b5563, #9ca3af);
}
</style>
