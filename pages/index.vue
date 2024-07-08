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
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold">{{ $t('welcome') }}</h1>
    <p class="mb-4">{{ $t('intro') }}</p>
    <LanguageSwitcher />
    <AddProductForm @add-product="handleAddProduct" />
    <ProductList :products="products" />
  </div>
</template>
