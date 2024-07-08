<template>
  <div class="flex space-x-2 mt-6 justify-center">
    <button @click="setLocale('en')" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">English</button>
    <button @click="setLocale('es')" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Español</button>
    <button @click="setLocale('fr')" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Français</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { setLocale } = useI18n();
</script>
