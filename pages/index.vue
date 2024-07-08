<script setup lang="ts">
import AddProductForm from "~/components/AddProductForm.vue";
import ProductList from "~/components/ProductList.vue";
import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
import type { Product } from "~/types";
import { computed, onMounted } from "vue";

const { $client } = useNuxtApp();

const productsQuery = $client.getProducts.useQuery();

async function handleAddProduct(product: Omit<Product, "id">) {
  try {
    await $client.addProduct.mutate(product);
  } catch (error) {
    console.error(error);
    return;
  }
  productsQuery.refresh().catch(console.error);
}

const products = computed(() => productsQuery.data.value ?? []);

onMounted(() => {
  productsQuery.execute().catch(console.error);
});
</script>

<template>
  <div class="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
    <header class="mb-6">
      <h1 class="text-4xl font-bold text-gray-800">{{ $t('welcome') }}</h1>
      <p class="mt-2 text-lg text-gray-600">{{ $t('intro') }}</p>
      <LanguageSwitcher />
    </header>
    <main>
      <AddProductForm @add-product="handleAddProduct" />
      <ProductList :products="products" />
    </main>
  </div>
</template>
