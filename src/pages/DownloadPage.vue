<template>
  <div class="page-wrap mx-auto px-4 py-4 max-w-screen-md text-center">
    <div class="space-y-6">
      <Card
        v-for="({ imgUrl, title, desc, numOfStars, rating }, index) in list"
        :key="title"
        class="bg-white rounded-lg shadow-md px-6 py-5"
      >
        <div class="flex items-start gap-4">
          <div class="w-12 flex-shrink-0">
            <img src="../assets/j1-logo.svg" alt="j1 Game Portal" />
          </div>

          <!-- Content: Takes remaining space -->
          <div class="flex-1 flex flex-col text-left">
            <div>
              {{ title }}
            </div>

            <div class="text-gray-600 text-base leading-relaxed">
              {{ desc }}
            </div>
            <div class="flex">
              <svg
                v-for="star in numOfStars"
                class="w-5 h-5 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div class="px-2">
                {{ rating }}
              </div>
            </div>

            <button
              class="mt-4 self-start bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary-700 transition"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </Card>
    </div>

    <h2 class="heading-2 text-center p-4">Guia de Instalação dos Jogos</h2>
    <!-- APK -->
    <h3 class="text-xl font-semibold text-[#4B5563] mb-5 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-7 h-7 text-[#4B5563] mr-2"
      >
        <path
          d="M18.596 2.501S16.83 1 12.003 1C7.175 1 5.408 2.501 5.408 2.501L3 4.909V16.5h18V4.909L18.596 2.501zM7.5 10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 18.5c0 .828.672 1.5 1.5 1.5h11c.828 0 1.5-.672 1.5-1.5V17H5v1.5z"
        ></path></svg
      ><font style="vertical-align: inherit"
        ><font style="vertical-align: inherit">
          Instalação no Android (APK)
        </font></font
      >
    </h3>

    <div class="space-y-6">
      <Card
        v-for="({ title, desc, icon }, index) in list"
        :key="title"
        class="bg-white rounded-lg shadow-md px-6 py-5"
      >
        <div class="text-left py-2">
          {{ title }}
        </div>

        <div class="flex items-start gap-4">
          <div class="w-12 flex-shrink-0">
            <component class="size-8 text-primary" :is="icon" />
          </div>

          <!-- Content: Takes remaining space -->
          <div class="flex-1 flex flex-col text-left">
            <div class="text-gray-600 text-base leading-relaxed">
              {{ desc }}
            </div>
          </div>
        </div>
      </Card>
    </div>

    <div>
      <div v-for="(section, index) in iosSections" :key="index">
        <h3
          class="mt-4 text-xl font-semibold text-[#4B5563] mb-5 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-7 h-7 text-[#4B5563] mr-2"
          >
            <path
              d="M18.596 2.501S16.83 1 12.003 1C7.175 1 5.408 2.501 5.408 2.501L3 4.909V16.5h18V4.909L18.596 2.501zM7.5 10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 18.5c0 .828.672 1.5 1.5 1.5h11c.828 0 1.5-.672 1.5-1.5V17H5v1.5z"
            ></path>
          </svg>
          <font style="vertical-align: inherit">
            <font style="vertical-align: inherit">
              {{ section.title }}
            </font>
          </font>
        </h3>
        <div class="p-4 sm:p-6 bg-white rounded-lg shadow-md">
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0 pt-1" v-html="section.iconSvg"></div>
            <p
              class="text-base text-gray-600 leading-relaxed"
              v-html="section.description"
            ></p>
          </div>
        </div>

        <a
          :href="section.downloadLink"
          target="_blank"
          rel="nofollow"
          class="m-8 inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 bg-[#4B5563] text-white hover:bg-[#374151] focus:ring-[#4B5563] py-2.5 px-6 sm:py-3 sm:px-8 text-base sm:text-lg"
        >
          <div style="vertical-align: inherit">
            <div style="vertical-align: inherit">
              {{ section.downloadText }}
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            class="w-5 h-5 ml-2"
          >
            <path
              fill-rule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>

        <section
          class="mb-4 bg-white rounded-lg shadow-md overflow-hidden p-4 sm:p-6"
        >
          <div class="flex items-start mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-primary mr-3 flex-shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M12.586 2.586a2 2 0 00-2.828 0L6.343 5.025A2 2 0 005.025 6.343L2.586 9.757a2 2 0 000 2.828l2.439 3.414a2 2 0 001.318 1.318l3.414 2.439a2 2 0 002.828 0l3.414-2.439a2 2 0 001.318-1.318l2.439-3.414a2 2 0 000-2.828L18.975 6.343a2 2 0 00-1.318-1.318L14.243 2.586zM12 13.364l4.95-4.95a1 1 0 111.414 1.414l-5.657 5.657a1 1 0 01-1.414 0L7.343 9.828a1 1 0 011.414-1.414L12 11.536V13.364z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p
              class="text-sm text-gray-700 leading-relaxed"
              v-html="section.safetyText"
            ></p>
          </div>

          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <p class="text-sm text-gray-600">Versão Atual:</p>
              <p class="text-sm font-medium text-gray-900">
                {{ section.version }}
              </p>
            </div>
            <div class="flex justify-between items-center">
              <p class="text-sm text-gray-600">Atualizado em:</p>
              <p class="text-sm font-medium text-gray-900">
                {{ section.updatedOn }}
              </p>
            </div>
            <div class="flex justify-between items-center">
              <p class="text-sm text-gray-600">Tamanho do Arquivo:</p>
              <p class="text-sm font-medium text-gray-900">
                {{ section.fileSize }}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Card from "@/components/ui/card/Card.vue";
