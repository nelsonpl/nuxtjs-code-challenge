<script setup lang="ts">
import type { Product } from "~/types";

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="mt-4">
    <h2 class="text-xl font-semibold mb-2">Product List</h2>
    <ul class="space-y-2">
      <li v-for="product in products" :key="product.id" class="border-b pb-2">
        <div class="font-medium">{{ product.translations[$i18n.locale].name }} - ${{ product.price }}</div>
        <p>{{ product.translations[$i18n.locale].description }}</p>
      </li>
    </ul>
  </div>
</template>
