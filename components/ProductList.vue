<script setup lang="ts">
import type { Product } from "~/types";

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="mt-4">
    <h2 class="text-xl font-semibold mb-2">Product List</h2>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">#</th>
          <th class="py-2 px-4 border-b">Name</th>
          <th class="py-2 px-4 border-b">Description</th>
          <th class="py-2 px-4 border-b">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" class="border-b">
          <td class="py-2 px-4">
            {{ product.id }}
          </td>
          <td class="py-2 px-4">
            {{ product.translations[$i18n.locale].name }}
          </td>
          <td class="py-2 px-4">
            {{ product.translations[$i18n.locale].description }}
          </td>
          <td class="py-2 px-4">
            ${{ product.price }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