const list = reactive([
  {
    icon: "Download",
    imgUrl: "",
    title: "Passo 1: Portal de Jogos",
    desc: "Os melhores slots e jogos para suas necessidades de entretenimento.",
    numOfStars: 5,
    rating: 4.8,
  },
  {
    icon: "Sparkle",
    imgUrl: "",
    title: "Passo 2: Portal de Jogos",
    desc: "Os melhores slots e jogos para suas necessidades de entretenimento.",
    numOfStars: 5,
    rating: 4.8,
  },
]);
const iosSections = [
  {
    title: "Instalação no iOS (iOS)",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#4B5563]">
      <path d="M12 2.052L22.536 6.276C22.846 6.413 23.041 6.715 23.031 7.037C22.856 12.075 20.328 16.628 16.124 19.315L12 21.999L7.876 19.315C3.672 16.628 1.144 12.075 0.969 7.037C0.959 6.715 1.154 6.413 1.464 6.276L12 2.052ZM12 4.235L3.004 7.723C3.068 11.71 4.917 15.48 8.441 17.764L12 19.878L15.559 17.764C19.083 15.48 20.932 11.71 20.996 7.723L12 4.235ZM12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7ZM12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9ZM17.0005 17C16.8687 16.1951 16.2465 15.5106 15.2835 15.1542C14.3467 14.8071 13.1995 14.5 12.0005 14.5C10.8015 14.5 9.65431 14.8071 8.71753 15.1542C7.75454 15.5106 7.13232 16.1951 7.00049 17H17.0005Z" />
    </svg>`,
    description: `
      If our iOS app is distributed outside of the App Store (as an enterprise app): Go to
      <strong class="font-medium text-gray-700">Settings &gt; General &gt; VPN &amp; Device Management</strong> (or
      <strong class="font-medium text-gray-700">Profiles &amp; Device Management</strong>). Tap the developer name under "Enterprise App" and then tap
      <strong class="font-medium text-gray-700">"Trust"</strong>.
      <br /><br />
      <span class="text-sm text-gray-500">
      If the j1 app is available on the App Store, simply search for "j1" and install directly from there.
      </span>`,
    downloadLink: "",
    downloadText: "Baixe o App j1 Agora",
    safetyText: `Aplicativo oficial e genuíno, verificado para sua segurança. Baixe com confiança.`,
    version: "V2.3.5",
    updatedOn: "2024-03-15",
    fileSize: "Approx. 45 MB",
    supportLink: "",
  },
];
</script>

<style scoped></style>
