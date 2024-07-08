<template>
  <div class="flex space-x-2 mt-4">
    <button @click="setLocale('en')" class="px-4 py-2 bg-blue-500 text-white rounded">English</button>
    <button @click="setLocale('es')" class="px-4 py-2 bg-blue-500 text-white rounded">Español</button>
    <button @click="setLocale('fr')" class="px-4 py-2 bg-blue-500 text-white rounded">Français</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { setLocale } = useI18n();
</script>
