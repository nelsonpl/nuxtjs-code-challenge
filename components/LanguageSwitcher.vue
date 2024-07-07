<template>
  <div>
    <button @click="setLocale('en')">English</button>
    <button @click="setLocale('es')">Español</button>
    <button @click="setLocale('fr')">Français</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { setLocale } = useI18n();
</script>
