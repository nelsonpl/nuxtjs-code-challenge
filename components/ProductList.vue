<script setup lang="ts">
import type { Product } from "~/types";

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="mt-8">
    <h2 class="text-2xl font-semibold text-gray-700 mb-4">Product List</h2>
    <table class="min-w-full bg-white shadow-md rounded-lg">
      <thead class="bg-gray-100 border-b">
        <tr>
          <th class="py-3 px-5 text-left text-sm font-semibold text-gray-600">Name</th>
          <th class="py-3 px-5 text-left text-sm font-semibold text-gray-600">Description</th>
          <th class="py-3 px-5 text-left text-sm font-semibold text-gray-600">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" class="border-b hover:bg-gray-50">
          <td class="py-3 px-5 text-gray-700">{{ product.translations[$i18n.locale].name }}</td>
          <td class="py-3 px-5 text-gray-700">{{ product.translations[$i18n.locale].description }}</td>
          <td class="py-3 px-5 text-gray-700">${{ product.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
